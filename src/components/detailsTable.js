import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";

const columns = [
  { id: 'state', label: 'STATE/UT', minWidth: 100 },
  { id: 'confirmed', label: 'CONFIRMED', minWidth: 100 },
  {
    id: 'active',
    label: 'ACTIVE',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'recovered',
    label: 'RECOVERED',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'decreased',
    label: 'DECREASED',
    minWidth: 100,
    align: 'right',
    // format: (value) => value.toFixed(2),
  },
];


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 600,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [caseData, setCaseData]=useState();

  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    axios.get("https://api.covid19india.org/data.json")
    .then((response)=>{
      console.log(response.data.statewise)
      setCaseData(response.data.statewise);
      console.log(response.data.statewise)
    })
    .catch(err=>console.error(`error : ${err}`)) 
  },[])

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {caseData && caseData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((rowData) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={caseData.statecode}>
                {columns.map((column) => {
                  const value = (column.id==='decreased') ? rowData.confirmed-rowData.active-rowData.recovered : rowData[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>   
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={caseData ? caseData.length :""}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

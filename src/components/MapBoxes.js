import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MapBoxes() {
  const classes = useStyles();
  const [caseData, setCaseData]=useState();
  useEffect(() => {
    axios.get("https://api.covid19india.org/data.json")
    .then((response)=>{
    
      setCaseData(response.data.statewise);
    
    })
    .catch(err=>console.error(`error : ${err}`)) 
  },[])


  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>CONFIRMED  <br />
          {caseData && caseData[0].confirmed}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>ACTIVE  <br />
          {caseData && caseData[0].active}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>RECOVERED  <br /> 
          {caseData && caseData[0].recovered}</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>DECREASED  <br />
           {caseData && caseData[0].confirmed-caseData[0].active-caseData[0].recovered}</Paper>
        </Grid>  
      </Grid>
    </div>
  );
}

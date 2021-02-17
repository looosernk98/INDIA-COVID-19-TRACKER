
import  StickyHeadTable from "./components/detailsTable"
import LineChart from "./components/LineCharts"
import "./components/css/App.css"
import Map from "./components/Map"
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import DonutChart from "./components/DonutChart"
import SimpleAccordion from "./components/Footer"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
    // minHeight:100,
    height:200
  },
}); 

function App() {
  const classes= useStyles();
  return (
    <div className="main">
      <div className="content">
        <div className="left-content">
          <h2>INDIA COVID-19 TRACKER</h2>
          <h4>let's all pray to make our Earth Covid-19 free soon , Stay Safe and do TheLocate</h4>
          <Card className={classes.root}>
              <div className="charts">
                <DonutChart/>
                <LineChart/>
              </div>
          </Card>
          <StickyHeadTable/>
        </div>
        < div className="right-content">
          <h2>INDIA MAP</h2>
          <h4>Hover over state for more details</h4>
          <Map/>
        </div>
      </div>
      <SimpleAccordion/>
    </div>
  );
}

export default App;

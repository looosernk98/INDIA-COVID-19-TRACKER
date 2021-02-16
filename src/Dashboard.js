
import  StickyHeadTable from "./components/detailsTable"
import Chart from "./components/Chart"
import "./Dashboard.css"
import Map from "./components/Map"
function Dashboard() {
  return (
    <div>
      {/* <div className="header">
        <div >
          <h2>INDIA COVID-19 tracker</h2>
          <h4>let's all pray to make our Earth Covid-19 free soon , Stay Safe and do TheLocate</h4>
        </div>
        <div>
          <h2>INDIA MAP</h2>
          <h4>Hover over state for more details</h4>
        </div>
      </div> */}
      <div className="content">
        <div className="left-content">
          <h2>INDIA COVID-19 tracker</h2>
          <h4>let's all pray to make our Earth Covid-19 free soon , Stay Safe and do TheLocate</h4>
          <Chart/>
          <StickyHeadTable/>
        </div>
        < div className="right-content">
          <h2>INDIA MAP</h2>
          <h4>Hover over state for more details</h4>
           <Map/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

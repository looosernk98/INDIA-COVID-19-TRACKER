import React,{useState,useEffect} from 'react';
import { ChartDonut, ChartThemeColor, ChartThemeVariant } from '@patternfly/react-charts';
import axios from "axios";
const DonutChart= () => {
    const [caseData, setCaseData]=useState({});
    useEffect(() => {
        axios.get("https://api.covid19india.org/data.json")
        .then((response)=>{
        
          setCaseData(response.data.statewise[0]);
        
        })
        .catch(err=>console.error(`error : ${err}`)) 
      },[])
    return(
        <div style={{ height: '180px', width: '310px' }}>
            <ChartDonut
            ariaDesc="Average"
            ariaTitle="Donut chart of covid-19 cases"
            constrainToVisibleArea={true}
            data={[{ x: 'active', y: caseData.active }, { x: 'recovered', y: caseData.recovered }, { x: 'decreased', y: `${caseData.confirmed-caseData.active-caseData.recovered}`}]}
            labels={({ datum }) => `${datum.x}: ${datum.y}`}
            legendData={[{ name: `active: ${caseData.active}` }, { name: `recovered :${caseData.recovered}` }, { name: `decreased: ${caseData.confirmed-caseData.active-caseData.recovered}` }]}
            legendOrientation="vertical"
            legendPosition="right"
            padding={{
                bottom: 20,
                left: 0,
                right: 140, // Adjusted to accommodate legend
                top: 25
            }}
            subTitle="confirmed"
            title={caseData.confirmed}
            themeColor={ChartThemeColor.multiOrdered}
            width={350}
            />
       </div>
    )
 }
export default DonutChart

import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DonutChart from 'react-donut-chart';
import {CanvasJSChart} from 'canvasjs-react-charts';
import Canvas from 'react-canvas-js'
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from "axios";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
    // minHeight:100,
    // height:200
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 12,
  },
  content:{
      height:200,
      width:200,
    //   alignItems:"center"
  }
}); 

const Chart=()=> {
    const [caseData, setCaseData]=useState();
		const options = {
			animationEnabled: true,
			// title: {
			// 	text: "Customer Satisfaction"
			// },
			subtitles: [{
				text: "total",
				verticalAlign: "center",
				fontSize: 6,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Unsatisfied", y: 5 },
					{ name: "Very Unsatisfied", y: 31 },
					{ name: "Very Satisfied", y: 40 },
					{ name: "Satisfied", y: 17 },
					{ name: "Neutral", y: 7 }
				]
			}]
        }

        useEffect(() => {
            axios.get("https://api.covid19india.org/data.json")
            .then((response)=>{
            
              setCaseData(response.data.statewise);
            
            })
            .catch(err=>console.error(`error : ${err}`)) 
          },[])

        const classes=useStyles();
		return (
		<div>
            <Card className={classes.root}>
             <CardContent className={classes.content} >
             <div style={{height:200, width:200, }}>
             <CanvasJSChart options = {options}
                    /*  onRef={ref => chart = ref} */
                /> 
             </div>
                
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                </CardContent>
            </Card>
			
		</div>
		);
	
}
export default Chart
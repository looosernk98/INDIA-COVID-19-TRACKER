import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginLeft:'14px',
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: 'lightseagreen'
  },
  span:{
      color:'green',
  },
  typo:{
      color:"blue"
  }
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Message 1 from Niranjan kumar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.typo}>
             I tried my best in given time.I did not understand where the 2nd Api data has been used in given assignment That's why
             I have not used 2nd Api.Some functionality in the assignment was really challenging .I have not implemented some of functionality because 
             I found that difficult and time taking but ofcourse not impossible . As there was a time constraint I tried my best.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Message 2 from Niranjan kumar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.typo}>
            Thankyou So much <span className={classes.span}>RASHMI BHATTACHARJEE </span> ma'am for providing me such a good opportunity.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {bounddeleteEvent,boundChangeEditMode, boundgetEvents} from './../redux/action/actions'
const styles = theme => ({
    root: {
      width: '50%',
      alignItems: 'center',
      marginTop: '5px'
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    details: {
      alignItems: 'center',
    },
    column: {
      flexBasis: '33.33%',
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  });
  

class EventsList extends React.Component{
  componentDidMount(){
    boundgetEvents()
  }
    render(){
         let editTheEvent = (event) =>{
             console.log(event)
            boundChangeEditMode(event._id, event.date, event.time, event.description, event.followers)
         } 

        const { classes } = this.props;
        return(
            <div style={{marginLeft: '15px', marginTop: '10px' }}>
            {this.props.data.map((event) => <div className={classes.root}>
            <ExpansionPanel defaultExpanded>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classes.column}>
                  <Typography className={classes.heading}>{event.description.toUpperCase()}</Typography>
                </div>
                <div className={classes.column}>
                  <Typography className={classes.secondaryHeading}>{`Number of attendees : ${event.followers}` }</Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>{`Date : ${event.date}` }</Typography>
                </div>
                <div className={classNames(classes.column, classes.helper)}>
                  <Typography variant="caption">
                     {`Time : ${event.time}`}
                  </Typography>
                </div>
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions>
                <Button size="small" onClick = {() => bounddeleteEvent(event._id)}>Delete</Button>
                <Button size="small" color="primary" onClick ={() => editTheEvent(event) }>
                  Edit
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
            </div>)}  
          </div>
        )
    }
}
EventsList.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles) (EventsList)
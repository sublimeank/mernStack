import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import {boundopenAddSection, boundaddEvent, boundeditEvent } from './../redux/action/actions'
const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: '420px',
      marginTop: '80px',
      background: '#ffffff',
      width: 600,
      textAlign: 'center',
      padding : '10px',
      borderRadius: '25px'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 230,
    },
    textFieldDesc: {
        marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 500,
    }
  });
  

const AddEventDialog = (props) =>{
    const { classes } = props;
    
    let onADDClicked = (e) =>{
      e.preventDefault();
     let date = e.target.date.value
     let time = e.target.time.value
     let desc = e.target.desc.value
     let attendees = e.target.attendees.value
        if(date === null || date === ''){
          e.target.date.focus()
          return
        }
           
        if (time === null || time === ''){
          e.target.time.focus()
          return
        }
        if(desc === null || desc === '' ){
          e.target.desc.focus()
          return
        }
        if(attendees === null || attendees ===''){
          e.target.attendees.focus()
          return
        }
        if(props.edit.editable){
          boundeditEvent(props.edit._id, date, time, desc, attendees)
        }

        else{ 
        boundaddEvent(date, time, desc, attendees)
        }



      boundopenAddSection(false);
  }
    return(
        <form className = {classes.container} noValidate  onSubmit ={onADDClicked}>
        <div style = {{flex: 3, flexDirection: 'column', justifyContent: 'space-evenly'}}>
           <TextField
        name="date"
        label="Start Date"
        type="date"
        defaultValue={props.edit.date}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
      name ='time'
        id="time"
        label="Start Time"
        type="time"
        defaultValue={props.edit.time}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      <TextField
          id="name"
          name = 'desc'
          defaultValue={props.edit.description}
          label="Description"
          className={classes.textFieldDesc}
          margin="normal"
        />
        <TextField 
          id="attendees"
          name = 'attendees'
          label="Number of attendees"
          defaultValue={props.edit.followers}
          type="number"
          className={classes.textFieldDesc}
          margin="normal"
        /></div>
        <div style ={{flex: 1}}>
        <Button variant="contained" color="primary" type = "submit"  style ={{  width: "50%", height :"20%", align: "center" }} >
       {props.edit.editable?'edit event': 'Add event'}
      </Button>
       </div>
        </form>
    );
} 

AddEventDialog.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(AddEventDialog);
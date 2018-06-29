import React from 'react'
import Button from '@material-ui/core/Button'
import AddEventDialog from './addEventDialog'
import {boundopenAddSection } from './../redux/action/actions'
class AddEvent extends React.Component{
   
    render () {
        let onADDClicked = () =>{
            boundopenAddSection(true);
        }
    return(<div > 
        {!this.props.storeVal.open_add_section?<Button variant="contained" color="secondary"  onClick ={onADDClicked} style ={{  width: "50%", height :"50px", marginLeft: '350px', marginTop: '80px' }} >
       Add event
      </Button>:
      <AddEventDialog  edit = {this.props.storeVal.edit}/>}
      </div>

    );
}
}

export default AddEvent;
import React from 'react';
import Typography from '@material-ui/core/Typography';
import AddEvent from "./addEvent";
import {connect} from 'react-redux'
import EventsList from './eventsList'
class Events extends React.Component {
    render() {
        console.log(this.props.state)
        return (
            <div >
                <div >
                    <AddEvent  storeVal={this.props.state} />
                </div>
                <div  >
                    <Typography variant="display1" gutterBottom style={{color: '#ffff',marginLeft: '15px'}}>
                        Events...
                     </Typography>
                     {this.props.state.events.length < 1&& <Typography variant="subheading" gutterBottom style={{color: '#ffff',marginLeft: '15px'}}>
                        <i> There is not any events click on add event for creating one </i>
                     </Typography>
                     }
                    <EventsList data = {this.props.state.events}/>
                </div>


            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect (mapStateToProps) (Events);
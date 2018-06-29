import { store } from './../store/eventStore'
import axios from 'axios'
let addEvent = (date = '17/03/1996', time = '12:36', description = 'kio', followers = 0) => {
    // type: 'ADD_EVENT',
    // date,
    // time,
    // description,
    // followers,

    return function ( dispatch ){
              axios.post("/todos",{
                date,
                time,
                description,
                followers
              }).then((response) =>{
                  console.log(response)
                  dispatch({
                      type:"ADD_EVENT",
                      _id: response.data._id,
                      date: response.data.date,
                      description: response.data.description,
                      time: response.data.time,
                      followers: response.data.followers

                  })
              }).catch((err) => {
                  dispatch({type:'ADD_EVENT_REJECTED',
                  payload:"there was an error while posting the data"
                })
              })
    }
}
let getEvents = () => {
    return function (dispatch){
        axios.get('/todos').then((response) =>{
            if(response.status === 200){
                dispatch({
                    type: "GET_EVENT",
                    payload: response.data
                })
            }

        })
    }
}

let editEvent = (_id, date, time, description, followers) => {
    // type: 'EDIT_EVENT',
    // _id,
    // date,
    // time,
    // description,
    // followers
   return function(dispatch){
           axios.put('/todos/'+_id,{
               date,
               time,
               description,
               followers
           }).then((response) =>{
               if(response.status === 200){
                   console.log("response is ",response.data)
                   dispatch({
                    type: 'EDIT_EVENT',
                    _id: response.data._id,
                    date: response.data.date,
                    time: response.data.time,
                    description: response.data.description,
                    followers: response.data.followers
                   })
               }
           })
   } 
}
let deleteEvent = (_id) => {
    // type: 'DELETE_EVENT',
    // _id
    return function ( dispatch ){
        axios.delete("/todos/"+_id).then((response)=>{
            if(response.status === 200){
                dispatch({
                    type: 'DELETE_EVENT',
                    _id: _id
                })
            }
        })

    }
}
let openAddSection = (value) => ({
    type: 'OPEN_ADD_SECTION',
    open_add_section: value
})
let changeEditMode = (_id, date, time, description, followers) =>({
    type: 'CHANGE_EDIT_MODE',
    _id,
    date,
    time,
    description,
    followers
})

export let boundaddEvent = (date, time, description, followers) => {
    store.dispatch(addEvent(date, time, description, followers))
}
export let boundeditEvent = (_id, date, time, description, followers) =>{
    store.dispatch(editEvent(_id, date, time, description, followers))
}
export let bounddeleteEvent = (_id) =>{
    store.dispatch(deleteEvent(_id))
}
export let boundopenAddSection = (value) => {
    store.dispatch(openAddSection(value))
}
export let boundChangeEditMode = (_id, date, time, description, followers) =>{
    store.dispatch(changeEditMode(_id, date, time, description, followers))
}
export let boundgetEvents = () =>{
    store.dispatch(getEvents())
}
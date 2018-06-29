export let eventReducer = ((state = {
    open_add_section : false,
    count: 0,
    edit: {
        editable: false,
        _id: '',
        date: "2017-05-24",
        time: "07:30",
        description: '',
        followers: ''
    },
    events: []
}, action) => {
    switch (action.type) {

        case 'ADD_EVENT': let newEvent = {
            _id: action._id,
            date: action.date,
            time: action.time,
            description: action.description,
            followers: action.followers,
        }
        let editedEvents = state.events
            editedEvents.push(newEvent)
            return {
                open_add_section : false,
                count: editedEvents.length,
                events: state.events,
                edit: {
                    editable: false,
                    _id: '',
                    date: "2017-05-24",
                    time: "07:30",
                    description: '',
                    followers: ''
                },
            }

        case 'EDIT_EVENT': let Event = {
            _id: action._id,
            date: action.date,
            time: action.time,
            description: action.description,
            followers: action.followers,

        }
           let lis = state.events.filter((event) => event._id !== action._id).concat(Event)
            return {
                open_add_section : false,
                count: lis.length,
                events: lis,
                edit: {
                    editable: false,
                    _id: '',
                    date: "2017-05-24",
                    time: "07:30",
                    description: '',
                    followers: ''
                },
            }

        case 'DELETE_EVENT':
            return {
                open_add_section : false,
                count: state.count - 1,
                events: state.events.filter((event) => event._id !== action._id),
                edit: {
                    editable: false,
                    _id: '',
                    date: "2017-05-24",
                    time: "07:30",
                    description: '',
                    followers: ''
                },
            }
            case "GET_EVENT": 
                return {
                    open_add_section : false,
                    count:action.payload.length,
                    events : action.payload, 
                    edit: {
                        editable: false,
                        _id: '',
                        date: "2017-05-24",
                        time: "07:30",
                        description: '',
                        followers: ''
                    }

                }
        case 'OPEN_ADD_SECTION': 
            return {
                open_add_section : action.open_add_section,
                count: state.count,
                events: state.events,
                edit: {
                    editable: false,
                    _id: '',
                    date: "2017-05-24",
                    time: "07:30",
                    description: '',
                    followers: ''
                },
            }   
        case  'CHANGE_EDIT_MODE':
            return{
                open_add_section : true,
                count: state.count,
                events: state.events,
                edit: {
                    editable: true,
                    _id: action._id,
                    date: action.date,
                    time: action.time,
                    description: action.description,
                    followers: action.followers,
                },

            }
        default: return state
    }
})

let addEvent = (date = '17/03/1996', time = '12:36', description = 'kio', followers = 0) => ({
    type: 'ADD_EVENT',
    date,
    time,
    description,
    followers
})
let editEvent = ({_id, date, time, description, followers}) => ({
    type: 'EDIT_EVENT',
    _id,
    date,
    time,
    description,
    followers
})
let deleteEvent = (_id) => ({
    type: 'DELETE_EVENT',
    _id
})
let openAddSection = (value) => ({
    type: 'OPEN_ADD_SECTION',
    open_add_section: value
})
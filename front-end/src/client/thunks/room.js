
import { getAllRoom, insertRoom, removeRoom, changeRoom } from "../api/fetchOfData";

export const getRooms = () => dispatch => {
    getAllRoom().then(response => dispatch({type: 'GET_ROOMS', payload: response}))
};


export const addRooms = (departament) => dispatch => {
    insertRoom(departament).then(
        buka => getAllRoom().then(response => dispatch({type: 'GET_ROOMS', payload: response})),
        error => console.log("Error")
    )
}
export const deleteRooms = (id) => dispatch => {
    removeRoom(id).then(
        buka => getAllRoom().then(response => dispatch({type: 'GET_ROOMS', payload: response})),
        error => console.log("Error")
    )
}
export const chngRooms = (departament) => dispatch => {
    changeRoom(departament).then(
        buka => getAllRoom().then(response => dispatch({type: 'GET_ROOMS', payload: response})),
        error => console.log("Error")
    )
}
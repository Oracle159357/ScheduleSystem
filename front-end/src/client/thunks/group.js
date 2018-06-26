import {changeGroup, getAllGroup, removeGroup} from "../api/fetchOfData";


export const getGroups = () => dispatch => {
    getAllGroup().then(response => dispatch({type: 'GET_GROUPS', payload: response}))
};
export const deleteGroup = (id) => dispatch => {
    removeGroup(id).then(
        buka => getAllGroup().then(response => dispatch({type: 'GET_GROUPS', payload: response})),
        error => console.log("Error")
    )
}
export const chngGroup = (group) => dispatch => {
    changeGroup(group).then(
        buka => getAllGroup().then(response => dispatch({type: 'GET_GROUPS', payload: response})),
        error => console.log("Error")
    )
}

import {getAllDepartament, insertDepartament, removeDepartament , changeDepartament} from "../api/fetchOfData";
import {getAllGroup, insertGroup , insertTeacher } from "../api/fetchOfData";

export const getDepartaments = () => dispatch => {
    getAllDepartament().then(response => dispatch({type: 'GET_DEPARTAMENTS', payload: response}))
};

// export const addDepartament = () => dispatch => {
//     getAllDepartament.then(response=>dispatch({ type: 'GET_DEPARTAMENT', payload: response }))
// };
export const addDepartament = (departament) => dispatch => {
    insertDepartament(departament).then(
        buka => getAllDepartament().then(response => dispatch({type: 'GET_DEPARTAMENTS', payload: response})),
        error => console.log("Error")
    )
}
export const deleteDepartament = (id) => dispatch => {
    removeDepartament(id).then(
        buka => getAllDepartament().then(response => dispatch({type: 'GET_DEPARTAMENTS', payload: response})),
        error => console.log("Error")
    )
}
export const addGroup = (group) => dispatch => {
    insertGroup(group)
}
export const addTeacher = (teacher) => dispatch => {
    insertTeacher(teacher)
}
export const chngDepartament = (departament) => dispatch => {
    changeDepartament(departament).then(
        buka => getAllDepartament().then(response => dispatch({type: 'GET_DEPARTAMENTS', payload: response})),
        error => console.log("Error")
    )
}
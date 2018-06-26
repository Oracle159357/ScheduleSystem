import {changeTeacher, getAllTeacher, removeTeacher} from "../api/fetchOfData";


export const getTeachers = () => dispatch => {
    getAllTeacher().then(response => dispatch({type: 'GET_TEACHERS', payload: response}))
};
export const deleteTeacher = (id) => dispatch => {
    removeTeacher(id).then(
        buka => getAllTeacher().then(response => dispatch({type: 'GET_TEACHERS', payload: response})),
        error => console.log("Error")
    )
}
export const chngTeacher = (teacher) => dispatch => {
    changeTeacher(teacher).then(
        buka => getAllTeacher().then(response => dispatch({type: 'GET_TEACHERS', payload: response})),
        error => console.log("Error")
    )
}
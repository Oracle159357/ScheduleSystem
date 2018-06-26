
import { getAllSubject, insertSubject, removeSubject, changeSubject } from "../api/fetchOfData";

export const getSubjects = () => dispatch => {
    getAllSubject().then(response => dispatch({type: 'GET_SUBJECTS', payload: response}))
};


export const addSubject = (subject) => dispatch => {
    insertSubject(subject).then(
        buka => getAllSubject().then(response => dispatch({type: 'GET_SUBJECTS', payload: response})),
        error => console.log("Error")
    )
}
export const deleteSubject = (id) => dispatch => {
    removeSubject(id).then(
        buka => getAllSubject().then(response => dispatch({type: 'GET_SUBJECTS', payload: response})),
        error => console.log("Error")
    )
}
export const chngSubject = (subject) => dispatch => {
    changeSubject(subject).then(
        buka => getAllSubject().then(response => dispatch({type: 'GET_SUBJECTS', payload: response})),
        error => console.log("Error")
    )
}
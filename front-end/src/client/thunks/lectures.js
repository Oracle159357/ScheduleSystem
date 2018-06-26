import {insertLecture, removeLecture  , getAllLecture} from "../api/fetchOfData";

export const addLecture = (lecture) => dispatch => {
    insertLecture(lecture).then(
        buka => getAllLecture().then(response => dispatch({type: 'GET_LECTURES', payload: response})),
        error => console.log("Error")
    )
}
export const deleteLecture = (id) => dispatch => {
    removeLecture(id).then(
        buka => getAllLecture().then(response => dispatch({type: 'GET_LECTURES', payload: response})),
        error => console.log("Error")
    )
}
export const getLectures = () => dispatch => {
    getAllLecture().then(response => dispatch({type: 'GET_LECTURES', payload: response}))
};
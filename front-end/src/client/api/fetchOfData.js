
const request = (url, method, data) => fetch(url, {
    method: method,
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : undefined,
}).catch (function (error) {
    console.log('Request failed', error);
});

export const getAllDepartament = async () => {
    const response = await fetch('http://localhost:8080/departament');
    return await response.json();
};
export const getAllRoom = async () => {
    const response = await fetch('http://localhost:8080/room');
    return await response.json();
};
export const getAllSubject = async () => {
    const response = await fetch('http://localhost:8080/subject');
    return await response.json();
};
export const getAllTeacher = async () => {
    const response = await fetch('http://localhost:8080/teacher');
    return await response.json();
};
export const getAllGroup = async () => {
    const response = await fetch('http://localhost:8080/group');
    return await response.json();
};
export const getAllLecture = async () => {
    const response = await fetch('http://localhost:8080/lecture');
    return await response.json();
};
export const insertDepartament = (departament) => request(`http://localhost:8080/departament/`, 'put',departament);
export const removeDepartament = (id) => request(`http://localhost:8080/departament/${id}`, 'delete');
export const changeDepartament = (departament) => request(`http://localhost:8080/departament/`, 'post',departament);

export const changeRoom = (room)=> request(`http://localhost:8080/room/`, 'post',room);
export const removeRoom = (id) => request(`http://localhost:8080/room/${id}`, 'delete');
export const insertRoom = (room) => request(`http://localhost:8080/room/`, 'put',room);

export const changeSubject = (subject)=> request(`http://localhost:8080/subject/`, 'post',subject);
export const removeSubject = (id) => request(`http://localhost:8080/subject/${id}`, 'delete');
export const insertSubject = (subject) => request(`http://localhost:8080/subject/`, 'put',subject);



export const insertTeacher = (teacher) => request(`http://localhost:8080/teacher/`, 'put',teacher);
export const changeTeacher = (teacher)=> request(`http://localhost:8080/teacher/`, 'post',teacher);
export const removeTeacher = (id) => request(`http://localhost:8080/teacher/${id}`, 'delete');

export const insertGroup = (group) => request(`http://localhost:8080/group/`, 'put',group);
export const changeGroup = (group)=> request(`http://localhost:8080/group/`, 'post',group);
export const removeGroup = (id) => request(`http://localhost:8080/group/${id}`, 'delete');


export const insertLecture = (lecture) => request(`http://localhost:8080/lecture/`, 'put',lecture);
export const removeLecture= (id) => request(`http://localhost:8080/lecture/${id}`, 'delete');

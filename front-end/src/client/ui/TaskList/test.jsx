import React from 'react';
import {removeLecture} from "../../api/fetchOfData";
import './Style.scss';
import {Button, Form, Grid, Header, Input, Modal, Table} from "semantic-ui-react";
// export default class TaskList extends PureComponent {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             departaments: [],
//             newItemDepartment: {Name: '', Building: ''},
//             newItemChangeDepartment: {Name: '', Building: ''},
//
//             newItemGroup: {Course: '', Num: ''},
//             newItemTeacher: {Name: '', Surname: '', Patronymic: ''},
//             currentDepartamentTeacher: undefined,
//             currentDepartamentGroup: undefined,
//             currentDepartamentChange: undefined,
//
//
//             teachers: [],
//             newItemChangeTeacher: {Name: '', Surname: '', Patronymic: '', TchPk: '', DepartamentId: ''},
//             currentTeacherChange: undefined,
//
//
//             groups: [],
//             newItemChangeGroup: {Course: '', Num: '', GrpPk: '', DepartamentId: ''},
//             currentGroupChange: undefined,
//
//             rooms: [],
//             currentRoomChange: undefined,
//             newItemChangeRoom: {Building: '', Num: '', RomPk: ''},
//             newItemRoom: {Building: '', Num: ''},
//
//             subjects: [],
//             currentSubjectChange: undefined,
//             newItemChangeSubject: {Name: '', SbjPk: ''},
//             newItemSubject: {Name: ''},
//
//             newItemLecture: {Day: '', Week: '', Lesson: '', TeacherId: '', GroupId: '', RoomId: '', SubjectId: ''},
//
//             tasks: [],
//             newItem: {title: ''},
//             newItem2: {question: ''},
//             newItem3: {answer: ''},
//             newID: {id: 68},
//             place: ["Ivano-Frankivsk", "Zaporizhzhia", "Zhytomyr", "Donetsk", "Dnipropetrovsk", "Kiev", "Vinnytsia", "Lviv", "Odesa", "America"],
//             question: ["How is the city?", "How expensive is this city?", "What are the most memorable sights?"],
//             answer: ["Saint Sophia’s Cathedral", "Mystetskyi Arsenal art quarter", "Saint Andrew’s Church", "Mikhail Bulgakov Museum"],
//             something: '',
//             optionsMembers: [
//                 {key: 1, text: 'DAILY', value: '36'},
//                 {key: 2, text: 'MONTHLY', value: 'MONTHLY'},
//                 {key: 3, text: 'WEEKLY', value: 'WEEKLY'},
//             ],
//             value: '',
//             member: '',
//             day: '',
//             TeacherId: '',
//             GroupId: '',
//             RoomId: '',
//             SubjectId: '',
//         }
//     }
//
//     handleChange = (value, key) => this.setState({[key]: value});
//
//     closeModalGroup = () => {
//         this.setState({currentDepartamentGroup: undefined})
//     }
//     closeModalTeacher = () => {
//         this.setState({currentDepartamentTeacher: undefined})
//     }
//     closeModalChangeDepartament = () => {
//         this.setState({currentDepartamentChange: undefined})
//     }
//     closeModalChangeRoom = () => {
//         this.setState({currentRoomChange: undefined})
//     }
//     closeModalChangeSubject = () => {
//         this.setState({currentSubjectChange: undefined})
//     }
//     closeModalTeacherTable = () => {
//         this.setState({currentTeacherChange: undefined})
//     }
//     closeModalGroupTable = () => {
//         this.setState({currentGroupChange: undefined})
//     }
//
//     async componentDidMount() {
//         await this.loadSubject()
//         await this.loadDepartament()
//         await this.loadRoom()
//         await this.loadTeacher()
//         await this.loadGroup()
//         await this.loadTasks()
//     }
//
//     async loadTasks() {
//         let tasks = await getAll();
//         tasks.sort((x, y) => !(y.id - x.id));
//         this.setState({tasks});
//     }
//
//     async loadDepartament() {
//         let departaments = await getAllDepartament();
//         departaments.sort((x, y) => -y.DepPk + x.DepPk);
//         this.setState({departaments});
//     }
//
//     async loadRoom() {
//         let rooms = await getAllRoom();
//         rooms.sort((x, y) => -y.RomPk + x.RomPk);
//         this.setState({rooms});
//     }
//
//     async loadSubject() {
//         let subjects = await getAllSubject();
//         subjects.sort((x, y) => -y.SbjPk + x.SbjPk);
//         this.setState({subjects});
//     }
//
//     async loadTeacher() {
//         let teachers = await getAllTeacher();
//         teachers.sort((x, y) => -y.TchPk + x.TchPk);
//         this.setState({teachers});
//     }
//
//     async loadGroup() {
//         let groups = await getAllGroup();
//         groups.sort((x, y) => -y.GrpPk + x.GrpPk);
//         this.setState({groups});
//     }
//
//     async addDepartament(departament) {
//         await insertDepartament(departament)
//         await this.loadDepartament()
//
//     }
//
//     async addTeacher(teacher) {
//         console.log(teacher)
//         await insertTeacher(teacher)
//         await this.loadTeacher()
//     }
//
//     async addGroup(group) {
//         await insertGroup(group)
//         await this.loadGroup()
//     }
//
//     async addRoom(room) {
//         await insertRoom(room)
//         await this.loadRoom()
//     }
//
//     async addLecture(lecture) {
//         await insertLecture(lecture)
//         //await this.loadSubject()
//     }
//
//     async changeDepartament(departament) {
//         console.log(departament)
//         await changeDepartament(departament);
//         await this.loadDepartament()
//     }
//
//     async changeRoom(room) {
//         console.log(room)
//         await changeRoom(room);
//         await this.loadRoom()
//     }
//
//     async addSubject(subject) {
//         await insertSubject(subject)
//         await this.loadSubject()
//     }
//
//     async changeSubject(subject) {
//         console.log(subject)
//         await changeSubject(subject);
//         await this.loadSubject()
//     }
//
//     async removeSubject(Id) {
//         await removeSubject(Id);
//         await this.loadSubject()
//     }
//
//     async changeTeacher(teacher) {
//         console.log(teacher)
//         await changeTeacher(teacher);
//         await this.loadTeacher()
//     }
//
//     async changeGroup(group) {
//         console.log(group)
//         await changeGroup(group);
//         await this.loadGroup()
//     }
//
//     async removeRoom(Id) {
//         await removeRoom(Id);
//         await this.loadRoom()
//     }
//
//     async removeTeacher(Id) {
//         await removeTeacher(Id);
//         await this.loadTeacher()
//     }
//
//     async removeGroup(Id) {
//         await removeGroup(Id);
//         await this.loadGroup()
//     }
//
//     async removeDepartament(Id) {
//         await removeDepartament(Id);
//         await this.loadDepartament()
//     }
//
//
//     async add(newitem) {
//         await insert(newitem);
//         await this.loadTasks()
//     }
//
//     async remove(taskId) {
//         await remove(taskId);
//         await this.loadTasks()
//     }
//
//     async change(id, status) {
//         const buka = {id, status};
//         await change(buka);
//         await this.loadTasks()
//     }
//
//
//     render() {
//         const {
//             currentDepartamentGroup,
//             currentDepartamentTeacher,
//             currentRoomChange,
//             currentSubjectChange,
//             currentDepartamentChange,
//             currentTeacherChange,
//             currentGroupChange,
//             optionsMembers,
//             value, member, day,
//             TeacherId,
//             GroupId,
//             RoomId,
//             SubjectId,
//         } = this.state
//         return (
//             <div className='task-list-container'>
//                 <div className='header'>
//                     <Label size="big">Department</Label>
//                 </div>
//
//                 <Grid columns={3}>
//                     <Grid.Row>
//                         <Grid.Column>
//                             <Input icon placeholder='Name' fluid={true} value={this.state.newItemDepartment.Name}
//                                    type='text'
//                                    onChange={i =>
//                                        this.setState({
//                                            newItemDepartment: {
//                                                ...this.state.newItemDepartment, Name: i.target.value
//                                            }
//                                        })}
//                             />
//                         </Grid.Column>
//                         <Grid.Column>
//                             <Input icon placeholder='Building' fluid={true}
//                                    value={this.state.newItemDepartment.Building}
//                                    type='text'
//                                    onChange={i =>
//                                        this.setState({
//                                            newItemDepartment: {
//                                                ...this.state.newItemDepartment,
//                                                Building: i.target.value
//                                            }
//                                        })}
//                             />
//                         </Grid.Column>
//                         <Grid.Column>
//                             <Button positive onClick={() => {
//                                 this.addDepartament(this.state.newItemDepartment);
//                                 this.setState({newItemDepartment: {Name: '', Building: ''}});
//                             }}>ADD</Button>
//                         </Grid.Column>
//                     </Grid.Row>
//                 </Grid>
//                 <Table celled structured>
//                     <Table.Header>
//                         <Table.Row textAlign='center'>
//                             <Table.HeaderCell rowSpan='1'>Id</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Name</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Building</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>ADD Group</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>ADD Teacher</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Change</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Delete</Table.HeaderCell>
//                         </Table.Row>
//                     </Table.Header>
//                     <Table.Body>
//                         {this.state.departaments.map((departament, index) => (
//                             <Table.Row key={index}>
//                                 <Table.Cell textAlign='center'>{departament.DepPk}</Table.Cell>
//                                 <Table.Cell textAlign='center'>{departament.Name}</Table.Cell>
//                                 <Table.Cell textAlign='center'>{departament.Building}</Table.Cell>
//                                 <Table.Cell textAlign='center'>
//                                     <Button positive type='button'
//                                             onClick={() => this.setState({currentDepartamentGroup: departament})}>-</Button></Table.Cell>
//                                 <Table.Cell textAlign='center'>
//                                     <Button positive type='button'
//                                             onClick={() => this.setState({currentDepartamentTeacher: departament})}>+</Button>
//                                 </Table.Cell>
//                                 <Table.Cell textAlign='center'>
//                                     <Button positive type='button'
//                                             onClick={
//                                                 () => this.setState({currentDepartamentChange: departament})}>✎</Button>
//
//                                 </Table.Cell>
//                                 <Table.Cell textAlign='center'>
//                                     <span className="delete-shadow" onClick={() => {
//                                         this.removeDepartament(departament.DepPk)
//                                     }}> {'🗑'}</span>
//                                 </Table.Cell>
//                             </Table.Row>
//                         ))
//                         }
//                     </Table.Body>
//                 </Table>
//                 <Modal closeIcon onClose={this.closeModalGroup} open={!!currentDepartamentGroup}>
//                     <Header icon='archive' content='Add Group'/>
//                     <Modal.Content>
//                         <Form>
//                             <Form.Input
//                                 label='Course(ONLY DIGIT)'
//                                 type='number' min="1"
//                                 value={this.state.newItemGroup.Course}
//                                 onChange={i =>
//                                     this.setState({
//                                         newItemGroup: {
//                                             ...this.state.newItemGroup,
//                                             Course: i.target.value
//                                         }
//                                     })}
//                             />
//                             <Form.Input
//                                 label='Number(ONLY DIGIT)'
//                                 type='number' min="1"
//                                 value={this.state.newItemGroup.Num}
//                                 onChange={i =>
//                                     this.setState({
//                                         newItemGroup: {
//                                             ...this.state.newItemGroup,
//                                             Num: i.target.value
//                                         }
//                                     })}
//                             />
//                             <Button type='button' positive onClick={() => {
//                                 this.setState({
//                                     newItemGroup: {
//                                         ...this.state.newItemGroup,
//                                         DepartamentId: this.state.currentDepartamentGroup.DepPk
//                                     }
//                                 }, () => {
//                                     this.addGroup(this.state.newItemGroup),
//                                         this.closeModalGroup();
//                                     this.setState({
//                                         newItemGroup: {
//                                             Course: '',
//                                             Num: 0,
//                                         }
//                                     });
//                                 });
//                             }}>Save</Button>
//                         </Form>
//                     </Modal.Content>
//                 </Modal>
//                 <Modal closeIcon onClose={this.closeModalTeacher} open={!!currentDepartamentTeacher}>
//                     <Header icon='archive' content='Add Teacher'/>
//                     <Modal.Content>
//                         <Form>
//                             <Form.Input
//                                 label='Name'
//                                 type='text'
//                                 value={this.state.newItemTeacher.Name}
//                                 onChange={i =>
//                                     this.setState({
//                                         newItemTeacher: {
//                                             ...this.state.newItemTeacher,
//                                             Name: i.target.value
//                                         }
//                                     })}
//                             />
//                             <Form.Input
//                                 label='Surname'
//                                 type='text'
//                                 value={this.state.newItemTeacher.Surname}
//                                 onChange={i =>
//                                     this.setState({
//                                         newItemTeacher: {
//                                             ...this.state.newItemTeacher,
//                                             Surname: i.target.value
//                                         }
//                                     })}
//                             />
//                             <Form.Input
//                                 label='Patronymic'
//                                 type='text'
//                                 value={this.state.newItemTeacher.Patronymic}
//                                 onChange={i =>
//                                     this.setState({
//                                         newItemTeacher: {
//                                             ...this.state.newItemTeacher,
//                                             Patronymic: i.target.value
//                                         }
//                                     })}
//                             />
//                             <Button type='button' positive onClick={() => {
//
//                                 this.setState({
//                                     newItemTeacher: {
//                                         ...this.state.newItemTeacher,
//                                         DepartamentId: this.state.currentDepartamentTeacher.DepPk
//                                     }
//                                 }, () => {
//                                     this.addTeacher(this.state.newItemTeacher)
//                                     this.closeModalTeacher();
//                                     this.setState({
//                                         newItemTeacher: {
//                                             Name: '',
//                                             Surname: '',
//                                             Patronymic: '',
//                                         }
//                                     });
//                                 })
//                             }}>Save</Button>
//                         </Form>
//                     </Modal.Content>
//                 </Modal>
//
//                 <Modal closeIcon onClose={this.closeModalChangeDepartament} open={!!currentDepartamentChange}>
//                     <Header icon='archive' content='Change Departament'/>
//                     <Modal.Content>
//                         <Form>
//                             <Form.Input
//                                 label='Name'
//                                 type='text'
//                                 value={this.state.newItemChangeDepartment.Name}
//                                 onChange={i =>
//                                     this.setState({
//                                         newItemChangeDepartment: {
//                                             ...this.state.newItemChangeDepartment,
//                                             Name: i.target.value
//                                         }
//                                     })}
//                             />
//                             <Form.Input
//                                 label='Building'
//                                 type='text'
//                                 value={this.state.newItemChangeDepartment.Building}
//                                 onChange={i =>
//                                     this.setState({
//                                         newItemChangeDepartment: {
//                                             ...this.state.newItemChangeDepartment,
//                                             Building: i.target.value
//                                         }
//                                     })}
//                             />
//                             <Button type='button' positive onClick={() => {
//                                 this.setState({
//                                     newItemChangeDepartment: {
//                                         ...this.state.newItemChangeDepartment,
//                                         DepPk: this.state.currentDepartamentChange.DepPk
//                                     }
//                                 }, () => {
//                                     this.changeDepartament(this.state.newItemChangeDepartment),
//                                         this.closeModalChangeDepartament();
//                                     this.setState({
//                                         newItemChangeDepartment: {
//                                             Name: '',
//                                             Building: '',
//                                         }
//                                     });
//                                 });
//
//
//                             }}>Save</Button>
//                         </Form>
//                     </Modal.Content>
//                 </Modal>
//                 <div className='header'>
//                     <Label size="big">Room</Label>
//                 </div>
//
//                 <Grid columns={3}>
//                     <Grid.Row>
//                         <Grid.Column>
//                             <Input icon placeholder='Num' fluid={true} value={this.state.newItemRoom.Num}
//                                    type='number' min="1"
//                                    onChange={i =>
//                                        this.setState({
//                                            newItemRoom: {
//                                                ...this.state.newItemRoom, Num: i.target.value
//                                            }
//                                        })}
//                             />
//                         </Grid.Column>
//                         <Grid.Column>
//                             <Input icon placeholder='Building' fluid={true}
//                                    value={this.state.newItemRoom.Building}
//                                    type='text'
//                                    onChange={i =>
//                                        this.setState({
//                                            newItemRoom: {
//                                                ...this.state.newItemRoom,
//                                                Building: i.target.value
//                                            }
//                                        })}
//                             />
//                         </Grid.Column>
//                         <Grid.Column>
//                             <Button positive onClick={() => {
//                                 this.addRoom(this.state.newItemRoom);
//                                 this.setState({newItemRoom: {Building: '', Num: ''}});
//                             }}>ADD</Button>
//                         </Grid.Column>
//                     </Grid.Row>
//                 </Grid>
//                 <Table celled structured>
//                     <Table.Header>
//                         <Table.Row textAlign='center'>
//                             <Table.HeaderCell rowSpan='1'>Id</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Num</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Building</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Change</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Delete</Table.HeaderCell>
//                         </Table.Row>
//                     </Table.Header>
//                     <Table.Body>
//                         {this.state.rooms.map((room, index) => (
//                             <Table.Row key={index}>
//                                 <Table.Cell textAlign='center'>{room.RomPk}</Table.Cell>
//                                 <Table.Cell textAlign='center'>{room.Num}</Table.Cell>
//                                 <Table.Cell textAlign='center'>{room.Building}</Table.Cell>
//                                 <Table.Cell textAlign='center'>
//                                     <Button positive type='button'
//                                             onClick={() => this.setState({currentRoomChange: room})}>-</Button></Table.Cell>
//                                 <Table.Cell textAlign='center'>
//                                     <span className="delete-shadow" onClick={() => {
//                                         this.removeRoom(room.RomPk)
//                                     }}> {'🗑'}</span>
//                                 </Table.Cell>
//                             </Table.Row>
//                         ))
//                         }
//                     </Table.Body>
//                 </Table>
//                 <Modal closeIcon onClose={this.closeModalChangeRoom} open={!!currentRoomChange}>
//                     <Header icon='archive' content='Change Room'/>
//                     <Modal.Content>
//                         <Form>
//                             <Form.Input
//                                 label='Num'
//                                 type='number' min="1"
//                                 value={this.state.newItemChangeRoom.Num}
//                                 onChange={i =>
//                                     this.setState({
//                                         newItemChangeRoom: {
//                                             ...this.state.newItemChangeRoom,
//                                             Num: i.target.value
//                                         }
//                                     })}
//                             />
//                             <Form.Input
//                                 label='Building'
//                                 type='text'
//                                 value={this.state.newItemChangeRoom.Building}
//                                 onChange={i =>
//                                     this.setState({
//                                         newItemChangeRoom: {
//                                             ...this.state.newItemChangeRoom,
//                                             Building: i.target.value
//                                         }
//                                     })}
//                             />
//                             <Button type='button' positive onClick={() => {
//                                 this.setState({
//                                     newItemChangeRoom: {
//                                         ...this.state.newItemChangeRoom,
//                                         RomPk: this.state.currentRoomChange.RomPk
//                                     }
//                                 }, () => {
//                                     this.changeRoom(this.state.newItemChangeRoom),
//                                         this.closeModalChangeRoom()
//                                     this.setState({
//                                         newItemChangeRoom: {
//                                             Num: '',
//                                             Building: '',
//                                             RomPk: ''
//                                         }
//                                     });
//                                 });
//
//
//                             }}>Save</Button>
//                         </Form>
//                     </Modal.Content>
//                 </Modal>
//
//                 <div className='header'>
//                     <Label size="big">Subject</Label>
//                 </div>
//
//                 <Grid columns={3}>
//                     <Grid.Row>
//                         <Grid.Column>
//                             <Input icon placeholder='Name' fluid={true} value={this.state.newItemSubject.Name}
//                                    type='text'
//                                    onChange={i =>
//                                        this.setState({
//                                            newItemSubject: {
//                                                ...this.state.newItemSubject, Name: i.target.value
//                                            }
//                                        })}
//                             />
//                         </Grid.Column>
//                         <Grid.Column>
//                             <Button positive onClick={() => {
//                                 this.addSubject(this.state.newItemSubject);
//                                 this.setState({newItemSubject: {Name: ''}});
//                             }}>ADD</Button>
//                         </Grid.Column>
//                     </Grid.Row>
//                 </Grid>
//                 <Table celled structured>
//                     <Table.Header>
//                         <Table.Row textAlign='center'>
//                             <Table.HeaderCell rowSpan='1'>Id</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Name</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Change</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Delete</Table.HeaderCell>
//                         </Table.Row>
//                     </Table.Header>
//                     <Table.Body>
//                         {this.state.subjects.map((subject, index) => (
//                             <Table.Row key={index}>
//                                 <Table.Cell textAlign='center'>{subject.SbjPk}</Table.Cell>
//                                 <Table.Cell textAlign='center'>{subject.Name}</Table.Cell>
//                                 <Table.Cell textAlign='center'>
//                                     <Button positive type='button'
//                                             onClick={() => this.setState({currentSubjectChange: subject})}>-</Button></Table.Cell>
//                                 <Table.Cell textAlign='center'>
//                                     <span className="delete-shadow" onClick={() => {
//                                         this.removeSubject(subject.SbjPk)
//                                     }}> {'🗑'}</span>
//                                 </Table.Cell>
//                             </Table.Row>
//                         ))
//                         }
//                     </Table.Body>
//                 </Table>
//                 <Modal closeIcon onClose={this.closeModalChangeSubject} open={!!currentSubjectChange}>
//                     <Header icon='archive' content='Change Subject'/>
//                     <Modal.Content>
//                         <Form>
//                             <Form.Input
//                                 label='Name'
//                                 type='text'
//                                 value={this.state.newItemChangeSubject.Name}
//                                 onChange={i =>
//                                     this.setState({
//                                         newItemChangeSubject: {
//                                             ...this.state.newItemChangeSubject,
//                                             Name: i.target.value
//                                         }
//                                     })}
//                             />
//                             <Button type='button' positive onClick={() => {
//                                 this.setState({
//                                     newItemChangeSubject: {
//                                         ...this.state.newItemChangeSubject,
//                                         SbjPk: this.state.currentSubjectChange.SbjPk
//                                     }
//                                 }, () => {
//                                     this.changeSubject(this.state.newItemChangeSubject),
//                                         this.closeModalChangeSubject()
//                                     this.setState({
//                                         newItemChangeSubject: {
//                                             Name: '',
//                                             SbjPk: ''
//                                         }
//                                     });
//                                 });
//                             }}>Save</Button>
//                         </Form>
//                     </Modal.Content>
//                 </Modal>
//
//                 <div className='header'>
//                     <Label size="big">Teacher</Label>
//                 </div>
//                 <Table celled structured>
//                     <Table.Header>
//                         <Table.Row textAlign='center'>
//                             <Table.HeaderCell rowSpan='1'>Id</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>DepartamentId</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Name</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Surname</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Patronymic</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Change</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Delete</Table.HeaderCell>
//                         </Table.Row>
//                     </Table.Header>
//                     <Table.Body>
//                         {this.state.teachers.map((teacher, index) => (
//                             <Table.Row key={index}>
//                                 <Table.Cell textAlign='center'>{teacher.TchPk}</Table.Cell>
//                                 <Table.Cell textAlign='center'>{teacher.DepartamentId}</Table.Cell>
//                                 <Table.Cell textAlign='center'>{teacher.Name}</Table.Cell>
//                                 <Table.Cell textAlign='center'>{teacher.Surname}</Table.Cell>
//                                 <Table.Cell textAlign='center'>{teacher.Patronymic}</Table.Cell>
//                                 <Table.Cell textAlign='center'>
//                                     <Button positive type='button'
//                                             onClick={() => this.setState({currentTeacherChange: teacher})}>-</Button></Table.Cell>
//                                 <Table.Cell textAlign='center'>
//                                     <span className="delete-shadow" onClick={() => {
//                                         this.removeTeacher(teacher.TchPk)
//                                     }}> {'🗑'}</span>
//                                 </Table.Cell>
//                             </Table.Row>
//                         ))
//                         }
//                     </Table.Body>
//                 </Table>
//                 <Modal closeIcon onClose={this.closeModalTeacherTable} open={!!currentTeacherChange}>
//                     <Header icon='archive' content='Change Teacher'/>
//                     <Modal.Content>
//                         <Form>
//                             <Form.Input
//                                 label='Name'
//                                 type='text'
//                                 value={this.state.newItemChangeTeacher.Name}
//                                 onChange={i =>
//                                     this.setState({
//                                         newItemChangeTeacher: {
//                                             ...this.state.newItemChangeTeacher,
//                                             Name: i.target.value
//                                         }
//                                     })}
//                             />
//                             <Form.Input
//                                 label='Surname'
//                                 type='text'
//                                 value={this.state.newItemChangeTeacher.Surname}
//                                 onChange={i =>
//                                     this.setState({
//                                         newItemChangeTeacher: {
//                                             ...this.state.newItemChangeTeacher,
//                                             Surname: i.target.value
//                                         }
//                                     })}
//                             />
//                             <Form.Input
//                                 label='Patronymic'
//                                 type='text'
//                                 value={this.state.newItemChangeTeacher.Patronymic}
//                                 onChange={i =>
//                                     this.setState({
//                                         newItemChangeTeacher: {
//                                             ...this.state.newItemChangeTeacher,
//                                             Patronymic: i.target.value
//                                         }
//                                     })}
//                             />
//                             <Button type='button' positive onClick={() => {
//
//                                 this.setState({
//                                     newItemChangeTeacher: {
//                                         ...this.state.newItemChangeTeacher,
//                                         TchPk: this.state.currentTeacherChange.TchPk,
//                                         DepartamentId: this.state.currentTeacherChange.DepartamentId
//                                     }
//                                 }, () => {
//                                     this.changeTeacher(this.state.newItemChangeTeacher)
//                                     this.closeModalTeacherTable();
//                                     this.setState({
//                                         newItemTeacher: {
//                                             Name: '',
//                                             Surname: '',
//                                             Patronymic: '',
//                                             TchPk: ''
//                                         }
//                                     });
//                                 })
//                             }}>Save</Button>
//                         </Form>
//                     </Modal.Content>
//                 </Modal>
//
//                 <div className='header'>
//                     <Label size="big">Group</Label>
//                 </div>
//                 <Table celled structured>
//                     <Table.Header>
//                         <Table.Row textAlign='center'>
//                             <Table.HeaderCell rowSpan='1'>Id</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>DepartamentId</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Course</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Num</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Change</Table.HeaderCell>
//                             <Table.HeaderCell rowSpan='1'>Delete</Table.HeaderCell>
//                         </Table.Row>
//                     </Table.Header>
//                     <Table.Body>
//                         {this.state.groups.map((group, index) => (
//                             <Table.Row key={index}>
//                                 <Table.Cell textAlign='center'>{group.GrpPk}</Table.Cell>
//                                 <Table.Cell textAlign='center'>{group.DepartamentId}</Table.Cell>
//                                 <Table.Cell textAlign='center'>{group.Course}</Table.Cell>
//                                 <Table.Cell textAlign='center'>{group.Num}</Table.Cell>
//                                 <Table.Cell textAlign='center'>
//                                     <Button positive type='button'
//                                             onClick={() => this.setState({currentGroupChange: group})}>-</Button></Table.Cell>
//                                 <Table.Cell textAlign='center'>
//                                     <span className="delete-shadow" onClick={() => {
//                                         this.removeGroup(group.GrpPk)
//                                     }}> {'🗑'}</span>
//                                 </Table.Cell>
//                             </Table.Row>
//                         ))
//                         }
//                     </Table.Body>
//                 </Table>
//                 <Modal closeIcon onClose={this.closeModalGroupTable} open={!!currentGroupChange}>
//                     <Header icon='archive' content='Change Group'/>
//                     <Modal.Content>
//                         <Form>
//                             <Form.Input
//                                 label='Course(ONLY DIGIT)'
//                                 type='number' min="1"
//                                 value={this.state.newItemChangeGroup.Course}
//                                 onChange={i =>
//                                     this.setState({
//                                         newItemChangeGroup: {
//                                             ...this.state.newItemChangeGroup,
//                                             Course: i.target.value
//                                         }
//                                     })}
//                             />
//                             <Form.Input
//                                 label='Number(ONLY DIGIT)'
//                                 type='number' min="1"
//                                 value={this.state.newItemChangeGroup.Num}
//                                 onChange={i =>
//                                     this.setState({
//                                         newItemChangeGroup: {
//                                             ...this.state.newItemChangeGroup,
//                                             Num: i.target.value
//                                         }
//                                     })}
//                             />
//                             <Button type='button' positive onClick={() => {
//
//                                 this.setState({
//                                     newItemChangeGroup: {
//                                         ...this.state.newItemChangeGroup,
//                                         GrpPk: this.state.currentGroupChange.GrpPk,
//                                         DepartamentId: this.state.currentGroupChange.DepartamentId
//                                     }
//                                 }, () => {
//                                     this.changeGroup(this.state.newItemChangeGroup)
//                                     this.closeModalGroupTable();
//                                     this.setState({
//                                         newItemChangeGroup: {
//                                             Num: '',
//                                             Course: '',
//                                             DepartamentId: '',
//                                             GrpPk: ''
//                                         }
//                                     });
//                                 })
//                             }}>Save</Button>
//                         </Form>
//                     </Modal.Content>
//                 </Modal>
//                 <div className='header'>
//                     <Label size="big">Lecture</Label>
//                 </div>
//                 <Grid columns={3}>
//                     <Grid.Row>
//                         <Grid.Column>
//                             <Input icon placeholder='Day' fluid={true} value={this.state.newItemLecture.Day}
//                                    type='text'
//                                    onChange={i =>
//                                        this.setState({
//                                            newItemLecture: {
//                                                ...this.state.newItemLecture, Day: i.target.value
//                                            }
//                                        })}
//                             />
//                         </Grid.Column>
//                         <Grid.Column>
//                             <Input icon placeholder='Week' fluid={true}
//                                    value={this.state.newItemLecture.Week}
//                                    type='number' min="1"
//                                    onChange={i =>
//                                        this.setState({
//                                            newItemLecture: {
//                                                ...this.state.newItemLecture,
//                                                Week: i.target.value
//                                            }
//                                        })}
//                             />
//                         </Grid.Column>
//                         <Grid.Column>
//                             <Input icon placeholder='Lesson' fluid={true} value={this.state.newItemLecture.Lesson}
//                                    type='number' min="1"
//                                    onChange={i =>
//                                        this.setState({
//                                            newItemLecture: {
//                                                ...this.state.newItemLecture, Lesson: i.target.value
//                                            }
//                                        })}
//                             />
//                         </Grid.Column>
//                     </Grid.Row>
//                 </Grid>
//
//
//                 <Grid columns={5}>
//                     <Grid.Row>
//                         <Grid.Column>
//                             <Dropdown fluid={true}
//                                       selection
//                                       options={this.state.teachers.map((teacher, index) => (
//                                           {
//                                               key: index, text: teacher.Name, value: teacher.TchPk
//                                           }
//                                       ))}
//                                       value={TeacherId}
//                                       placeholder='Select Teacher'
//                                       onChange={(e, {value}) => this.handleChange(value, 'TeacherId')}
//                             />
//                         </Grid.Column>
//                         <Grid.Column>
//                             <Dropdown fluid={true}
//                                       selection
//                                       options={this.state.groups.map((group, index) => (
//                                           {
//                                               key: index, text: group.Num, value: group.GrpPk
//                                           }
//                                       ))}
//                                       value={GroupId}
//                                       placeholder='Select Group'
//                                       onChange={(e, {value}) => this.handleChange(value, 'GroupId')}
//                             />
//                         </Grid.Column>
//                         <Grid.Column>
//                             <Dropdown fluid={true}
//                                       selection
//                                       options={this.state.subjects.map((subject, index) => (
//                                           {
//                                               key: index, text: subject.Name, value: subject.SbjPk
//                                           }
//                                       ))}
//                                       value={SubjectId}
//                                       placeholder='Select Subject'
//                                       onChange={(e, {value}) => this.handleChange(value, 'SubjectId')}
//                             />
//                         </Grid.Column>
//                         <Grid.Column>
//                             <Dropdown fluid={true}
//                                       selection
//                                       options={this.state.rooms.map((room, index) => (
//                                           {
//                                               key: index, text: room.Num, value: room.RomPk
//                                           }
//                                       ))}
//                                       value={RoomId}
//                                       placeholder='Select Room'
//                                       onChange={(e, {value}) => this.handleChange(value, 'RoomId')}
//                             />
//                         </Grid.Column>
//                         <Grid.Column width={4}>
//                             <div>{TeacherId}</div>
//                             <div>{GroupId}</div>
//                             <div>{SubjectId}</div>
//                             <div>{RoomId}</div>
//                         </Grid.Column>
//                     </Grid.Row>
//                 </Grid>
//                 <Grid>
//                     <Grid.Row>
//                         <Button fluid type='button' positive onClick={() => {
//
//                             this.setState({
//                                 newItemLecture: {
//                                     ...this.state.newItemLecture,
//                                     TeacherId: this.state.TeacherId,
//                                     GroupId: this.state.GroupId,
//                                     RoomId: this.state.RoomId,
//                                     SubjectId: this.state.SubjectId
//                                 }
//                             }, () => {
//                                 this.addLecture(this.state.newItemLecture)
//                                 this.setState({
//                                     newItemLecture: {
//                                         Day: '',
//                                         Week: '',
//                                         Lesson: '',
//                                         TeacherId: '',
//                                         GroupId: '',
//                                         RoomId: '',
//                                         SubjectId: ''
//                                     }
//                                 });
//                             })
//                         }}>Save</Button></Grid.Row>
//                 </Grid>
//                 {/*<Modal closeIcon onClose={this.closeModal} trigger={<Button>Basic Modal</Button>} basic size='small'>*/}
//                 {/*<Header icon='archive' content='Archive Old Messages' />*/}
//                 {/*<Modal.Content>*/}
//                 {/*<p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>*/}
//                 {/*</Modal.Content>*/}
//                 {/*<Modal.Actions>*/}
//                 {/*<Button basic color='red' inverted>*/}
//                 {/*<Icon name='remove' /> No*/}
//                 {/*</Button>*/}
//                 {/*<Button  color='green' inverted>*/}
//                 {/*<Icon name='checkmark' /> Yes*/}
//                 {/*</Button>*/}
//                 {/*</Modal.Actions>*/}
//                 {/*</Modal>*/}
//                 {/*<Modal closeIcon onClose={this.closeModal} open={showModal} trigger={<Button onClick={() => this.setState({ showModal: true })}><Icon className='plus' />New Challenge</Button>}>*/}
//                 {/*<Modal.Header icon='archive' content='Add Teacher' />*/}
//                 {/*<Modal.Content>*/}
//                 {/*<Form>*/}
//                 {/*<Form.Input*/}
//                 {/*label='Name'*/}
//                 {/*type='text'*/}
//                 {/*value={this.state.newItemTeacher.Name}*/}
//                 {/*onChange={i =>*/}
//                 {/*this.setState({*/}
//                 {/*newItemTeacher: {*/}
//                 {/*...this.state.newItemTeacher,*/}
//                 {/*Name: i.target.value*/}
//                 {/*}*/}
//                 {/*})}*/}
//                 {/*!/>*/}
//                 {/*<Form.Input*/}
//                 {/*label='Surname'*/}
//                 {/*type='text'*/}
//                 {/*value={this.state.newItemTeacher.Surname}*/}
//                 {/*onChange={i =>*/}
//                 {/*this.setState({*/}
//                 {/*newItemTeacher: {*/}
//                 {/*...this.state.newItemTeacher,*/}
//                 {/*Surname: i.target.value*/}
//                 {/*}*/}
//                 {/*})}*/}
//                 {/*!/>*/}
//                 {/*<Form.Input*/}
//                 {/*label='Patronymic'*/}
//                 {/*type='text'*/}
//                 {/*value={this.state.newItemTeacher.Patronymic}*/}
//                 {/*onChange={i =>*/}
//                 {/*this.setState({*/}
//                 {/*newItemTeacher: {*/}
//                 {/*...this.state.newItemTeacher,*/}
//                 {/*Patronymic: i.target.value*/}
//                 {/*}*/}
//                 {/*})}*/}
//                 {/*!/>*/}
//                 {/*<Button positive onClick={() => {*/}
//                 {/*this.closeModal();*/}
//                 {/*this.setState({newItemTeacher: {Name: '', Surname: '', Patronymic: ''}});*/}
//                 {/*}}>Save</Button>*/}
//                 {/*</Form>*/}
//                 {/*</Modal.Content>*/}
//                 {/*</Modal>*/}
//                 {/*<Table celled structured>*/}
//                 {/*<Table.Header>*/}
//                 {/*<Table.Row>*/}
//                 {/*<Table.HeaderCell rowSpan='1'>Id</Table.HeaderCell>*/}
//                 {/*<Table.HeaderCell rowSpan='1'>Name</Table.HeaderCell>*/}
//                 {/*<Table.HeaderCell rowSpan='1'>Done</Table.HeaderCell>*/}
//                 {/*<Table.HeaderCell rowSpan='1'>Delete</Table.HeaderCell>*/}
//                 {/*</Table.Row>*/}
//                 {/*</Table.Header>*/}
//                 {/*<Table.Body>*/}
//                 {/*{this.state.tasks.map((task, index) => (*/}
//                 {/*<Table.Row key={index}>*/}
//                 {/*<Table.Cell textAlign='left'>{task.id}</Table.Cell>*/}
//                 {/*<Table.Cell textAlign='center'>{task.title}</Table.Cell>*/}
//                 {/*<Table.Cell*/}
//                 {/*textAlign='center'*/}
//                 {/*>*/}
//                 {/*<span*/}
//                 {/*onClick={() => {*/}
//                 {/*this.change(task.id, !task.done)*/}
//                 {/*}}*/}
//                 {/*className={`status-indicator-${task.done ? 'green' : 'red'}`}*/}
//                 {/*>*/}
//                 {/*{task.done ? '✔' : '❌'}*/}
//                 {/*</span>*/}
//                 {/*</Table.Cell>*/}
//                 {/*<Table.Cell textAlign='center'>*/}
//                 {/*<span className="delete-shadow" onClick={() => {*/}
//                 {/*this.remove(task.id)*/}
//                 {/*}}> {'🗑'}</span></Table.Cell>*/}
//                 {/*</Table.Row>*/}
//                 {/*))*/}
//                 {/*}*/}
//                 {/*</Table.Body>*/}
//                 {/*</Table>*/}
//
//             </div>
//
//         );
//     }
// }

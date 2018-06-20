import {PureComponent} from "react";
import {
    getAllGroup,
    getAllLecture,
    getAllRoom,
    getAllSubject,
    getAllTeacher,
    insertLecture,
    removeLecture1
} from "../../api/fetchOfData";
import {Button, Dropdown, Form, Grid, Header, Input, Modal, Table} from "semantic-ui-react";
import React from "react";
export class Lecture extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            groups: [],
            teachers: [],
            rooms: [],
            subjects: [],
            newItemLecture: {Day: '', Week: '', Lesson: '', TeacherId: '', GroupId: '', RoomId: '', SubjectId: ''},
            lectures: [],
            TeacherId: '',
            GroupId: '',
            RoomId: '',
            SubjectId: '',
        }
    }

    handleChange = (value, key) => this.setState({[key]: value});

    componentDidMount() {
        this.loadSubject();
        this.loadRoom();
        this.loadTeacher();
        this.loadGroup();
        this.loadLecture();
    }

    async addLecture(lecture) {
        await insertLecture(lecture)
        await this.loadLecture()
    }

    async removeLecture(Id) {
        await removeLecture1(Id);
        await this.loadLecture()
    }

    async loadRoom() {
        let rooms = await getAllRoom();
        rooms.sort((x, y) => -y.RomPk + x.RomPk);
        this.setState({rooms});
    }

    async loadLecture() {
        let lectures = await getAllLecture();
        lectures.sort((x, y) => -y.LctPk + x.LctPk);
        this.setState({lectures});
    }

    async loadSubject() {
        let subjects = await getAllSubject();
        subjects.sort((x, y) => -y.SbjPk + x.SbjPk);
        this.setState({subjects});
    }

    async loadTeacher() {
        let teachers = await getAllTeacher();
        teachers.sort((x, y) => -y.TchPk + x.TchPk);
        this.setState({teachers});
    }

    async loadGroup() {
        let groups = await getAllGroup();
        groups.sort((x, y) => -y.GrpPk + x.GrpPk);
        this.setState({groups});
    }

    render() {
        const {
            TeacherId,
            GroupId,
            RoomId,
            SubjectId,
        } = this.state;
        return (
            <div className='task-list-container'>
                {/*<div className='header'>*/}
                {/*<Label size="big">Lecture</Label>*/}
                {/*</div>*/}
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <Input icon placeholder='Day' fluid={true} value={this.state.newItemLecture.Day}
                                   type='text'
                                   onChange={i =>
                                       this.setState({
                                               newItemLecture: {
                                                   ...this.state.newItemLecture, Day: i.target.value
                                               }
                                           }
                                       )
                                   }
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Input icon placeholder='Week' fluid={true}
                                   value={this.state.newItemLecture.Week}
                                   type='number' min="1"
                                   onChange={i =>
                                       this.setState({
                                               newItemLecture: {
                                                   ...this.state.newItemLecture,
                                                   Week: i.target.value
                                               }
                                           }
                                       )
                                   }
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Input icon placeholder='Lesson' fluid={true} value={this.state.newItemLecture.Lesson}
                                   type='number' min="1"
                                   onChange={i =>
                                       this.setState({
                                               newItemLecture: {
                                                   ...this.state.newItemLecture, Lesson: i.target.value
                                               }
                                           }
                                       )
                                   }
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid columns={5}>
                    <Grid.Row>
                        <Grid.Column>
                            <Dropdown fluid={true}
                                      selection
                                      options={this.state.teachers.map((teacher, index) => (
                                              {
                                                  key: index, text: teacher.Name, value: teacher.TchPk
                                              }
                                          )
                                      )
                                      }
                                      value={TeacherId}
                                      placeholder='Select Teacher'
                                      onChange={(e, {value}) => this.handleChange(value, 'TeacherId')}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown fluid={true}
                                      selection
                                      options={this.state.groups.map((group, index) => (
                                              {
                                                  key: index, text: group.Num, value: group.GrpPk
                                              }
                                          )
                                      )
                                      }
                                      value={GroupId}
                                      placeholder='Select Group'
                                      onChange={(e, {value}) => this.handleChange(value, 'GroupId')}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown fluid={true}
                                      selection
                                      options={this.state.subjects.map((subject, index) => (
                                              {
                                                  key: index, text: subject.Name, value: subject.SbjPk
                                              }
                                          )
                                      )
                                      }
                                      value={SubjectId}
                                      placeholder='Select Subject'
                                      onChange={(e, {value}) => this.handleChange(value, 'SubjectId')}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Dropdown fluid={true}
                                      selection
                                      options={this.state.rooms.map((room, index) => (
                                              {
                                                  key: index, text: room.Num, value: room.RomPk
                                              }
                                          )
                                      )
                                      }
                                      value={RoomId}
                                      placeholder='Select Room'
                                      onChange={(e, {value}) => this.handleChange(value, 'RoomId')}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Row>
                        <Button fluid type='button' positive onClick={() => {

                            this.setState({
                                newItemLecture: {
                                    ...this.state.newItemLecture,
                                    TeacherId: this.state.TeacherId,
                                    GroupId: this.state.GroupId,
                                    RoomId: this.state.RoomId,
                                    SubjectId: this.state.SubjectId
                                }
                            }, () => {
                                Lecture.addLecture(this.state.newItemLecture)
                                this.setState({
                                    newItemLecture: {
                                        Day: '',
                                        Week: '',
                                        Lesson: '',
                                        TeacherId: '',
                                        GroupId: '',
                                        RoomId: '',
                                        SubjectId: ''
                                    }
                                });
                            })
                        }}>Save</Button></Grid.Row>
                </Grid>
                <Table celled structured>
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell rowSpan='1'>Id</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Day</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Week</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Lesson</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>TeacherId</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>GroupId</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>RoomId</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>SubjectId</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.lectures.map((lecture, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell textAlign='center'>{lecture.LctPk}</Table.Cell>
                                    <Table.Cell textAlign='center'>{lecture.Day}</Table.Cell>
                                    <Table.Cell textAlign='center'>{lecture.Week}</Table.Cell>
                                    <Table.Cell textAlign='center'>{lecture.Lesson}</Table.Cell>
                                    <Table.Cell textAlign='center'>{lecture.TeacherId}</Table.Cell>
                                    <Table.Cell textAlign='center'>{lecture.GroupId}</Table.Cell>
                                    <Table.Cell textAlign='center'>{lecture.RoomId}</Table.Cell>
                                    <Table.Cell textAlign='center'>{lecture.SubjectId}</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                    <span className="delete-shadow" onClick={() => {
                                        this.removeLecture(lecture.LctPk)
                                    }}> {'🗑'}</span>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        )
                        }
                    </Table.Body>
                </Table>
                {/*<Modal closeIcon onClose={this.closeModal} trigger={<Button>Basic Modal</Button>} basic size='small'>*/}
                {/*<Header icon='archive' content='Archive Old Messages' />*/}
                {/*<Modal.Content>*/}
                {/*<p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>*/}
                {/*</Modal.Content>*/}
                {/*<Modal.Actions>*/}
                {/*<Button basic color='red' inverted>*/}
                {/*<Icon name='remove' /> No*/}
                {/*</Button>*/}
                {/*<Button  color='green' inverted>*/}
                {/*<Icon name='checkmark' /> Yes*/}
                {/*</Button>*/}
                {/*</Modal.Actions>*/}
                {/*</Modal>*/}
                {/*<Modal closeIcon onClose={this.closeModal} open={showModal} trigger={<Button onClick={() => this.setState({ showModal: true })}><Icon className='plus' />New Challenge</Button>}>*/}
                {/*<Modal.Header icon='archive' content='Add Teacher' />*/}
                {/*<Modal.Content>*/}
                {/*<Form>*/}
                {/*<Form.Input*/}
                {/*label='Name'*/}
                {/*type='text'*/}
                {/*value={this.state.newItemTeacher.Name}*/}
                {/*onChange={i =>*/}
                {/*this.setState({*/}
                {/*newItemTeacher: {*/}
                {/*...this.state.newItemTeacher,*/}
                {/*Name: i.target.value*/}
                {/*}*/}
                {/*})}*/}
                {/*!/>*/}
                {/*<Form.Input*/}
                {/*label='Surname'*/}
                {/*type='text'*/}
                {/*value={this.state.newItemTeacher.Surname}*/}
                {/*onChange={i =>*/}
                {/*this.setState({*/}
                {/*newItemTeacher: {*/}
                {/*...this.state.newItemTeacher,*/}
                {/*Surname: i.target.value*/}
                {/*}*/}
                {/*})}*/}
                {/*!/>*/}
                {/*<Form.Input*/}
                {/*label='Patronymic'*/}
                {/*type='text'*/}
                {/*value={this.state.newItemTeacher.Patronymic}*/}
                {/*onChange={i =>*/}
                {/*this.setState({*/}
                {/*newItemTeacher: {*/}
                {/*...this.state.newItemTeacher,*/}
                {/*Patronymic: i.target.value*/}
                {/*}*/}
                {/*})}*/}
                {/*!/>*/}
                {/*<Button positive onClick={() => {*/}
                {/*this.closeModal();*/}
                {/*this.setState({newItemTeacher: {Name: '', Surname: '', Patronymic: ''}});*/}
                {/*}}>Save</Button>*/}
                {/*</Form>*/}
                {/*</Modal.Content>*/}
                {/*</Modal>*/}
                {/*<Table celled structured>*/}
                {/*<Table.Header>*/}
                {/*<Table.Row>*/}
                {/*<Table.HeaderCell rowSpan='1'>Id</Table.HeaderCell>*/}
                {/*<Table.HeaderCell rowSpan='1'>Name</Table.HeaderCell>*/}
                {/*<Table.HeaderCell rowSpan='1'>Done</Table.HeaderCell>*/}
                {/*<Table.HeaderCell rowSpan='1'>Delete</Table.HeaderCell>*/}
                {/*</Table.Row>*/}
                {/*</Table.Header>*/}
                {/*<Table.Body>*/}
                {/*{this.state.tasks.map((task, index) => (*/}
                {/*<Table.Row key={index}>*/}
                {/*<Table.Cell textAlign='left'>{task.id}</Table.Cell>*/}
                {/*<Table.Cell textAlign='center'>{task.title}</Table.Cell>*/}
                {/*<Table.Cell*/}
                {/*textAlign='center'*/}
                {/*>*/}
                {/*<span*/}
                {/*onClick={() => {*/}
                {/*this.change(task.id, !task.done)*/}
                {/*}}*/}
                {/*className={`status-indicator-${task.done ? 'green' : 'red'}`}*/}
                {/*>*/}
                {/*{task.done ? '✔' : '❌'}*/}
                {/*</span>*/}
                {/*</Table.Cell>*/}
                {/*<Table.Cell textAlign='center'>*/}
                {/*<span className="delete-shadow" onClick={() => {*/}
                {/*this.remove(task.id)*/}
                {/*}}> {'🗑'}</span></Table.Cell>*/}
                {/*</Table.Row>*/}
                {/*))*/}
                {/*}*/}
                {/*</Table.Body>*/}
                {/*</Table>*/}

            </div>

        );
    }
}
import {PureComponent} from "react";
import {changeTeacher, getAllTeacher, removeTeacher} from "../../api/fetchOfData";
import {Button, Form, Grid, Header, Input, Modal, Table} from "semantic-ui-react";
export class Teacher extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            teachers: [],
            newItemChangeTeacher: {Name: '', Surname: '', Patronymic: '', TchPk: '', DepartamentId: ''},
            currentTeacherChange: undefined,
        }
    }

    closeModalTeacherTable = () => this.setState({currentTeacherChange: undefined});

    async componentDidMount() {
        await this.loadTeacher()
    }

    async loadTeacher() {
        let teachers = await getAllTeacher();
        teachers.sort((x, y) => -y.TchPk + x.TchPk);
        this.setState({teachers});
    }

    async changeTeacher(teacher) {
        await changeTeacher(teacher);
        await this.loadTeacher()
    }

    async removeTeacher(Id) {
        await removeTeacher(Id);
        await this.loadTeacher()
    }

    render() {
        const {
            currentTeacherChange,
        } = this.state;
        return (
            <div className='task-list-container'>
                {/*<div className='header'>*/}
                {/*<Label size="big">Teacher</Label>*/}
                {/*</div>*/}
                <Table celled structured>
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell rowSpan='1'>Id</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>DepartamentId</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Name</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Surname</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Patronymic</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Change</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.teachers.map((teacher, index) => (
                            <Table.Row key={index}>
                                <Table.Cell textAlign='center'>{teacher.TchPk}</Table.Cell>
                                <Table.Cell textAlign='center'>{teacher.DepartamentId}</Table.Cell>
                                <Table.Cell textAlign='center'>{teacher.Name}</Table.Cell>
                                <Table.Cell textAlign='center'>{teacher.Surname}</Table.Cell>
                                <Table.Cell textAlign='center'>{teacher.Patronymic}</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    <Button positive type='button'
                                            onClick={() => this.setState({currentTeacherChange: teacher})}>-</Button></Table.Cell>
                                <Table.Cell textAlign='center'>
                                    <span className="delete-shadow" onClick={() => {
                                        this.removeTeacher(teacher.TchPk)
                                    }}> {'🗑'}</span>
                                </Table.Cell>
                            </Table.Row>
                        ))
                        }
                    </Table.Body>
                </Table>
                <Modal closeIcon onClose={this.closeModalTeacherTable} open={!!currentTeacherChange}>
                    <Header icon='archive' content='Change Teacher'/>
                    <Modal.Content>
                        <Form>
                            <Form.Input
                                label='Name'
                                type='text'
                                value={this.state.newItemChangeTeacher.Name}
                                onChange={i =>
                                    this.setState({
                                        newItemChangeTeacher: {
                                            ...this.state.newItemChangeTeacher,
                                            Name: i.target.value
                                        }
                                    })}
                            />
                            <Form.Input
                                label='Surname'
                                type='text'
                                value={this.state.newItemChangeTeacher.Surname}
                                onChange={i =>
                                    this.setState({
                                        newItemChangeTeacher: {
                                            ...this.state.newItemChangeTeacher,
                                            Surname: i.target.value
                                        }
                                    })}
                            />
                            <Form.Input
                                label='Patronymic'
                                type='text'
                                value={this.state.newItemChangeTeacher.Patronymic}
                                onChange={i =>
                                    this.setState({
                                        newItemChangeTeacher: {
                                            ...this.state.newItemChangeTeacher,
                                            Patronymic: i.target.value
                                        }
                                    })}
                            />
                            <Button type='button' positive onClick={() => {

                                this.setState({
                                    newItemChangeTeacher: {
                                        ...this.state.newItemChangeTeacher,
                                        TchPk: this.state.currentTeacherChange.TchPk,
                                        DepartamentId: this.state.currentTeacherChange.DepartamentId
                                    }
                                }, () => {
                                    this.changeTeacher(this.state.newItemChangeTeacher)
                                    this.closeModalTeacherTable();
                                    this.setState({
                                        newItemTeacher: {
                                            Name: '',
                                            Surname: '',
                                            Patronymic: '',
                                            TchPk: ''
                                        }
                                    });
                                })
                            }}>Save</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
            </div>

        );
    }
}
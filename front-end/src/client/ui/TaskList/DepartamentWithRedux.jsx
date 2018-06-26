import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {getDepartaments, addDepartament, deleteDepartament, addGroup, addTeacher , chngDepartament} from "../../thunks/departaments";

import {Button, Form, Grid, Header, Input, Modal, Table} from "semantic-ui-react";

export class DepartamentWithRedux extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            newItemDepartment: {Name: '', Building: ''},
            newItemChangeDepartment: {Name: '', Building: ''},
            newItemGroup: {Course: '', Num: ''},
            newItemTeacher: {Name: '', Surname: '', Patronymic: ''},
            currentDepartamentTeacher: undefined,
            currentDepartamentGroup: undefined,
            currentDepartamentChange: undefined,
        };
    }

    componentDidMount() {
        this.loadDepartament()
    };

    loadDepartament() {
        this.props.onGetDepartament();
    }

    addDepartament = () => {
        this.props.AddDepartament(this.state.newItemDepartment)
        this.setState({newItemDepartment: {Name: '', Building: ''}});
    };
    changeDepartament = () => {
        this.props.ChangeDepartament(this.state.newItemChangeDepartment)
        this.closeModalChangeDepartament();
        this.setState({
                newItemChangeDepartment: {
                    Name: '',
                    Building: '',
                }
            }
        );
    };


    addGroup = () => {
        this.props.AddGroup(this.state.newItemGroup)
        this.closeModalGroup();
        this.setState({
            newItemGroup: {
                Course: '', Num: 0,
            }
        });
    };
    addTeacher = () => {
        this.props.AddTeacher(this.state.newItemTeacher)
        this.closeModalTeacher();
        this.setState({
            newItemTeacher: {
                Name: '',
                Surname: '',
                Patronymic: '',
            }
        });
    };
    removeDepartament = (department) => {
        this.props.RemoveDepartament(department.DepPk)
    };
    closeModalGroup = () => this.setState({currentDepartamentGroup: undefined});
    closeModalTeacher = () => this.setState({currentDepartamentTeacher: undefined});
    closeModalChangeDepartament = () => this.setState({currentDepartamentChange: undefined});

    render() {
        const {
            currentDepartamentGroup,
            currentDepartamentTeacher,
            currentDepartamentChange,
        } = this.state;
        return (
            <div className='task-list-container'>
                {/*<div className='header'>*/}
                {/*<Label size="big">Department</Label>*/}
                {/*</div>*/}
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <Input icon placeholder='Name' fluid={true} value={this.state.newItemDepartment.Name}
                                   type='text'
                                   onChange={i =>
                                       this.setState({
                                               newItemDepartment: {
                                                   ...this.state.newItemDepartment, Name: i.target.value
                                               }
                                           }
                                       )
                                   }
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Input icon placeholder='Building' fluid={true}
                                   value={this.state.newItemDepartment.Building}
                                   type='text'
                                   onChange={i =>
                                       this.setState({
                                               newItemDepartment: {
                                                   ...this.state.newItemDepartment,
                                                   Building: i.target.value
                                               }
                                           }
                                       )
                                   }
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Button positive onClick={() => this.addDepartament()}>ADD</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Table celled structured>
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell rowSpan='1'>Id</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Name</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Building</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>ADD Group</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>ADD Teacher</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Change</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {(this.props.departament &&
                            this.props.departament.map((departament, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell textAlign='center'>{departament.DepPk}</Table.Cell>
                                    <Table.Cell textAlign='center'>{departament.Name}</Table.Cell>
                                    <Table.Cell textAlign='center'>{departament.Building}</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        <Button positive type='button'
                                                onClick={() => this.setState({currentDepartamentGroup: departament})}>-</Button></Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        <Button positive type='button'
                                                onClick={() => this.setState({currentDepartamentTeacher: departament})}>+</Button>
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        <Button positive type='button'
                                                onClick={
                                                    () => this.setState({currentDepartamentChange: departament})}>✎</Button>

                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                    <span className="delete-shadow" onClick={() => {
                                        debugger
                                        this.removeDepartament(departament)
                                    }}> {'🗑'}</span>
                                    </Table.Cell>
                                </Table.Row>
                            )))
                        }
                    </Table.Body>
                </Table>
                <Modal closeIcon onClose={this.closeModalGroup} open={!!currentDepartamentGroup}>
                    <Header icon='archive' content='Add Group'/>
                    <Modal.Content>
                        <Form>
                            <Form.Input
                                label='Course(ONLY DIGIT)'
                                type='number' min="1"
                                value={this.state.newItemGroup.Course}
                                onChange={i =>
                                    this.setState({
                                        newItemGroup: {
                                            ...this.state.newItemGroup,
                                            Course: i.target.value
                                        }
                                    })}
                            />
                            <Form.Input
                                label='Number(ONLY DIGIT)'
                                type='number' min="1"
                                value={this.state.newItemGroup.Num}
                                onChange={i =>
                                    this.setState({
                                        newItemGroup: {
                                            ...this.state.newItemGroup,
                                            Num: i.target.value
                                        }
                                    })}
                            />
                            <Button type='button' positive onClick={() => {
                                this.setState({
                                    newItemGroup: {
                                        ...this.state.newItemGroup,
                                        DepartamentId: this.state.currentDepartamentGroup.DepPk
                                    }
                                }, () => {
                                    this.addGroup.bind(this)() // bind здесь вообще почти ничгде не нужен, так как он нужен только тогда когда ты не используешь стрелочные функции/

                                });
                            }}>Save</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
                <Modal closeIcon onClose={this.closeModalTeacher} open={!!currentDepartamentTeacher}>
                    <Header icon='archive' content='Add Teacher'/>
                    <Modal.Content>
                        <Form>
                            <Form.Input
                                label='Name'
                                type='text'
                                value={this.state.newItemTeacher.Name}
                                onChange={i =>
                                    this.setState({
                                            newItemTeacher: {
                                                ...this.state.newItemTeacher,
                                                Name: i.target.value
                                            }
                                        }
                                    )
                                }
                            />
                            <Form.Input
                                label='Surname'
                                type='text'
                                value={this.state.newItemTeacher.Surname}
                                onChange={i =>
                                    this.setState({
                                            newItemTeacher: {
                                                ...this.state.newItemTeacher,
                                                Surname: i.target.value
                                            }
                                        }
                                    )
                                }
                            />
                            <Form.Input
                                label='Patronymic'
                                type='text'
                                value={this.state.newItemTeacher.Patronymic}
                                onChange={i =>
                                    this.setState({
                                            newItemTeacher: {
                                                ...this.state.newItemTeacher,
                                                Patronymic: i.target.value
                                            }
                                        }
                                    )
                                }
                            />
                            <Button type='button' positive onClick={() => {

                                this.setState({
                                    newItemTeacher: {
                                        ...this.state.newItemTeacher,
                                        DepartamentId: this.state.currentDepartamentTeacher.DepPk
                                    }
                                }, () => {
                                    this.addTeacher()
                                })
                            }}>Save</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
                <Modal closeIcon onClose={this.closeModalChangeDepartament} open={!!currentDepartamentChange}>
                    <Header icon='archive' content='Change Departament'/>
                    <Modal.Content>
                        <Form>
                            <Form.Input
                                label='Name'
                                type='text'
                                value={this.state.newItemChangeDepartment.Name}
                                onChange={i =>
                                    this.setState({
                                            newItemChangeDepartment: {
                                                ...this.state.newItemChangeDepartment,
                                                Name: i.target.value
                                            }
                                        }
                                    )
                                }
                            />
                            <Form.Input
                                label='Building'
                                type='text'
                                value={this.state.newItemChangeDepartment.Building}
                                onChange={i =>
                                    this.setState({
                                            newItemChangeDepartment: {
                                                ...this.state.newItemChangeDepartment,
                                                Building: i.target.value
                                            }
                                        }
                                    )
                                }
                            />
                            <Button type='button' positive onClick={() => {
                            this.setState({
                            newItemChangeDepartment: {
                            ...this.state.newItemChangeDepartment,
                            DepPk: this.state.currentDepartamentChange.DepPk
                            }
                            }, () => {
                                this.changeDepartament()
                            })
                            }}
                            >Save</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

export default connect(state => ({
        departament: state.departaments.list
    }),
    dispatch => ({
        AddDepartament: (departament) => dispatch(addDepartament(departament)),
        ChangeDepartament : (departament) => dispatch(chngDepartament(departament)),
        onGetDepartament: () => dispatch(getDepartaments()),
        RemoveDepartament: (id) => dispatch(deleteDepartament(id)),
        AddGroup: (group) => dispatch(addGroup(group)),
        AddTeacher : (teacher) => dispatch(addTeacher(teacher))
    })
)(DepartamentWithRedux);


import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import { getSubjects, addSubject, chngSubject, deleteSubject} from "../../thunks/subject";
import {Button, Form, Grid, Header, Input, Modal, Table} from "semantic-ui-react";

import {RoomWithRedux} from "./RoomWithRedux";

export class SubjectWithRedux extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            subjects: [],
            currentSubjectChange: undefined,
            newItemChangeSubject: {Name: '', SbjPk: ''},
            newItemSubject: {Name: ''},
        }
    }

    closeModalChangeSubject = () => {
        this.setState({currentSubjectChange: undefined})
    }
    componentDidMount() {
        this.loadSubject()
    };

    loadSubject() {
        this.props.GetSubjects()
    }
    addSubject = () => {
        this.props.AddSubject(this.state.newItemSubject)
        this.setState({newItemSubject: {Name: ''}});
    };
    changeSubject = () => {
        this.props.ChangeSubject(this.state.newItemChangeSubject)
        this.closeModalChangeSubject()
        this.setState({
            newItemChangeSubject: {
                Name: '',
                SbjPk: ''
            }
        });
    };
    removeSubject = (subject) => {
        this.props.RemoveSubject(subject.SbjPk)
    };
    render() {
        const {
            currentSubjectChange,
        } = this.state
        return (
            <div className='task-list-container'>
                {/*<div className='header'>*/}
                {/*<Label size="big">Subject</Label>*/}
                {/*</div>*/}
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <Input icon placeholder='Name' fluid={true} value={this.state.newItemSubject.Name}
                                   type='text'
                                   onChange={i =>
                                       this.setState({
                                               newItemSubject: {
                                                   ...this.state.newItemSubject, Name: i.target.value
                                               }
                                           }
                                       )
                                   }
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Button positive onClick={() => {
                                this.addSubject();
                                }}>ADD</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Table celled structured>
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell rowSpan='1'>Id</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Name</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Change</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.subjects.map((subject, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell textAlign='center'>{subject.SbjPk}</Table.Cell>
                                    <Table.Cell textAlign='center'>{subject.Name}</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        <Button positive type='button'
                                                onClick={() => this.setState({currentSubjectChange: subject})}>-</Button></Table.Cell>
                                    <Table.Cell textAlign='center'>
                                    <span className="delete-shadow" onClick={() => {
                                        this.removeSubject(subject)
                                    }}> {'🗑'}</span>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        )
                        }
                    </Table.Body>
                </Table>
                <Modal closeIcon onClose={this.closeModalChangeSubject} open={!!currentSubjectChange}>
                    <Header icon='archive' content='Change Subject'/>
                    <Modal.Content>
                        <Form>
                            <Form.Input
                                label='Name'
                                type='text'
                                value={this.state.newItemChangeSubject.Name}
                                onChange={i =>
                                    this.setState({
                                            newItemChangeSubject: {
                                                ...this.state.newItemChangeSubject,
                                                Name: i.target.value
                                            }
                                        }
                                    )
                                }
                            />
                            <Button type='button' positive onClick={() => {
                                this.setState({
                                    newItemChangeSubject: {
                                        ...this.state.newItemChangeSubject,
                                        SbjPk: this.state.currentSubjectChange.SbjPk
                                    }
                                }, () => {
                                    this.changeSubject()
                                });
                            }}>Save</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}


export default connect(state => ({
        subjects: state.subjects.listSubjects
    }),
    dispatch => ({
        AddSubject: (subject) => dispatch(addSubject(subject)),
        ChangeSubject : (subject) => dispatch(chngSubject(subject)),
        GetSubjects: () => dispatch(getSubjects()),
        RemoveSubject: (id) => dispatch(deleteSubject(id))
    })
)(SubjectWithRedux);
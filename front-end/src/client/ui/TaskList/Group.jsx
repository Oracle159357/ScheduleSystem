import {PureComponent} from "react";
import {changeGroup, getAllGroup, removeGroup} from "../../api/fetchOfData";
import {Button, Form, Grid, Header, Input, Modal, Table} from "semantic-ui-react";
import React from "react";
export class Group extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            groups: [],
            newItemChangeGroup: {Course: '', Num: '', GrpPk: '', DepartamentId: ''},
            currentGroupChange: undefined,
        }
    }

    closeModalGroupTable = () => {
        this.setState({currentGroupChange: undefined})
    };

    async componentDidMount() {
        await this.loadGroup()
    }

    async loadGroup() {
        let groups = await getAllGroup();
        groups.sort((x, y) => -y.GrpPk + x.GrpPk);
        this.setState({groups});
    }

    async changeGroup(group) {
        console.log(group)
        await changeGroup(group);
        await this.loadGroup()
    }

    async removeGroup(Id) {
        await removeGroup(Id);
        await this.loadGroup()
    }


    render() {
        const {
            currentGroupChange,
        } = this.state;
        return (
            <div className='task-list-container'>
                {/*<div className='header'>*/}
                {/*<Label size="big">Group</Label>*/}
                {/*</div>*/}
                <Table celled structured>
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell rowSpan='1'>Id</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>DepartamentId</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Course</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Num</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Change</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.groups.map((group, index) => (
                            <Table.Row key={index}>
                                <Table.Cell textAlign='center'>{group.GrpPk}</Table.Cell>
                                <Table.Cell textAlign='center'>{group.DepartamentId}</Table.Cell>
                                <Table.Cell textAlign='center'>{group.Course}</Table.Cell>
                                <Table.Cell textAlign='center'>{group.Num}</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    <Button positive type='button'
                                            onClick={() => this.setState({currentGroupChange: group})}>-</Button></Table.Cell>
                                <Table.Cell textAlign='center'>
                                    <span className="delete-shadow" onClick={() => {
                                        this.removeGroup(group.GrpPk)
                                    }}> {'🗑'}</span>
                                </Table.Cell>
                            </Table.Row>
                        ))
                        }
                    </Table.Body>
                </Table>
                <Modal closeIcon onClose={this.closeModalGroupTable} open={!!currentGroupChange}>
                    <Header icon='archive' content='Change Group'/>
                    <Modal.Content>
                        <Form>
                            <Form.Input
                                label='Course(ONLY DIGIT)'
                                type='number' min="1"
                                value={this.state.newItemChangeGroup.Course}
                                onChange={i =>
                                    this.setState({
                                        newItemChangeGroup: {
                                            ...this.state.newItemChangeGroup,
                                            Course: i.target.value
                                        }
                                    })}
                            />
                            <Form.Input
                                label='Number(ONLY DIGIT)'
                                type='number' min="1"
                                value={this.state.newItemChangeGroup.Num}
                                onChange={i =>
                                    this.setState({
                                        newItemChangeGroup: {
                                            ...this.state.newItemChangeGroup,
                                            Num: i.target.value
                                        }
                                    })}
                            />
                            <Button type='button' positive onClick={() => {

                                this.setState({
                                    newItemChangeGroup: {
                                        ...this.state.newItemChangeGroup,
                                        GrpPk: this.state.currentGroupChange.GrpPk,
                                        DepartamentId: this.state.currentGroupChange.DepartamentId
                                    }
                                }, () => {
                                    this.changeGroup(this.state.newItemChangeGroup)
                                    this.closeModalGroupTable();
                                    this.setState({
                                        newItemChangeGroup: {
                                            Num: '',
                                            Course: '',
                                            DepartamentId: '',
                                            GrpPk: ''
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
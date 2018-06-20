import {PureComponent} from "react";
import {changeSubject, getAllSubject, insertSubject, removeSubject} from "../../api/fetchOfData";
import {Button, Form, Grid, Header, Input, Modal, Table} from "semantic-ui-react";
export class Subject extends PureComponent {
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

    async componentDidMount() {
        await this.loadSubject()
    }

    async loadSubject() {
        let subjects = await getAllSubject();
        subjects.sort((x, y) => -y.SbjPk + x.SbjPk);
        this.setState({subjects});
    }

    async addSubject(subject) {
        await insertSubject(subject)
        await this.loadSubject()
    }

    async changeSubject(subject) {
        console.log(subject)
        await changeSubject(subject);
        await this.loadSubject()
    }

    async removeSubject(Id) {
        await removeSubject(Id);
        await this.loadSubject()
    }

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
                                this.addSubject(this.state.newItemSubject);
                                this.setState({newItemSubject: {Name: ''}});
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
                        {this.state.subjects.map((subject, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell textAlign='center'>{subject.SbjPk}</Table.Cell>
                                    <Table.Cell textAlign='center'>{subject.Name}</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        <Button positive type='button'
                                                onClick={() => this.setState({currentSubjectChange: subject})}>-</Button></Table.Cell>
                                    <Table.Cell textAlign='center'>
                                    <span className="delete-shadow" onClick={() => {
                                        this.removeSubject(subject.SbjPk)
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
                                    this.changeSubject(this.state.newItemChangeSubject),
                                        this.closeModalChangeSubject()
                                    this.setState({
                                        newItemChangeSubject: {
                                            Name: '',
                                            SbjPk: ''
                                        }
                                    });
                                });
                            }}>Save</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}
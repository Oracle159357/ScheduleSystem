import {PureComponent} from "react";
import {changeRoom, getAllRoom, insertRoom, removeRoom} from "../../api/fetchOfData";
import {Button, Form, Grid, Header, Input, Modal, Table} from "semantic-ui-react";
export class Room extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            currentRoomChange: undefined,
            newItemChangeRoom: {Building: '', Num: '', RomPk: ''},
            newItemRoom: {Building: '', Num: ''},
        }
    }

    closeModalChangeRoom = () => this.setState({currentRoomChange: undefined})

    async componentDidMount() {
        await this.loadRoom()
    }

    async loadRoom() {
        let rooms = await getAllRoom();
        rooms.sort((x, y) => -y.RomPk + x.RomPk);
        this.setState({rooms});
    }

    async addRoom(room) {
        await insertRoom(room)
        await this.loadRoom()
    }

    async changeRoom(room) {
        await changeRoom(room);
        await this.loadRoom()
    }

    async removeRoom(Id) {
        await removeRoom(Id);
        await this.loadRoom()
    }

    render() {
        const {
            currentRoomChange,
        } = this.state;
        return (
            <div className='task-list-container'>
                {/*<div className='header'>*/}
                {/*<Label size="big">Room</Label>*/}
                {/*</div>*/}
                <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <Input icon placeholder='Num' fluid={true} value={this.state.newItemRoom.Num}
                                   type='number' min="1"
                                   onChange={i =>
                                       this.setState({
                                               newItemRoom: {
                                                   ...this.state.newItemRoom, Num: i.target.value
                                               }
                                           }
                                       )
                                   }
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Input icon placeholder='Building' fluid={true}
                                   value={this.state.newItemRoom.Building}
                                   type='text'
                                   onChange={i =>
                                       this.setState({
                                               newItemRoom: {
                                                   ...this.state.newItemRoom,
                                                   Building: i.target.value
                                               }
                                           }
                                       )
                                   }
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Button positive onClick={() => {
                                this.addRoom(this.state.newItemRoom);
                                this.setState({newItemRoom: {Building: '', Num: ''}});
                            }}>ADD</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Table celled structured>
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell rowSpan='1'>Id</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Num</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Building</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Change</Table.HeaderCell>
                            <Table.HeaderCell rowSpan='1'>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.state.rooms.map((room, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell textAlign='center'>{room.RomPk}</Table.Cell>
                                    <Table.Cell textAlign='center'>{room.Num}</Table.Cell>
                                    <Table.Cell textAlign='center'>{room.Building}</Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        <Button positive type='button'
                                                onClick={() => this.setState({currentRoomChange: room})}>-</Button></Table.Cell>
                                    <Table.Cell textAlign='center'>
                                    <span className="delete-shadow" onClick={() => {
                                        this.removeRoom(room.RomPk)
                                    }}> {'🗑'}</span>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        )
                        }
                    </Table.Body>
                </Table>
                <Modal closeIcon onClose={this.closeModalChangeRoom} open={!!currentRoomChange}>
                    <Header icon='archive' content='Change Room'/>
                    <Modal.Content>
                        <Form>
                            <Form.Input
                                label='Num'
                                type='number' min="1"
                                value={this.state.newItemChangeRoom.Num}
                                onChange={i =>
                                    this.setState({
                                            newItemChangeRoom: {
                                                ...this.state.newItemChangeRoom,
                                                Num: i.target.value
                                            }
                                        }
                                    )
                                }
                            />
                            <Form.Input
                                label='Building'
                                type='text'
                                value={this.state.newItemChangeRoom.Building}
                                onChange={i =>
                                    this.setState({
                                            newItemChangeRoom: {
                                                ...this.state.newItemChangeRoom,
                                                Building: i.target.value
                                            }
                                        }
                                    )
                                }
                            />
                            <Button type='button' positive onClick={() => {
                                this.setState({
                                        newItemChangeRoom: {
                                            ...this.state.newItemChangeRoom,
                                            RomPk: this.state.currentRoomChange.RomPk
                                        }
                                    }, () => {
                                        this.changeRoom(this.state.newItemChangeRoom),
                                            this.closeModalChangeRoom()
                                        this.setState({
                                                newItemChangeRoom: {
                                                    Num: '',
                                                    Building: '',
                                                    RomPk: ''
                                                }
                                            }
                                        );
                                    }
                                );


                            }}>Save</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}
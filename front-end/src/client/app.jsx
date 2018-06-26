import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Menu , Label} from 'semantic-ui-react'
import './app.scss';
import {Lecture} from "ui/TaskList/Lecture";
import {Departament} from "ui/TaskList/Departament";
import {Room} from "ui/TaskList/Room";
import {Subject} from "ui/TaskList/Subject";
import {Group} from "ui/TaskList/Group";
import {Teacher} from "ui/TaskList/Teacher";
import DepartamentWithRedux from "./ui/TaskList/DepartamentWithRedux";
import GroupWithRedux from "./ui/TaskList/GroupWithRedux";
import TeacherWithRedux from "./ui/TaskList/TeacherWithRedux";
import RoomWithRedux from "./ui/TaskList/RoomWithRedux";
import SubjectWithRedux from "./ui/TaskList/SubjectWithRedux";
import LectureWithRedux from "./ui/TaskList/LectureWithRedux";
export default () => {
    return (
        /*<div>
            <div align="center" className='header'>
                  <Label size="big">Departament</Label>
            </div>
            <DepartamentWithRedux />
            <GroupWithRedux />
            <TeacherWithRedux />
            <RoomWithRedux />
            <SubjectWithRedux />
        </div>*/

       <Router>
            <div>
                <Menu>
                    <Menu.Item as={Link} to='/departament'>
                        Departament
                    </Menu.Item>
                    <Menu.Item as={Link} to='/group'>
                        Group
                    </Menu.Item>
                    <Menu.Item as={Link} to='/teacher'>
                        Teacher
                    </Menu.Item>
                    <Menu.Item as={Link} to='/room'>
                        Room
                    </Menu.Item>
                    <Menu.Item as={Link} to='/subject'>
                        Subject
                    </Menu.Item>
                    <Menu.Item as={Link} to='/lecture'>
                        Lecture
                    </Menu.Item>
                </Menu>

                <Route exact path="/departament" component={DepartamentWithRedux}/>
                <Route exact path="/group" component={GroupWithRedux}/>
                <Route exact path="/teacher" component={TeacherWithRedux}/>
                <Route exact path="/room" component={RoomWithRedux}/>
                <Route exact path="/subject" component={SubjectWithRedux}/>
                <Route exact path="/lecture" component={LectureWithRedux}/>
            </div>
        </Router>

    );
}
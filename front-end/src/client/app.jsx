import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import './app.scss';
import {Lecture} from "ui/TaskList/Lecture";
import {Departament} from "ui/TaskList/Departament";
import {Room} from "ui/TaskList/Room";
import {Subject} from "ui/TaskList/Subject";
import {Group} from "ui/TaskList/Group";
import {Teacher} from "ui/TaskList/Teacher";

export default () => {
    return (
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

                <Route exact path="/departament" component={Departament}/>
                <Route exact path="/group" component={Group}/>
                <Route exact path="/teacher" component={Teacher}/>
                <Route exact path="/room" component={Room}/>
                <Route exact path="/subject" component={Subject}/>
                <Route exact path="/lecture" component={Lecture}/>
            </div>
        </Router>
        // <div>
        //     <div align="center" className='header'>
        //       {/*  <Label size="big">Departament</Label>*/}
        //     </div>
        //     <TaskList />
        // </div>
    );
}
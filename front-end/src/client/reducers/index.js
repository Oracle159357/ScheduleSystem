import { combineReducers} from 'redux'
import {departaments} from './departaments';
//import { routerReducer } from 'react-router-redux';
import {groups} from "./groups";
import {teachers} from "./teacher";
import { rooms} from "./room";
import { subjects} from "./subject";
import {lectures} from "./lecture";

export default combineReducers({
    //  routing: routerReducer,
    departaments, groups , teachers , rooms, subjects , lectures

});

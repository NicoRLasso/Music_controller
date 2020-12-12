import React,{ Component } from "react";
import { render } from "react-dom";
import RoomJoinPage from "./RoomJoinPage";
import CreateroomPage from "./CreateRoomPage";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


export default class HomePage extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return <Router>
            <Switch>
                 <Route exact path='/'><p> this is the home page</p></Route>
                 <Route path='/join' component={RoomJoinPage}/>
                 <Route path='/create' component={CreateroomPage}/>
            </Switch>
        </Router>;
    }
}

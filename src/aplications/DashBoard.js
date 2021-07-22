import React, { useState } from 'react'
import {
    BrowserRouter as Router
} from "react-router-dom";
import { Redirect } from 'react-router-dom'
import DashBoardMax from './DashboardMax'

export default function DashBoard(props) {
const [mini, setMini] = useState(true)
    function logout() {
        props.setUserID(null)
        return (<Redirect to='/account' />);
    }

    return (<Router>
        <Redirect to='/account' />
        {mini ? <div className="accountBox" id="acc-dash">
            < div className="wlcLogin">
                <h3 className="img">{props.userName[0]}</h3>
                <p>{props.userName}</p>
                <p>{props.userMail}</p>
                <button type="button" className="btn" onClick={()=>{setMini(false)}}>Dash Board</button>
                <button type="button" className="btn" onClick={logout}>LogOut</button>
            </div>
        </div>
            : <DashBoardMax close={props.close} ID={props.userID} userName={props.userName} userMail={props.userMail} logout={logout} />}
    </Router>)
}

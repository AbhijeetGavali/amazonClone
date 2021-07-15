import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Redirect } from 'react-router-dom'
import TrackOrder from './TrackOrder'

import UserDetails from './UserDetails';

export default function DashboardMax(props) {

    function Profile(params) {

        const [paymentDetail, setPaymentDetail] = useState(false)
        const [shippingDetail, setShippingDetail] = useState(false)
        

        return (<div id="userProfile">
            <div id="sideBar1">
                <h4 onClick={() => { setPaymentDetail(false); setShippingDetail(false) }} >User Detail</h4>
                <h4 onClick={() => { setShippingDetail(true) }}>Shipping Details</h4>
                <h4 onClick={() => { setPaymentDetail(true); setShippingDetail(false) }}>Payment Details</h4>
            </div>
            <div id="mainUserBody">
                {shippingDetail ?
                    <div className="shippingDetails"></div>
                    : paymentDetail ?
                        <div className="paymentDetail"></div>
                        : <UserDetails props={props} />
                }
            </div>
        </div >);
    }


    return (<Router>
        <Redirect to='/account/Dashboard' />
        <div className="accountBox" id="userDashboard">
            <div id="sideBar">
                <div className="i-l"><h3 className="img" onClick={() => { props.close(false) }} >{props.userName[0]}</h3></div>
                <Link className="i-1" to="/account/Dashboard">Profile</Link>
                <Link className="i-1" to="/account/Dashboard/Track-order">Track order</Link>
                <p className="i-1" onClick={() => { props.logout() }} ><i className="fas fa-sign-out-alt" /> LogOut</p>
            </div>
            <Switch>
                <Route exact path="/account/Dashboard"><Profile /></Route>
                <Route path="/account/Dashboard/Track-order"><TrackOrder /></Route>
            </Switch>
        </div>
    </Router>)
};
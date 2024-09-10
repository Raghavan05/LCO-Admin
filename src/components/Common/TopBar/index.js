import React from 'react'
import "./topbar.scss";
import user from "../../../assets/img/user.jpeg"

import Badge from 'react-bootstrap/Badge';

const Index = () => {
    return (
        <div className='topbar--desktop container-fluid'>
            <div className="topbar--desktop__rightSec">
                <div className="topbar-widgetSec">
                    <div className="topbar-widgetSec__widget">
                       <i className="bi bi-bell"></i>
                        <div className='counterPill'></div>
                    </div>
                </div>
                <div className="topbar-user">
                    <div className="topbar-user__profileImg">
                        <img src={user} alt="profile" className='topbar-user__profileImg--image'/>
                    </div>
                    <div className="topbar-user__profileInfo">
                        <h5 className='topbar-user__profileInfo--title'>
                            John Doe
                        </h5>
                        <p className='topbar-user__profileInfo--para'>Admin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
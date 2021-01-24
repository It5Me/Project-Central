import React from 'react'
import './Notification.css'
const Notification = (props) =>{
    return(
        <div className= "section">
            <div className = "card z-depth-0 contentnotification">
                <span className = "card-title  ">Notifications</span>
                <ul className="notifications textnotification">
                    <div className="notification">
                    <li>Notification</li>
                    <li>Notification</li>
                    <li>Notification</li>
                    <li>Notification</li>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default Notification
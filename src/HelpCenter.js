import React from 'react';
import './App.css';

function HelpCenter() {
    return (
        <div className="HelpCenter">
            <h1 className="Contact">Contact us</h1>
            <h2 className="Hy">How can we help you?</h2>
            <ul>
                <li className="list">I need login and account supoort </li><br></br>
                <li className="list"> I want to report abusive behavior or senstive content</li><br></br>
                <li className="list">I want to report an intellectual property issue</li><br></br>
                <li className="list">View all support topics</li><br></br>
                <li><button>Button</button></li><br></br>
            </ul>
        </div >
    );
}
export default HelpCenter;
import React from 'react';
import '../index.css'

function Action_bar() {
    return (
        <div className='action_bar'>
            <div className='action_container'>
                <div className='action_title_ctnr'>
                    <div className='action_title'>世壯運場館資訊站</div>
                </div>
                <ul className='action_nav_ctnr'>
                    <li style={{ display: "inline" }}><a className='action_nav_btn'>Court</a></li>
                    <li style={{ display: "inline" }}><a className='action_nav_btn'>Info</a></li>
                    <li style={{ display: "inline" }}><a className='action_nav_btn'>About</a></li>
                </ul>
            </div>
        </div >
    )
}

export default Action_bar


// const action_bar = props => (
//
// );

// export default action_bar;

// import React, { Component } from 'react';
// export default class Action_bar extends Component {
//     render() {
//         return (
//             <h1>AIoT 人流系統</h1>
//         )
//     }
// }

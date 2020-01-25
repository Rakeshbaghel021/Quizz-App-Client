import React from 'react';
import {Link} from "react-router-dom";
export default function Header(){
    return (
        <div>
            <div className="wrapper">
                <div className="header">
                    <h1 className="logo">Quizz App</h1>
                </div>
                <div className="header-right">
                    <nav>
                         <Link to="/signup"className="sign" >Sign up</Link>
                         <Link to="/signin"className="login" >Sign in</Link>
                    </nav>
                
                </div>
            </div>
        </div>
    )
}
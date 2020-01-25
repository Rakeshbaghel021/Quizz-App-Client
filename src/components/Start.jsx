import React from "react";
import Header from './Header';

export default function Home(){
    return (
        <div>
            <Header/>
            <div className="hero">
                <h2 className="hero-head">Want to create a quizz test...???</h2>
                <button className="btn1">Start quizz</button>
                <div className="right-hero">
                    <img className="img1" src="start.svg" alt=""/>
                </div>
            </div>
            <div className="foot">
            <p className="text-footer">Copyright © 2019-2020. All Rights Reserved. <a href="altcampus.io" target="_blank">altcampus</a></p>
            </div>
        </div>
    )
}
import React from "react";
import "./Header.css";
function Header(){
    return (
        <header classname="header">
            <div>
                <h1>Data Science Dashboard</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </div>

        </header>
    );
}
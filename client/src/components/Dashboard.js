import React from 'react';
import { Link } from 'react-router-dom';
import editImage from '../images/edit.png';
import "../app.css";

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div>
            <Link to="/surveys/new">
            <button id="fixed-button"><img src={editImage} /></button>
            </Link>
            </div>
        </div>
    )
}

export default Dashboard;
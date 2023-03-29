import React from 'react';
import { Link } from 'react-router-dom';
import editImage from '../images/edit.png';
<<<<<<< HEAD
import "../app.css";
=======
import "../App.css";
>>>>>>> 2a0a9647e1aba31d698beb4c036459602a716b9f

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
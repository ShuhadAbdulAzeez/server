import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList'
import editImage from '../images/edit.png';
import "../App.css";

const Dashboard = () => {
    return (
        <div>
            <SurveyList />
            <div>
            <Link to="/surveys/new">
            <button id="fixed-button"><img src={editImage} /></button>
            </Link>
            </div>
        </div>
    )
}

export default Dashboard;
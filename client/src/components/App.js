import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../app.css';

import Header from './Header';

const Landing = () => <h1>Landing</h1>;
const Dashboard = () => <h1>Dashboard</h1>;
const SurveysNew = () => <h1>Surveys</h1>;

const App = () => {
    return(
        <div>
            <BrowserRouter>
            <div className='container'>
                <Header />
                <Route exact path="/" component={Landing} />
                <Route exact path="/surveys" component={Dashboard} />
                <Route path="/surveys/new" component={SurveysNew} />
            </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        //return this.props.surveys.map(survey => {
            return (
                <div className="cards">
                <div className="card">
                    <h1>Title</h1> 
	                <span>Body</span>
	                <p>Sent On:</p>
	                <a>Yes: 0</a>
	                <a>No: 0</a>
                </div>
                </div>
            )
        //})
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        )
    }
}

function mapStateToProps({ surveys }) {
    return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);


// {new Date(survey.dateSent).toLocalDateString()}
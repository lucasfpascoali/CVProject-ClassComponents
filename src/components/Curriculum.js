import React from "react";
import '../styles/curriculum.css';


class Curriculum extends React.Component {
    render() {
        const fields = this.props.fields;

        return (
            <div id="curriculum-body">
                <header>
                    <h2>{fields.firstName} {fields.lastName}</h2>
                    <p>E-mail: {fields.email}</p>
                    <p>Phone Number: {fields.phoneNumber}</p>
                </header>
                <div className="section">
                    <p>School Name: {fields.schoolName}</p>
                    <p>Title of Study: {fields.studyTitle}</p>
                    <p>Date of Study: {fields.studyDateFrom} - {fields.studyDateTo}</p>
                </div>
                <div className="section">
                    <p>Company Name: {fields.companyName}</p>
                    <p>Position Title: {fields.positionTitle}</p>
                    <h4>Mains Tasks</h4>
                    <ul>
                        {fields.mainTasks.map(task => <li>{task}</li>)}
                    </ul>
                    <p>Date of Work: {fields.workDateFrom} - {fields.workDateTo}</p>
                </div>
                <form onSubmit={this.props.onSubmitButton}>
                    <input type='submit' value='Edit' />
                </form>
            </div>
        );
    }
}

export default Curriculum;
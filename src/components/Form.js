import React from "react";
import Fieldset from "./Fieldset";

class Form extends React.Component {
    render() {
        const generalInfo = [
            { name: 'firstName', type: 'text' }, { name: 'lastName', type: 'text' },
            { name: 'email', type: 'email' }, { name: 'phoneNumber', type: 'text' }
        ];

        const educationalExperience = [
            { name: 'schoolName', type: 'text' }, { name: 'studyTitle', type: 'text' },
            { name: 'studyDateFrom', type: 'date' }, { name: 'studyDateTo', type: 'date' }
        ];

        const praticalExperience = [
            { name: 'companyName', type: 'text' }, { name: 'positionTitle', type: 'text' },
            { name: 'mainTasks', type: 'text' }, { name: 'workDateFrom', type: 'date' },
            { name: 'workDateTo', type: 'date' }
        ];

        return (
            <form onSubmit={this.props.onSubmit}>
                <Fieldset legend='General Info' inputFields={generalInfo} handleChange={this.props.handleChange} />
                <Fieldset legend='Educational Experience' inputFields={educationalExperience} handleChange={this.props.handleChange} />
                <Fieldset legend='Pratical Experience' inputFields={praticalExperience} handleChange={this.props.handleChange} />
                <input type='submit' name="Submit" />
            </form>
        );
    }
}

export default Form;
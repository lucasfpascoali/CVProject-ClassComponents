import React from "react";
import Form from "./components/Form";
import Curriculum from "./components/Curriculum";
import './styles/app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      renderCurriculum: false,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      schoolName: '',
      studyTitle: '',
      studyDateFrom: undefined,
      studyDateTo: undefined,
      companyName: '',
      positionTitle: '',
      mainTasks: [],
      workDateFrom: undefined,
      workDateTo: undefined,
    }
  }

  handleChange = (e) => {
    if (e.target.name === 'mainTasks') {
      this.setState({ mainTasks: e.target.value.split(', ') });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  onSubmitButton = (e) => {
    e.preventDefault();
    this.setState({ renderCurriculum: !this.setState.renderCurriculum });
  }

  render() {
    return (
      <div className="app">
        {this.state.renderCurriculum ? <Curriculum fields={this.state} /> : <Form onSubmit={this.onSubmitButton} handleChange={this.handleChange} />}
      </div>
    )
  }
}


export default App;

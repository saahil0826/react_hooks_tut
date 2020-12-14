import React, {Component} from 'react';

class SimpleFormClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleChange=this.handleChange.bind(this);
}

handleChange(event){
  this.setState({ [event.target.name]: event.target.value });
}

  render() {
    return (
      <div>
      <h1>Form example with class</h1>
      <p>you entered {this.state.email}</p>
      <input
            type="text"
            id="email"
            onChange={this.handleChange}
            name="email"
            value={this.state.email}
          />
      </div>
    );
  }
}


export default SimpleFormClass;

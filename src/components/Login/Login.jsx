import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const url = 'http://localhost:8000/users/';
    axios.post(url, this.state)
      .then((res) => res.data)
      .catch = () => {
        alert(`Vos informations sont incorrectes`);
      };
  }

  render() {
    return (
      <div className="loginDiv">
        <h1>Connexion utilisateur</h1>
        <form>
          <div>
            <label htmlFor="user">username</label>
            <input type="text" id="user" name="username" onChange={this.onChange} value={this.state.username} />
            <label htmlFor="user">password</label>
            <input type="text" id="user" name="password" onChange={this.onChange} value={this.state.password} />
            <input type="submit" value="Connexion" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

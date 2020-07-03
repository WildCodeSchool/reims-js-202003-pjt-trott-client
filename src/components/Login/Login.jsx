import React from 'react';
import axios from 'axios';
import './Login.css';

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
    const url = 'http://localhost:8000/login';
    axios.post(url, this.state)
      .then((res) => res.data)
      .catch(() => {
        alert('Vos informations sont incorrectes');
      });
  }

  render() {
    return (
      <div className="loginDiv">
        <div>
          <img
            src="https://cdn.discordapp.com/attachments/714501146701463636/720283550003363880/TROTT.png"
            className="logo"
            alt="logo"
          />
        </div>

        <h1 className="title">Connexion utilisateur</h1>
        <form>
          <div className="inputDiv">
            <label className="label" htmlFor="user">username</label>
            <input className="input" type="text" id="user" name="username" onChange={this.onChange} value={this.state.username} />
          </div>
          <div className="inputDiv">
            <label className="label" htmlFor="user">password</label>
            <input className="input" type="password" id="user" name="password" onChange={this.onChange} value={this.state.password} />
          </div>
          <div>
            <input className="connexionInput" type="submit" value="Connexion" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
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
    const url = 'http://localhost:8000/api/register';
    axios.post(url, this.state)
      .then(res => res.data)
      .then(res => {
        console.log(res.data);
        alert(`Vous vous êtes bien enregistré`);
      })
      .catch(event => {
        console.error(event);
        alert('Erreur lors de l\'inscription, veuillez réessayer');
      });
  }

  render() {
    return (
      <div className="body_register">
        <h1>Ajout d'un nouvel utilisateur</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Vos Informations</legend>
            <div>
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={this.onChange}
                value={this.state.username}
              />
            </div>

            <div>
              <label htmlFor="email">Adresse Email</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                onChange={this.onChange}
                value={this.state.password}
              />
            </div>

            <hr />

            <div>
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Register;

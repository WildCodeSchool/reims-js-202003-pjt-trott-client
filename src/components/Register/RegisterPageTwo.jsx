import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class RegisterPageTwo extends React.Component {
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
    const url = 'http://localhost:8000/register';
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
        <img
          src="https://cdn.discordapp.com/attachments/714501146701463636/720283550003363880/TROTT.png"
          className="logo"
          alt="logo"
        />

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Par email</legend>
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
                type="password"
                id="password"
                name="password"
                onChange={this.onChange}
                value={this.state.password}
              />
            </div>

            <hr />

            <div>
              <input className="link_as_button" type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>

        <div className="Other_Connect">
          <Link className="link_as_button_Transparent" to="/register?step=3">Autre moyen de Connexion</Link>
          <div>
            <Link className="Without_Connect" to="/trott">Continuez sans se connecter</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPageTwo;

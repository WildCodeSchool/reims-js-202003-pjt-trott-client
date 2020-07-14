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
      sponshorship: '',
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
      <div className="bg_register bg_regPageTwo">
        <img
          src="https://cdn.discordapp.com/attachments/714501146701463636/720283550003363880/TROTT.png"
          className="logoTrott"
          alt="logo"
        />

        <form onSubmit={this.submitForm} className="block_form">
          <fieldset className="block_fieldset">
            <legend>Par email</legend>
            <div className="form_container">
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={this.onChange}
                value={this.state.username}
              />

              <label htmlFor="email">Adresse Email</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={this.onChange}
                value={this.state.email}
              />

              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={this.onChange}
                value={this.state.password}
              />
              <label htmlFor="sponsorship">Code Parrainage</label>
              <input
                type="text"
                id="sponshorship"
                name="sponsorship"
                onChange={this.onChange}
                value={this.state.sponsorship}
              />
              <input className="link_submitButton" type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
        <Link className="link_otherConnect" to="/register?step=3">Autres moyens de connexion</Link>
        <Link className="Without_Connect" to="/trott">Continuez sans se connecter</Link>
      </div>
    );
  }
}

export default RegisterPageTwo;

import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStatetoProps = (state) => ({
  token: state.token,
});

const LoginContainer = ({ dispatch }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onChangeUsername = (e) => {
    setUsername(
      e.target.value,
    );
  };

  const onChangePassword = (e) => {
    setPassword(
      e.target.value,
    );
  };

  function submitForm(e) {
    e.preventDefault();
    const url = 'http://localhost:8000/auth/login';
    axios.post(url, { username, password })
      .then((res) => res.data)
      .then((res) => {
        dispatch({
          type: 'CHANGE_TOKEN',
          newToken: res.token,
        });
        history.push('/trott');
      })
      .catch(() => {
        alert('Vos informations sont incorrectes');
      });
  }

  return (
    <div className="bg_login">
      <div>
        <img
          src="https://cdn.discordapp.com/attachments/714501146701463636/720283550003363880/TROTT.png"
          className="logoTrott"
          alt="logo"
        />
      </div>
      <form onSubmit={submitForm} className="block_form">
        <fieldset className="block_fieldset">
          <legend>Connexion</legend>
          <div className="form_container">
            <label className="label" htmlFor="user">Nom d'utilisateur</label>
            <input
              className="input"
              type="text"
              id="user"
              name="username"
              onChange={onChangeUsername}
              value={username}
            />
            <label className="label" htmlFor="user">Mot de Passe</label>
            <input
              className="input"
              type="password"
              id="user"
              name="password"
              onChange={onChangePassword}
              value={password}
            />
            <input className="link_submitButton" type="submit" value="connexion" />
          </div>
        </fieldset>
      </form>

      <Link className="link_otherConnect" to="/register?step=3">autres moyens de connexion</Link>
      <Link className="Without_Connect" to="/trott">continuez sans se connecter</Link>
    </div>
  );
};

const Login = connect(mapStatetoProps)(LoginContainer);
export default Login;

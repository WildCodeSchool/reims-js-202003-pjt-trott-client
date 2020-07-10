import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeToken } from '../../redux/tasks';

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
        dispatch(changeToken(res.token));
        history.push('/trott');
      })
      .catch(() => {
        alert('Vos informations sont incorrectes');
      });
  }

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
      <form onSubmit={submitForm}>
        <div className="inputDiv">
          <label className="label" htmlFor="user">username</label>
          <input className="input" type="text" id="user" name="username" onChange={onChangeUsername} value={username} />
        </div>
        <div className="inputDiv">
          <label className="label" htmlFor="user">password</label>
          <input className="input" type="password" id="user" name="password" onChange={onChangePassword} value={password} />
        </div>
        <div>
          <input className="connexionInput" type="submit" value="Connexion" />
        </div>
      </form>
    </div>
  );
};

const Login = connect()(LoginContainer);
export default Login;

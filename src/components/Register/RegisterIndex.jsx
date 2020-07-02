import React from 'react';
import { useLocation } from 'react-router-dom';

import RegisterPageOne from './RegisterPageOne';
import RegisterPageTwo from './RegisterPageTwo';
import RegisterPageTwoBis from './RegisterPageTwoBis';
import RegisterByPhone from './RegisterByPhone';
import RegisterByPhoneBis from './RegisterByPhoneBis';

import './register.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function RegisterIndex() {
  let query = useQuery();
  let step = parseInt(query.get("step"));
  if (isNaN(step)) {
    step = 1;
  }

  switch (step) {
    case 1:
      return (
        <RegisterPageOne />
      );
    case 2:
      return (
        <RegisterPageTwo />
      );
    case 3:
      return (
        <RegisterPageTwoBis />
      );
    case 4:
      return (
        <RegisterByPhone />
      );
    case 5:
      return (
        <RegisterByPhoneBis />
      );
    default:
      return (
        <div><h1>problem</h1></div>
      );
  }
}

export default RegisterIndex;

import React from 'react';
import StartCreate from './StartCreate';
import Form from '../Form/Form';
import SmsVerif from '../SmsVerif/SmsVerif';
import { useLocation } from 'react-router-dom';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function RegisterForm() {
  let query = useQuery();
  let step = parseInt(query.get("step"));
  if (isNaN(step)) {
    step = 1;
  }

  switch (step) {
    case 1:
      return (
        <StartCreate />
      );
    case 2:
      return (
        <Form />
      );
    case 3:
      return (
        <SmsVerif />
      );
    default:
      return (
        <div><h1>problem</h1></div>
      );
  }
}

export default RegisterForm;
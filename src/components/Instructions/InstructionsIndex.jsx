import React from 'react';
import { useLocation } from 'react-router-dom';

import InstruPageOne from './InstruPageOne';
import InstruPageTwo from './InstruPageTwo';

import './instructions.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function InstructionsIndex() {
  const query = useQuery();
  let page = parseInt(query.get('page'));
  if (isNaN(page)) {
    page = 1;
  }

  switch (page) {
    case 1:
      return (
        <InstruPageOne />
      );
    case 2:
      return (
        <InstruPageTwo />
      );
    default:
      return (
        <div><h1>problem</h1></div>
      );
  }
}

export default InstructionsIndex;

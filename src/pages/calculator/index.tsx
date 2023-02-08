import React from 'react';

import Total from '../../components/Calculator/Total';
import Digits from '../../components/Calculator/Digits';
import Modifier from '../../components/Calculator/Modifier';
import Operations from '../../components/Calculator/Operations';

const index = () => {
  return (
    <div className="calculator">
      <Total />
      <Digits />
      <Modifier />
      <Operations />
    </div>
  );
};

export default index;

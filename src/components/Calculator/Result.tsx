import React, { useEffect, useState } from 'react';

type ResultProps = {
  value: string;
};

export const Result = ({ value }: ResultProps) => {
  return <h1 id="total">{value}</h1>;
};

export default Result;

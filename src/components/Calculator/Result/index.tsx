import React, { useEffect, useState } from 'react';

type ResultProps = {
    onResultInput: string;
};

export const Result = ({ onResultInput }: ResultProps) => {
    return <h1 id="total">{onResultInput}</h1>;
};

export default Result;

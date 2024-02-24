import React from 'react';

export default function Display({ view }: { view: string }) {
  return <h1 id="total">{view}</h1>;
}

import React from 'react';
import Error from '../src/components/Error';

export default function Error500() {
  return <Error error={500} msg="Quiz não encontrado :(" />;
}

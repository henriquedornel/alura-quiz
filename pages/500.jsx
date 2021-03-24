import React from 'react';
import ErrorScreen from '../src/screens/Error';

export default function Error500() {
  return <ErrorScreen error={500} msg="Quiz não encontrado :(" />;
}

import React from 'react';
import ErrorScreen from '../src/screens/Error';

export default function Error404() {
  return <ErrorScreen error={404} msg="Página não encontrada :(" />;
}

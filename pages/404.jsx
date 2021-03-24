import React from 'react';
import Error from '../src/components/Error';

export default function Error404() {
  return <Error error={404} msg="Página não encontrada :(" />;
}

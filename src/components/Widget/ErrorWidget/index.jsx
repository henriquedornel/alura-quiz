import React from 'react';

import Widget from '../index';
import Link from '../../Link';

export default function ErrorWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h3>Uops!!</h3>
      </Widget.Header>
      <Widget.Content>
        <p>Looks like there&apos;s no questions on this Quiz.</p>
        <p>Try again later!</p>
        <p><Link href="/">Click here to Restart</Link></p>
      </Widget.Content>
    </Widget>
  );
}

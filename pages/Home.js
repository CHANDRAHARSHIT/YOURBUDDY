import React from 'react';
import { Logo } from '../branding';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <Logo />
      <h2>Welcome to YOUR BUDDY</h2>
      <p>A student platform to share and access PYQs, notes, and study resources.</p>
    </div>
  );
}

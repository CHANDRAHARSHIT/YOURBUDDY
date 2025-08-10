// Simple logo/icon for YOUR BUDDY
import React from 'react';

export function Logo() {
  return (
    <div style={{ fontWeight: 'bold', fontSize: 28, color: '#2d7cff', display: 'flex', alignItems: 'center' }}>
      <span role="img" aria-label="buddy" style={{ marginRight: 8 }}>🤝</span>
      YOUR BUDDY
    </div>
  );
}

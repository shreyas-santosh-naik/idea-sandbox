// filepath: c:\Work\idea-sandbox\idea-sandbox-app\src\components\Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="app-header">
      <h1 className="app-title">Idea Sandbox</h1>
      <nav className="app-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/submit">Submit Idea</a></li>
          <li><a href="/history">Idea History</a></li>
        </ul>
      </nav>
    </header>
  );
}
// filepath: c:\Work\idea-sandbox\idea-sandbox-app\src\components\Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Idea Sandbox. All rights reserved.</p>
      </div>
    </footer>
  );
}
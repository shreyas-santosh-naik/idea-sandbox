// filepath: c:\Work\idea-sandbox\idea-sandbox-app\src\pages\SubmitIdea.jsx
import React, { useState } from 'react';

export default function SubmitIdea() {
  const [idea, setIdea] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newIdea = { content: idea };

    await fetch('http://localhost:5000/ideas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newIdea),
    });

    setIdea('');
    // Optionally navigate to success page or show a success message
  };

  return (
    <div className="submit-idea-page">
      <h2>Submit Your Idea</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Describe your idea here..."
          required
        />
        <button type="submit" className="btn btn-primary">Submit Idea</button>
      </form>
    </div>
  );
}
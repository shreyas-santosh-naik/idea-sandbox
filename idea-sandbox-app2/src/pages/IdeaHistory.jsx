import React, { useEffect, useState } from 'react';

export default function IdeaHistory() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const response = await fetch('http://localhost:5000/ideas');
      const data = await response.json();
      setIdeas(data);
    };

    fetchIdeas();
  }, []);

  return (
    <div className="idea-history">
      <h2 className="section-title">Submitted Ideas</h2>
      {ideas.length === 0 ? (
        <p>No ideas submitted yet.</p>
      ) : (
        <ul>
          {ideas.map((idea) => (
            <li key={idea.id}>{idea.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
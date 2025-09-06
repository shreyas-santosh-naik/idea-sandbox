import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js';
import { getFirestore, collection, query, where, onSnapshot } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js';
import { getAuth, onAuthStateChanged, signInAnonymously } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js';

export default function Submissions() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Firebase initialization
    const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;

    if (!firebaseConfig) {
      setError("Firebase config is not available.");
      setLoading(false);
      return;
    }

    try {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const auth = getAuth(app);

      const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          // Sign in anonymously if no user is authenticated
          signInAnonymously(auth)
            .then((anonUser) => {
              setUserId(anonUser.user.uid);
            })
            .catch((authError) => {
              console.error("Anonymous sign-in failed", authError);
              setError("Failed to authenticate user.");
              setLoading(false);
            });
        }
      });

      return () => unsubscribeAuth();
    } catch (err) {
      console.error("Firebase initialization failed:", err);
      setError("Failed to initialize Firebase.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      try {
        const db = getFirestore();
        const ideasCollection = collection(db, 'ideas');
        const userIdeasQuery = query(ideasCollection, where('userId', '==', userId));

        const unsubscribeSnapshot = onSnapshot(userIdeasQuery, (snapshot) => {
          const fetchedIdeas = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setIdeas(fetchedIdeas);
          setLoading(false);
        }, (error) => {
          console.error("Failed to fetch ideas:", error);
          setError("Failed to fetch your ideas. Please try again later.");
          setLoading(false);
        });

        return () => unsubscribeSnapshot();
      } catch (err) {
        console.error("Firestore data fetch failed:", err);
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    }
  }, [userId]);

  return (
    <>
      <Header />
      <section className="submissions-history section-padding">
        <div className="container">
          <div className="glass-card">
            <h2 className="section-title">My Submitted Ideas</h2>
            {loading && <p>Loading your ideas...</p>}
            {error && <p className="error-message">{error}</p>}
            {!loading && ideas.length === 0 && !error && (
              <p>You haven't submitted any ideas yet. <a href="/submit">Submit your first idea!</a></p>
            )}
            <div className="idea-list">
              {ideas.map((idea) => (
                <div key={idea.id} className="idea-card">
                  <h3>{idea.title}</h3>
                  <p>{idea.description}</p>
                  <div className="tags">
                    {idea.tags && idea.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <small>Submitted on: {new Date(idea.createdAt.seconds * 1000).toLocaleDateString()}</small>
                  <small>User ID: {userId}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js';
import { getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js';

export default function SubmitIdea() {
  const [ideaTitle, setIdeaTitle] = useState('');
  const [ideaDescription, setIdeaDescription] = useState('');
  const [tags, setTags] = useState('');
  const [db, setDb] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [submissionError, setSubmissionError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : null;
      const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

      if (!firebaseConfig) {
        console.error("Firebase config is not available.");
        setSubmissionError("Firebase configuration is missing.");
        setIsLoading(false);
        return;
      }

      const app = initializeApp(firebaseConfig);
      const authInstance = getAuth(app);
      const dbInstance = getFirestore(app);
      setDb(dbInstance);

      const unsubscribe = onAuthStateChanged(authInstance, async (user) => {
        if (user) {
          setUserId(user.uid);
          setIsLoading(false);
        } else {
          try {
            if (initialAuthToken) {
              await signInWithCustomToken(authInstance, initialAuthToken);
            } else {
              await signInAnonymously(authInstance);
            }
          } catch (error) {
            console.error("Authentication failed:", error);
            setSubmissionError("Authentication failed. Please try again.");
            setIsLoading(false);
          }
        }
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Firebase initialization failed:", error);
      setSubmissionError("Failed to initialize Firebase.");
      setIsLoading(false);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmissionError(null);
    setIsLoading(true);

    try {
      const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
      const ideasCollectionPath = `artifacts/${appId}/users/${userId}/ideas`;

      // Navigate to the success page first to provide immediate feedback
      navigate('/success');

      // Attempt to submit the data to Firestore asynchronously
      const docRef = await addDoc(collection(db, ideasCollectionPath), {
        title: ideaTitle,
        description: ideaDescription,
        tags: tags.split(',').map(tag => tag.trim()),
        userId: userId,
        createdAt: new Date()
      });
      console.log('Idea submitted with ID:', docRef.id);
    } catch (e) {
      console.error("Error adding document. Full error details:", e);
      // If submission fails, navigate back to the form and show an error
      navigate('/submit-idea');
      setSubmissionError("Failed to submit idea. Please check your network connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <section className="idea-form section-padding">
          <div className="container">
            <div className="glass-card text-center">
              <h2 className="section-title">Submitting Your Idea...</h2>
              <p>Please wait a moment while we process your submission.</p>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="idea-form section-padding">
        <div className="container">
          <div className="glass-card">
            <h2 className="section-title">Submit Your Idea</h2>
            {submissionError && <div className="error-message p-4 mb-4 bg-red-800 rounded-md text-white">{submissionError}</div>}
            <div className="form-layout-container">
              <div className="form-content">
                <p className="form-description">
                  Share a clear title, detailed description, and tags to help others find your idea.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="ideaTitle">Idea Title</label>
                    <input
                      type="text"
                      id="ideaTitle"
                      placeholder="Concise title"
                      value={ideaTitle}
                      onChange={(e) => setIdeaTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ideaDescription">Description</label>
                    <textarea
                      id="ideaDescription"
                      rows="8"
                      placeholder="Describe your idea..."
                      value={ideaDescription}
                      onChange={(e) => setIdeaDescription(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="tags">Tags (comma separated)</label>
                    <input
                      type="text"
                      id="tags"
                      placeholder="e.g., productivity, hr, automation"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary form-submit-btn" disabled={!userId}>
                    Submit Idea
                  </button>
                </form>
              </div>
              <div className="form-tips">
                <h3>Tips for a great idea</h3>
                <ul>
                  <li>
                    <strong>Be specific:</strong> Clearly explain the problem you're solving.
                  </li>
                  <li>
                    <strong>Think impact:</strong> How will this benefit the company or employees?
                  </li>
                  <li>
                    <strong>Consider feasibility:</strong> Is your idea realistic and actionable?
                  </li>
                  <li>
                    <strong>Add details:</strong> The more context you provide, the better others can understand and build upon your idea.
                  </li>
                  <li>
                    <strong>Be open:</strong> Welcome feedback and collaboration from your colleagues.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
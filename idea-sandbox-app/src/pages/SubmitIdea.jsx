import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../main";

export default function SubmitIdea() {
  const [ideaTitle, setIdeaTitle] = useState("");
  const [ideaDescription, setIdeaDescription] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  // Temporary user ID for now, will be updated with actual authentication later
  const userId = "user_123";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Save to mock API (JSON Server)
      await fetch("http://localhost:5000/ideas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: ideaTitle,
          description: ideaDescription,
          tags: tags.split(",").map((tag) => tag.trim()),
          userId: userId,
          timestamp: new Date().toISOString(),
        }),
      });
      console.log("Idea submitted to mock API!");
    } catch (e) {
      console.error("Error adding idea to mock API: ", e);
    }
    navigate("/success");
  };

  return (
    <>
      <Header />
      <section className="idea-form section-padding">
        <div className="container">
          <div className="glass-card">
            <h2 className="section-title">Submit Your Idea</h2>
            <div className="form-layout-container">
              <div className="form-content">
                <p className="form-description">
                  Share a clear title, detailed description, and tags to help
                  others find your idea.
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
                  <button
                    type="submit"
                    className="btn btn-primary form-submit-btn"
                  >
                    Submit Idea
                  </button>
                </form>
              </div>
              <div className="form-tips">
                <h3>Tips for a great idea</h3>
                <ul>
                  <li>
                    <strong>Be specific:</strong> Clearly explain the problem
                    you're solving.
                  </li>
                  <li>
                    <strong>Think impact:</strong> How will this benefit the
                    company or employees?
                  </li>
                  <li>
                    <strong>Consider feasibility:</strong> Is your idea
                    realistic and actionable?
                  </li>
                  <li>
                    <strong>Add details:</strong> The more context you provide,
                    the better others can understand and build upon your idea.
                  </li>
                  <li>
                    <strong>Be open:</strong> Welcome feedback and collaboration
                    from your colleagues.
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

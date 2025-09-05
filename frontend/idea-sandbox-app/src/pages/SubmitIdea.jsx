import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function SubmitIdea() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Demo behaviour: show alert and reset
    alert("Thanks! Your idea was submitted (demo).\nTitle: " + title);
    console.log({ title, description, tags });
    setTitle("");
    setDescription("");
    setTags("");
  }

  return (
    <>
      <Header />
      <section className="idea-form">
        <div className="container form-layout-container">
          <div className="form-content">
            <h2 className="section-title">Submit Your Idea</h2>
            <p className="form-description">
              Share a clear title, detailed description, and tags to help others
              find your idea.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Idea Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Concise title"
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                  placeholder="Describe your idea..."
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label>Tags (comma separated)</label>
                <input
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="eg. productivity, hr, automation"
                />
              </div>
              <button type="submit" className="btn btn-primary form-submit-btn">
                Submit Idea
              </button>
            </form>
          </div>

          <aside className="form-tips">
            <h3>Tips for a good idea</h3>
            <ul>
              <li>Keep the title short and clear.</li>
              <li>Explain the problem and the proposed solution.</li>
              <li>Mention impact and effort estimates if possible.</li>
            </ul>
            <p style={{ marginTop: 20 }}>
              Or go <Link to="/">back to home</Link>.
            </p>
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
}

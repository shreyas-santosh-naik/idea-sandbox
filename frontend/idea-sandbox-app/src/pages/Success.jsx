import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Success() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="success-page flex items-center justify-center min-h-screen py-20">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="glass-card text-center p-8 md:p-12 shadow-lg rounded-3xl backdrop-filter backdrop-blur-md bg-white bg-opacity-10 border border-white border-opacity-20">
            <div className="flex justify-center mb-6">
              <svg className="h-20 w-20 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Idea Submitted!
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              We have received your idea. Thank you for your submission!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/dashboard')}
                className="btn-primary w-full md:w-auto px-6 py-3 rounded-xl transition-transform transform hover:scale-105"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() => navigate('/submit-idea')}
                className="btn-secondary w-full md:w-auto px-6 py-3 rounded-xl transition-transform transform hover:scale-105"
              >
                Submit Another Idea
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
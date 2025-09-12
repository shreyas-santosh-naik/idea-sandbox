import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import './styles.css';
import { AuthProvider } from './context/AuthContext.jsx'; // 1. Import AuthProvider


// 1. Firebase Imports
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// 2. Firebase Configuration (Replace with your actual config)
const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// 3. Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 2. Wrap the App component with AuthProvider */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
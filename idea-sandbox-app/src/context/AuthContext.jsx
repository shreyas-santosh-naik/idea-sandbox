import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext(null);

// Create the provider component
export function AuthProvider({ children }) {
  // 1. Initialize state from localStorage, or null if nothing is there
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('idea-sandbox-user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // This effect will run whenever the user state changes
  useEffect(() => {
    if (user) {
      // 2. If user exists, save it to localStorage
      localStorage.setItem('idea-sandbox-user', JSON.stringify(user));
    } else {
      // 3. If user is null (logged out), remove it from localStorage
      localStorage.removeItem('idea-sandbox-user');
    }
  }, [user]); // The effect depends on the user object

  const login = (email) => {
    let mockUser = {
      id: 'user_123',
      name: 'Shreyas',
      email: email,
      role: 'user',
    };
    
    if (email.toLowerCase() === 'admin@example.com') {
      mockUser.role = 'admin';
      mockUser.name = 'Admin User';
    }

    // Setting the user state will trigger the useEffect above to save it
    setUser(mockUser);
  };

  const logout = () => {
    // Setting the user to null will trigger the useEffect to remove it
    setUser(null);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook for easy access to the context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
import React, { useState } from 'react';
import AuthForm from './components/AuthForm';
import TodoList from './components/TodoList';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username: string, password: string) => {
    // Simple authentication for demo purposes
    if (username && password) {
      setIsAuthenticated(true);
    }
  };

  return (
    <div>
      {!isAuthenticated ? (
        <AuthForm onLogin={handleLogin} />
      ) : (
        <TodoList />
      )}
    </div>
  );
}

export default App;
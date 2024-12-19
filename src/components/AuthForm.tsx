import React, { useState } from 'react';
import { LogIn } from 'lucide-react';

interface AuthFormProps {
  onLogin: (username: string, password: string) => void;
}

export default function AuthForm({ onLogin }: AuthFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900" 
         style={{
           backgroundImage: 'url("https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2")', 
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl w-96 backdrop-blur-sm bg-opacity-90">
        <div className="flex items-center justify-center mb-6">
          <LogIn className="w-8 h-8 text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-100 ml-2">Command Center</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Access System
          </button>
        </form>
      </div>
    </div>
  );
}
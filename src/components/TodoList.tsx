import React, { useState } from 'react';
import { PlusCircle, X, CheckCircle2, Circle } from 'lucide-react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [bgImage, setBgImage] = useState('https://images.unsplash.com/photo-1507238691740-187a5b1d37b8');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo.trim(), completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleBgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim()) {
      setBgImage(e.target.value.trim());
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-cover bg-center bg-fixed"
         style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="max-w-md mx-auto">
        <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-t-lg p-6 shadow-xl">
          <h1 className="text-3xl font-bold text-gray-100 mb-6">Task Manager</h1>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Background URL
            </label>
            <input
              type="text"
              value={bgImage}
              onChange={handleBgChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100"
              placeholder="Enter image URL"
            />
          </div>

          <form onSubmit={addTodo} className="flex gap-2 mb-6">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="flex-1 px-3 py-2 bg-gray-700 border-b-2 border-gray-600 focus:border-blue-500 outline-none text-gray-100"
              placeholder="Add new task..."
            />
            <button
              type="submit"
              className="p-2 text-blue-500 hover:text-blue-400"
            >
              <PlusCircle className="w-6 h-6" />
            </button>
          </form>
        </div>

        <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-b-lg shadow-xl">
          <ul className="divide-y divide-gray-700">
            {todos.map(todo => (
              <li key={todo.id} className="flex items-center p-4 hover:bg-gray-700 group">
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className="p-1 text-gray-400 hover:text-blue-500"
                >
                  {todo.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </button>
                <span className={`flex-1 mx-4 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-100'}`}>
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="p-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-5 h-5" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
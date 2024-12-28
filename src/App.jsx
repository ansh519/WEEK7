import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import React, { lazy, Suspense } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        LANDING
      </button>

      <button
        onClick={() => {
          navigate('/dashboard');
        }}
      >
        DASHBOARD
      </button>
    </div>
  );
}

export default App;

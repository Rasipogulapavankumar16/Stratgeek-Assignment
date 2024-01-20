// frontend/src/App.js

import React from 'react';
import Dashboard from './components/Dashboard';
import './styles/styles.css'; // Import your styles

function App() {
    return (
        <div className="container">
            <h1>GitHub Contributions Dashboard</h1>
            <Dashboard />
        </div>
    );
}

export default App;


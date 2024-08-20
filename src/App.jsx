import React from 'react';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <h1>Welcome to the App</h1>
            <nav>
                <Link to="/register">Register</Link>
                <br />
                <Link to="/login">Login</Link>
            </nav>
        </div>
    );
}

export default App;
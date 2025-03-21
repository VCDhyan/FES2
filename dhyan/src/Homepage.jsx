import React, { useState } from 'react';

const Homepage = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${name}\nContact: ${contact}`);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Welcome to My Homepage</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ padding: '8px', width: '100%' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="contact" style={{ display: 'block', marginBottom: '5px' }}>
                        Contact Details:
                    </label>
                    <input
                        type="text"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        style={{ padding: '8px', width: '100%' }}
                        required
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Homepage;
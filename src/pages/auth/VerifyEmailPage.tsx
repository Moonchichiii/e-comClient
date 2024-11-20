import React, { useState } from 'react';

const VerifyEmailPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVerificationCode(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your verification logic here
        if (verificationCode === '123456') {
            setMessage('Email verified successfully!');
        } else {
            setMessage('Invalid verification code.');
        }
    };

    return (
        <div>
            <h1>Verify Your Email</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div>
                    <label>Verification Code:</label>
                    <input type="text" value={verificationCode} onChange={handleCodeChange} required />
                </div>
                <button type="submit">Verify</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default VerifyEmailPage;
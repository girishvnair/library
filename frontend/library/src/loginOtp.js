import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOTP] = useState('');
    const [message, setMessage] = useState('');

    const handleSendOTP = async () => {
        try {
            await axios.post('/api/send-otp', { mobile_number: mobileNumber });
            setMessage('OTP sent to your mobile number.');
        } catch (error) {
            setMessage('Failed to send OTP. Please try again.');
        }
    };

    const handleVerifyOTP = async () => {
        try {
            await axios.post('/api/verify-otp', { mobile_number: mobileNumber, otp: otp });
            setMessage('OTP verified successfully.');
            // Redirect to dashboard or perform next action
        } catch (error) {
            setMessage('Invalid OTP. Please try again.');
        }
    };

    return (
        <div>
            <h2>Login with Mobile Number</h2>
            <input type="text" placeholder="Enter Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
            <button onClick={handleSendOTP}>Send OTP</button>
            <br />
            <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOTP(e.target.value)} />
            <button onClick={handleVerifyOTP}>Verify OTP</button>
            <p>{message}</p>
        </div>
    );
};

export default Login;

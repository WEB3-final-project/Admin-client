import React from 'react';
import { Login, LoginForm } from 'react-admin';
import { useNavigate } from 'react-router-dom';

export const CustomLogin = () => {
    const navigate = useNavigate();
    
    return (
        <div style={{ position: 'relative' }}>
            <Login>
                <LoginForm 
                    usernameProps={{ 
                        type: 'email', 
                        label: 'ra.auth.email', 
                        placeholder: 'Entrez votre email' 
                    }} 
                />
            </Login>
            <div style={{ textAlign: 'center', marginTop: '-40px', position: 'relative', zIndex: 1000 }}>
                <button 
                    onClick={() => { navigate('/signup'); console.log("API_URL:", import.meta.env.VITE_API_URL); }}
                    style={{ background: 'none', border: 'none', color: '#1976d2', cursor: 'pointer', textDecoration: 'underline' }}
                >
                    Pas encore de compte ? S'inscrire
                </button>
            </div>
        </div>
    );
};
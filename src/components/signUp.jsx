import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

const inputStyle = {
    border: '1px solid #cfcfcf',
    borderRadius: '12px',
    padding: '12px 16px',
    fontSize: '14px',
    fontFamily: 'Poppins, system-ui, sans-serif',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
};

const labelStyle = {
    fontSize: '14px',
    fontWeight: 500,
    color: '#000000',
    fontFamily: 'Poppins, system-ui, sans-serif',
};

export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch(`${API_URL}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, full_name: fullName, role: 'admin' }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || "Erreur lors de l'inscription");
            }
            navigate('/login');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', padding: '24px' }}>
            <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '42px', height: '42px', backgroundColor: '#000000', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="fa-solid fa-bolt" style={{ color: '#ffffff', fontSize: '18px' }}></i>
                    </div>
                    <span style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'Poppins, system-ui, sans-serif' }}>
                        <span style={{ color: '#000000' }}>Event</span>
                        <span style={{ color: '#6366f1' }}>Sync</span>
                    </span>
                </div>

                <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#000000', margin: 0, fontFamily: 'Poppins, system-ui, sans-serif' }}>
                        Créer un compte Admin
                    </h1>
                    <p style={{ color: '#cfcfcf', fontSize: '14px', margin: 0, fontFamily: 'Poppins, system-ui, sans-serif' }}>
                        Rejoignez EventSync en tant qu'organisateur
                    </p>
                </div>

                {error && (
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px', boxSizing: 'border-box' }}>
                        <i className="fa-solid fa-circle-exclamation" style={{ color: '#ef4444', fontSize: '14px' }}></i>
                        <p style={{ color: '#ef4444', fontSize: '14px', margin: 0, fontFamily: 'Poppins, system-ui, sans-serif' }}>{error}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={labelStyle}>Nom complet</label>
                        <input
                            type="text"
                            placeholder="Jean Dupont"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            style={inputStyle}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={labelStyle}>Email</label>
                        <input
                            type="email"
                            placeholder="admin@eventsync.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={inputStyle}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={labelStyle}>Mot de passe</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ ...inputStyle, paddingRight: '48px' }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#cfcfcf', padding: 0 }}
                            >
                                <i className={showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'} style={{ fontSize: '14px' }}></i>
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        style={{ width: '100%', backgroundColor: '#000000', color: '#ffffff', padding: '12px', borderRadius: '12px', fontWeight: 600, fontSize: '14px', border: 'none', cursor: 'pointer', fontFamily: 'Poppins, system-ui, sans-serif' }}
                    >
                        Créer mon compte
                    </button>

                </form>

                <button
                    onClick={() => navigate('/login')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', color: '#cfcfcf', fontFamily: 'Poppins, system-ui, sans-serif' }}
                >
                    Déjà un compte ?{' '}
                    <span style={{ color: '#6366f1', fontWeight: 600 }}>Se connecter</span>
                </button>

            </div>
        </div>
    );
};
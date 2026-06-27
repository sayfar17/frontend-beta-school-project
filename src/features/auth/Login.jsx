import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { GraduationCap, LogIn } from 'lucide-react';
import { INITIAL_USERS } from '../../constants/mockData';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (result.success) {
      navigate('/app');
    } else {
      setError(result.message);
    }
  };

  const handleDemoLogin = (user) => {
    setEmail(user.email);
    setPassword(user.password);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="logo-icon" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', color: 'var(--primary)' }}>
          <GraduationCap size={48} />
        </div>
        <h2>Iniciar Sesión</h2>
        <p>Sistema de Gestión Académica</p>
      </div>

      {error && <div className="login-error">{error}</div>}

      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label className="form-label">Correo Electrónico</label>
          <input 
            type="email" 
            className="form-input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            placeholder="ejemplo@colegio.edu.pe"
          />
        </div>
        
        <div className="form-group">
          <label className="form-label">Contraseña</label>
          <input 
            type="password" 
            className="form-input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            placeholder="••••••••"
          />
        </div>

        <button type="submit" className="btn btn-primary login-btn">
          <LogIn size={18} />
          Ingresar al Sistema
        </button>
      </form>

      <div className="demo-accounts">
        <p>Cuentas de Demostración:</p>
        <div className="demo-buttons">
          {INITIAL_USERS.map(u => (
            <button 
              key={u.id} 
              type="button" 
              className="btn btn-outline" 
              onClick={() => handleDemoLogin(u)}
            >
              {u.role}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

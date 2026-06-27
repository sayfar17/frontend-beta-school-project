import React, { useContext, useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { ThemeContext } from '../../context/ThemeContext';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  ClipboardCheck, 
  FileText,
  Megaphone,
  BarChart3,
  LogOut,
  Sun,
  Moon,
  Menu,
  X
} from 'lucide-react';
import './AdminLayout.css';

export const AdminLayout = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const getMenuItems = () => {
    const role = user?.role;
    // Filtrar items según rol (simulado aquí para mostrar todos por ahora, 
    // en la vida real se filtran con base a ROLES)
    return [
      { path: '/app', icon: <LayoutDashboard size={20}/>, label: 'Dashboard' },
      { path: '/app/alumnos', icon: <Users size={20}/>, label: 'Alumnos' },
      { path: '/app/docentes', icon: <GraduationCap size={20}/>, label: 'Docentes' },
      { path: '/app/padres', icon: <Users size={20}/>, label: 'Padres' },
      { path: '/app/academico', icon: <BookOpen size={20}/>, label: 'Cursos y Grados' },
      { path: '/app/asistencia', icon: <ClipboardCheck size={20}/>, label: 'Asistencia' },
      { path: '/app/notas', icon: <FileText size={20}/>, label: 'Notas' },
      { path: '/app/comunicaciones', icon: <Megaphone size={20}/>, label: 'Publicaciones' },
      { path: '/app/reportes', icon: <BarChart3 size={20}/>, label: 'Reportes' },
    ];
  };

  return (
    <div className="admin-layout">
      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <GraduationCap className="logo-icon" size={28} />
          <span className="logo-text">SGA Portal</span>
          <button className="mobile-close btn-icon" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>
        
        <div className="sidebar-user">
          <div className="user-avatar">{user?.name?.charAt(0)}</div>
          <div className="user-info">
            <span className="user-name">{user?.name}</span>
            <span className="user-role">{user?.role}</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {getMenuItems().map((item, idx) => (
            <NavLink 
              key={idx} 
              to={item.path} 
              end={item.path === '/app'}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item logout-btn" onClick={handleLogout}>
            <LogOut size={20} />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="admin-main">
        {/* Topbar */}
        <header className="admin-topbar glass-panel">
          <div className="topbar-left">
            <button className="btn-icon mobile-menu-btn" onClick={() => setSidebarOpen(true)}>
              <Menu size={20} />
            </button>
            <h2 className="page-title">Sistema Institucional</h2>
          </div>
          
          <div className="topbar-right">
            <button className="btn-icon theme-toggle" onClick={toggleTheme} title="Cambiar tema">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </header>

        {/* Content Wrapper */}
        <div className="admin-content animate-fade-in">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

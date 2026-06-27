import React from 'react';
import { Outlet } from 'react-router-dom';
import './PublicLayout.css';

export const PublicLayout = () => {
  return (
    <div className="public-layout">
      <div className="public-layout-background"></div>
      <div className="public-layout-content animate-slide-up">
        <Outlet />
      </div>
    </div>
  );
};

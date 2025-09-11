import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/Layout.css';
import Nav from './Nav';

export default function Layout() {
  return (
    <div className="app-layout">
      <Nav />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="app-footer">
        <small>FurEver Care — They deserve forever love ❤️</small>
      </footer>
    </div>
  );
}

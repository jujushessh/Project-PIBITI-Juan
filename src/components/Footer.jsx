import React from 'react';

const Footer = ({ appName, version }) => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © 2025 {appName} v{version} - Aplikasi Pencatatan Keuangan Pribadi
        </p>
      </div>
    </footer>
  );
};

export default Footer;

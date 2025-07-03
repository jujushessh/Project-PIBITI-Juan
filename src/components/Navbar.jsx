import React from 'react';
import { Wallet } from 'lucide-react';

const Navbar = ({ title, userName }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Wallet className="h-6 w-6" />
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm">Halo, {userName}</span>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">{userName.charAt(0)}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

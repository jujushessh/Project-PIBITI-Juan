import React from 'react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const BalanceCard = ({ title, amount, type }) => {
  const getCardStyle = () => {
    switch(type) {
      case 'income': return 'bg-green-500';
      case 'expense': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  const getIcon = () => {
    switch(type) {
      case 'income': return <TrendingUp className="h-6 w-6" />;
      case 'expense': return <TrendingDown className="h-6 w-6" />;
      default: return <DollarSign className="h-6 w-6" />;
    }
  };

  return (
    <div className={`${getCardStyle()} text-white p-6 rounded-lg shadow-lg`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90">{title}</p>
          <p className="text-2xl font-bold mt-1">Rp {amount.toLocaleString('id-ID')}</p>
        </div>
        {getIcon()}
      </div>
    </div>
  );
};

export default BalanceCard;

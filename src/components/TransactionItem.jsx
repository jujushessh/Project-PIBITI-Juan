import React from 'react';

const TransactionItem = ({ transaction }) => {
  const { description, category, amount, type, date } = transaction;
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50">
      <div className="flex items-center space-x-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
        }`}>
          {type === 'income' ? '+' : '-'}
        </div>
        <div>
          <p className="font-medium">{description}</p>
          <p className="text-sm text-gray-500">{category}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-semibold ${type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
          {type === 'income' ? '+' : '-'}Rp {amount.toLocaleString('id-ID')}
        </p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default TransactionItem;

import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-0">
        {transactions.map((transaction, index) => (
          <TransactionItem key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;

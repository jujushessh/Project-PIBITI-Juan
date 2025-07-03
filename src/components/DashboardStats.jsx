import React from 'react';
import BalanceCard from './BalanceCard';

const DashboardStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <BalanceCard title="Total Saldo" amount={stats.totalBalance} type="balance" />
      <BalanceCard title="Pemasukan Bulan Ini" amount={stats.monthlyIncome} type="income" />
      <BalanceCard title="Pengeluaran Bulan Ini" amount={stats.monthlyExpense} type="expense" />
    </div>
  );
};

export default DashboardStats;

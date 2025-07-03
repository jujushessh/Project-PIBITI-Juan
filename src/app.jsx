import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import DashboardStats from "./components/DashboardStats";
import TransactionList from "./components/TransactionList";

import { DollarSign, TrendingUp, Calendar, PieChart } from "lucide-react";

const App = () => {
  const menuItems = [
    { name: "Dashboard", icon: <PieChart className="h-5 w-5" /> },
    { name: "Transaksi", icon: <DollarSign className="h-5 w-5" /> },
    { name: "Laporan", icon: <Calendar className="h-5 w-5" /> },
    { name: "Kategori", icon: <TrendingUp className="h-5 w-5" /> },
  ];

  const dashboardStats = {
    totalBalance: 5750000,
    monthlyIncome: 8000000,
    monthlyExpense: 2250000,
  };

  const recentTransactions = [
    {
      description: "Gaji Bulanan",
      category: "Pemasukan",
      amount: 8000000,
      type: "income",
      date: "28 Jun 2025",
    },
    {
      description: "Belanja Groceries",
      category: "Makanan",
      amount: 350000,
      type: "expense",
      date: "27 Jun 2025",
    },
    {
      description: "Bayar Listrik",
      category: "Utilitas",
      amount: 125000,
      type: "expense",
      date: "26 Jun 2025",
    },
    {
      description: "Freelance Project",
      category: "Pemasukan",
      amount: 1500000,
      type: "income",
      date: "25 Jun 2025",
    },
    {
      description: "Bensin Motor",
      category: "Transportasi",
      amount: 50000,
      type: "expense",
      date: "24 Jun 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar title="Personal Finance Tracker" userName="Ahmad" />
      <div className="flex">
        <Sidebar menuItems={menuItems} />
        <main className="flex-1 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Dashboard Keuangan</h2>
            <p className="text-gray-600">Kelola keuangan pribadi Anda dengan mudah</p>
          </div>
          <DashboardStats stats={dashboardStats} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TransactionList transactions={recentTransactions} title="Transaksi Terbaru" />
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Grafik Pengeluaran</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Chart akan ditampilkan di sini</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer appName="Personal Finance Tracker" version="1.0" />
    </div>
  );
};

export default App;

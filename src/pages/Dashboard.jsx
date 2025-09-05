
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Line, Legend, ResponsiveContainer } from 'recharts'
import { Phone, Monitor, CreditCard, Building } from 'lucide-react'

const data = [
  { year: 2018, amount: 70000, alerts: 2 },
  { year: 2019, amount: 30000, alerts: 5 },
  { year: 2020, amount: 60000, alerts: 15 },
  { year: 2021, amount: 250000, alerts: 45 },
  { year: 2022, amount: 80000, alerts: 20 },
  { year: 2023, amount: 120000, alerts: 30 },
  { year: 2024, amount: 180000, alerts: 35 },
  { year: 2025, amount: 230000, alerts: 42 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Numbers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-soft p-6 flex flex-col">
          <span className="text-gray-500">Number of Suspicious Networks</span>
          <div className="text-3xl font-bold text-purple-700 flex items-center gap-2">
            133 <span className="text-red-500">▲</span>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-soft p-6 flex flex-col">
          <span className="text-gray-500">Number of High Risk Customers</span>
          <div className="text-3xl font-bold text-green-600 flex items-center gap-2">
            1,2k <span className="text-green-500">▼</span>
          </div>
        </div>
      </div>

      {/* Transactions per Channel */}
      <div>
        <h2 className="text-gray-500 mb-2">Number of Transactions per Channel</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Phone className="w-6 h-6 text-blue-500" />, label: "Mobile banking" },
            { icon: <Monitor className="w-6 h-6 text-red-400" />, label: "Internet banking" },
            { icon: <CreditCard className="w-6 h-6 text-purple-500" />, label: "ATM" },
            { icon: <Building className="w-6 h-6 text-gray-600" />, label: "Branch" },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-soft p-6 flex flex-col items-center">
              <div className="mb-2">{item.icon}</div>
              <div className="text-2xl font-semibold">1,523</div>
              <span className="text-gray-500 text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Distribution Frequency */}
      <div className="bg-white rounded-2xl shadow-soft p-6">
        <h2 className="text-lg font-semibold mb-4">Risk Distribution Frequency</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="amount" fill="#8884d8" name="Amount involved" />
            <Line yAxisId="right" type="monotone" dataKey="alerts" stroke="#facc15" name="Number of Alerts" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

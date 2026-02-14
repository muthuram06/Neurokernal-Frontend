'use client'

import { AreaChart, Area, ResponsiveContainer } from "recharts"

export default function CPUChart({ value }: { value: number }) {

  const data = [
    { value: value - 10 },
    { value: value - 5 },
    { value },
  ]

  return (
    <div className="bg-[#12121a] p-6 rounded-xl border border-[#1e1e2e]">
      <h2 className="text-lg mb-2">CPU Usage</h2>
      <div className="text-3xl font-bold text-indigo-400 mb-4">
        {value}%
      </div>

      <ResponsiveContainer width="100%" height={100}>
        <AreaChart data={data}>
          <Area type="monotone" dataKey="value" stroke="#6366f1" fill="#6366f1" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

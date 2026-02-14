'use client'

import { AreaChart, Area, ResponsiveContainer } from "recharts"

export default function MemoryChart({ value }: { value: number }) {

  const data = [
    { value: value - 15 },
    { value: value - 5 },
    { value },
  ]

  return (
    <div className="bg-[#12121a] p-6 rounded-xl border border-[#1e1e2e]">
      <h2 className="text-lg mb-2">Memory Usage</h2>
      <div className="text-3xl font-bold text-green-400 mb-4">
        {value}%
      </div>

      <ResponsiveContainer width="100%" height={100}>
        <AreaChart data={data}>
          <Area type="monotone" dataKey="value" stroke="#22c55e" fill="#22c55e" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

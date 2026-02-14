'use client'

import { AreaChart, Area, ResponsiveContainer } from "recharts"

export default function DiskChart({ value }: { value: number }) {

  const data = [
    { value: value - 20 },
    { value: value - 10 },
    { value },
  ]

  return (
    <div className="bg-[#12121a] p-6 rounded-xl border border-[#1e1e2e]">
      <h2 className="text-lg mb-2">Disk Usage</h2>
      <div className="text-3xl font-bold text-amber-400 mb-4">
        {value}%
      </div>

      <ResponsiveContainer width="100%" height={100}>
        <AreaChart data={data}>
          <Area type="monotone" dataKey="value" stroke="#f59e0b" fill="#f59e0b" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

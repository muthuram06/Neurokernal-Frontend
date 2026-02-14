'use client'

import { useEffect, useState } from "react"
import CPUChart from "./charts/CPUChart"
import MemoryChart from "./charts/MemoryChart"
import DiskChart from "./charts/DiskChart"
import InsightsPanel from "./panels/InsightsPanel"
import ActionPanel from "./panels/ActionPanel"

export default function Dashboard() {

  const [cpu, setCpu] = useState(40)
  const [memory, setMemory] = useState(60)
  const [disk, setDisk] = useState(50)

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(Math.floor(Math.random() * 100))
      setMemory(Math.floor(Math.random() * 100))
      setDisk(Math.floor(Math.random() * 100))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        NeuroKernel Autonomous 🧠
      </h1>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <CPUChart value={cpu} />
        <MemoryChart value={memory} />
        <DiskChart value={disk} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <InsightsPanel />
        <ActionPanel />
      </div>
    </div>
  )
}

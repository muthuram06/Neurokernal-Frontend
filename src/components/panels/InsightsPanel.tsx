'use client'

export default function InsightsPanel() {

  return (
    <div className="bg-[#12121a] p-6 rounded-xl border border-[#1e1e2e]">
      <h2 className="text-xl mb-4">AI Insights 🔍</h2>

      <div className="space-y-3 text-sm">
        <p className="text-yellow-400">
          ⚠️ Memory usage increasing steadily
        </p>

        <p className="text-indigo-400">
          💡 Recommendation: Close unused Chrome tabs
        </p>

        <p className="text-green-400">
          ✅ System health stable
        </p>
      </div>
    </div>
  )
}

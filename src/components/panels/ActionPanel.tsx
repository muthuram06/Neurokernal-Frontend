'use client'

export default function ActionPanel() {

  return (
    <div className="bg-[#12121a] p-6 rounded-xl border border-[#1e1e2e]">
      <h2 className="text-xl mb-4">Pending Actions ⚡</h2>

      <div className="space-y-4">
        <div className="p-4 bg-[#1e1e2e] rounded-lg">
          <p className="mb-2">
            Pause Windows Update
          </p>

          <div className="flex gap-4">
            <button className="bg-green-500 px-4 py-2 rounded-md">
              Approve
            </button>

            <button className="bg-red-500 px-4 py-2 rounded-md">
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

import { ArrowDownUp, Download, PlusCircle } from "lucide-react";

export default function ScriptsPage() {
  return (
    <main className="p-10 pl-16 bg-[#fafafa] min-h-screen flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Scripts</h1>
        <p className="text-gray-500 text-sm">Write high-performing scripts backed by proven storytelling frameworks</p>
      </header>

      <div className="flex items-center justify-between mt-4">
        <div className="relative w-[400px]">
          <input 
            type="text" 
            placeholder="Search scripts" 
            className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-3 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-gray-600 font-medium hover:text-gray-900">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="flex items-center gap-2 text-sm font-medium hover:text-gray-900 border border-gray-200 px-4 py-2 rounded-lg bg-white">
            <PlusCircle className="w-4 h-4" /> New Script
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mt-4">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="border-b border-gray-100 bg-gray-50/50">
            <tr>
              <th className="font-medium p-4 text-gray-400">Name</th>
              <th className="font-medium p-4 text-gray-400 flex items-center gap-1">Created <ArrowDownUp className="w-3 h-3" /></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="p-4 font-medium text-gray-900">Breakup Clarity and Future Love</td>
              <td className="p-4">Jun 28, 2026</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="p-4 font-medium text-gray-900">Soulmate</td>
              <td className="p-4">Jun 28, 2026</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="p-4 font-medium text-gray-900">COPY 71 - True Love Redefined: Reputation and Well-being</td>
              <td className="p-4">Jun 27, 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

import Link from "next/link";
import { Search, FolderPlus, ArrowDownUp } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="p-10 pl-16 bg-[#fafafa] min-h-screen flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Projects</h1>
        <p className="text-gray-500 text-sm">Plan and organize your content with a dedicated workspace for each project</p>
      </header>

      <div className="flex items-center justify-between mt-4">
        <div className="relative w-[400px]">
          <input 
            type="text" 
            placeholder="Search projects" 
            className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-3 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-gray-600 font-medium hover:text-gray-900">
            <ArrowDownUp className="w-4 h-4" /> Sort by
          </button>
          <button className="flex items-center gap-2 text-sm font-medium hover:text-gray-900">
            <FolderPlus className="w-4 h-4" /> Create Project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {/* Project Card 1 */}
        <Link href="/project/61af7f0d" className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow block">
          <FolderPlus className="w-8 h-8 text-blue-500 mb-6" />
          <h3 className="font-semibold text-gray-800 mb-4">Auraly Trend - Feitos</h3>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <span>9 items</span>
            <span>•</span>
            <span>Jun 27, 2026</span>
          </div>
        </Link>
        
        {/* Project Card 2 */}
        <Link href="/project/lua-signos" className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow block">
          <FolderPlus className="w-8 h-8 text-yellow-500 mb-6" />
          <h3 className="font-semibold text-gray-800 mb-4">Lua e Signos</h3>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <span>1 items</span>
            <span>•</span>
            <span>Jun 27, 2026</span>
          </div>
        </Link>

        {/* Project Card 3 */}
        <Link href="/project/tarot" className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow block">
          <FolderPlus className="w-8 h-8 text-purple-500 mb-6" />
          <h3 className="font-semibold text-gray-800 mb-4">Tarot</h3>
          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <span>11 items</span>
            <span>•</span>
            <span>Jun 27, 2026</span>
          </div>
        </Link>
      </div>
    </main>
  );
}

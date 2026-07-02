import { ArrowDownUp, Download } from "lucide-react";

export default function CollectionDetailPage() {
  return (
    <main className="p-10 pl-16 bg-[#fafafa] min-h-screen flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">3P Crash Zoom</h1>
      </header>

      <div className="flex items-center justify-between mt-2">
        <div className="relative w-[300px]">
          <input 
            type="text" 
            placeholder="Search videos" 
            className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-3 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-gray-600 font-medium hover:text-gray-900">
            <ArrowDownUp className="w-4 h-4" /> Sort by
          </button>
          <button className="flex items-center gap-2 text-sm font-medium hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg bg-white text-gray-700">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
        
        {/* Video Card 1 */}
        <div className="flex flex-col gap-2 group cursor-pointer">
          <div className="relative aspect-[9/16] bg-slate-900 rounded-xl overflow-hidden">
             {/* Mock thumbnail */}
             <img src="https://images.unsplash.com/photo-1516280440502-6c17d7b2781b?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300" alt="Video thumbnail" />
             
             {/* Platform Icon */}
             <div className="absolute top-2 right-2 w-6 h-6 rounded flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
             </div>
             
             {/* Text overlay */}
             <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <span className="text-white font-bold text-3xl opacity-80 leading-tight">4<br/><span className="text-xl">Power of</span><br/>MUSIC</span>
             </div>
          </div>
          <p className="text-sm font-medium text-gray-800 line-clamp-1">Ep. 4 Power of Music 🎵...</p>
          <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium">
             <span>@sharecraftmedia</span>
             <span>9mo ago</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
             <span className="bg-green-100 text-green-700 text-[11px] font-bold px-2 py-1 rounded flex items-center gap-1">
               <ArrowDownUp className="w-3 h-3" /> 44.9x
             </span>
             <span className="bg-blue-100 text-blue-700 text-[11px] font-bold px-2 py-1 rounded flex items-center gap-1">
               <EyeIcon className="w-3 h-3" /> 103K
             </span>
             <span className="bg-orange-100 text-orange-700 text-[11px] font-bold px-2 py-1 rounded flex items-center gap-1">
               <SparklesIcon className="w-3 h-3" /> 4%
             </span>
          </div>
        </div>

        {/* Video Card 2 */}
        <div className="flex flex-col gap-2 group cursor-pointer">
          <div className="relative aspect-[9/16] bg-slate-900 rounded-xl overflow-hidden">
             {/* Mock thumbnail */}
             <img src="https://images.unsplash.com/photo-1542314831-c6a4d1421008?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300" alt="Video thumbnail" />
             
             {/* Platform Icon */}
             <div className="absolute top-2 right-2 w-6 h-6 rounded flex items-center justify-center bg-black">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 006.31 22a6.34 6.34 0 006.27-5.91l.05-9.74a8.21 8.21 0 004.91 1.62v-3.45a4.89 4.89 0 01-1.95-1.18z"/></svg>
             </div>
          </div>
          <p className="text-sm font-medium text-gray-800 line-clamp-1">yall, get creative with this...</p>
          <div className="flex items-center justify-between text-[11px] text-gray-500 font-medium">
             <span>@lacapture</span>
             <span>1y ago</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
             <span className="bg-green-100 text-green-700 text-[11px] font-bold px-2 py-1 rounded flex items-center gap-1">
               <ArrowDownUp className="w-3 h-3" /> 10.4x
             </span>
             <span className="bg-blue-100 text-blue-700 text-[11px] font-bold px-2 py-1 rounded flex items-center gap-1">
               <EyeIcon className="w-3 h-3" /> 154K
             </span>
             <span className="bg-orange-100 text-orange-700 text-[11px] font-bold px-2 py-1 rounded flex items-center gap-1">
               <SparklesIcon className="w-3 h-3" /> 7%
             </span>
          </div>
        </div>

      </div>
    </main>
  );
}

function EyeIcon({className}: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
}
function SparklesIcon({className}: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
}

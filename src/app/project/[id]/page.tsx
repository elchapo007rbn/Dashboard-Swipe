import Link from "next/link";
import { Download, CheckCircle2, Camera, TrendingUp, Eye, Flame } from "lucide-react";

export default function ProjectDetailPage() {
  return (
    <main className="p-10 pl-16 bg-[#fafafa] min-h-screen flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Auraly Trend - Feitos</h1>
      </header>

      <div className="flex items-center justify-between mt-2">
        <div className="relative w-[400px]">
          <input 
            type="text" 
            placeholder="Search project items" 
            className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-3 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        <button className="flex items-center gap-2 text-sm text-gray-600 font-medium hover:text-gray-900 border border-gray-200 px-4 py-2 rounded-lg bg-white">
          <Download className="w-4 h-4" /> Export
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {/* Video Card */}
        <Link href="/video/e9d01bab-f750-4daf-b962-05dbde59a7d1" className="group flex flex-col cursor-pointer">
          <div className="relative aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden mb-3 border border-gray-200">
            {/* Mocking the video thumbnail with a gradient for now */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-800 opacity-90 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="absolute top-3 left-3 flex items-center gap-1 bg-green-500/20 text-green-700 px-2 py-1 rounded text-xs font-semibold backdrop-blur-sm">
              <CheckCircle2 className="w-3 h-3" /> Analyzed
            </div>
            <div className="absolute top-3 right-3 bg-pink-500 text-white p-1 rounded-md">
              <Camera className="w-3 h-3" />
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
              <p className="text-white font-bold leading-tight drop-shadow-md">
                <span className="bg-white text-black px-1">BETWEEN 6PM AND 10PM...</span><br/>
                THIS HAPPENS
              </p>
            </div>
          </div>
          
          <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">In my stories is the answer...</h3>
          <div className="flex items-center justify-between text-xs text-gray-500 mt-1 mb-2">
            <span>@rosea_amelia</span>
            <span>6d ago</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded text-[11px] font-bold">
              <TrendingUp className="w-3 h-3" /> 164.8x
            </div>
            <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded text-[11px] font-bold">
              <Eye className="w-3 h-3" /> 128K
            </div>
            <div className="flex items-center gap-1 bg-orange-100 text-orange-700 px-2 py-1 rounded text-[11px] font-bold">
              <Flame className="w-3 h-3" /> 13%
            </div>
          </div>
        </Link>
        
        {/* Placeholder cards to fill grid */}
        {[1,2,3,4].map((i) => (
           <div key={i} className="group flex flex-col opacity-70">
           <div className="relative aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden mb-3 border border-gray-200">
             <div className="absolute top-3 left-3 flex items-center gap-1 bg-green-500/20 text-green-700 px-2 py-1 rounded text-xs font-semibold backdrop-blur-sm">
               <CheckCircle2 className="w-3 h-3" /> Analyzed
             </div>
           </div>
           <h3 className="font-semibold text-gray-800 text-sm bg-gray-200 h-4 w-3/4 rounded"></h3>
           <div className="flex items-center justify-between text-xs text-gray-500 mt-2 mb-2">
             <span className="bg-gray-100 h-3 w-20 rounded"></span>
           </div>
         </div>
        ))}
      </div>
    </main>
  );
}

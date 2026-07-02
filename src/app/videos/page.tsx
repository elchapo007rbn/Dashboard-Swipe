import { Download, ArrowDownUp, Settings, Link2, Zap, Globe, Check } from "lucide-react";

export default function VideosPage() {
  return (
    <main className="p-10 pl-16 bg-[#fafafa] min-h-screen flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Videos</h1>
        <p className="text-gray-500 text-sm">Analyze videos from your channels to unlock deep insights and find your next idea</p>
      </header>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <Settings className="w-4 h-4" /> Customize channels
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <Link2 className="w-4 h-4" /> Add video URL
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <Zap className="w-4 h-4" /> Bulk Analyze
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Showing 0 of 8096</span>
          <button className="flex items-center gap-2 text-sm font-medium bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg border border-blue-200">
            <FilterIcon className="w-4 h-4" /> Filters
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-600 font-medium hover:text-gray-900">
            <ArrowDownUp className="w-4 h-4" /> Sort by
          </button>
          <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      <div className="flex gap-6 mt-2">
        {/* Filters Panel */}
        <div className="w-[300px] shrink-0 bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-4 max-h-[750px] overflow-y-auto">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-gray-500 tracking-wider">FILTERS</h3>
            <Globe className="w-4 h-4 text-gray-400" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-600">Channels</label>
            <select className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm text-gray-700 focus:outline-none">
              <option>All channels</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-600">Keywords</label>
            <input type="text" placeholder="Search captions and titles" className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-600">Outlier score</label>
            <div className="flex items-center gap-2">
              <input type="text" placeholder="0x" className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none" />
              <span className="text-gray-400">-</span>
              <input type="text" placeholder="100x" className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-600">Views</label>
            <div className="flex items-center gap-2">
              <input type="text" placeholder="0" className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none" />
              <span className="text-gray-400">-</span>
              <input type="text" placeholder="10,000,000" className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none" />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-600">Engagement</label>
            <div className="flex items-center gap-2">
              <input type="text" placeholder="0%" className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none" />
              <span className="text-gray-400">-</span>
              <input type="text" placeholder="100%" className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none" />
            </div>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-600">Posted in last</label>
            <div className="flex items-center gap-2">
              <input type="text" placeholder="0" className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none" />
              <select className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm text-gray-700 focus:outline-none">
                <option>Months</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-600">Status</label>
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg py-2 text-sm font-medium">
                <Check className="w-3 h-3 bg-blue-600 text-white rounded-full p-0.5" /> Analyzed
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-lg py-2 text-sm font-medium">
                <Check className="w-3 h-3 bg-blue-600 text-white rounded-full p-0.5" /> Unanalyzed
              </button>
            </div>
          </div>

          <button className="w-full bg-white border border-gray-200 rounded-lg py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 mt-2">
            Save filter
          </button>
        </div>

        {/* Right Column: Grid (Skeleton) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map((i) => (
             <div key={i} className="flex flex-col gap-2">
                <div className="aspect-[9/16] bg-gray-200 rounded-xl animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
             </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function FilterIcon({className}: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
}

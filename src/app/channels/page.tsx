import { Download, Search } from "lucide-react";

export default function ChannelsPage() {
  return (
    <main className="p-10 pl-16 bg-[#fafafa] min-h-screen flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Channels</h1>
        <p className="text-gray-500 text-sm">Pick which channels to include in your videos feed</p>
      </header>

      <div className="flex gap-8 mt-4">
        {/* Left Column */}
        <div className="flex-1">
          <div className="bg-gray-100/50 p-1 rounded-lg inline-flex w-full">
            <button className="flex-1 bg-white shadow-sm py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">Suggested</button>
            <button className="flex-1 py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-700 text-center">Describe</button>
            <button className="flex-1 py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-700 text-center">Search</button>
            <button className="flex-1 py-2 px-4 text-sm font-medium text-gray-500 hover:text-gray-700 text-center">Add URL</button>
          </div>
          
          {/* Empty state / Loading spinner simulation */}
          <div className="flex items-center justify-center h-64">
            <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Right Column: Watchlist */}
        <div className="w-[380px] shrink-0 bg-white border border-gray-200 rounded-xl flex flex-col max-h-[600px]">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-bold text-gray-900 text-sm">Your Watchlist</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            <WatchlistItem handle="astrobellaluna" followers="1M" views="263M" />
            <WatchlistItem handle="astrologerdivapratihast" followers="428K" views="450M" isInsta />
            <WatchlistItem handle="christiemariesheldon" followers="32K" views="1.7M" isInsta />
            <WatchlistItem handle="downloadstella" followers="59K" views="7.3M" isInsta />
            <WatchlistItem handle="eliasvaletarotcards" followers="11K" views="570K" isInsta />
            <WatchlistItem handle="emmavanee" followers="12K" views="4.4M" isInsta />
          </div>

          <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/50 rounded-b-xl">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900">Remove all</button>
            <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function WatchlistItem({ handle, followers, views, isInsta = false }: any) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="relative">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
          <span className="text-gray-400 font-bold">{handle.substring(0,2).toUpperCase()}</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
          {isInsta ? (
            <div className="w-full h-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full" />
          ) : (
            <div className="w-full h-full bg-black rounded-full" />
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-gray-900 group-hover:text-blue-600 cursor-pointer">{handle}</span>
        <span className="text-xs text-gray-500">{followers} followers · {views} views</span>
      </div>
    </div>
  );
}

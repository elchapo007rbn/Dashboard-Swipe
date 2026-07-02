import { Download, PlusSquare, Heart, Copy, ArrowDownUp } from "lucide-react";

export default function HooksPage() {
  return (
    <main className="p-10 pl-16 bg-[#fafafa] min-h-screen flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Hooks</h1>
        <p className="text-gray-500 text-sm">Manage your vault of viral hooks</p>
      </header>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <div className="relative w-[300px]">
            <input 
              type="text" 
              placeholder="Search by hook or channel" 
              className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-3 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <button className="flex items-center gap-2 text-sm font-medium hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg bg-white">
            <PlusSquare className="w-4 h-4" /> Create from video
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Showing format</span>
            <div className="w-8 h-4 bg-gray-800 rounded-full relative cursor-pointer">
              <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </div>
          </div>
          <button className="flex items-center gap-2 text-sm text-gray-600 font-medium hover:text-gray-900">
            <ArrowDownUp className="w-4 h-4" /> Sort by
          </button>
          <button className="flex items-center gap-2 text-sm font-medium hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg bg-white text-gray-700">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">YOUR FAVORITE HOOKS · 6</h2>
        
        <HookCard 
          text="Someone [unexpected characteristic] than you is showing up in your life with [positive/intense attribute]."
          author="sebastian_reed_tarot"
          category="Scenario Hypothetical"
          multiplier="688.4x"
          views="259K"
          favorite
        />
        <HookCard 
          text="Do not [action]. This [content] is not for everyone."
          author="solomonaldric"
          category="Personal Experience"
          multiplier="539.5x"
          views="295K"
          favorite
        />
        <HookCard 
          text="Do not skip this [Content Type]. If [Condition] appeared to you, don't ignore it."
          author="rosea_amelia"
          category="Authority"
          multiplier="114x"
          views="76K"
          favorite
        />
        
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-4">HOOKS FROM YOUR ANALYZED VIDEOS · 6</h2>
        
        <HookCard 
          text="The person who [emotional relationship event] is [ongoing dramatic action] while you're watching this."
          author="sebastian_reed_tarot"
          category="Scenario Hypothetical"
          multiplier="191.7x"
          views="211K"
          favorite={false}
        />
      </div>
    </main>
  );
}

function HookCard({ text, author, category, multiplier, views, favorite }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4 hover:shadow-sm transition-shadow">
      <div className="w-12 h-16 bg-slate-900 rounded overflow-hidden shrink-0 flex items-center justify-center">
        {/* Mock thumbnail */}
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <p className="text-sm font-medium text-gray-800">{text}</p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Inspired by @{author}</span>
          {favorite && <button className="flex items-center gap-1 text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded font-medium hover:bg-gray-200"><Copy className="w-3 h-3" /> Copy hook</button>}
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className={`text-[11px] font-bold px-2 py-1 rounded ${category.includes('Hypothetical') ? 'bg-purple-100 text-purple-700' : category.includes('Experience') ? 'bg-fuchsia-100 text-fuchsia-700' : 'bg-purple-100 text-purple-700'}`}>
          {category}
        </span>
        <span className="flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded bg-green-100 text-green-700">
          <ArrowDownUp className="w-3 h-3" /> {multiplier}
        </span>
        <span className="flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded bg-blue-100 text-blue-700">
          <EyeIcon className="w-3 h-3" /> {views}
        </span>
        <button className={`p-1 rounded-full ${favorite ? 'text-red-500' : 'text-gray-300'}`}>
          <Heart className="w-4 h-4" fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>
    </div>
  );
}

function EyeIcon({className}: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
}

import { ArrowDownUp, Download, ChevronsRight } from "lucide-react";

export default function IdeasPage() {
  const inboxIdeas = [
    {
      id: 1,
      category: "Relationship Prediction",
      title: "Deliver relationship predictions using tactile props to capture and hold broad viewer attention",
      multiplier: "688.4x",
      views: "259K",
      score: "6%",
      handle: "@sebastian_reed_tarot",
      time: "3w ago"
    },
    {
      id: 2,
      category: "Spiritual Manifestation And Inheritance",
      title: "Claim an unexpected wealth inheritance through spiritual alignment",
      multiplier: "87.9x",
      views: "95K",
      score: "15%",
      handle: "@sebastian_reed_tarot",
      time: "2w ago"
    },
    {
      id: 3,
      category: "Manifestation Ritual",
      title: "Manifest desires through interactive incense rituals",
      multiplier: "82.5x",
      views: "86K",
      score: "12%",
      handle: "@jennifercardss",
      time: "1w ago"
    },
    {
      id: 4,
      category: "Manifestation And Karma",
      title: "Use a specific future date to anchor a viral spiritual prophecy",
      multiplier: "114x",
      views: "76K",
      score: "18%",
      handle: "@rosea_amelia",
      time: "1w ago"
    },
    {
      id: 5,
      category: "Relationship Loyalty",
      title: "Reframe a partner's loyalty as a choice rather than desperation",
      multiplier: "549.1x",
      views: "2.7M",
      score: "4%",
      handle: "@emmavanee",
      time: "1w ago"
    }
  ];

  const shortlistIdeas = [
    {
      id: 6,
      category: "Social Engagement Hack",
      title: "Drive massive shares using personal relationship curiosity",
      multiplier: "191.7x",
      views: "211K",
      score: "1%",
      handle: "@sebastian_reed_tarot",
      time: "2w ago"
    },
    {
      id: 7,
      category: "Manifestation And Good Luck",
      title: "Use spiritual archetypes to drive high engagement through predicted luck",
      multiplier: "539.5x",
      views: "295K",
      score: "16%",
      handle: "@solomonaldric",
      time: "1w ago"
    },
    {
      id: 8,
      category: "Spiritual Manifestation And Reconciliation",
      title: "Predict a specific romantic reconciliation window to drive high engagement",
      multiplier: "164.8x",
      views: "128K",
      score: "13%",
      handle: "@rosea_amelia",
      time: "6d ago"
    }
  ];

  return (
    <main className="p-10 pl-16 bg-[#fafafa] min-h-screen flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Ideas</h1>
        <p className="text-gray-500 text-sm">Review ideas that were generated from videos you analyzed</p>
      </header>

      <div className="flex items-center justify-between mt-4">
        <div className="relative w-[400px]">
          <input 
            type="text" 
            placeholder="Search ideas" 
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

      <div className="flex gap-8 mt-6">
        {/* INBOX COLUMN */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider">INBOX</h2>
            <button className="text-xs font-medium text-gray-400 hover:text-gray-600">Discard all</button>
          </div>
          
          {inboxIdeas.map(idea => (
            <IdeaCard key={idea.id} data={idea} showMoveIcon />
          ))}
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-200" />

        {/* SHORTLIST COLUMN */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider">SHORTLIST</h2>
          </div>
          
          {shortlistIdeas.map(idea => (
            <IdeaCard key={idea.id} data={idea} />
          ))}
        </div>
      </div>
    </main>
  );
}

function IdeaCard({ data, showMoveIcon = false }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3 flex gap-4 hover:shadow-sm transition-shadow relative group cursor-pointer">
      {showMoveIcon && (
        <button className="absolute top-4 right-4 text-gray-300 hover:text-gray-600">
          <ChevronsRight className="w-5 h-5" />
        </button>
      )}
      
      <div className="w-16 h-[88px] bg-slate-900 rounded overflow-hidden shrink-0 flex items-center justify-center">
        {/* Mock thumbnail */}
      </div>
      
      <div className="flex-1 flex flex-col justify-between py-1 pr-6">
        <div className="flex flex-col gap-1">
          <span className="bg-gray-100 text-gray-600 text-[11px] font-medium px-2 py-0.5 rounded w-fit">{data.category}</span>
          <h3 className="text-sm font-bold text-gray-900 leading-snug">{data.title}</h3>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1.5">
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
              <ArrowDownUp className="w-3 h-3" /> {data.multiplier}
            </span>
            <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
              <EyeIcon className="w-3 h-3" /> {data.views}
            </span>
            <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
              <SparklesIcon className="w-3 h-3" /> {data.score}
            </span>
          </div>
          <div className="text-[11px] text-gray-400 flex items-center gap-1">
             <span>{data.handle}</span>
             <span>•</span>
             <span>{data.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EyeIcon({className}: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
}
function SparklesIcon({className}: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/></svg>
}

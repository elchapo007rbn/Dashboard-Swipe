import { Search, Tag, ArrowDownUp } from "lucide-react";
import Link from "next/link";

export default function CollectionsPage() {
  const collections = [
    {
      id: "a5124c2b-2564-452d-8736-68d04318ef71",
      title: "3P Crash Zoom",
      category: "VISUAL HOOKS · SUBJECT MOTION",
      pill: "VISUAL HOOKS",
      count: "2 videos",
      gradient: "from-green-500 to-emerald-900"
    },
    {
      id: "b2",
      title: "About Me",
      category: "FORMATS",
      pill: "FORMATS",
      count: "11 videos",
      gradient: "from-blue-500 to-indigo-900"
    },
    {
      id: "c3",
      title: "Impending Disaster",
      category: "VISUAL HOOKS · SUBJECT MOTION",
      pill: "VISUAL HOOKS",
      count: "3 videos",
      gradient: "from-emerald-400 to-green-800"
    },
    {
      id: "d4",
      title: "A vs B Graphics",
      category: "VISUAL HOOKS · GRAPHIC/TEXT OVERL...",
      pill: "VISUAL HOOKS",
      count: "3 videos",
      gradient: "from-teal-400 to-emerald-800"
    },
    {
      id: "e5",
      title: "A vs B Comparison",
      category: "FORMATS",
      pill: "FORMATS",
      count: "13 videos",
      gradient: "from-blue-600 to-blue-900"
    },
    {
      id: "f6",
      title: "Beat Match Switch",
      category: "VISUAL HOOKS · PATTERN INTERRUPT /...",
      pill: "VISUAL HOOKS",
      count: "3 videos",
      gradient: "from-green-400 to-emerald-900"
    },
    {
      id: "g7",
      title: "Breakdowns",
      category: "FORMATS",
      pill: "FORMATS",
      count: "15 videos",
      gradient: "from-indigo-500 to-blue-900"
    },
    {
      id: "h8",
      title: "Camera Whip",
      category: "VISUAL HOOKS · SUBJECT MOTION",
      pill: "VISUAL HOOKS",
      count: "3 videos",
      gradient: "from-emerald-500 to-green-900"
    },
    {
      id: "i9",
      title: "Car Yap",
      category: "EDITING STYLES · STUDIO/SET",
      pill: "EDITING STYLES",
      count: "2 videos",
      gradient: "from-purple-500 to-fuchsia-900"
    },
    {
      id: "j10",
      title: "Case Studies",
      category: "FORMATS",
      pill: "FORMATS",
      count: "5 videos",
      gradient: "from-blue-700 to-indigo-900"
    },
    {
      id: "k11",
      title: "Case Study",
      category: "SIGNATURE SERIES",
      pill: "SIGNATURE SERIES",
      count: "4 videos",
      gradient: "from-red-500 to-rose-900"
    },
    {
      id: "l12",
      title: "Challenge",
      category: "FORMATS",
      pill: "FORMATS",
      count: "8 videos",
      gradient: "from-blue-600 to-indigo-900"
    }
  ];

  return (
    <main className="p-10 pl-16 bg-[#fafafa] min-h-screen flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Collections</h1>
        <p className="text-gray-500 text-sm">Browse curated collections of standout videos grouped by format, hook, and story structure</p>
      </header>

      <div className="flex items-center justify-between mt-4">
        <div className="relative w-[400px]">
          <input 
            type="text" 
            placeholder="Search collections" 
            className="w-full bg-white border border-gray-200 rounded-lg py-2 pl-3 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-sm text-gray-700 font-medium hover:text-gray-900">
            <Tag className="w-4 h-4" /> Category
          </button>
          <button className="flex items-center gap-2 text-sm text-gray-700 font-medium hover:text-gray-900">
            <ArrowDownUp className="w-4 h-4" /> Sort by
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2">
        {collections.map((col) => (
          <Link href={`/collection/${col.id}`} key={col.id} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
            {/* Top Half (Gradient/Image) */}
            <div className={`h-48 bg-gradient-to-br ${col.gradient} p-4 flex flex-col items-center justify-center relative overflow-hidden`}>
              {/* Noise overlay simulation */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')"}}></div>
              
              <div className="absolute top-4 bg-black/30 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest z-10">
                {col.pill}
              </div>
              <h2 className="text-white text-3xl font-black text-center z-10 leading-tight drop-shadow-md">
                {col.title.includes(' ') ? (
                  <>
                    {col.title.split(' ')[0]} {col.title.split(' ')[1]}<br/>
                    {col.title.split(' ').slice(2).join(' ')}
                  </>
                ) : col.title}
              </h2>
            </div>
            
            {/* Bottom Half (Text) */}
            <div className="p-4 flex flex-col gap-1">
              <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">{col.category}</span>
              <h3 className="font-bold text-gray-900">{col.title}</h3>
              <span className="text-[11px] font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded w-fit mt-1">{col.count}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

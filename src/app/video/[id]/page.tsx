import { ArrowLeft, ArrowRight, Play, Mic, Beaker, Link2, BookOpen, Layout, Copy, CheckCircle2, Bookmark, FolderPlus, Download, ExternalLink, Trash2 } from "lucide-react";

export default function VideoDetailPage() {
  return (
    <main className="p-8 pl-16 bg-[#fafafa] min-h-screen">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold text-gray-900 max-w-3xl truncate">
          In my stories is the answer✨ #usa #auralytrend #manifestation #tarotcards #tarot
        </h1>
        <div className="flex items-center gap-2">
          <button className="p-2 border border-gray-200 rounded text-gray-400 hover:bg-gray-50"><ArrowLeft className="w-4 h-4" /></button>
          <button className="p-2 border border-gray-200 rounded text-gray-400 hover:bg-gray-50"><ArrowRight className="w-4 h-4" /></button>
        </div>
      </header>

      <div className="flex gap-8">
        {/* Left Column - Video & Actions */}
        <div className="w-[340px] flex flex-col gap-4 shrink-0">
          <div className="relative aspect-[9/16] bg-slate-900 rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center">
             <Play className="w-12 h-12 text-white opacity-80" />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500 px-2">
            <span>@rosea_amelia</span>
            <span>6d ago</span>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-between transition-colors">
            <span className="flex items-center gap-2">Create script</span>
            <span className="bg-white/20 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded">C</span>
          </button>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col">
            <ActionRow icon={<CheckCircle2 className="w-4 h-4 text-gray-400" />} label="Shortlisted idea" shortcut="S" />
            <ActionRow icon={<FolderPlus className="w-4 h-4 text-gray-400" />} label="Add to project" shortcut="A" />
            <ActionRow icon={<CheckCircle2 className="w-4 h-4 text-gray-400" />} label="Hook format saved" shortcut="H" />
            <ActionRow icon={<Download className="w-4 h-4 text-gray-400" />} label="Export for LLM" shortcut="E" />
            <ActionRow icon={<ExternalLink className="w-4 h-4 text-gray-400" />} label="Open in new tab" shortcut="O" />
            <ActionRow icon={<Trash2 className="w-4 h-4 text-gray-400" />} label="Remove from library" shortcut="R" borderBottom={false} />
          </div>
        </div>

        {/* Right Column - Analysis */}
        <div className="flex-1 flex flex-col gap-6">
          <section>
            <h2 className="text-sm font-bold text-gray-900 mb-2">Summary</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              The creator uses a lit candle and low-light setting to predict that a romantic interest will confess their feelings between 6 PM and 10 PM. The video instructs viewers to perform multiple engagement actions—saving, rewatching, and commenting—to 'claim' the energy, effectively boosting the video's reach. It ends by directing users to the profile picture for a mysterious hidden message, driving further profile traffic.
            </p>
          </section>

          <div className="bg-white border border-gray-200 rounded-lg p-2 flex items-center gap-2 w-max">
            <Tab icon={<Mic className="w-4 h-4" />} label="Transcript" active />
            <Tab icon={<Beaker className="w-4 h-4" />} label="Idea Analysis" />
            <Tab icon={<Link2 className="w-4 h-4" />} label="Hook" />
            <Tab icon={<BookOpen className="w-4 h-4" />} label="Storytelling Format" />
            <Tab icon={<Layout className="w-4 h-4" />} label="Visual Layout" />
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="border-b border-gray-100 p-4 flex items-center justify-between bg-gray-50/50">
              <div className="flex items-center gap-3">
                <Mic className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-gray-900">Transcript</h3>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">67 words</span>
              </div>
              <button className="text-gray-400 hover:text-gray-600"><Copy className="w-4 h-4" /></button>
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm leading-relaxed italic mb-4">
                Tomorrow he will unexpectedly talk to you about his feelings around six PM to ten PM because after the spell he'll text I miss you so much.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed italic mb-4">
                Don't believe me send this to yourself watch 3 times comment soul to claim this energy.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed italic">
                Then check my profile picture a lot of people get emotional when they see what I left there because deep down they already knew.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ActionRow({ icon, label, shortcut, borderBottom = true }: any) {
  return (
    <button className={`flex items-center justify-between p-3 px-4 hover:bg-gray-50 transition-colors ${borderBottom ? 'border-b border-gray-100' : ''}`}>
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
      <span className="border border-gray-200 text-gray-400 text-xs font-medium w-5 h-5 flex items-center justify-center rounded bg-gray-50">{shortcut}</span>
    </button>
  );
}

function Tab({ icon, label, active = false }: any) {
  return (
    <button className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}>
      {icon} {label}
    </button>
  );
}

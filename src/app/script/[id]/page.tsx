import { MoreVertical, Lightbulb, Beaker, Link2, FileText } from "lucide-react";

export default function ScriptDetailPage() {
  return (
    <main className="p-10 pl-16 bg-[#fafafa] min-h-screen flex flex-col gap-6">
      <header className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-gray-900">COPY 71 - True Love Redefined: Reputation and Well-being</h1>
        <button className="p-1 text-gray-400 hover:text-gray-600"><MoreVertical className="w-4 h-4" /></button>
      </header>

      <div className="bg-white border border-gray-200 rounded-xl p-2 flex items-center justify-between">
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white">
            <Lightbulb className="w-4 h-4" /> Topic
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
            <Beaker className="w-4 h-4" /> Research
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
            <Link2 className="w-4 h-4" /> Hook
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
            <FileText className="w-4 h-4" /> Script
          </button>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-6 rounded-lg transition-colors">
          Continue
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 flex gap-6">
        <div className="w-32 h-48 bg-slate-900 rounded-lg shrink-0 overflow-hidden relative">
           {/* Mock thumbnail */}
           <div className="absolute inset-0 flex items-center justify-center p-2 text-center text-xs text-white font-bold bg-black/40">
             REDEFINE I LOVE YOU
           </div>
        </div>
        <div className="flex flex-col gap-2 pt-2">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">REDEFINE 'I LOVE YOU' THROUGH ACTIONS TAKEN IN SECRET</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            The video challenges the standard definition of love, arguing that true love is defined by how one treats their partner's reputation and well-being in spaces where they aren't present. It distinguishes between performative affection and genuine integrity, labeling the former as a 'performance for an audience of one.'
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
          Maintain the hook and emotional development of this video, but make a curiosity transition at the end. Finish the script by leading the audience to click the link in my bio to answer 3 questions on my Soulmate Test, promising that the person's face will appear on screen in less than 2 minutes. USE THE CTA. Don't ignore this sign.
          comment face
          Check my stories or go to the pinned link in the comments, or look in your DMs to find out everything about your twin flame right now!
        </p>
      </div>
      
      <p className="text-xs text-gray-400">Topic can't be changed after script is created.</p>
    </main>
  );
}

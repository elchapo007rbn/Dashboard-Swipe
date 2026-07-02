"use client";

export default function PersonaPage() {
  return (
    <main className="p-10 pl-16 bg-[#fafafa] min-h-screen flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Persona</h1>
        <p className="text-gray-500 text-sm">Share information about your brand to personalize your experience</p>
      </header>

      <div className="bg-white border border-gray-200 rounded-xl p-8 mt-4 max-w-3xl">
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900">Brand Name</label>
            <input 
              type="text" 
              defaultValue="PERFIL - MONGE"
              className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900">Target Audience</label>
            <textarea 
              rows={3}
              placeholder="Who is your target audience?"
              className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900">Brand Voice</label>
            <textarea 
              rows={4}
              placeholder="Describe your brand voice and tone..."
              className="w-full bg-white border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button className="bg-gray-900 hover:bg-black text-white font-medium py-2 px-6 rounded-lg transition-colors text-sm">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

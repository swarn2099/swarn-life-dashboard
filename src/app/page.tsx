import { Calendar, Mail, Zap, Star } from "lucide-react";

export default function Home() {
  const lastUpdated = new Date().toLocaleTimeString();

  return (
    <main className="max-w-5xl mx-auto p-6 md:p-12 space-y-12 bg-black min-h-screen text-zinc-100">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-zinc-800 pb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-0.5 rounded bg-brand/10 text-brand text-[10px] font-black uppercase tracking-widest border border-brand/20">Executive Access</span>
          </div>
          <h1 className="text-6xl font-black tracking-tighter uppercase whitespace-nowrap">Swarn Singh</h1>
          <p className="text-zinc-500 font-mono text-sm tracking-[0.3em] mt-2 uppercase">Life Intelligence Dashboard • v1.1</p>
        </div>
        <div className="text-left md:text-right space-y-1">
          <div className="flex items-center md:justify-end gap-2">
            <div className="h-2 w-2 rounded-full bg-brand animate-pulse" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Status: Connected</span>
          </div>
          <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">Update: {lastUpdated} UTC</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* TOP PRIORITY: Intelligence / Email */}
        <section className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-[2.5rem] space-y-8 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="text-purple-500" size={24} />
              <h2 className="font-black text-xs uppercase tracking-[0.2em] text-zinc-400">Email Intelligence</h2>
            </div>
            <span className="text-[10px] font-bold text-zinc-600 uppercase font-mono">Auto-Scanning</span>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-2xl">
               <p className="text-[10px] font-black text-red-500 mb-2 uppercase tracking-widest">🚨 Action Required</p>
               <p className="text-sm font-bold text-zinc-100">NFL+ Payment Failed</p>
               <p className="text-[10px] text-zinc-500 mt-1">Resolution: Re-auth credit card</p>
            </div>
            <div className="p-4 bg-brand/5 border border-brand/20 rounded-2xl">
               <p className="text-[10px] font-black text-brand mb-2 uppercase tracking-widest">💼 Opportunity</p>
               <p className="text-sm font-bold text-zinc-100 uppercase">Sr. Backend @ Zapier</p>
               <p className="text-[10px] text-zinc-500 mt-1">Status: Replied / Tracking</p>
            </div>
             <div className="p-4 bg-zinc-800/30 border border-zinc-800 rounded-2xl">
               <p className="text-[10px] font-black text-zinc-500 mb-2 uppercase tracking-widest">🏦 Finance</p>
               <p className="text-sm font-bold text-zinc-100 leading-tight">Charles Schwab Tender Offer Alert</p>
               <p className="text-[10px] text-zinc-500 mt-1 font-mono">Action: Verify Tender Offer details</p>
            </div>
          </div>
        </section>

        {/* CULTURAL SCOUT: Events */}
        <section className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-[2.5rem] space-y-8 backdrop-blur-sm border-brand/10">
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-3">
              <Calendar className="text-brand" size={24} />
              <h2 className="font-black text-xs uppercase tracking-[0.2em] text-zinc-400">Chicago Nightlife</h2>
            </div>
            <TrendingUp size={16} className="text-brand opacity-50" />
          </div>

          <div className="space-y-6">
            <div className="group cursor-pointer">
              <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-1">Melodic Techno • Sat</p>
              <h3 className="text-lg font-black text-zinc-100 group-hover:text-brand transition-colors uppercase leading-none">Massano (Afterlife)</h3>
              <p className="text-[10px] text-zinc-500 mt-2 font-mono uppercase tracking-widest">Concord Music Hall • $30-$50</p>
            </div>

            <div className="group cursor-pointer">
              <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-1">Luxury House • Sat</p>
              <h3 className="text-lg font-black text-zinc-100 group-hover:text-brand transition-colors uppercase leading-none">CID (Serum Event)</h3>
              <p className="text-[10px] text-zinc-500 mt-2 font-mono uppercase tracking-widest">PRYSM Nightclub • $25-$45</p>
            </div>

            <div className="group cursor-pointer">
              <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-1">Bass/Tech Warehouse • Sat</p>
              <h3 className="text-lg font-black text-zinc-100 group-hover:text-brand transition-colors uppercase leading-none">Ray Volpe</h3>
              <p className="text-[10px] text-zinc-500 mt-2 font-mono uppercase tracking-widest">Radius Chicago • $40-$60</p>
            </div>

             <div className="p-4 bg-brand/10 border border-brand/20 rounded-2xl">
               <p className="text-[10px] font-black text-brand mb-1 uppercase italic tracking-widest">Tonight's Target</p>
               <h3 className="text-sm font-black text-white uppercase italic">Willie Lill's Happy Hour</h3>
               <p className="text-[10px] text-brand/70 mt-1 font-mono uppercase">StartTime: 9:30 PM</p>
            </div>
          </div>
        </section>

        {/* BUSINESS: Popup Status */}
        <section className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-[2.5rem] space-y-8 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Zap className="text-yellow-500" size={24} />
            <h2 className="font-black text-xs uppercase tracking-[0.2em] text-zinc-400">Project: Popup</h2>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em]">Active Registry</p>
              <p className="text-3xl font-black italic tracking-tighter leading-tight text-white uppercase">Bar Crawl N8XM5</p>
              <p className="text-[10px] text-brand font-bold tracking-widest uppercase">Status: Vault Hardened</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
               <div className="space-y-1">
                 <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Ancestry</p>
                 <p className="text-xs font-bold text-zinc-200 uppercase">CTE Enabled</p>
               </div>
               <div className="space-y-1 text-right">
                 <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Integrity</p>
                 <p className="text-xs font-bold text-zinc-200 uppercase">RLS Secure</p>
               </div>
            </div>

            <button className="w-full py-4 bg-zinc-100 hover:bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-widest transition-transform active:scale-95 shadow-xl">
              Launch Control Center →
            </button>
          </div>
        </section>
      </div>

      {/* FOOTER LUXURY SIGNATURE */}
      <footer className="pt-24 border-t border-zinc-900 flex justify-between items-center opacity-30">
        <div className="flex items-center gap-3">
           <Star size={12} className="text-brand fill-brand" />
           <p className="text-[10px] font-black uppercase tracking-[0.3em]">Chief of Lifestyle Module</p>
        </div>
        <p className="text-[10px] font-mono tracking-widest">{new Date().getFullYear()} © DESIGNED FOR SWARN</p>
      </footer>
    </main>
  );
}

import { Calendar, Mail, Pizza, Zap, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-12 space-y-16">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase">Swarn Singh</h1>
          <p className="text-zinc-500 font-mono text-sm tracking-widest mt-1 uppercase">Life Dashboard v1.0</p>
        </div>
        <div className="text-right">
          <div className="h-2 w-2 rounded-full bg-brand animate-pulse inline-block mr-2" />
          <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em]">System Live</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Popup Status */}
        <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl space-y-6">
          <div className="flex items-center gap-3">
            <Zap className="text-brand" size={20} />
            <h2 className="font-bold text-sm uppercase tracking-widest">Popup Business</h2>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-black italic">BAR CRAWL N8XM5</p>
            <p className="text-xs text-zinc-500 font-medium tracking-tight">Status: Seeding Phase</p>
          </div>
          <div className="pt-4 border-t border-zinc-800 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-zinc-400">
             <span>Registry Open</span>
             <span className="text-brand">Go to Dashboard →</span>
          </div>
        </section>

        {/* Social / Events */}
        <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl space-y-6">
          <div className="flex items-center gap-3">
            <Calendar className="text-blue-500" size={20} />
            <h2 className="font-bold text-sm uppercase tracking-widest">Events Scouting</h2>
          </div>
          <ul className="space-y-4 font-medium text-xs">
            <li className="flex justify-between text-zinc-300">
              <span>Orchids After Dark</span>
              <span className="text-zinc-500">Sat, 5pm</span>
            </li>
            <li className="flex justify-between text-zinc-300">
              <span>Y2K Dance Party</span>
              <span className="text-zinc-500">Tonight, 8pm</span>
            </li>
            <li className="flex justify-between text-brand">
              <span>Willie Lill's HH</span>
              <span className="font-black italic">9:30 PM</span>
            </li>
          </ul>
        </section>

        {/* Intelligence / Email */}
        <section className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl space-y-6 col-span-1 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Mail className="text-purple-500" size={20} />
            <h2 className="font-bold text-sm uppercase tracking-widest">Intelligence</h2>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
               <p className="text-[10px] font-bold text-red-500 mb-1 uppercase">Action Required</p>
               <p className="text-xs font-semibold text-zinc-100">NFL+ Subscription Failure</p>
            </div>
            <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
               <p className="text-[10px] font-bold text-green-500 mb-1 uppercase">Opportunity</p>
               <p className="text-xs font-semibold text-zinc-100">Senior Backend @ Zapier</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="pt-16 border-t border-zinc-900 flex justify-between items-center opacity-30">
        <p className="text-[10px] font-bold uppercase tracking-widest">Luna AI Chief of Lifestyle</p>
        <p className="text-[10px] font-bold uppercase tracking-widest">Chicago, IL • 2026</p>
      </footer>
    </main>
  );
}

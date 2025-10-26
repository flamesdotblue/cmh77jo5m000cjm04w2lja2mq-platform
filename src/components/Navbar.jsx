import React from 'react';
import { Phone, Bot } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-600 via-indigo-500 to-orange-400">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">AuriCall</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#docs" className="hover:text-white transition">Docs</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#demo"
              className="hidden md:inline-flex items-center gap-2 rounded-lg border border-white/15 px-3.5 py-2 text-sm text-white/90 hover:bg-white/5 transition"
            >
              <Phone className="h-4 w-4" />
              Book demo
            </a>
            <a
              href="#start"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-3.5 py-2 text-sm font-medium hover:bg-white/90 transition"
            >
              Start free trial
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

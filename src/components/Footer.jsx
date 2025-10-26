import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} AuriCall, Inc. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-xs text-white/60">
            <a href="#privacy" className="hover:text-white transition">Privacy</a>
            <a href="#terms" className="hover:text-white transition">Terms</a>
            <a href="#status" className="hover:text-white transition">Status</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

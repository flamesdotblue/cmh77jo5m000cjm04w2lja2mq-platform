import React from 'react';
import Spline from '@splinetool/react-spline';
import { Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-fuchsia-600/20 via-indigo-500/20 to-orange-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Live AI voice agent
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
              AI voice calling that handles inbound and outbound calls
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/80 leading-relaxed">
              Deploy lifelike, compliant voice agents that answer, route, and call your customers in seconds. Real-time transcription, CRM integration, and analytics included.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#start"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
              >
                Start free trial
                <Zap className="h-4 w-4" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm text-white/90 hover:bg-white/5 transition"
              >
                Schedule a demo
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-xs text-white/60">
              <div>14-day free trial</div>
              <div>Pay-as-you-go pricing</div>
              <div>GDPR & SOC 2 ready</div>
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

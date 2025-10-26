import React from 'react';
import { PhoneIncoming, PhoneOutgoing, Mic, Bot, Shield, Headphones, BarChart3, PlugZap } from 'lucide-react';

const features = [
  {
    title: 'Smart inbound routing',
    description:
      'Answer every call with a natural voice agent that routes based on intent, sentiment, and customer profile.',
    icon: PhoneIncoming,
  },
  {
    title: 'Predictive outbound dialer',
    description:
      'Launch campaigns that call leads automatically, leave voicemails, and hand off to humans when needed.',
    icon: PhoneOutgoing,
  },
  {
    title: 'Real-time ASR + TTS',
    description:
      'Studio-quality speech recognition and expressive voices with <300ms latency for human-like conversations.',
    icon: Mic,
  },
  {
    title: 'Agent brain',
    description:
      'Ground the agent with your docs, CRM, and APIs. Tools, memory, and guardrails keep it on task.',
    icon: Bot,
  },
  {
    title: 'Compliance & security',
    description:
      'PII redaction, consent workflows, encryption at rest and in transit, GDPR and SOC 2 controls.',
    icon: Shield,
  },
  {
    title: 'Human handoff',
    description:
      'Seamless transfer to human agents with context, transcripts, and call summaries in your helpdesk.',
    icon: Headphones,
  },
  {
    title: 'Analytics & QA',
    description:
      'Track CSAT, AHT, conversion, and intents. Auto-score calls and surface insights with dashboards.',
    icon: BarChart3,
  },
  {
    title: 'Plug into your stack',
    description:
      'Native connectors for Twilio, SIP, Salesforce, HubSpot, Zendesk, webhooks, and more.',
    icon: PlugZap,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need to automate voice</h2>
          <p className="mt-3 text-white/70">Build, deploy, and scale AI voice agents without the complexity. Bring your provider or use ours.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.05]"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-600/30 via-indigo-500/30 to-orange-400/30 ring-1 ring-white/10">
                  <f.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{f.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-6">
          <p className="text-white/80 text-sm">Ready to place your first call? Spin up a voice agent in under 5 minutes.</p>
          <div className="flex gap-3">
            <a href="#start" className="inline-flex items-center rounded-lg bg-white text-neutral-900 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition">Get started</a>
            <a href="#docs" className="inline-flex items-center rounded-lg border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/5 transition">Read the docs</a>
          </div>
        </div>
      </div>
    </section>
  );
}

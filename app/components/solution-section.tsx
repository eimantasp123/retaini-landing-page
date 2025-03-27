"use client";

import type React from "react";

import { Bell, Gift, Users, MessageSquare, Brain, BarChart3 } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 pr-0 lg:pr-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Retaini brings them back — <span className="text-emerald-500">automatically</span>.
            </h2>
            <p className="text-lg text-slate-700 max-w-xl">
              Our goal is simple: help you keep your best clients and bring in more just like them. Retaini makes it effortless.
            </p>
            <div className="pt-6">
              <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard
              icon={<Bell className="h-6 w-6" />}
              title="Automated Follow-ups"
              description="Send friendly reminders after 30, 60, or 90 days — set it and forget it."
              iconBgColor="bg-emerald-100"
              iconColor="text-emerald-500"
            />
            <FeatureCard
              icon={<Gift className="h-6 w-6" />}
              title="Loyalty Rewards"
              description="Give points for visits, reward repeat clients with discounts or perks."
              iconBgColor="bg-blue-100"
              iconColor="text-blue-500"
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Referral System"
              description="Let happy clients share a unique code — both sides get rewarded."
              iconBgColor="bg-purple-100"
              iconColor="text-purple-500"
            />
            <FeatureCard
              icon={<MessageSquare className="h-6 w-6" />}
              title="Thank You Messages"
              description="Show appreciation and professionalism with automatic follow-ups."
              iconBgColor="bg-amber-100"
              iconColor="text-amber-500"
            />
            <FeatureCard
              icon={<Brain className="h-6 w-6" />}
              title="Client Notes & History"
              description="Track visit history, preferences, and personal notes — all in one place."
              iconBgColor="bg-rose-100"
              iconColor="text-rose-500"
            />
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6" />}
              title="Client Insights"
              description="See who's loyal, who's at risk, and how your retention is improving."
              iconBgColor="bg-indigo-100"
              iconColor="text-indigo-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

function FeatureCard({ icon, title, description, iconBgColor, iconColor }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100">
      <div className={`${iconBgColor} ${iconColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>{icon}</div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

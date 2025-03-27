import { AlertCircle, Calendar, Clock, CreditCard, MessageSquare, Users } from "lucide-react";
import React from "react";

const WhyClients = () => {
  return (
    <section className="w-full py-12 md:py-24 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl ">
            You&apos;re great at what you do. But do your clients remember to come back?
          </h2>
          <p className="text-muted-foreground md:text-lg max-w-[800px]">
            Even the best businesses struggle with client retention. Here&apos;s why:
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg  border border-neutral-200 hover:shadow-sm transition-shadow">
            <div className="p-3 rounded-full bg-neutral-200 mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Booking Amnesia</h3>
            <p className="text-muted-foreground text-neutral-700 text-center">
              Clients forget to book again after the first visit, leaving gaps in your schedule.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg  border border-neutral-200 hover:shadow-sm transition-shadow">
            <div className="p-3 rounded-full bg-neutral-200 mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Follow-up Time</h3>
            <p className="text-muted-foreground text-neutral-700 text-center">
              You&apos;re too busy serving clients to manually follow up with everyone who needs to return.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg  border border-neutral-200 hover:shadow-sm transition-shadow">
            <div className="p-3 rounded-full bg-neutral-200 mb-4">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Loyalty Card Limbo</h3>
            <p className="text-muted-foreground text-neutral-700 text-center">
              Physical loyalty cards get lost or forgotten, making your retention program ineffective.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg  border border-neutral-200 hover:shadow-sm transition-shadow">
            <div className="p-3 rounded-full bg-neutral-200 mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Referral Reluctance</h3>
            <p className="text-muted-foreground text-neutral-700 text-center">
              Missed opportunities to ask satisfied clients for referrals to grow your business.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg  border border-neutral-200 hover:shadow-sm transition-shadow">
            <div className="p-3 rounded-full bg-neutral-200 mb-4">
              <AlertCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Client Tracking Troubles</h3>
            <p className="text-muted-foreground text-neutral-700 text-center">
              It&apos;s hard to identify who&apos;s returning regularly and who&apos;s drifting away without proper tracking
              systems.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg  border border-neutral-200 hover:shadow-sm transition-shadow">
            <div className="p-3 rounded-full bg-neutral-200 mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Inconsistent Communication</h3>
            <p className="text-muted-foreground text-neutral-700 text-center">
              Sporadic, unprofessional messaging leaves clients feeling forgotten between appointments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyClients;

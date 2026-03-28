import type { Metadata } from "next";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply Now | Summit Fundings",
  description:
    "Apply for business funding in minutes. Fast approvals, multiple options, no obligation.",
};

export default function ApplyPage() {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-ice">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Apply for Business Funding
          </h1>
          <p className="text-steel text-lg">
            Complete the form below to get matched with the best funding options.
            No hard credit pull, no obligations.
          </p>
        </div>
        <ApplicationForm />
      </div>
    </section>
  );
}

"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = ["Business Info", "Owner Info", "Funding Details"];

const industries = [
  "Restaurant / Food Service",
  "Retail",
  "E-Commerce",
  "Trucking / Transportation",
  "Construction",
  "Healthcare / Medical",
  "Salon / Spa",
  "Hospitality / Hotel",
  "Professional Services",
  "Auto Repair",
  "Fitness / Gym",
  "Manufacturing",
  "Real Estate",
  "Other",
];

const creditRanges = [
  "Excellent (720+)",
  "Good (680-719)",
  "Fair (620-679)",
  "Below Average (580-619)",
  "Poor (below 580)",
  "Not Sure",
];

const useOfFundsOptions = [
  "Working Capital",
  "Equipment Purchase",
  "Inventory",
  "Expansion",
  "Payroll",
  "Debt Consolidation",
  "Marketing",
  "Renovation",
  "Other",
];

type FormData = {
  // Business
  businessName: string;
  businessStreet: string;
  businessCity: string;
  businessState: string;
  businessZip: string;
  businessPhone: string;
  businessEmail: string;
  ein: string;
  dateEstablished: string;
  industry: string;
  monthlyRevenue: string;
  // Owner
  ownerName: string;
  ownerTitle: string;
  ownerSSNLast4: string;
  ownerDOB: string;
  ownerStreet: string;
  ownerCity: string;
  ownerState: string;
  ownerZip: string;
  ownerPhone: string;
  ownerEmail: string;
  // Funding
  requestedAmount: string;
  useOfFunds: string;
  creditScore: string;
  hasLiens: string;
  lienDetails: string;
  bankName: string;
};

const initialData: FormData = {
  businessName: "",
  businessStreet: "",
  businessCity: "",
  businessState: "",
  businessZip: "",
  businessPhone: "",
  businessEmail: "",
  ein: "",
  dateEstablished: "",
  industry: "",
  monthlyRevenue: "",
  ownerName: "",
  ownerTitle: "",
  ownerSSNLast4: "",
  ownerDOB: "",
  ownerStreet: "",
  ownerCity: "",
  ownerState: "",
  ownerZip: "",
  ownerPhone: "",
  ownerEmail: "",
  requestedAmount: "",
  useOfFunds: "",
  creditScore: "",
  hasLiens: "",
  lienDetails: "",
  bankName: "",
};

function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = true,
  error,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all"
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
  required = true,
  error,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-navy focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all appearance-none"
      >
        <option value="">Select...</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateStep = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};

    if (step === 0) {
      if (!form.businessName.trim()) errs.businessName = "Required";
      if (!form.businessStreet.trim()) errs.businessStreet = "Required";
      if (!form.businessCity.trim()) errs.businessCity = "Required";
      if (!form.businessState.trim()) errs.businessState = "Required";
      if (!form.businessZip.trim()) errs.businessZip = "Required";
      if (!form.businessPhone.trim()) errs.businessPhone = "Required";
      if (!form.businessEmail.trim()) errs.businessEmail = "Required";
      if (!form.industry) errs.industry = "Required";
      if (!form.monthlyRevenue.trim()) errs.monthlyRevenue = "Required";
    } else if (step === 1) {
      if (!form.ownerName.trim()) errs.ownerName = "Required";
      if (!form.ownerPhone.trim()) errs.ownerPhone = "Required";
      if (!form.ownerEmail.trim()) errs.ownerEmail = "Required";
      if (!form.ownerDOB) errs.ownerDOB = "Required";
    } else if (step === 2) {
      if (!form.requestedAmount.trim()) errs.requestedAmount = "Required";
      if (!form.useOfFunds) errs.useOfFunds = "Required";
      if (!form.creditScore) errs.creditScore = "Required";
      if (!form.hasLiens) errs.hasLiens = "Required";
      if (!form.bankName.trim()) errs.bankName = "Required";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => {
    if (validateStep()) setStep((s) => Math.min(s + 1, 2));
  };

  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/submit-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submission failed");

      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or call us at (313) 351-7477.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-xl p-10 text-center"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-navy mb-3">Application Submitted!</h2>
        <p className="text-steel mb-6 max-w-md mx-auto">
          Thank you for your application. A funding specialist from Summit
          Fundings will review your information and contact you within 24 hours.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-all"
        >
          Back to Home
        </a>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Progress Bar */}
      <div className="px-8 pt-8">
        <div className="flex items-center justify-between mb-2">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center flex-1">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    i <= step
                      ? "bg-navy text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {i < step ? "✓" : i + 1}
                </div>
                <span
                  className={`text-sm font-medium hidden sm:block ${
                    i <= step ? "text-navy" : "text-gray-400"
                  }`}
                >
                  {s}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`flex-1 h-0.5 mx-3 ${
                    i < step ? "bg-navy" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            {step === 0 && (
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-navy mb-1">Business Information</h3>
                <p className="text-steel text-sm mb-4">Tell us about your business.</p>
                <Input label="Business Name" name="businessName" value={form.businessName} onChange={update} error={errors.businessName} placeholder="e.g. ABC Restaurant LLC" />
                <Input label="Street Address" name="businessStreet" value={form.businessStreet} onChange={update} error={errors.businessStreet} placeholder="123 Main St" />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <Input label="City" name="businessCity" value={form.businessCity} onChange={update} error={errors.businessCity} />
                  </div>
                  <Input label="State" name="businessState" value={form.businessState} onChange={update} error={errors.businessState} placeholder="MI" maxLength={2} />
                  <Input label="ZIP" name="businessZip" value={form.businessZip} onChange={update} error={errors.businessZip} placeholder="48201" maxLength={5} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Business Phone" name="businessPhone" type="tel" value={form.businessPhone} onChange={update} error={errors.businessPhone} placeholder="(313) 555-0100" />
                  <Input label="Business Email" name="businessEmail" type="email" value={form.businessEmail} onChange={update} error={errors.businessEmail} placeholder="info@yourbusiness.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Federal Tax ID / EIN" name="ein" value={form.ein} onChange={update} required={false} placeholder="XX-XXXXXXX" />
                  <Input label="Date Established" name="dateEstablished" type="date" value={form.dateEstablished} onChange={update} required={false} />
                </div>
                <Select label="Industry / Business Type" name="industry" value={form.industry} onChange={update} options={industries} error={errors.industry} />
                <Input label="Average Monthly Revenue" name="monthlyRevenue" value={form.monthlyRevenue} onChange={update} error={errors.monthlyRevenue} placeholder="$25,000" />
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-navy mb-1">Owner Information</h3>
                <p className="text-steel text-sm mb-4">Tell us about the business owner.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Full Name" name="ownerName" value={form.ownerName} onChange={update} error={errors.ownerName} placeholder="John Doe" />
                  <Input label="Title" name="ownerTitle" value={form.ownerTitle} onChange={update} required={false} placeholder="CEO, Owner, etc." />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="SSN (Last 4 Digits)" name="ownerSSNLast4" value={form.ownerSSNLast4} onChange={update} required={false} placeholder="1234" maxLength={4} />
                  <Input label="Date of Birth" name="ownerDOB" type="date" value={form.ownerDOB} onChange={update} error={errors.ownerDOB} />
                </div>
                <Input label="Home Street Address" name="ownerStreet" value={form.ownerStreet} onChange={update} required={false} placeholder="456 Oak Ave" />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <Input label="City" name="ownerCity" value={form.ownerCity} onChange={update} required={false} />
                  </div>
                  <Input label="State" name="ownerState" value={form.ownerState} onChange={update} required={false} placeholder="MI" maxLength={2} />
                  <Input label="ZIP" name="ownerZip" value={form.ownerZip} onChange={update} required={false} placeholder="48201" maxLength={5} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input label="Phone" name="ownerPhone" type="tel" value={form.ownerPhone} onChange={update} error={errors.ownerPhone} placeholder="(313) 555-0100" />
                  <Input label="Email" name="ownerEmail" type="email" value={form.ownerEmail} onChange={update} error={errors.ownerEmail} placeholder="john@email.com" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-navy mb-1">Funding Details</h3>
                <p className="text-steel text-sm mb-4">Tell us about your funding needs.</p>
                <Input label="Requested Funding Amount" name="requestedAmount" value={form.requestedAmount} onChange={update} error={errors.requestedAmount} placeholder="$50,000" />
                <Select label="Use of Funds" name="useOfFunds" value={form.useOfFunds} onChange={update} options={useOfFundsOptions} error={errors.useOfFunds} />
                <Select label="Estimated Credit Score" name="creditScore" value={form.creditScore} onChange={update} options={creditRanges} error={errors.creditScore} />
                <div>
                  <label className="block text-sm font-medium text-navy mb-1.5">
                    Current Liens or Advances? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    {["Yes", "No"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="hasLiens"
                          value={opt}
                          checked={form.hasLiens === opt}
                          onChange={update}
                          className="w-4 h-4 text-navy focus:ring-navy"
                        />
                        <span className="text-sm text-navy">{opt}</span>
                      </label>
                    ))}
                  </div>
                  {errors.hasLiens && <p className="text-red-500 text-xs mt-1">{errors.hasLiens}</p>}
                </div>
                {form.hasLiens === "Yes" && (
                  <Input
                    label="Lien/Advance Details"
                    name="lienDetails"
                    value={form.lienDetails}
                    onChange={update}
                    required={false}
                    placeholder="e.g. $20,000 remaining on current MCA"
                  />
                )}
                <Input label="Bank Name" name="bankName" value={form.bankName} onChange={update} error={errors.bankName} placeholder="Chase, Bank of America, etc." />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
          {step > 0 ? (
            <button
              type="button"
              onClick={prev}
              className="px-6 py-3 text-navy font-semibold hover:bg-gray-50 rounded-xl transition-colors"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < 2 ? (
            <button
              type="button"
              onClick={next}
              className="px-8 py-3 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-all shadow-lg"
            >
              Continue →
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="px-8 py-3 bg-navy text-white font-semibold rounded-xl hover:bg-navy-light transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>

        {submitError && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm text-center">
            {submitError}
          </div>
        )}
      </form>
    </div>
  );
}

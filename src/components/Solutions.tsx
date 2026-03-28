"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    icon: "💰",
    title: "Merchant Cash Advances",
    desc: "Get a lump sum of capital in exchange for a percentage of future sales. Flexible repayment that adjusts with your revenue.",
  },
  {
    icon: "📈",
    title: "Working Capital Financing",
    desc: "Keep your business running smoothly with short-term capital for payroll, inventory, marketing, and day-to-day operations.",
  },
  {
    icon: "🏗️",
    title: "Equipment Financing",
    desc: "Acquire the equipment you need to grow without draining your cash reserves. Competitive rates and flexible terms.",
  },
  {
    icon: "📋",
    title: "Term Loans",
    desc: "Traditional business loans with fixed monthly payments, competitive interest rates, and terms up to 5 years.",
  },
  {
    icon: "🔄",
    title: "Revenue-Based Financing",
    desc: "Borrow based on your monthly revenue with payments that flex with your business performance. No fixed payments.",
  },
  {
    icon: "⚡",
    title: "Same-Day / Next-Day Funding",
    desc: "Need capital urgently? Our expedited funding options can put money in your account in as little as 24 hours.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-ice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Funding Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-navy mb-6"
          >
            Flexible Funding for Every Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-steel"
          >
            From merchant cash advances to equipment financing, we match your
            business with the right type of funding.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-navy/20 hover:shadow-xl transition-all duration-300"
            >
              <span className="text-4xl mb-5 block">{s.icon}</span>
              <h3 className="text-lg font-bold text-navy mb-3">{s.title}</h3>
              <p className="text-steel text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: "💰",
    title: "Merchant Cash Advances",
    desc: "Lump sum capital, repay from future sales. Fast approval.",
  },
  {
    icon: "📈",
    title: "Working Capital",
    desc: "Short-term cash flow for payroll, inventory, and operations.",
  },
  {
    icon: "🏗️",
    title: "Equipment Financing",
    desc: "Fund equipment purchases — the equipment is your collateral.",
  },
  {
    icon: "📋",
    title: "Term Loans",
    desc: "Fixed payments, predictable schedule, 3–60 month terms.",
  },
  {
    icon: "🔄",
    title: "Revenue-Based Financing",
    desc: "Payments flex with your revenue. No fixed payment stress.",
  },
  {
    icon: "⚡",
    title: "Same-Day Funding",
    desc: "When you can't wait — funds as fast as the same day.",
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
            Multiple funding options, one simple application.
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center text-navy font-semibold hover:text-accent transition-colors text-base"
          >
            View All Solutions →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const benefits = [
  { title: "No Upfront Fees", desc: "We never charge you to apply or get matched with a lender." },
  { title: "All Credit Types Welcome", desc: "Bad credit, limited history, or perfect scores — we work with everyone." },
  { title: "Fast Decisions", desc: "Get pre-approved in hours, not weeks. We move at the speed of business." },
  { title: "Dedicated Support", desc: "A real funding specialist guides you through the entire process." },
  { title: "Transparent Process", desc: "No hidden fees, no surprises. You'll know exactly what you're getting." },
  { title: "Flexible Repayment", desc: "Choose from daily, weekly, or monthly repayment options that fit your cash flow." },
];

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4"
            >
              Why Summit Fundings
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-navy mb-6"
            >
              The Smarter Way to Fund Your Business
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-steel mb-8 leading-relaxed"
            >
              Working with a broker means you get access to more options, better
              rates, and expert guidance — all at no cost to you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/apply"
                className="inline-flex items-center px-8 py-4 bg-navy text-white font-bold rounded-xl hover:bg-navy-light transition-all shadow-lg hover:shadow-xl text-base"
              >
                Get Started Today
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-ice rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-navy mb-2">{b.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

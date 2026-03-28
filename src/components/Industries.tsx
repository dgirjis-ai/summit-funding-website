"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const industries = [
  { icon: "🍽️", name: "Restaurants" },
  { icon: "🛍️", name: "Retail" },
  { icon: "🛒", name: "E-Commerce" },
  { icon: "🚛", name: "Trucking" },
  { icon: "🏗️", name: "Construction" },
  { icon: "🏥", name: "Healthcare" },
  { icon: "💇", name: "Salons & Spas" },
  { icon: "🏨", name: "Hospitality" },
  { icon: "💼", name: "Professional Services" },
  { icon: "🔧", name: "Auto Repair" },
  { icon: "🏋️", name: "Fitness & Gyms" },
  { icon: "🏭", name: "Manufacturing" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4"
          >
            Industries We Serve
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-navy mb-6"
          >
            We Fund Businesses Across Every Industry
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center bg-ice rounded-2xl p-6 md:p-8 hover:bg-navy hover:text-white group transition-all duration-300 cursor-default"
            >
              <span className="text-3xl md:text-4xl mb-3">{ind.icon}</span>
              <span className="text-sm md:text-base font-semibold text-navy group-hover:text-white transition-colors text-center">
                {ind.name}
              </span>
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
            href="/industries"
            className="inline-flex items-center text-navy font-semibold hover:text-accent transition-colors text-base"
          >
            See All Industries →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

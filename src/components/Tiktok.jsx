import React, { useState } from "react";
import { motion } from "framer-motion";
import { Posts } from "./CategoryPosts";
import { companyTabs } from "../data/companyTabs.js";

export function InstagramSection() {
  

  const [activeTab, setActiveTab] = useState(companyTabs[0].id);


  const activeCompany = companyTabs.find((company) => company.id === activeTab);
  const currentPosts = activeCompany?.posts || [];



  return (
    <section className="relative w-full z-20 overflow-hidden bg-black pt-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 text-white">
        <div className="w-full px-4">
          <motion.div 
                                  initial={{ opacity: 0, y: 40 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1 }}
                                  className="text-center"
                              >
                                  <h2 className="mt-4 pb-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj"> Empresas que ya potenciaron su imagen con nosotros.</h2>
                                  <p className="text-lg font-medium text-gray-400 font-pj pb-12"> Grandes organizaciones coinciden en la calidad que entregamos en cada proyecto.</p>
          
                              </motion.div>
          <div className="mb-6 flex flex-row items-center justify-center gap-4">
            {companyTabs.map((company) => {
              const isActive = company.id === activeTab;
              return (
                <button
                  key={company.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(company.id);
                  }}
                  className={`flex items-center gap-3 rounded-3xl border p-2 md:p-4 transition-all duration-300 hover:border-cyan-400/50 ${
                    isActive
                      ? "[border:1px_solid_transparent] [background-image:linear-gradient(to_right,#09090b,#09090b),linear-gradient(to_right,#06b6d4,#a855f7)] [background-clip:padding-box,border-box] [background-origin:padding-box,border-box] shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="flex h-12 w-16 md:w-26 items-center justify-center">
                    <img src={company.logo} alt={`${company.name} logo`} className="object-cover" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-semibold text-white">{company.name}</p>
                    <p className="text-[11px] text-gray-400">Ver publicaciones</p>
                  </div>
                </button>
              );
            })}
          </div>
            <Posts
            currentPosts={currentPosts}
          />
          
        </div>
      </div>
    </section>
  );
}
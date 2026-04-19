import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | Z&Z Renewable";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "The terms and conditions governing your use of our website and services.");
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="container-x">
          <SectionHeader 
            title="Terms of Service"
            subtitle="Please read these terms carefully before using our services."
            align="left"
          />
          
          <div className="mt-16 max-w-4xl policy-content">
            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 italic">1. Agreement to Terms</h2>
                <p className="leading-relaxed">
                  By accessing or using our website, you agree to <strong>be bound by these Terms of Service</strong> and all <em>applicable laws and regulations</em>. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 italic">2. Use License</h2>
                <p className="leading-relaxed">
                  Permission is granted to <em>temporarily download one copy</em> of the materials (information or software) on Z&Z Renewable's website for <strong>personal, non-commercial transitory viewing only</strong>.
                </p>
                <p className="mt-4 leading-relaxed">
                  This license shall <strong>automatically terminate</strong> if you violate any of these restrictions and may be terminated by Z&Z Renewable at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 italic">3. Disclaimer</h2>
                <p className="leading-relaxed">
                  The materials on Z&Z Renewable's website are provided on an <em>'as is' basis</em>. Z&Z Renewable makes <strong>no warranties, expressed or implied</strong>, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 italic">4. Limitations</h2>
                <p className="leading-relaxed">
                  In no event shall Z&Z Renewable or its suppliers be liable for <strong>any damages</strong> (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Z&Z Renewable's website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 italic">5. Accuracy of Materials</h2>
                <p className="leading-relaxed">
                  The materials appearing on Z&Z Renewable's website could include <em>technical, typographical, or photographic errors</em>. Z&Z Renewable does <strong>not warrant</strong> that any of the materials on its website are accurate, complete, or current.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 italic">6. Links</h2>
                <p className="leading-relaxed">
                  Z&Z Renewable has <em>not reviewed all of the sites</em> linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link <strong>does not imply endorsement</strong> by Z&Z Renewable of the site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 italic">7. Governing Law</h2>
                <p className="leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws and you <strong>irrevocably submit to the exclusive jurisdiction</strong> of the courts in that State or location.
                </p>
                <p className="mt-8 text-navy/40 text-sm">
                  Last Updated: <strong>April 19, 2026</strong>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

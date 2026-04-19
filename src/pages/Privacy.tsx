import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | Z&Z Renewable";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Our commitment to your privacy and how we handle your data.");
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="container-x">
          <SectionHeader 
            title="Privacy Policy"
            subtitle="Your trust is our most valuable asset. Learn how we protect and manage your information."
            align="left"
          />
          
          <div className="mt-16 max-w-4xl policy-content">
            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 italic">1. Information We Collect</h2>
                <p className="leading-relaxed">
                  We collect information that you provide directly to us when you request a consultation, sign up for our newsletter, or contact us through our website. This may include your <em>name</em>, <em>email address</em>, <em>phone number</em>, and <strong>property address</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 italic">2. How We Use Your Information</h2>
                <p className="leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                  <li><strong>Provide, maintain, and improve</strong> our services.</li>
                  <li>Process your requests and schedule consultations.</li>
                  <li>Send you <em>technical notices</em>, updates, and support messages.</li>
                  <li>Communicate with you about <strong>products, services, and events</strong>.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 italic">3. Data Security</h2>
                <p className="leading-relaxed">
                  We implement <strong>reasonable security measures</strong> to protect the security of your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is <em>100% secure</em>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 italic">4. Disclosure of Information</h2>
                <p className="leading-relaxed">
                  We <strong>do not sell, trade, or otherwise transfer</strong> your personal information to outside parties except to provide our services or comply with the law. This does not include trusted third parties who assist us in operating our website or conducting our business, as long as those parties agree to keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 italic">5. Your Rights</h2>
                <p className="leading-relaxed">
                  You have the right to <strong>access, correct, or delete</strong> your personal information. If you would like to exercise any of these rights, please contact us at <em>hello@zzrenewable.com</em>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-semibold mb-4 italic">6. Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
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

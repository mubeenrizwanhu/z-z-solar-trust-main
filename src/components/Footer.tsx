import { Logo } from "./Logo";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-x py-14 md:py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            <Logo variant="white" />
            <p className="mt-5 text-[14.5px] text-white/65 max-w-sm leading-relaxed">
              Premium residential solar design and installation. Engineered systems, transparent financing, white-glove service.
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-[0.14em]">Contact</h4>
            <ul className="mt-4 space-y-3 text-[14.5px]">
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> (555) 010-0240</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> hello@zzrenewable.com</li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-gold" /> Serving the greater metro area</li>
              <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-gold" /> Mon–Sat · 8am to 6pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-[12.5px] text-white/55">
          <div>© {new Date().getFullYear()} Z&amp;Z Renewable. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

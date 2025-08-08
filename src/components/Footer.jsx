import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-green-900 text-white pt-16 pb-8 px-4 md:px-12 ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-300">
              We are a community-driven platform promoting local social events
              like tree plantations, cleanups, blood drives, and more.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Create Event
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Join Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail size={16} /> support@communityevents.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +1 (123) 456-7890
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> 123 Green Street, Earthtown
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-300 transition">
                <Facebook />
              </a>
              <a href="#" className="hover:text-green-300 transition">
                <Instagram />
              </a>
              <a href="#" className="hover:text-green-300 transition">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-400 pt-6">
          © {new Date().getFullYear()} Community Events Platform. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

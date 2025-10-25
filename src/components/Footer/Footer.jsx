
import React from "react";
import { FacebookIcon, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-2">CS — Ticket System</h3>
            <p className="text-sm text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm text-gray-400">
                <li><a href="">About Us</a></li>
                <li><a href="">Our Mission</a></li>
                <li><a href="">Contact Administrator</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm text-gray-400">
                <li><a href="">Education & Services</a></li>
                <li><a href="">Student Stories</a></li>
                <li><a href="">Contact Saled</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm text-gray-400">
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms & Conditions</a></li>
                <li><a href="">Join Us</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                 <Twitter /> <a href="">@CS — Ticket System</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin /> <a href="">@CS — Ticket System</a>
              </li>
              <li className="flex items-center gap-2">
                <FacebookIcon />  <a href=""><span>@CS — Ticket System</span></a>
              </li>
              <li className="flex items-center gap-2">
                <Mail /> <a href="mailto:support@ph.com">support@ph.com</a> 
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-left md:text-center text-gray-500 text-sm mt-6">
          © 2025 CS — Ticket System. All rights reserved.
          <br className="block md:hidden" />
        </div>
    </footer>
  );
};

export default Footer;

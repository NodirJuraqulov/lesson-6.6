import React from 'react'
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-15">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">MyWebsite</h2>
          <p className="text-gray-400">
            Biz foydalanuvchilarga zamonaviy va samarali web yechimlar taqdim etamiz.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Foydali havolalar</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition">Bosh sahifa</a></li>
            <li><a href="#" className="hover:text-white transition">Biz haqimizda</a></li>
            <li><a href="#" className="hover:text-white transition">Aloqa</a></li>
            <li><a href="#" className="hover:text-white transition">Maxfiylik siyosati</a></li>
          </ul>
        </div>

        {/* Social media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Ijtimoiy tarmoqlar</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-5 h-5 hover:text-blue-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-5 h-5 hover:text-sky-400 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="w-5 h-5 hover:text-gray-400 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MyWebsite. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  )
}

export default React.memo(Footer)
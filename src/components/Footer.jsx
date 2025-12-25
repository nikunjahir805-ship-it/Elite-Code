import React from "react"
import { Twitter, Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 text-gray-400">
      <div className="border border-blue-800"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Logo" className='h-9 w-9 sm:h-16 sm:w-16'/>
              <span className="text-white text-lg font-semibold">
                Elite<span className="text-red-600">Code</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Transform your workflow with AI-powered tools and automation.
              Built for modern teams.
            </p>

            <div className="flex items-center gap-3">
              <a className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
                <Github className="w-4 h-4 text-white" />
              </a>
              <a className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition">
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>Security</li>
              <li>Roadmap</li>
              <li>Changelog</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Partners</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>API Reference</li>
              <li>Status</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Cookie Policy</li>
              <li>Licenses</li>
              <li>Compliance</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <span>© 2025 EliteCode. All rights reserved.</span>

          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

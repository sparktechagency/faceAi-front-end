"use client";

import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <div className="relative min-h-[calc(100vh-80px)]  ">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Purple gradient orb top right */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        {/* Blue gradient orb */}
        <div className="absolute top-1/2 -left-32 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-1/3 text-purple-500/20">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="30" opacity="0.3" />
            <circle cx="50" cy="50" r="20" opacity="0.2" />
            <circle cx="50" cy="50" r="10" opacity="0.1" />
          </svg>
        </div>

        {/* Lightning bolt decoration */}
        <div className="absolute top-64 right-1/4 text-purple-500/30 animate-pulse">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
            <polygon points="30,10 45,35 30,35 40,55 20,30 30,30" />
          </svg>
        </div>

        {/* Floating star decoration */}
        <div className="absolute bottom-1/3 left-1/4 text-purple-400/20 animate-pulse">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
            <polygon points="25,5 30,20 45,20 33,30 38,45 25,35 12,45 17,30 5,20 20,20" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10  px-4 sm:px-6 lg:px-8 py-20 flex items-center justify-between min-h-[calc(100vh-80px)]">
        {/* Left content */}
        <div className="flex-1 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-[#F3E8FF] border border-purple-500/30">
            <div className="w-2 h-2 rounded-full bg-[#8200DB]"></div>
            <span className="text-sm font-medium text-[#8200DB]">
              Transform Your Appearance
            </span>
          </div>

          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight text-balance">
              Transform Your Appearance
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                With AI
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
            Start your hair and skincare journey with AI analysis and
            personalized recommendations to naturally enhance your features.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 mb-16 flex-wrap">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/50">
              Start Free Analysis
            </button>
            <button className="px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/5 transition-all duration-200 flex items-center gap-2">
              Watch Demo
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-12">
            <div>
              <div className="text-2xl font-bold text-white">50k+</div>
              <p className="text-sm text-gray-400">Active Users</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">200k+</div>
              <p className="text-sm text-gray-400">Scans Completed</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">4.8/5</div>
              <p className="text-sm text-gray-400">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Right side - Image placeholder */}
        <div className="hidden lg:flex flex-1 items-center justify-center relative">
          {/* Decorative border shape */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-transparent rounded-3xl border border-purple-500/20 blur-xl"></div>

          {/* Main card */}
          <div className="relative w-80 h-96 rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl">
            {/* Gradient overlay corners */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-600/40 to-transparent rounded-full filter blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-full filter blur-2xl"></div>

            {/* Image placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
              <div className="text-center text-gray-400">
                <svg
                  className="w-16 h-16 mx-auto mb-4 opacity-50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {/* <p className="text-sm font-medium">Image Placeholder</p> */}
              </div>

              {/* Mesh/grid overlay effect */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, 0.15) 25%, rgba(139, 92, 246, 0.15) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.15) 75%, rgba(139, 92, 246, 0.15) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, 0.15) 25%, rgba(139, 92, 246, 0.15) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.15) 75%, rgba(139, 92, 246, 0.15) 76%, transparent 77%, transparent)",
                    backgroundSize: "50px 50px",
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Glow effect behind card */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/10 rounded-3xl filter blur-3xl opacity-50"></div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function ChoosingStickyBlog({ onSearch }) {

    return (
        <div className="sticky top-20 z-40 bg-[#0a0a0a] backdrop-blur-xl border-b border-[#262626]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            placeholder="ابحث في المقالات..."
                            onChange={(e) => onSearch(e.target.value)}
                            className="w-full h-13 bg-[#0a0a0a] text-white placeholder:text-neutral-500 border border-[#262626] rounded-xl px-5 pl-12 outline-none transition-all duration-300 hover:border-orange-500/50 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 text-right"
                        />

                        <svg
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500 pointer-events-none"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">

                        <Link
                            to="/blog"
                            className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white inline-block"
                        >
                            جميع المقالات
                        </Link>

                        <Link
                            to="/light"
                            className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 inline-block"
                        >
                            إضاءة
                        </Link>


                        <Link
                            to="/bortreh"
                            className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 inline-block"
                        >
                            بورتريه
                        </Link>

                        <Link
                            to="/light"
                            className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 inline-block"
                        >
                            مناظر طبيعيه
                        </Link>

                        <Link
                            to="/bortreh"
                            className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 inline-block"
                        >
                            تقنيات
                        </Link>

                        <Link
                            to="/light"
                            className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30 inline-block"
                        >
                            إضاءة
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

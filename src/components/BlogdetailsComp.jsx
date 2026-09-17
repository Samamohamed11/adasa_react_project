import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import UpperFromBlog from './UpperFromBlog'
import ChoosingStickyBlog from './choosing-sticky-blog'
import postsData from "../data/posts.json";

export default function BlogdetailsComp() {
  const posts = postsData.posts;
const postsPerPage = 6;

const [search, setSearch] = useState("");

const filteredPosts = posts.filter((post) =>
  post.title.toLowerCase().includes(search.toLowerCase()) ||
  post.category.toLowerCase().includes(search.toLowerCase()) ||
  post.excerpt.toLowerCase().includes(search.toLowerCase())
);

const [searchParams] = useSearchParams();
const currentPage = Number(searchParams.get("page")) || 1;

const startIndex = (currentPage - 1) * postsPerPage;

const currentPosts = filteredPosts.slice(
  startIndex,
  startIndex + postsPerPage
);

  return (
    <>
      <UpperFromBlog />
      <ChoosingStickyBlog onSearch={setSearch} />

      <div className="bg-[#0a0a0a]  sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-neutral-400">عرض
            <span className="font-bold text-white">28</span> مقالات
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
              <button className="p-2 rounded-lg transition-all duration-300 bg-orange-500 text-white" title="عرض شبكي" fdprocessedid="q8susq">
                <Link to="/view">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </Link>
              </button>
              <button className="p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white" title="عرض قائمة" fdprocessedid="bvzmu">
                <Link to="/list">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                  </svg>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className=" group rounded-3xl bg-[#262626]/50  shadow card overflow-hidden" style={{ "animationDelay": "0ms" }}>
            <Link
              className="block"
              to={`/blog/${currentPosts[0].slug}`}
            ><div className="relative h-52 overflow-hidden">
                <img
                  alt={currentPosts[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  src={currentPosts[0].image}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div
                ><div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                    {currentPosts[0].category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>{currentPosts[0].readTime} دقائق للقراءة دقائق للقراءة</span>
                  <span className="w-1 h-1 bg-neutral-600 rounded-full">
                  </span>
                  <span>١٥ يناير ٢٠٢٦</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">{currentPosts[0].title}</h3>
                <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">{currentPosts[0].excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                  <div className="flex items-center gap-3">
                    <img
                      alt={currentPosts[0].author.name}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                      src={currentPosts[0].author.avatar}
                    />
                    <p className="text-sm font-medium text-white">{currentPosts[0].author.name}</p
                    ><p className="text-xs text-neutral-500">{currentPosts[0].author.role}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                  <svg className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>

            </Link>
          </article>

          <article
            className="group rounded-3xl bg-[#262626]/50 shadow card overflow-hidden"
            style={{ animationDelay: "100ms" }}
          >
            <Link
              className="block"
              to={`/blog/${currentPosts[1].slug}`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={currentPosts[1].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  src={currentPosts[1].image}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                    {currentPosts[1].category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      >
                      </path>
                    </svg>

                    {currentPosts[1].readTime} دقائق للقراءة
                  </span>

                  <span className="w-1 h-1 bg-neutral-600 rounded-full">
                  </span>

                  <span>
                    {currentPosts[1].date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                  {currentPosts[1].title}
                </h3>

                <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                  {currentPosts[1].excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                  <div className="flex items-center gap-3">
                    <img
                      alt={currentPosts[1].author.name}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                      src={currentPosts[1].author.avatar}
                    />

                    <div>
                      <p className="text-sm font-medium text-white">
                        {currentPosts[1].author.name}
                      </p>

                      <p className="text-xs text-neutral-500">
                        {currentPosts[1].author.role}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                    <svg
                      className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      >
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          <article
            className="group rounded-3xl bg-[#262626]/50 shadow card overflow-hidden"
            style={{ animationDelay: "200ms" }}
          >
            <Link
              className="block"
              to={`/blog/${currentPosts[2].slug}`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={currentPosts[2].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  src={currentPosts[2].image}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                    {currentPosts[2].category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      >
                      </path>
                    </svg>

                    {currentPosts[2].readTime} دقائق للقراءة
                  </span>

                  <span className="w-1 h-1 bg-neutral-600 rounded-full">
                  </span>

                  <span>
                    {currentPosts[2].date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                  {currentPosts[2].title}
                </h3>

                <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                  {currentPosts[2].excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                  <div className="flex items-center gap-3">
                    <img
                      alt={currentPosts[2].author.name}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                      src={currentPosts[2].author.avatar}
                    />

                    <div>
                      <p className="text-sm font-medium text-white">
                        {currentPosts[2].author.name}
                      </p>

                      <p className="text-xs text-neutral-500">
                        {currentPosts[2].author.role}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                    <svg
                      className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      >
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          <article
            className="group rounded-3xl bg-[#262626]/50 shadow card overflow-hidden"
            style={{ animationDelay: "300ms" }}
          >
            <Link
              className="block"
              to={`/blog/${currentPosts[3].slug}`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  alt={currentPosts[3].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  src={currentPosts[3].image}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                    {currentPosts[3].category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      >
                      </path>
                    </svg>

                    {currentPosts[3].readTime} دقائق للقراءة
                  </span>

                  <span className="w-1 h-1 bg-neutral-600 rounded-full">
                  </span>

                  <span>
                    {currentPosts[3].date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                  {currentPosts[3].title}
                </h3>

                <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                  {currentPosts[3].excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                  <div className="flex items-center gap-3">
                    <img
                      alt={currentPosts[3].author.name}
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                      src={currentPosts[3].author.avatar}
                    />

                    <div>
                      <p className="text-sm font-medium text-white">
                        {currentPosts[3].author.name}
                      </p>

                      <p className="text-xs text-neutral-500">
                        {currentPosts[3].author.role}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                    <svg
                      className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      >
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          {currentPosts[4] && (
            <article
              className="group rounded-3xl bg-[#262626]/50 shadow card overflow-hidden"
              style={{ animationDelay: "400ms" }}
            >
              <Link
                className="block"
                to={`/blog/${currentPosts[4].slug}`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt={currentPosts[4].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src={currentPosts[4].image}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                      {currentPosts[4].category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        >
                        </path>
                      </svg>

                      {currentPosts[4].readTime} دقائق للقراءة
                    </span>

                    <span className="w-1 h-1 bg-neutral-600 rounded-full">
                    </span>

                    <span>
                      {currentPosts[4].date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                    {currentPosts[4].title}
                  </h3>

                  <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                    {currentPosts[4].excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                    <div className="flex items-center gap-3">
                      <img
                        alt={currentPosts[4].author.name}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                        src={currentPosts[4].author.avatar}
                      />

                      <div>
                        <p className="text-sm font-medium text-white">
                          {currentPosts[4].author.name}
                        </p>

                        <p className="text-xs text-neutral-500">
                          {currentPosts[4].author.role}
                        </p>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                      <svg
                        className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        >
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          )}

          {currentPosts[5] && (
            <article
              className="group rounded-3xl bg-[#262626]/50 shadow card overflow-hidden"
              style={{ animationDelay: "500ms" }}
            >
              <Link
                className="block"
                to={`/blog/${currentPosts[5].slug}`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    alt={currentPosts[5].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    src={currentPosts[5].image}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                      {currentPosts[5].category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        >
                        </path>
                      </svg>

                      {currentPosts[5].readTime} دقائق للقراءة
                    </span>

                    <span className="w-1 h-1 bg-neutral-600 rounded-full">
                    </span>

                    <span>
                      {currentPosts[5].date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                    {currentPosts[5].title}
                  </h3>

                  <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                    {currentPosts[5].excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                    <div className="flex items-center gap-3">
                      <img
                        alt={currentPosts[5].author.name}
                        className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                        src={currentPosts[5].author.avatar}
                      />

                      <div>
                        <p className="text-sm font-medium text-white">
                          {currentPosts[5].author.name}
                        </p>

                        <p className="text-xs text-neutral-500">
                          {currentPosts[5].author.role}
                        </p>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                      <svg
                        className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        >
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          )}
          
        </div>
        <div className="flex justify-center items-center gap-2 mt-12">
          <button disabled="" className="p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed">
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7">
              </path>
            </svg>
          </button>
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/blog?page=1"
              className="flex items-center justify-center min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white"
            >
              1
            </Link>

            <Link
              to="/blog?page=2"
              className="flex items-center justify-center min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
            >
              2
            </Link>

            <Link
              to="/blog?page=3"
              className="flex items-center justify-center min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
            >
              3
            </Link>

            <Link
              to="/blog?page=4"
              className="flex items-center justify-center min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
            >
              4
            </Link>

            <Link
              to="/blog?page=5"
              className="flex items-center justify-center min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
            >
              5
            </Link>
          </div>
          <button className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]" fdprocessedid="qgl2wu">
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <p className="text-center text-neutral-500 mt-4 text-sm">صفحة 1 من 5</p>
      </div >



    </>
  )
}

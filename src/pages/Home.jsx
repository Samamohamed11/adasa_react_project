import { Link } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";
import Choosing_blog from "./Choosing_blog";

export default function Home() {
  return (
    <>
      
      <main className="pt-15">
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">

          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]">
          </div>

          {/* Orange Blob */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob">
          </div>

          {/* Yellow Blob */}
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"
            style={{ animationDelay: "-2s" }}
          >
          </div>

          {/* Center Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-orange-500/5 rounded-full blur-3xl">
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-4xl mx-auto">

              {/* Welcome */}
              <div className="section-label inline-flex items-center gap-2 mb-8 animate-fade-in rounded-full bg-orange-400/20 border border-orange-500/30 px-4 py-2">

                <span className="relative flex h-2 w-2 ">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75">
                  </span>

                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500">
                  </span>
                </span>

                <span className="text-sm font-medium text-neutral-300 ">
                  مرحباً بك في عدسة
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                اكتشف{" "}
                <span className="text-yellow-400">فن</span>
                <br />
                التصوير الفوتوغرافي
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">

                <a
                  className="btn-primary inline-flex items-center justify-center gap-2 group rounded-full bg-linear-to-r from-yellow-700 to-orange-500 text-white px-6 py-4 hover:transition-all hover:-translate-y-0.75 transition-transform"
                  href="/blog"
                >
                  <span className="text-lg font-medium">
                    <Link to="/blog"> 
                    استكشف المقالات</Link></span>

                  <svg
                    className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>

                <Link 
                  className="btn-secondary inline-flex items-center justify-center gap-2 rounded-full opacity-60 border border-white/30 text-white px-6 py-4 hover:bg-orange-600/30 transition-all  hover:border-orange-500 hover:text-orange-500"
                 to="/who"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span>
                  <Link to="/who">
                  اعرف المزيد</Link>
                  </span>
                </Link>

              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">

                {/* Articles */}
                <div
                  className="glass-card p-4 hover:scale-105 transition-transform duration-300 rounded-2xl border border-neutral-700/50 bg-neutral-900/60  backdrop-blur-md shadow-lg"
                  style={{ animationDelay: "0ms" }}
                >
                  <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>

                  <p className="text-2xl md:text-3xl font-bold text-yellow-500">
                    +50
                  </p>

                  <p className="text-neutral-500 text-sm">
                    مقالة
                  </p>
                </div>

                {/* Readers */}
                <div
                  className="glass-card p-4 hover:scale-105 transition-transform duration-300 rounded-2xl border border-neutral-700/50 bg-neutral-900/60  backdrop-blur-md shadow-lg"
                  style={{ animationDelay: "100ms" }}
                >
                  <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>

                  <p className="text-2xl md:text-3xl font-bold text-yellow-500">
                    +10ألف
                  </p>

                  <p className="text-neutral-500 text-sm">
                    قارئ
                  </p>
                </div>

                {/* Categories */}
                <div
                  className="glass-card p-4 hover:scale-105 transition-transform duration-300 rounded-2xl border border-neutral-700/50 bg-neutral-900/60  backdrop-blur-md shadow-lg"
                  style={{ animationDelay: "200ms" }}
                >
                  <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>

                  <p className="text-2xl md:text-3xl font-bold gradient-text text-yellow-500">
                    4
                  </p>

                  <p className="text-neutral-500 text-sm ">
                    تصنيفات
                  </p>
                </div>

                {/* Writers */}
                <div
                  className="glass-card p-4 hover:scale-105 transition-transform duration-300 rounded-2xl border border-neutral-700/50 bg-neutral-900/60  backdrop-blur-md shadow-lg"
                  style={{ animationDelay: "300ms" }}
                >
                  <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>

                  <p className="text-2xl md:text-3xl font-bold gradient-text text-yellow-500">
                    6
                  </p>

                  <p className="text-neutral-500 text-sm">
                    كاتب
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Choosing_blog />
    </>
  );
}
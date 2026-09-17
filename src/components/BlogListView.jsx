// import Blog from "../pages/Blog";
import ChoosingStickyBlog from "./ChoosingStickyBlog";
import UpperFromBlog from "./UpperFromBlog";
import { Link } from 'react-router-dom'



export default function BlogListView() {
    return (
        <>

            <UpperFromBlog />
            <ChoosingStickyBlog/>
            <div className="bg-[#0a0a0a] sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
                <div className="mb-8 flex items-center justify-between">
                    <p className="text-neutral-400">عرض <span className="font-bold text-white">28</span> مقالات</p>
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
                <div className="flex flex-col gap-6">
                    <article className="group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden" style={{ animationDelay: "0ms" }}>
                        <a className="flex flex-col md:flex-row" href="/blog/mastering-golden-hour-photography" data-discover="true">
                            <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden">
                                <img alt="إتقان تصوير الساعة الذهبية: دليل شامل" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&amp;h=400&amp;fit=crop" />
                                <div className="absolute inset-0 bg-linear-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div></div>
                            <div className="flex-1 p-6 flex flex-col justify-center">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">إضاءة</span>
                                    <span className="flex items-center gap-1 text-sm text-neutral-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>

                                        </svg>8 دقائق للقراءة</span>
                                    <span className="flex items-center gap-1 text-sm text-neutral-500"
                                    ><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>١٥ يناير ٢٠٢٦</span>
                                </div>
                                <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">إتقان تصوير الساعة الذهبية: دليل شامل</h2>
                                <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.</p>
                                <div className="flex items-center justify-between mt-auto"><div className="flex items-center gap-3">
                                    <img alt="سالم أحمد" className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=face" /><div>
                                        <p className="text-sm font-semibold text-white">سالم أحمد</p>
                                        <p className="text-xs text-neutral-500">مصور محترف</p>
                                    </div></div>
                                    <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">اقرأ المقال
                                        <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden" style={{ animationDelay: "100ms" }}>
                        <a className="flex flex-col md:flex-row" href="/blog/portrait-photography-secrets" data-discover="true">
                            <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden">
                                <img alt="أسرار تصوير البورتريه: كيف تلتقط روح الشخصية" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&amp;h=400&amp;fit=crop" />
                                <div className="absolute inset-0 bg-linear-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-center">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">بورتريه</span>
                                    <span className="flex items-center gap-1 text-sm text-neutral-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                        </svg>6 دقائق للقراءة</span>
                                    <span className="flex items-center gap-1 text-sm text-neutral-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>١٢ يناير ٢٠٢٦</span>
                                </div>
                                <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">أسرار تصوير البورتريه: كيف تلتقط روح الشخصية</h2>
                                <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">اكتشف تقنيات احترافية لتصوير بورتريهات تعبيرية تكشف عن شخصية الموضوع الحقيقية.</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-3">
                                        <img alt="محمد علي" className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=face" />
                                        <div>
                                            <p className="text-sm font-semibold text-white">محمد علي</p>
                                            <p className="text-xs text-neutral-500">مصور بورتريه</p>
                                        </div>
                                    </div>
                                    <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">اقرأ المقال
                                        <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden" style={{ animationDelay: "200ms" }}><a className="flex flex-col md:flex-row" href="/blog/landscape-photography-guide" data-discover="true">
                        <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden">
                            <img alt="دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&amp;h=400&amp;fit=crop" />
                            <div className="absolute inset-0 bg-linear-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                        </div>
                        <div className="flex-1 p-6 flex flex-col justify-center">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                                <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">مناظر طبيعية</span>
                                <span className="flex items-center gap-1 text-sm text-neutral-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>10 دقائق للقراءة</span>
                                <span className="flex items-center gap-1 text-sm text-neutral-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                        </path>
                                    </svg>١٠ يناير ٢٠٢٦</span>
                            </div>
                            <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف</h2>
                            <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">استكشف تقنيات تصوير المناظر الطبيعية الخلابة وكيفية التقاط جمال الطبيعة بعدستك.</p>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-3">
                                    <img alt="إبراهيم حسن" className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop&amp;crop=face" />
                                    <div>
                                        <p className="text-sm font-semibold text-white">إبراهيم حسن</p>
                                        <p className="text-xs text-neutral-500">مصور طبيعة</p>
                                    </div></div>
                                <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">اقرأ المقال
                                    <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </a>
                    </article>
                    <article className="group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden" style={{ animationDelay: "300ms" }}>
                        <a className="flex flex-col md:flex-row" href="/blog/camera-settings-basics" data-discover="true">
                            <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden">
                                <img alt="أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&amp;h=400&amp;fit=crop" />
                                <div className="absolute inset-0 bg-linear-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-center">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">تقنيات</span>
                                    <span className="flex items-center gap-1 text-sm text-neutral-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>7 دقائق للقراءة</span>
                                    <span className="flex items-center gap-1 text-sm text-neutral-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path
                                            ></svg>٨ يناير ٢٠٢٦</span>
                                </div>
                                <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي</h2>
                                <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم الكامل في صورك.</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-3">
                                        <img alt="داود خالد" className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&amp;h=100&amp;fit=crop&amp;crop=face" /><div>
                                            <p className="text-sm font-semibold text-white">داود خالد</p>
                                            <p className="text-xs text-neutral-500">مدرب تصوير</p></div>
                                    </div>
                                    <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">اقرأ المقال
                                        <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </span></div
                                ></div></a>
                    </article>

                    <article className="group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden" style={{ animationDelay: "400ms" }}>
                        <a className="flex flex-col md:flex-row" href="/blog/photo-composition-rules" data-discover="true">
                            <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden">
                                <img alt="قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&amp;h=400&amp;fit=crop" />
                                <div className="absolute inset-0 bg-linear-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-center">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">تقنيات</span>
                                    <span className="flex items-center gap-1 text-sm text-neutral-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>9 دقائق للقراءة</span>
                                    <span className="flex items-center gap-1 text-sm text-neutral-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>٥ يناير ٢٠٢٦</span></div>
                                <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية</h2>
                                <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون لإنشاء صور مؤثرة بصرياً.</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-3">
                                        <img alt="ليث محمود" className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop&amp;crop=face" /><div>
                                            <p className="text-sm font-semibold text-white">ليث محمود</p>
                                            <p className="text-xs text-neutral-500">فنان بصري</p>
                                        </div></div>
                                    <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                                        اقرأ المقال<svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden" style={{ animationDelay: "500ms" }}>
                        <a className="flex flex-col md:flex-row" href="/blog/mobile-photography-tips" data-discover="true">
                            <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden">
                                <img alt="تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&amp;h=400&amp;fit=crop" />
                                <div className="absolute inset-0 bg-linear-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="flex-1 p-6 flex flex-col justify-center">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">معدات</span>
                                    <span className="flex items-center gap-1 text-sm text-neutral-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>8 دقائق للقراءة</span>
                                    <span className="flex items-center gap-1 text-sm text-neutral-500">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>٣ يناير ٢٠٢٦</span>
                                </div>
                                <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك</h2>
                                <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح والتقنيات.</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-3">
                                        <img alt="جمال عبدالله" className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]" src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&amp;h=100&amp;fit=crop&amp;crop=face" />
                                        <div>
                                            <p className="text-sm font-semibold text-white">جمال عبدالله</p>
                                            <p className="text-xs text-neutral-500">مصور ومراجع تقني</p>
                                        </div>
                                    </div>
                                    <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">اقرأ المقال
                                        <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
                <div className="flex justify-center items-center gap-2 mt-12">
                    <button disabled="" className="p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed">
                        <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7">
                            </path></svg>
                    </button>
                    <div className="flex items-center gap-1">
                        <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white" fdprocessedid="1yzyh">1</button>
                        <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white" fdprocessedid="zz661s">2</button>
                        <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white" fdprocessedid="kdy1mb">3</button>
                        <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white" fdprocessedid="piejg5">4</button>
                        <button className="min-w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white" fdprocessedid="wu6jm">5</button></div>
                    <button className="p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]" fdprocessedid="pmg19"><svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7">
                        </path>
                    </svg>
                    </button>
                </div>
                <p className="text-center text-neutral-500 mt-4 text-sm">صفحة 1 من 5</p>
            </div>

        </>
    )
}

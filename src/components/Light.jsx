import UpperFromBlog from './UpperFromBlog'
import ChoosingStickyBlog from './ChoosingStickyBlog'

export default function Light() {
    return (
        <>
            <UpperFromBlog />
            <ChoosingStickyBlog />
            <div className="bg-[#0a0a0a] sm:px-6 lg:px-8 py-12 scroll-mt-36.5">
                <div className="mb-8 flex items-center justify-between">
                    <p className="text-neutral-400">عرض
                        <span className="font-bold text-white">4
                        </span> مقالات<span> في
                            <span className="font-bold text-orange-500 capitalize">إضاءة
                            </span></span>
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
                            <button className="p-2 rounded-lg transition-all duration-300 bg-orange-500 text-white" title="عرض شبكي" fdprocessedid="5st7vb">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                            </button>
                            <button className="p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white" title="عرض قائمة" fdprocessedid="w9ijn">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16">
                                    </path></svg>
                            </button>
                        </div>
                        <button className="text-sm text-neutral-500 hover:text-orange-500 flex items-center gap-1 transition-colors" fdprocessedid="kxbkgd">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12">
                                </path></svg>مسح الفلاتر</button>
                    </div></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article className="group rounded-3xl bg-[#262626]/50  shadow card overflow-hidden" style={{ animationDelay: "0ms" }}>
                        <a className="block" href="/blog/mastering-golden-hour-photography" data-discover="true">
                            <div className="relative h-52 overflow-hidden">
                                <img alt="إتقان تصوير الساعة الذهبية: دليل شامل" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&amp;h=400&amp;fit=crop" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">إضاءة</span></div></div><div className="p-6"><div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>8 دقائق للقراءة</span>
                                        <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                                        <span>١٥ يناير ٢٠٢٦</span>
                                    </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">إتقان تصوير الساعة الذهبية: دليل شامل</h3>
                                <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">تعلم كيفية التقاط صور مذهلة خلال الساعة الذهبية مع نصائح احترافية حول الإضاءة والتكوين.</p>
                                <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                                    <div className="flex items-center gap-3">
                                        <img alt="سالم أحمد" className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=face" /><div>
                                            <p className="text-sm font-medium text-white">سالم أحمد</p>
                                            <p className="text-xs text-neutral-500">مصور محترف</p></div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                                        <svg className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>

                                        </svg>
                                    </div>
                                </div></div
                            ></a></article>
                    <article className="group rounded-3xl bg-[#262626]/50  shadow card overflow-hidden" style={{ animationDelay: "100ms" }}>
                        <a className="block" href="/blog/night-photography-techniques" data-discover="true">
                            <div className="relative h-52 overflow-hidden">
                                <img alt="تصوير الليل والنجوم: دليلك لالتقاط سماء الليل" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&amp;h=400&amp;fit=crop" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">إضاءة</span></div></div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                                    <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>11 دقائق للقراءة</span>
                                    <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                                    <span>١ يناير ٢٠٢٦</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">تصوير الليل والنجوم: دليلك لالتقاط سماء الليل</h3>
                                <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">تعلم كيفية تصوير النجوم ودرب التبانة والمناظر الليلية الساحرة مع هذه التقنيات المتقدمة.</p>
                                <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                                    <div className="flex items-center gap-3">
                                        <img alt="خالد الفيصل" className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&amp;h=100&amp;fit=crop&amp;crop=face" /><div
                                        ><p className="text-sm font-medium text-white">خالد الفيصل</p>
                                            <p className="text-xs text-neutral-500">مصور فلكي</p></div></div>
                                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                                        <svg className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg></div></div>
                            </div></a>
                    </article>
                    <article className="group rounded-3xl bg-[#262626]/50  shadow card overflow-hidden" style={{ animationDelay: "200ms" }}><a className="block" href="/blog/long-exposure-photography" data-discover="true">
                        <div className="relative h-52 overflow-hidden">
                            <img alt="التعريض الطويل: كيف تصور الحركة والزمن" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&amp;h=400&amp;fit=crop" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div><div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">إضاءة</span>
                            </div></div>
                        <div className="p-6">
                            <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                                <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>8 دقائق للقراءة</span>
                                <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                                <span>١٢ ديسمبر ٢٠٢٥</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">التعريض الطويل: كيف تصور الحركة والزمن</h3>
                            <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">تعلم تقنيات التعريض الطويل لإنشاء صور إبداعية تظهر الحركة بطريقة فنية ساحرة.</p
                            ><div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                                <div className="flex items-center gap-3">
                                    <img alt="باسم المصري" className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]" src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=100&amp;h=100&amp;fit=crop&amp;crop=face" /><div>
                                        <p className="text-sm font-medium text-white">باسم المصري</p>
                                        <p className="text-xs text-neutral-500">مصور فني</p></div>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                                    <svg className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg></div></div></div></a>
                    </article>
                    <article className="group rounded-3xl bg-[#262626]/50  shadow card overflow-hidden" style={{ animationDelay: "300ms" }}>
                        <a className="block" href="/blog/flash-photography-basics" data-discover="true">
                            <div className="relative h-52 overflow-hidden">
                                <img alt="أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&amp;h=400&amp;fit=crop" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">إضاءة</span></div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                                    <span className="flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>8 دقائق للقراءة</span>
                                    <span className="w-1 h-1 bg-neutral-600 rounded-full">
                                    </span>
                                    <span>٢٥ نوفمبر ٢٠٢٥</span></div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">أساسيات التصوير بالفلاش: تحكم كامل في الإضاءة</h3>
                                <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">افهم كيفية استخدام الفلاش الخارجي لإنشاء إضاءة احترافية في أي موقف.</p>
                                <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                                    <div className="flex items-center gap-3">
                                        <img alt="ماجد القحطاني" className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=100&amp;h=100&amp;fit=crop&amp;crop=face" /><div>
                                            <p className="text-sm font-medium text-white">ماجد القحطاني</p>
                                            <p className="text-xs text-neutral-500">مصور استوديو</p></div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                                        <svg className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7">
                                            </path></svg></div></div></div></a>
                    </article>
                </div>
            </div>
        </>
    )
}

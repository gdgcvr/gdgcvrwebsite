import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import CalendarView from "@/components/CalendarView";

const Calendar = () => {
    return (
        <Layout>
            {/* Creative Topographic Flow Background - Sticky Implementation */}
            <div className="absolute inset-0 z-[-1] pointer-events-none">
                <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#fafafa]">
                    {/* Abstract Flow Lines SVG */}
                    <svg className="absolute inset-0 w-full h-full opacity-[0.4]" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Neutral Structural Lines */}
                        <path d="M-100 200 C 400 400, 800 0, 1540 200" stroke="#E5E5E5" strokeWidth="2" fill="none" />
                        <path d="M-100 300 C 400 500, 800 100, 1540 300" stroke="#E5E5E5" strokeWidth="2" fill="none" />
                        <path d="M-100 400 C 400 600, 800 200, 1540 400" stroke="#E5E5E5" strokeWidth="2" fill="none" />
                        <path d="M-100 500 C 400 700, 800 300, 1540 500" stroke="#E5E5E5" strokeWidth="2" fill="none" />
                        <path d="M-100 600 C 400 800, 800 400, 1540 600" stroke="#E5E5E5" strokeWidth="2" fill="none" />

                        {/* Accent Creative Lines (Google Colors) */}
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 3, ease: "easeInOut" }}
                            d="M-100 250 C 400 450, 800 50, 1540 250"
                            stroke="#4285F4" strokeWidth="3" strokeLinecap="round" fill="none"
                        />
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                            d="M-100 350 C 400 550, 800 150, 1540 350"
                            stroke="#DB4437" strokeWidth="3" strokeLinecap="round" fill="none"
                        />
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 4, ease: "easeInOut", delay: 1 }}
                            d="M-100 450 C 400 650, 800 250, 1540 450"
                            stroke="#F4B400" strokeWidth="3" strokeLinecap="round" fill="none"
                        />
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 4.5, ease: "easeInOut", delay: 1.5 }}
                            d="M-100 550 C 400 750, 800 350, 1540 550"
                            stroke="#0F9D58" strokeWidth="3" strokeLinecap="round" fill="none"
                        />
                    </svg>
                    <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>
                </div>
            </div>

            <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 relative z-10">
                <div className="container-wide h-[85vh]">
                    <div className="relative h-full flex flex-col">
                        <div className="flex-1 overflow-hidden">
                            <CalendarView />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Calendar;

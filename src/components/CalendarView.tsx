import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper for date formatting
const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(date);
};

const formatDayName = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
};

const formatMonthYear = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date);
};

const isSameDate = (d1: Date, d2: Date) => {
    return d1.getDate() === d2.getDate() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getFullYear() === d2.getFullYear();
};

const getStartOfWeek = (date: Date) => {
    const d = new Date(date);
    const day = d.getDay(); // 0 is Sunday
    const diff = d.getDate() - day; // adjust when day is sunday
    d.setDate(diff);
    d.setHours(0, 0, 0, 0);
    return d;
};

const getStartOfMonth = (date: Date) => {
    const d = new Date(date);
    d.setDate(1);
    d.setHours(0, 0, 0, 0);
    return d;
};

const addDays = (date: Date, days: number) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

// Timeline: 9am to 6pm (10 slots)
const timeSlots = [
    "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm"
];

const START_HOUR = 9;
const TOTAL_HOURS = 9; // 9am to 6pm

type ViewType = "Month" | "Week" | "Day";

type Event = {
    id: number;
    title: string;
    start: Date;
    end: Date;
    timeString: string;
    color: "blue" | "green" | "red" | "yellow" | "purple" | "pink";
    location?: string;
    tags?: string[];
};

const generateSessionEvents = (): Event[] => {
    const events: Event[] = [];
    const startDate = new Date(2026, 1, 12); // Feb 12, 2026
    const endDate = new Date(2026, 2, 31); // Mar 31, 2026

    let currentDate = new Date(startDate);
    let idCounter = 1;

    // Special Event: Resume Building
    const resumeDate = new Date(2026, 1, 13); // Feb 13
    resumeDate.setHours(13, 0, 0, 0); // 1 PM
    const resumeEnd = new Date(resumeDate);
    resumeEnd.setHours(15, 0, 0, 0); // 3 PM

    events.push({
        id: idCounter++,
        title: "Resume Building",
        start: resumeDate,
        end: resumeEnd,
        timeString: "01:00 PM - 03:00 PM",
        color: "pink",
        tags: ["Career", "Resume"]
    });

    // Special Event: Mock Placement Drive (Day 1)
    const placementDate1 = new Date(2026, 1, 20); // Feb 20
    placementDate1.setHours(9, 0, 0, 0); // 9 AM
    const placementEnd1 = new Date(placementDate1);
    placementEnd1.setHours(16, 0, 0, 0); // 4 PM

    events.push({
        id: idCounter++,
        title: "Mock Placement Drive",
        start: placementDate1,
        end: placementEnd1,
        timeString: "09:00 AM - 04:00 PM",
        color: "blue",
        tags: ["Career", "Placement"]
    });

    // Special Event: Mock Placement Drive (Day 2)
    const placementDate2 = new Date(2026, 1, 21); // Feb 21
    placementDate2.setHours(9, 0, 0, 0); // 9 AM
    const placementEnd2 = new Date(placementDate2);
    placementEnd2.setHours(16, 0, 0, 0); // 4 PM

    events.push({
        id: idCounter++,
        title: "Mock Placement Drive",
        start: placementDate2,
        end: placementEnd2,
        timeString: "09:00 AM - 04:00 PM",
        color: "blue",
        tags: ["Career", "Placement"]
    });

    while (currentDate <= endDate) {
        const day = currentDate.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
        const isResumeDay = currentDate.getDate() === 13 && currentDate.getMonth() === 1; // Feb 13

        // Helper to add event
        const addEvent = (title: string, color: Event["color"], tags: string[]) => {
            const start = new Date(currentDate);
            start.setHours(16, 0, 0, 0); // 4 PM
            const end = new Date(currentDate);
            end.setHours(17, 30, 0, 0); // 5:30 PM

            events.push({
                id: idCounter++,
                title,
                start,
                end,
                timeString: "04:00 PM - 05:30 PM",
                color,
                tags
            });
        };

        // Web: Tue, Thu
        if (day === 2 || day === 4) {
            addEvent("Web Dev Session", "blue", ["Web", "Frontend"]);
        }

        // AIML-DS: Wed, Thu
        if (day === 3 || day === 4) {
            addEvent("AIML-DS Session", "red", ["AI", "ML", "Data Science"]);
        }

        // Android: Wed
        if (day === 3) {
            addEvent("Android Session", "green", ["Android", "Kotlin"]);
        }

        // CP: Mon, Fri
        if (day === 1 || day === 5) {
            addEvent("CP Session", "yellow", ["CP", "Algorithms"]);
        }

        // IoT: Fri
        if (day === 5) {
            addEvent("IoT Session", "purple", ["IoT", "Hardware"]);
        }

        // Next day
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return events;
};

const colorStyles = {
    blue: { bg: "bg-blue-100", border: "border-blue-500", text: "text-blue-700", subtext: "text-blue-600/80" },
    green: { bg: "bg-green-100", border: "border-green-500", text: "text-green-700", subtext: "text-green-600/80" },
    red: { bg: "bg-red-100", border: "border-red-500", text: "text-red-700", subtext: "text-red-600/80" },
    yellow: { bg: "bg-yellow-100", border: "border-yellow-500", text: "text-yellow-800", subtext: "text-yellow-700/80" },
    purple: { bg: "bg-purple-100", border: "border-purple-500", text: "text-purple-700", subtext: "text-purple-600/80" },
    pink: { bg: "bg-pink-100", border: "border-pink-500", text: "text-pink-700", subtext: "text-pink-600/80" },
};

const CalendarView = ({ isPreview = false }: { isPreview?: boolean }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState<ViewType>("Month");
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const initialDate = useMemo(() => new Date(), []);
    const events = useMemo(() => generateSessionEvents(), []);

    // View Logic
    const daysToShow = useMemo(() => {
        if (view === "Day") {
            return [currentDate];
        }
        if (view === "Week") {
            const start = getStartOfWeek(currentDate);
            return Array.from({ length: 7 }, (_, i) => addDays(start, i));
        }
        // Month view logic handled separately in render
        return [];
    }, [view, currentDate]);

    const handlePrev = () => {
        if (view === "Day") setCurrentDate(addDays(currentDate, -1));
        else if (view === "Week") setCurrentDate(addDays(currentDate, -7));
        else {
            const d = new Date(currentDate);
            d.setMonth(d.getMonth() - 1);
            setCurrentDate(d);
        }
    };

    const handleNext = () => {
        if (view === "Day") setCurrentDate(addDays(currentDate, 1));
        else if (view === "Week") setCurrentDate(addDays(currentDate, 7));
        else {
            const d = new Date(currentDate);
            d.setMonth(d.getMonth() + 1);
            setCurrentDate(d);
        }
    };

    const handleToday = () => setCurrentDate(new Date());

    const handleEventClick = (e: React.MouseEvent, event: Event) => {
        e.stopPropagation();
        if (!isPreview) setSelectedEvent(event);
    };

    const getEventStyle = (event: Event) => {
        const startHour = event.start.getHours() + event.start.getMinutes() / 60;
        const endHour = event.end.getHours() + event.end.getMinutes() / 60;
        const duration = endHour - startHour;

        const topOffset = startHour - START_HOUR;
        // 10 slots (9am to 6pm implies 9 hours duration shown? Or until 6pm inclusive?)
        // Array has 10 items (9,10,11,12,1,2,3,4,5,6). 9 slots of 1 hour.
        const slotHeightPercentage = 100 / (timeSlots.length - 1);

        return {
            top: `${topOffset * slotHeightPercentage}%`,
            height: `${duration * slotHeightPercentage}%`
        };
    };

    // Month View Grid Generation
    const monthDays = useMemo(() => {
        if (view !== "Month") return [];
        const start = getStartOfMonth(currentDate);
        const startDay = start.getDay(); // 0-6
        const days = [];
        // Pad previous month
        for (let i = startDay; i > 0; i--) {
            days.push({ date: addDays(start, -i), isCurrentMonth: false });
        }
        // Current month
        const temp = new Date(start);
        while (temp.getMonth() === currentDate.getMonth()) {
            days.push({ date: new Date(temp), isCurrentMonth: true });
            temp.setDate(temp.getDate() + 1);
        }
        // Pad next month to complete row 
        while (days.length % 7 !== 0) {
            days.push({ date: new Date(temp), isCurrentMonth: false });
            temp.setDate(temp.getDate() + 1);
        }
        return days;
    }, [view, currentDate]);

    return (
        <div className={`bg-white rounded-3xl p-6 shadow-sm border border-border w-full h-full flex flex-col relative ${isPreview ? "pointer-events-none select-none" : ""}`}>
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 shrink-0">
                <div>
                    <h2 className="text-2xl font-bold text-foreground transition-all duration-300">
                        {formatMonthYear(currentDate)}
                    </h2>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    {/* View Toggles */}
                    <div className="bg-secondary/50 p-1 rounded-xl flex items-center">
                        {(["Month", "Week", "Day"] as const).map(tab => (
                            <button
                                key={tab}
                                onClick={() => setView(tab)}
                                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${view === tab
                                    ? "bg-white text-foreground shadow-sm"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <button onClick={handlePrev} className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                            <ChevronLeft size={20} />
                        </button>
                        <button onClick={handleToday} className="px-4 py-1.5 bg-secondary/50 hover:bg-secondary rounded-lg text-sm font-medium text-foreground transition-colors">
                            Today
                        </button>
                        <button onClick={handleNext} className="p-2 hover:bg-secondary rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div
                className="flex-1 overflow-y-auto relative custom-scrollbar select-none"
                onClick={() => {
                    setSelectedEvent(null);
                    setSelectedDate(null);
                }}
            >
                {/* Month View */}
                {view === "Month" && (
                    <div className="h-full flex flex-col">
                        <div className="grid grid-cols-7 mb-2">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
                                <div key={d} className="text-center text-sm font-medium text-muted-foreground p-2">{d}</div>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 auto-rows-fr gap-px bg-border/20 border border-border/20 rounded-lg overflow-hidden flex-1 min-h-[500px]">
                            {monthDays.map((d, i) => {
                                const dayEvents = events.filter(e => isSameDate(e.start, d.date));
                                return (
                                    <div
                                        key={i}
                                        onClick={() => setSelectedDate(d.date)}
                                        className={`bg-white p-2 min-h-[80px] hover:bg-secondary/10 transition-colors flex flex-col gap-1 cursor-pointer ${!d.isCurrentMonth ? 'bg-secondary/5 text-muted-foreground/50' : ''}`}
                                    >
                                        <span className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${isSameDate(d.date, new Date()) ? 'bg-foreground text-background' : ''}`}>
                                            {d.date.getDate()}
                                        </span>
                                        <div className="flex flex-col gap-1 mt-1">
                                            {dayEvents.map(ev => (
                                                <div key={ev.id} className={`px-1.5 py-0.5 rounded text-[9px] truncate w-full font-medium ${colorStyles[ev.color].bg} ${colorStyles[ev.color].text}`}>
                                                    {ev.title}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* Week/Day View */}
                {(view === "Week" || view === "Day") && (
                    <div className="flex flex-col h-full">
                        {/* Days Header */}
                        <div className="grid gap-4 mb-4 shrink-0 pr-4" style={{ gridTemplateColumns: `50px repeat(${daysToShow.length}, 1fr)` }}>
                            <div className="col-span-1"></div>
                            {daysToShow.map((date, i) => {
                                const isToday = isSameDate(date, new Date());
                                return (
                                    <div key={i} className="flex flex-col items-center gap-2">
                                        <span className="text-sm font-medium text-muted-foreground">{formatDayName(date)}</span>
                                        <div className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold transition-all duration-300 ${isToday ? "bg-foreground text-background scale-110" : "text-foreground group-hover:bg-secondary"
                                            }`}>
                                            {formatDate(date)}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex-1 relative min-h-[600px]">
                            <div className="absolute inset-0 grid gap-4 h-full" style={{ gridTemplateColumns: `50px repeat(${daysToShow.length}, 1fr)` }}>
                                {/* Time Column */}
                                <div className="col-span-1 flex flex-col justify-between py-2 border-r border-transparent">
                                    {timeSlots.map(time => (
                                        <span key={time} className="text-xs text-muted-foreground text-right pr-4 transform -translate-y-1/2 h-full flex items-start justify-end pt-1">
                                            {time}
                                        </span>
                                    ))}
                                </div>

                                {/* Event Columns */}
                                {daysToShow.map((dayDate) => (
                                    <div key={dayDate.toISOString()} className="col-span-1 relative border-l border-border/40 h-full">
                                        {/* Horizontal Lines */}
                                        {timeSlots.map((_, rowI) => (
                                            <div key={rowI} className="absolute w-full border-t border-dashed border-border/30" style={{ top: `${(rowI / (timeSlots.length - 1)) * 100}%` }} />
                                        ))}

                                        {/* Events */}
                                        {(() => {
                                            const dayEvents = events.filter(e => isSameDate(e.start, dayDate));

                                            // Simple collision detection for identical times
                                            const timeGroups: Record<string, Event[]> = {};
                                            dayEvents.forEach(e => {
                                                const key = e.timeString;
                                                if (!timeGroups[key]) timeGroups[key] = [];
                                                timeGroups[key].push(e);
                                            });

                                            return dayEvents.map(event => {
                                                const style = colorStyles[event.color];
                                                const pos = getEventStyle(event);

                                                // Determine width and left based on group
                                                const group = timeGroups[event.timeString];
                                                const index = group.indexOf(event);
                                                const count = group.length;

                                                const width = 96 / count;
                                                const left = 2 + (index * width);

                                                return (
                                                    <div
                                                        key={event.id}
                                                        onClick={(e) => handleEventClick(e, event)}
                                                        className={`absolute rounded-lg p-2 border-l-4 cursor-pointer hover:brightness-95 transition-all shadow-sm ${style.bg} ${style.border} overflow-hidden z-10`}
                                                        style={{
                                                            top: pos.top,
                                                            height: pos.height,
                                                            left: `${left}%`,
                                                            width: `${width}%`
                                                        }}
                                                    >
                                                        <h4 className={`font-semibold text-[10px] md:text-xs leading-tight mb-0.5 ${style.text} truncate`}>{event.title}</h4>
                                                        <p className={`text-[9px] ${style.subtext} hidden md:block truncate`}>{event.timeString}</p>
                                                    </div>
                                                );
                                            });
                                        })()}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Date Details Modal */}
            <AnimatePresence>
                {selectedDate && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] md:w-[400px] bg-white rounded-2xl shadow-xl border border-border p-6 z-50 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-xl leading-tight">
                                {formatDayName(selectedDate)}, {formatDate(selectedDate)}
                            </h3>
                            <button onClick={() => setSelectedDate(null)} className="p-2 hover:bg-secondary rounded-full transition-colors shrink-0">
                                <X size={20} className="text-muted-foreground" />
                            </button>
                        </div>

                        <div className="space-y-4 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
                            {(() => {
                                const dayEvents = events.filter(e => isSameDate(e.start, selectedDate));

                                if (dayEvents.length === 0) {
                                    return (
                                        <div className="text-center py-8 text-muted-foreground">
                                            <p>No event is present</p>
                                        </div>
                                    );
                                }

                                return dayEvents.map(event => (
                                    <div key={event.id} className={`p-4 rounded-xl border ${colorStyles[event.color].bg} ${colorStyles[event.color].border} border-opacity-50`}>
                                        <h4 className={`text-lg font-semibold mb-2 ${colorStyles[event.color].text}`}>{event.title}</h4>

                                        <div className="flex items-center gap-2 mb-3 text-muted-foreground/80">
                                            <Clock size={14} />
                                            <span className="text-sm font-medium">{event.timeString}</span>
                                        </div>

                                        {event.tags && (
                                            <div className="flex gap-2 flex-wrap">
                                                {event.tags.map(tag => (
                                                    <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-white/50 rounded-md text-foreground/70">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ));
                            })()}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Event Details Popover (Week/Day) */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] bg-white rounded-2xl shadow-xl border border-border p-5 z-50 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-bold text-lg leading-tight w-[90%]">{selectedEvent.title}</h3>
                            <button onClick={() => setSelectedEvent(null)} className="p-1 hover:bg-secondary rounded-full transition-colors shrink-0">
                                <X size={18} className="text-muted-foreground" />
                            </button>
                        </div>

                        <div className="space-y-3 mb-5">
                            <div className="flex items-center gap-3 bg-secondary/30 p-2 rounded-lg">
                                <div className="p-1.5 bg-white rounded-md shadow-sm">
                                    <Clock size={16} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">{formatDayName(selectedEvent.start)}, {formatDate(selectedEvent.start)}</p>
                                    <p className="text-xs text-muted-foreground">{selectedEvent.timeString}</p>
                                </div>
                            </div>
                            {selectedEvent.location && (
                                <div className="flex items-center gap-3 bg-secondary/30 p-2 rounded-lg">
                                    <div className="p-1.5 bg-white rounded-md shadow-sm">
                                        <MapPin size={16} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">{selectedEvent.location}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {selectedEvent.tags && (
                            <div className="flex gap-2 mb-5 flex-wrap">
                                {selectedEvent.tags.map(tag => (
                                    <span key={tag} className={`px-3 py-1 text-xs font-medium rounded-full ${colorStyles[selectedEvent.color].bg} ${colorStyles[selectedEvent.color].text}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CalendarView;

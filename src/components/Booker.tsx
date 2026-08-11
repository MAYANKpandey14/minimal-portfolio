import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { Calendar } from "lucide-react";

interface BookerProps {
    eventSlug?: string;
    calUsername?: string;
    view?: "month_view" | "week_view" | "column_view";
    className?: string;
}

export default function Booker({
    eventSlug = "30min",
    calUsername = "mayankpandey404",
    view = "month_view",
    className
}: BookerProps) {
    const { resolvedTheme } = useTheme();
    const calTheme = resolvedTheme === "dark" ? "dark" : "light";
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "300px" }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isInView) return;

        (async function () {
            const cal = await getCalApi({ namespace: eventSlug });
            cal("ui", {
                theme: calTheme,
                cssVarsPerTheme: {
                    light: { "cal-brand": "#10B981" },
                    dark: { "cal-brand": "#10B981" }
                },
                hideEventTypeDetails: false,
                layout: view
            });
        })();
    }, [eventSlug, calTheme, view, isInView]);

    return (
        <div ref={containerRef} className={`w-full h-[600px] ${className || ""}`}>
            <div className="w-full h-full overflow-hidden glass-panel border border-border/20 shadow-lg relative flex items-center justify-center">
                {isInView ? (
                    <Cal
                        key={calTheme}
                        namespace={eventSlug}
                        calLink={`${calUsername}/${eventSlug}`}
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        config={{
                            layout: view,
                            theme: calTheme,
                        }}
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center text-muted-foreground gap-3">
                        <Calendar className="w-10 h-10 text-primary animate-pulse" />
                        <span className="text-xs font-mono">Loading calendar scheduler...</span>
                    </div>
                )}
            </div>
        </div>
    );
}

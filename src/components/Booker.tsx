import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { useTheme } from "next-themes";

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

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": eventSlug });
            cal("ui", {
                "theme": calTheme,
                "cssVarsPerTheme": {
                    "light": { "cal-brand": "#10B981" }, // Website Emerald Primary Accent #10B981
                    "dark": { "cal-brand": "#10B981" }   // Website Emerald Primary Accent #10B981
                },
                "hideEventTypeDetails": false,
                "layout": view
            });
        })();
    }, [eventSlug, calTheme, view]);

    return (
        <div className={`w-full h-[600px] ${className}`}>
            <div className="w-full h-full overflow-hidden glass-panel border border-border/20 shadow-lg">
                <Cal
                    key={calTheme}
                    namespace={eventSlug}
                    calLink={`${calUsername}/${eventSlug}`}
                    style={{ width: "100%", height: "100%", overflow: "scroll" }}
                    config={{
                        "layout": view,
                        "theme": calTheme,
                    }}
                />
            </div>
        </div>
    );
}

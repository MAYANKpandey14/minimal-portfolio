import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface BookerProps {
    eventSlug?: string;
    calUsername?: string;
    view?: "month_view" | "week_view" | "column_view";
    theme?: "light" | "dark";
    className?: string;
}

export default function Booker({
    eventSlug = "15min",
    calUsername = "mayankpandey404",
    view = "month_view",
    theme = "light",
    className
}: BookerProps) {

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": eventSlug });
            cal("ui", {
                "theme": "light",
                "cssVarsPerTheme": {
                    "light": { "cal-brand": "#000000" },
                    "dark": { "cal-brand": "#292929" }
                },
                "hideEventTypeDetails": false,
                "layout": view
            });
        })();
    }, [eventSlug]);

    return (
        <div className={`w-full h-[600px] ${className}`}>
            <div className="w-full h-full overflow-hidden rounded-xl border border-border/50 bg-white/50 backdrop-blur-sm shadow-sm">
                <Cal
                    namespace={eventSlug}
                    calLink={`${calUsername}/${eventSlug}`}
                    style={{ width: "100%", height: "100%", overflow: "scroll" }}
                    config={{
                        "layout": view,
                        "theme": theme,
                    }}
                />
            </div>
        </div>
    );
}

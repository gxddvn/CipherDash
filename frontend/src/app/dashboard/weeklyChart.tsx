'use client'

import WeeklyActivityChart from "@/components/WeeklyActivityChart";

export default function WeeklyChart({className, wei, hei}: {className?: string, wei: string, hei: string}) {
    return (
        <div className={className}>
            <h1 className="text-base text-mainBgColor font-semibold mb-5">Weekly Activity</h1>
            {/* <WeeklyActivityChart className={`min-w-[${wei}px] h-[${hei}px]`} />                         */}
            <WeeklyActivityChart style={{ minWidth: wei, height: hei }} />
        </div>
    );
}
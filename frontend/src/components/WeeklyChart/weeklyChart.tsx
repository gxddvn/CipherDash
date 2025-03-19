'use client'

import WeeklyActivityChart from "@/components/WeeklyActivityChart";
import React from "react";

const WeeklyChart = React.memo(({className, wei, hei}: {className?: string, wei: string, hei: string}) => {
    return (
        <div className={className}>
            <h1 className="text-base text-mainBgColor font-semibold mb-5">Weekly Activity</h1>
            <WeeklyActivityChart style={{ minWidth: wei, height: hei }} />
        </div>
    );
})

WeeklyChart.displayName = "WeeklyChart"

export default WeeklyChart;
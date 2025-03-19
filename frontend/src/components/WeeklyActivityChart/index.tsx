"use-client";

import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';

const data = [
    { day: 'Sat', deposit: 500, withdraw: 300 },
    { day: 'Sun', deposit: 200, withdraw: 100 },
    { day: 'Mon', deposit: 600, withdraw: -400 },
    { day: 'Tue', deposit: 350, withdraw: -250 },
    { day: 'Wed', deposit: 450, withdraw: 50 },
    { day: 'Thu', deposit: 500, withdraw: -300 },
    { day: 'Fri', deposit: 380, withdraw: 270 },
];

interface CustomBarInterface {
    x?: number | undefined 
    y?: number | undefined 
    width?: number | undefined
    height?: number | undefined
    payload?: {
        withdraw: number;
    } | undefined
}

const CustomBar = React.memo(({ x, y, width, height, payload }: CustomBarInterface) => {
    const fillColor = (payload?.withdraw ?? 0) >= 0 ? "#41D4A8" : "#FF4B4A";

    return (
        <Rectangle
            x={x}
            y={y}
            width={width}
            height={height}
            fill={fillColor}
            className="transition-all duration-300 hover:opacity-80"
            rx={8}
            ry={8}
        />
    );
});

CustomBar.displayName = "CustomBar"

const WeeklyActivityChart = React.memo(({ className, style }: { className?: string, style?: React.CSSProperties }) => {
    return (
        <div className={className} style={style}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} barGap={8}>
                    <XAxis stroke='#343C6A' dataKey="day" />
                    <Tooltip />
                    <Bar dataKey="deposit" fill="#1814F3" radius={[4, 4, 0, 0]} />
                    <Bar 
                        dataKey="withdraw" 
                        radius={[4, 4, 0, 0]} 
                        shape={<CustomBar />} 
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
});

WeeklyActivityChart.displayName = "WeeklyActivityChart"

export default WeeklyActivityChart;

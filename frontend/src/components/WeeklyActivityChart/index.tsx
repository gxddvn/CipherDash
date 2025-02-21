"use-client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid, Rectangle } from 'recharts';

const data = [
    { day: 'Sat', deposit: 500, withdraw: 300 },
    { day: 'Sun', deposit: 200, withdraw: 100 },
    { day: 'Mon', deposit: 600, withdraw: -400 },
    { day: 'Tue', deposit: 350, withdraw: -250 },
    { day: 'Wed', deposit: 450, withdraw: 50 },
    { day: 'Thu', deposit: 500, withdraw: -300 },
    { day: 'Fri', deposit: 380, withdraw: 270 },
];

const CustomBar = (props: any) => {
    const { x, y, width, height, payload } = props;
    const fillColor = payload.withdraw >= 0 ? "#41D4A8" : "#FF4B4A"; // Цвет по значению

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
};

const WeeklyActivityChart = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} barGap={8}>
                    <XAxis stroke='#343C6A' dataKey="day" />
                    <Tooltip contentStyle={{ fontSize: "6px !important" }} />
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
};

export default WeeklyActivityChart;

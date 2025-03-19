import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const balanceData = [
    { month: 'Jul', balance: 200 },
    { month: 'Aug', balance: 400 },
    { month: 'Sep', balance: 300 },
    { month: 'Oct', balance: 700 },
    { month: 'Nov', balance: 500 },
    { month: 'Dec', balance: 600 },
    { month: 'Jan', balance: 750 },
];

const BalanceHistoryChart = React.memo(({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={balanceData}>
                    <XAxis stroke='#343C6A' dataKey="month" />
                    <YAxis stroke='#343C6A' />
                    <Tooltip />
                    <Line type="monotone" dataKey="balance" stroke="#1814F3" strokeWidth={3} dot={{ r: 4 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>  
    );
})

export default BalanceHistoryChart;

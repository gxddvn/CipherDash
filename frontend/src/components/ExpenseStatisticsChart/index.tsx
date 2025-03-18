import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const expenseData = [
    { name: 'Entertainment', value: 30, color: '#343C6A' },
    { name: 'Bill Expense', value: 15, color: '#FFA500' },
    { name: 'Investment', value: 20, color: '#FF00FF' },
    { name: 'Others', value: 35, color: '#1814F3' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: { cx: number, cy: number, midAngle: number, innerRadius: number, outerRadius: number, percent: number }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const ExpenseStatisticsChart = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                    data={expenseData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    innerRadius={0}
                    label={renderCustomizedLabel}
                    labelLine={false}
                    >
                        {expenseData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExpenseStatisticsChart;

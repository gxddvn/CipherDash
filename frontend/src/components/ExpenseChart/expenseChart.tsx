'use client'

import ExpenseStatisticsChart from "@/components/ExpenseStatisticsChart"

const ExpenseChart = ({className}: {className?: string}) => {
    return (
        <div className={className}>
            <h1 className="text-base text-mainBgColor font-semibold mb-5">Expense Statistics</h1>
            <ExpenseStatisticsChart className="h-[180px]" />
        </div>
    )
}

export default ExpenseChart;
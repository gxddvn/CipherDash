'use client'

import BalanceHistoryChart from "@/components/BalanceHistoryChart";
import ExpenseStatisticsChart from "@/components/ExpenseStatisticsChart";
import WeeklyActivityChart from "@/components/WeeklyActivityChart";


const Charts = () => {
    return (
        <div className="flex justify-between pt-5">
            <div className="bg-backgroundSecondary mr-5 p-5 rounded-md shadow">
                <h1 className="text-base text-mainBgColor font-semibold mb-5">Weekly Activity</h1>
                <WeeklyActivityChart className="min-w-[500px] h-[180px]" />                        
            </div>
            <div className="bg-backgroundSecondary mr-5 p-5 rounded-md shadow">
                <h1 className="text-base text-mainBgColor font-semibold mb-5">Expense Statistics</h1>
                <ExpenseStatisticsChart className="h-[180px]" />
            </div>
            <div className="bg-backgroundSecondary p-5 rounded-md shadow ">
                <h1 className="text-base text-mainBgColor font-semibold mb-5">Balance History</h1>
                <BalanceHistoryChart className="min-w-[500px] h-[180px]" />
            </div>
        </div>
    );
};
export default Charts;

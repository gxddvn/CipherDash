'use client'

import WeeklyChart from "./weeklyChart";
import ExpenseChart from "./expenseChart";
import BalanceChart from "./balanceChart";


const Charts = () => {
    return (
        <div className="flex justify-between pt-5">
            <WeeklyChart className="bg-backgroundSecondary mr-5 p-5 rounded-md shadow" wei="500px" hei="180px" />
            <ExpenseChart className="bg-backgroundSecondary mr-5 p-5 rounded-md shadow"/>
            <BalanceChart className="bg-backgroundSecondary p-5 rounded-md shadow "/>
        </div>
    );
};
export default Charts;

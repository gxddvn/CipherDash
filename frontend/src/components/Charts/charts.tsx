'use client'

import WeeklyChart from "../WeeklyChart/weeklyChart";
import ExpenseChart from "../ExpenseChart/expenseChart";
import BalanceChart from "../BalanceChart/balanceChart";
import React from "react";


const Charts = React.memo(() => {
    return (
        <div className="flex justify-between pt-5">
            <WeeklyChart className="bg-backgroundSecondary mr-5 p-5 rounded-md shadow" wei="500px" hei="180px" />
            <ExpenseChart className="bg-backgroundSecondary mr-5 p-5 rounded-md shadow"/>
            <BalanceChart className="bg-backgroundSecondary p-5 rounded-md shadow "/>
        </div>
    );
});

Charts.displayName = 'Charts';

export default Charts;

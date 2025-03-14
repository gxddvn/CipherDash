'use client'

import BalanceHistoryChart from "@/components/BalanceHistoryChart";

export default function BalanceChart({className}: {className?: string}) {
    return (
        <div className={className}>
            <h1 className="text-base text-mainBgColor font-semibold mb-5">Balance History</h1>
            <BalanceHistoryChart className="min-w-[500px] h-[180px]" />
        </div>
    );
}
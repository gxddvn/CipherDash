"use-client";

import DashboardNav from "@/components/DashboardNav";

export default function AuthLayout({
    children,
    }: {
        children: React.ReactNode
    }) {
        return (
            <div className="flex flex-grow h-screen">
                <DashboardNav />
                {children}
            </div>
        );
    }
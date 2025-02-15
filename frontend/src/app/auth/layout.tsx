"use-client";
import Header from "@/components/Header";

export default function AuthLayout({
    children,
    }: {
        children: React.ReactNode
    }) {
        return (
            <div className="flex flex-col h-screen">
                <Header />
                {children}
            </div>
        );
    }
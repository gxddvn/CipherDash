"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // const isAuthenticated = !!localStorage.getItem("token");
    const isAuthenticated = true;
    router.push(isAuthenticated ? "/dashboard" : "/auth/signin");
  }, [router]);

  return <p>Redirecting...</p>;
}

"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loader from "./loader/Loader";

const RootLoader = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [pathname]);
  return loading ? <Loader/>: children;
};

export default RootLoader;

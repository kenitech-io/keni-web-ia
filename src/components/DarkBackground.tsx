"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const DARK_ROUTES = ["/devops-consulting", "/contact"];

export default function DarkBackground() {
  const pathname = usePathname();

  useEffect(() => {
    const isDark = DARK_ROUTES.includes(pathname);
    if (isDark) {
      document.documentElement.style.backgroundColor = "#2c2c2c";
      document.body.style.backgroundColor = "#2c2c2c";
    } else {
      document.documentElement.style.backgroundColor = "";
      document.body.style.backgroundColor = "";
    }
    return () => {
      document.documentElement.style.backgroundColor = "";
      document.body.style.backgroundColor = "";
    };
  }, [pathname]);

  return null;
}

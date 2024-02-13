import { useEffect } from "react";

export function useLockScroll(flag: any) {
  useEffect(() => {
    if (flag) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [flag]);
}

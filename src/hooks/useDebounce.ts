import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debValue, setDebValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debValue;
};

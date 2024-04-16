import { useCallback, useEffect, useMemo, useState } from 'react';

export const DESKTOP_WIDTH = 992;

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  const isDesktop = useMemo(() => width >= DESKTOP_WIDTH, [width]);

  return { isDesktop };
};

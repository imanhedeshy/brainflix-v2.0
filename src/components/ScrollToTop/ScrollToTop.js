import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import scrollToTop from "../../utils/scrollToTop";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
}

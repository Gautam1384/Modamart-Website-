<<<<<<< HEAD
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
=======
import { useEffect} from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
>>>>>>> 137470c6da907f3de99aa8a0ae1ac087b42d39fc
}
export default ScrollTop;
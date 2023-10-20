import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Reset = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname]);
}

export default Reset
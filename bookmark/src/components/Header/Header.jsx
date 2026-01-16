import { useEffect, useCallback, useRef } from "react";
import Logo from "../../assets/logo-bookmark.svg";
import Menu from "../Menu/Menu";
import './Header.css';

function Header() {
    const headerRef = useRef();

    const scrollHandler = useCallback(function () {
        const ref = headerRef.current;

        if (window.scrollY > 20) {
            ref.classList.add("shadow-lg", "duration-200");
        } else {
            ref.classList.remove("shadow-lg", "duration-200");
        }
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);

        return () => { document.removeEventListener("scroll", scrollHandler); }
    }, [scrollHandler]);

    return (
        <div data-header id="data-header" className=" sticky top-0 bg-white z-50">
            <header ref={headerRef} data-header className=" ">
                <div className="app-max-width header">
                    <>
                        <img src={Logo} alt="" className="z-50" />
                    </>
                    <Menu />
                </div>
            </header>
        </div>
    )
}

export default Header;

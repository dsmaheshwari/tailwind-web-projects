import { useEffect, useCallback, useState } from "react";
import "./Menu.css";

function Menu() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if(isActive) {
            document.documentElement.classList.add("overflow-hidden");
        } else {
            document.documentElement.classList.remove("overflow-hidden");
        }
    }, [isActive]);

    // const navigateTo = useCallback((event, navigateToSection) => {
    //     event.preventDefault();

    //     const documentParams = document.documentElement.getBoundingClientRect();
    //     const headerParams = document.querySelector("header").getBoundingClientRect();
    //     const location = document.querySelector(`#${navigateToSection}`).getBoundingClientRect();

    //     let yLocation = 0
        
    //     if (documentParams.top < 0) {
    //         yLocation = Math.abs(documentParams.top) - Math.abs(location.top) - headerParams.height - 20;
    //     } else {
    //         yLocation = Math.abs(documentParams.top) + Math.abs(location.top) - headerParams.height - 20;
    //     }

    //     window.scrollTo({
    //         top: yLocation,
    //         left: 0,
    //         behavior: "smooth",
    //     });
    // });

    const navigateTo = useCallback((event, section) => {
        event.preventDefault();

        document.getElementById(section).scrollIntoView();

        setIsActive(!isActive);
    }, [isActive]);

    return (
        <div data-menu id="data-menu">
            <div className="hidden menu md:flex">
                <a href="#data-features" className="group menu-item" >
                    <span>Features</span>
                </a>
                <a href="#data-download" className="group menu-item">
                    <span>Download</span>
                </a>
                <a href="#data-faq" className="group menu-item">
                    <span>FAQ</span>
                </a>
                <button className="button-primary">Login</button>
            </div>
            <div className="block md:hidden">
                <button className={isActive ? 'z-30 active menu-button' : 'z-30 menu-button' } onClick={() => setIsActive(!isActive)}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="lines" aria-hidden="true">
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </span>
                </button>
            </div>
            <div id="mobile-menu-list" className={(isActive ? 'opacity-100' : 'pointer-events-none opacity-0') + ' fixed inset-0 z-20 bg-rose-200/80 backdrop-blur-md transition-opacity duration-200'}>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="flex flex-col items-center space-y-16">
                        <a href="javascript:void(0)" className="active:text-rose-500" onClick={(event) => navigateTo(event, "data-features")}>
                            <span>Features</span>
                        </a>
                        <a href="javascript:void(0)" className="active:text-rose-500" onClick={(event) => navigateTo(event, "data-download")}>
                            <span>Download</span>
                        </a>
                        <a href="javascript:void(0)" className="active:text-rose-500" onClick={(event) => navigateTo(event, "data-faq")}>
                            <span>FAQ</span>
                        </a>
                        <button className="button-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;

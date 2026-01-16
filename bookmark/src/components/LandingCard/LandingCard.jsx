import { useCallback, useEffect, useRef } from "react";
import IllustrationImg from "../../assets/illustration-hero.svg";

function LandingCard() {
    const heroRef = useRef(null);
    const heroImageRef = useRef(null);

    useEffect(() => {
        const el = heroRef.current;
        const el_img = heroImageRef.current;
        // trigger RTL reveal by scaling from the right
        el.classList.add("scale-x-100", "transition-transform", "duration-700", "ease-in-out");
        el_img.classList.add("scale-100", "transition-transform", "duration-700", "ease-in-out");
    }, [heroRef, heroImageRef]);

    const navigateTo = useCallback((section) => {
        document.getElementById(section).scrollIntoView();
    }, []);

    return (
        <div data-landing-card id="data-landing-card">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between app-max-width space-y-6 mt-32 lg:space-y-0">
                <div className="lg:hidden">
                    <img src={IllustrationImg} alt="" />
                </div>
                <div className="flex flex-col justify-center lg:justify-start items-center h-full space-y-6 w-full lg:w-1/2">
                    <h2 className="text-5xl font-display font-semibold w-full text-center lg:text-left">A Simple Bookmark Manager</h2>
                    <p className="text-lg text-gray-500 text-center lg:text-left">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="hidden md:flex flex-row w-full justify-center lg:justify-start space-x-4">
                        <button className="button-secondary" onClick={() => navigateTo("data-download")}>Get on Chrome</button>
                        <button className="button-secondary" onClick={() => navigateTo("data-download")}>Get on Firefox</button>
                    </div>
                    <div className="flex md:hidden flex-row w-full justify-center lg:justify-start space-x-4">
                        <button className="button-primary" onClick={() => navigateTo("data-download")}>Get it Now</button>
                    </div>
                </div>
                <div className="hidden lg:block relative w-1/2 lg:pl-6">
                    <img ref={heroImageRef} src={IllustrationImg} alt="" className="scale-0"/>
                    <div ref={heroRef} className="-z-1 bg-rose-300 h-full w-500 overflow-hidden absolute top-[30%] left-0 rounded-l-full transform origin-right scale-x-0">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingCard;

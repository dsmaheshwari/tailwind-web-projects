import { useCallback, useId, useState } from "react";
import "./FAQ.css";

function FAQ() {
    const id1 = useId();
    const id2 = useId();
    const id3 = useId();
    const id4 = useId();

    // Using event targeting instead of refs for robust DOM access

    const [activeAns, setActiveAns] = useState();

    const showFAQ = useCallback((event) => {
        event.preventDefault();

        // Find the closest container that represents the FAQ item
        const item = event.currentTarget.closest('[data-faq-item]');
        if (!item) return;

        if (activeAns && activeAns.id === item.id) {
            activeAns.classList.remove("is-active");
            setActiveAns(null);
            return;
        }

        if (activeAns) {
            activeAns.classList.remove("is-active");
        }

        item.classList.add("is-active");
        setActiveAns(item);
    }, [activeAns]);

    return(
        <div data-faq id="data-faq">
            <div className="app-max-width mt-32">
                <div className="flex flex-col space-y-6">
                    <h2 className="text-5xl font-display font-semibold text-center">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-500 text-center">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
                    <div className="flex flex-col items-center space-y-4 w-full lg:w-3/5 mx-auto faq-list">
                        <div data-faq-item id={id1} className={"flex flex-col justify-between w-full border-b border-b-gray-200 pb-3 px-6"}>
                            <button type="button" onClick={showFAQ} className="inline-flex justify-between items-center w-full">
                                <h5 className="text-lg">What is Bookmark?</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" className="chevron">
                                    <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8"></path>
                                </svg>
                            </button>
                            <div className="answer text-gray-400 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima velit recusandae blanditiis laudantium harum qui odit accusantium culpa quibusdam nesciunt in autem, voluptas a aspernatur et sequi, architecto quam asperiores?
                            </div>
                        </div>
                        <div data-faq-item id={id2} className={"flex flex-col justify-between w-full  border-b border-b-gray-200 pb-3 px-6"}>
                            <button type="button" onClick={showFAQ} className="inline-flex justify-between items-center w-full">
                                <h5 className="text-lg">How can I request a new Browser?</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" className="chevron">
                                    <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8"></path>
                                </svg>
                            </button>
                            <div className="answer text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima velit recusandae blanditiis laudantium harum qui odit accusantium culpa quibusdam nesciunt in autem, voluptas a aspernatur et sequi, architecto quam asperiores?
                            </div>
                        </div>
                        <div data-faq-item id={id3} className={"flex flex-col justify-between w-full  border-b border-b-gray-200 pb-3 px-6"}>
                            <button type="button" onClick={showFAQ} className="inline-flex justify-between items-center w-full">
                                <h5 className="text-lg">Is there a mobile app?</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" className="chevron">
                                    <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8"></path>
                                </svg>
                            </button>
                            <div className="answer text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima velit recusandae blanditiis laudantium harum qui odit accusantium culpa quibusdam nesciunt in autem, voluptas a aspernatur et sequi, architecto quam asperiores?
                            </div>
                        </div>
                        <div data-faq-item id={id4} className={"flex flex-col justify-between w-full  border-b border-b-gray-200 pb-3 px-6"}>
                            <button type="button" onClick={showFAQ} className="inline-flex justify-between items-center w-full">
                                <h5 className="text-lg">What about other Chromium browsers?</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" className="chevron">
                                    <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8"></path>
                                </svg>
                            </button>
                            <div className="answer text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima velit recusandae blanditiis laudantium harum qui odit accusantium culpa quibusdam nesciunt in autem, voluptas a aspernatur et sequi, architecto quam asperiores?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;

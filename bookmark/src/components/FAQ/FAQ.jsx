import { createRef, useCallback, useRef, useState } from "react";
import "./FAQ.css";
import FAQs from  "../../data/faq.json";

function FAQ() {

    const refs = useRef(FAQs.map(() => createRef()));

    // Using event targeting instead of refs for robust DOM access

    const [activeAns, setActiveAns] = useState();

    const showFAQ = useCallback((index) => {
        // event.preventDefault();

        // Find the closest container that represents the FAQ item
        const activeRef = refs.current[index];

        if (!activeRef) return;

        if (activeAns && activeAns.id === activeRef.id) {
            activeAns.classList.remove("is-active");
            setActiveAns(null);
            return;
        }

        if (activeAns) {
            activeAns.classList.remove("is-active");
        }

        activeRef.classList.add("is-active");
        setActiveAns(activeRef);
    }, [activeAns]);

    return(
        <div data-faq id="data-faq">
            <div className="app-max-width mt-32">
                <div className="flex flex-col space-y-6">
                    <h2 className="text-5xl font-display font-semibold text-center">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-500 text-center">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
                    <div className="flex flex-col items-center space-y-4 w-full lg:w-3/5 mx-auto faq-list">
                        { FAQs.map((faq, index) => (
                            <div key={index} id={`faq-id-${index}`} data-faq-item ref={(ref) => refs.current[index] = ref} className={"flex flex-col justify-between w-full border-b border-b-gray-200 pb-3 px-6"}>
                                <button type="button" onClick={() => showFAQ(index)} className="inline-flex justify-between items-center w-full">
                                    <h5 className="text-lg">{ faq.question }</h5>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" className="chevron">
                                        <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8"></path>
                                    </svg>
                                </button>
                                <div className="answer text-gray-400 ">
                                    { faq.answer }
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;

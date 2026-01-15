import ChromeLogo from "../../assets/logo-chrome.svg";
import FirefoxLogo from "../../assets/logo-firefox.svg";
import OperaLogo from "../../assets/logo-opera.svg";
import "./Download.css";

function Download() {
    return(
        <div data-download id="data-download">
            <div className="app-max-width mt-32">
                <div className="flex flex-col items-center justify-center space-y-6 ">
                    <h2 className="text-5xl font-display font-semibold text-center">Download the extension</h2>
                    <p className="text-lg text-gray-500 text-center">We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
                    <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full mt-6 space-y-6 md:space-y-0 space-x-0 md:space-x-6">
                        <div className="flex flex-col items-center flex-1 shadow-lg rounded-2xl w-full md:w-fit">
                            <div className="flex flex-col items-center justify-center">
                                <div>
                                    <img src={ ChromeLogo } alt="" />
                                </div>
                                <div className="mt-8">
                                    <h4 className="font-bold text-2xl">Add to Chrome</h4>
                                    <p className="text-gray-400">Minimum version 108</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center bg-dots w-full mt-8 p-4">
                                <button className="button-secondary w-full">Add Extension</button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center flex-1 shadow-lg rounded-2xl w-full md:w-fit">
                            <div className="flex flex-col items-center justify-center">
                                <div>
                                    <img src={FirefoxLogo} alt="" />
                                </div>
                                <div className="mt-8">
                                    <h4 className="font-bold text-2xl">Add to Chrome</h4>
                                    <p className="text-gray-400">Minimum version 108</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center bg-dots w-full mt-8 p-4">
                                <button className="button-secondary w-full">Add Extension</button>
                            </div>
                        </div>

                        <div className="flex flex-col items-center flex-1 shadow-lg rounded-2xl w-full md:w-fit">
                            <div className="flex flex-col items-center justify-center">
                                <div>
                                    <img src={OperaLogo} alt="" />
                                </div>
                                <div className="mt-8">
                                    <h4 className="font-bold text-2xl">Add to Chrome</h4>
                                    <p className="text-gray-400">Minimum version 108</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center bg-dots w-full mt-8 p-4">
                                <button className="button-secondary w-full">Add Extension</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Download;
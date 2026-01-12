import IllustrationImage from "../assets/illustration-intro.png"
import "./GetStarted.css";

function GetStarted() {
    return(
        <div className="flex flex-col justify-center items-center component background-section">
            <div className="flex flex-col items-center text-center py-4">
                <img src={IllustrationImage} alt="" className="scale-90"/>
                <h1 className="text-4xl">All your files in one secure location, assessible anywhere.</h1>
                <h2 className="text-lg mt-10">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</h2>
                <div className="mt-10">
                    <button className="px-4 py-2">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;
function MailList() {
    return (
        <div data-mail-list>
            <div className="flex justify-center bg-rose-300 mt-32 p-12 lg:p-28">
                <div className="flex flex-col justify-center items-center space-y-2 text-white w-full lg:w-3/5">
                <h6 className="text-lg font-medium text-center">
                    35,000+ Already Joined
                </h6>
                <h2 className="text-4xl font-semibold text-center">
                    Stay up-to-date with what we're doing
                </h2>
                <div className="flex flex-col lg:flex-row justify-center mt-8 space-x-0 space-y-2 lg:space-x-2 lg:space-y-2 flex-wrap">
                        <input type="text" placeholder="Enter your email address" className="outline-none border border-red-400 rounded-xl bg-white w-80 h-10.5 pl-4 text-red-600 placeholder:text-red-400 placeholder:text-sm placeholder:text-center placeholder:lg:text-left"/>
                    <div className="">
                        <button className="button-secondary w-full lg:w-fit">Keep Me Posted!</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default MailList;
import react from "react";

const Footer = () => {
    return <footer className="bg-orange-900 text-white">
        <div className="md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
            <h1 className="ig:text-4×1 text-3×1 md:mb-0 mb-6 lg:leading-normal font-semibold
            md:w-2/5"><span className="text-orange-400">free</span>welcome to Realest Blog</h1>
            <div>
                <input type="text" placeholder="Enter your ph.NO" className="text-orange-400 
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-4 py-2.5 rounded px-2 focus:outline-none" />
                <button className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
                rounded-md text-white md:w-auto w-full">
                    Request Code
                </button>
            </div>

        </div>

    </footer>
}

export default Footer;
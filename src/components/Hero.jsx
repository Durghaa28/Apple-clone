import {
    FaArrowUpRightFromSquare


} from "react-icons/fa6";
function Hero() {

    return (
        <>
            <div className="flex items-center justify-between bg-gray-100 p-5 md:p-20">
                <div className="text-neutral-500 md:text-5xl font-semibold">
                    <span className="text-black">Store. </span>The best way to buy the <br />products you love.
                </div>
                <div>
                    <div className="flex gap-3 items-center">
                        <img src="hero1.jpg" alt="" className="h-6 w-6 md:h-16 md:w-16" />
                        <div>
                            <p className="text-sm md:text-sm">Need shopping help?</p>
                            <p className="flex gap-2 items-center text-xs md:text-sm text-blue-500 hover:underline">Ask a Specialist <FaArrowUpRightFromSquare size={12} /></p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src="hero2.png" alt="" className="h-6 w-6 md:h-16 md:w-16" />
                        <div>
                            <p className="text-sm md:text-sm">Need shopping help?</p>
                            <p className="flex gap-2 items-center text-xs md:text-sm text-blue-500 hover:underline">Ask a Specialist <FaArrowUpRightFromSquare size={12} /></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
import { FaCar, FaHeadset, FaWallet } from 'react-icons/fa';
const Features = () => {
    return (
        <>
            <section className="h-full text-black p-8">
                <h1 className="text-4xl text-center">What We Do.</h1>
                <section className="w-full space-y-4 p-8 flex flex-col md:flex-row md:space-x-4 h-[80%]">
                    <div className='space-y-3 flex flex-col md:flex-1 md:space-x-4'>
                        <FaCar className='text-8xl text-gray-800' />
                        <div>
                            <h1 className="text-xl">Wide Range of Vehicle Options</h1>
                            <p>We offer a variety of new and pre-owned vehicles, including different makes, models, and price ranges to cater to diverse customer needs.</p>
                        </div>
                    </div>
                    <div className='space-y-3 flex flex-col md:flex-1 md:space-x-4'>
                        <FaHeadset className='text-8xl text-gray-800' />
                        <div>
                            <h1 className="text-xl">Exceptional Customer Service</h1>
                            <p>We offer a variety of new and pre-owned vehicles, including different makes, models, and price ranges to cater to diverse customer needs.</p>
                        </div>
                    </div>
                    <div className='space-y-3 flex flex-col md:flex-1 md:space-x-4'>
                        <FaWallet className='text-6xl text-gray-800' />
                        <div>
                            <h1 className="text-xl">Transparent Pricing and Financing Options</h1>
                            <p>We offer fair and transparent pricing without hidden fees..</p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Features
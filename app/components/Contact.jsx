const Contact = () => {
    return (
        <>
            <section className="h-screen bg-gray-200 p-5 md:p-11 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 pr-0 md:pr-5">
                    <h1 className="text-3xl">Get in Contact</h1>
                    <p className="mt-4">We would love to hear from you! Please fill out the form on the right to get in touch with us.</p>
                    <p className="mt-2">Whether you have a question, feedback, we are here to help!</p>
                </div>
                <div className="w-full md:w-1/2">
                    <form className="mt-5">
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="name">Name</label>
                            <input className="border rounded w-full py-2 px-3" type="text" id="name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="email">Email</label>
                            <input className="border rounded w-full py-2 px-3" type="email" id="email" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="message">Message</label>
                            <textarea className="border rounded w-full py-2 px-3" id="message" rows="4" required></textarea>
                        </div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Contact
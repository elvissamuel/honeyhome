
const Footer = () => {

    return (
        <section className="w-[90%] lg:w-[80%] mx-auto mt-12 py-28">
            <div className="flex flex-col justify-center gap-6 text-center">
                <p className="text-yellow-400">Like what you see?</p>
                <p className="text-2xl ">Let's work together</p>
                <p className="text-zinc-400">Transform your space with expert design. Start the conversation today!</p>
                <button className="px-2 py-4 w-48 mx-auto bg-yellow-600 text-white rounded-3xl">Chat with us</button>

                <ul className="flex items-center justify-center gap-12 mt-12">
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <hr className="mt-6" />

                <p className="text-zinc-400">2024 Honey Home of Luxuries. All right reserved</p>
            </div>

        </section>
    )
}

export default Footer;
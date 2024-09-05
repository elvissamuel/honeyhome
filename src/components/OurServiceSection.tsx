

const OurServiceSection = () => {
    const services = [
        {title: "Residential Design", body: "Our residential design service offer a wide range of options that allows us to tailor each project to the unique needs of our clients. From cozy family homes to luxiroius apartment. Our team of designers has the expertise and creativity to create a stunning and functional space that perfectly reflects your personality and style."},
        {title: "Commercial Design", body: "Our commercial design services are designed to help business create inspiring workspace and store designs that reflect their brand identity and enhance productivity. With a focus on functionality and aesthetics, we work with our client to create a space that is not only beautiful but also practical and effecient."}, 
        {title: "Decor Supply", body: "We offer a wide-range of high quality decor supplies to help you complete your interior design project. From statement peices to finishing touches, we have everything you need to add the perfect touch of style and sophistication to your space."}
    ]

    return (
        <section className="py-32 w-[90%] lg:w-[75%] mx-auto">
            <h2 className="text-4xl font-semibold my-8 text-center">Our Services</h2>

            <div className="grid lg:grid-cols-3 gap-10">
                {services.map((service) => (
                    <div className="bg-zinc-800 p-6 py-8 pb-20 rounded-2xl hover:scale-105 transition-all duration-300 ease-in-out hover:shadow hover:shadow-zinc-200">
                        <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
                        <p className="text-zinc-400">{service.body}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default OurServiceSection;
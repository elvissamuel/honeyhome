import img1 from "../asset/imgs/project-img-one.jpg"
import img2 from "../asset/imgs/project-img-two.jpeg"
import img3 from "../asset/imgs/project-img-three.jpeg"
import img4 from "../asset/imgs/project-img-four.jpeg"

const ProjectSection = () => {
    const images = [
        {image: img4, title: "Urban Loft", body: "Its all about homely feel. Honey is the only therapy you need to handle your space."},
        {image: img2, title: "Fashion Haven", body: "Where style meets sophistication in every corner of our interior design"},
        {image: img3, title: "Project Casa Bella", body: "Luxury is in each detail - Hubert de Givenchy"},
        {image: img1, title: "Veraz", body: "Commercial space design."},
    ]

    return (
        <section className="min-h-screen py-32 w-[80%] mx-auto">
            <div className="flex flex-col gap-4 lg:flex-row items-center justify-between my-10">
                <h2 className="text-4xl font-semibold">Recent Project</h2>
                <button className="py-5 px-10 bg-zinc-800 rounded-full hover:shadow hover:bg-zinc-900 hover:shadow-yellow-200">See All Projects</button>

            </div>
            <div className="grid md:grid-cols-2 gap-10 gap-y-16">
                    {images.map((item) => (
                        <div>
                            <img src={item.image} className="object-cover w-full rounded-2xl hover:scale-105 transition-all duration-700 ease-in-out" alt={item.title} />
                            <div className="mt-8">
                                <p className="text-3xl font-semibold my-2">{item.title}</p>
                                <p className="text-zinc-400">{item.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
    )
}

export default ProjectSection;
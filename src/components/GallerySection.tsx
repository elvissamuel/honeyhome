import img1 from "../asset/imgs/gallery-1.jpeg"
import img2 from "../asset/imgs/gallery-2.jpg"
import img3 from "../asset/imgs/gallery-3.jpg"
import img4 from "../asset/imgs/gallery-4.jpg"
import img5 from "../asset/imgs/gallery-5.jpg"
import img6 from "../asset/imgs/gallery-6.jpg"
import img7 from "../asset/imgs/gallery-7.jpg"

const Gallery = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7]

    return (
        <section className="py-32 w-[90%] md:w-[80%] mx-auto min-h-screen">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between my-10">
                <h2 className="text-4xl font-semibold">Gallery</h2>
                <button className="py-5 px-10 bg-zinc-800 rounded-full hover:shadow hover:bg-zinc-900 hover:shadow-yellow-200">Follow on Instagram</button>

            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((image, index) => (
                    <div className={`${index === 0 ? "lg:col-span-2" : ""} ${index === 3 ? "lg:col-span-2" : ""} h-96 rounded-3xl w-full`}>
                        <img src={image} alt="gallery" className={`rounded-3xl w-full h-full object-cover mx-2`} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery;
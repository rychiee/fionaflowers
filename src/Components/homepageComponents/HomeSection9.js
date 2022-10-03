import "./HomeSection9.css";
import GalleryImg1 from "../../img/gallery1.jpg";
import GalleryImg2 from "../../img/gallery2.jpg";
import GalleryImg3 from "../../img/gallery3.jpg";
import GalleryImg4 from "../../img/gallery4.jpg";

function HomeSection9() {

    const gallery = [
        {
            galleryImg: GalleryImg1,
            galleryName: "Traditional decor",
            galleryDate: "Jul 8, 2016"
        },
        {
            galleryImg: GalleryImg2,
            galleryName: "In love and happiness",
            galleryDate: "jul 9, 2016"
        },
        {
            galleryImg: GalleryImg3,
            galleryName: "Birthday gift ideas",
            galleryDate: "jul 10, 2016"
        },
        {
            galleryImg: GalleryImg4,
            galleryName: "Spring wedding",
            galleryDate: "jul 11, 2016"
        },
    ]

    return (
        <section className="section9">
            <div className="section9content">
                <div className="section9part1">
                        <div className="updateDiv1">
                            <h3>Stay Tuned for Updates!</h3>
                        </div>
                        <div className="updateDiv2">
                            <form>
                                <input type="email" className="email_input" placeholder="enter email" />
                                <input type="submit" className="submit_input" value="submit" />
                            </form>
                        </div>
                </div>
                <div className="section9part2">
                    <div className="galleryDivs">
                        {gallery.map(eachGallery => (
                            <div className="eachGallery" key={eachGallery.galleryImg}>
                                <img src={eachGallery.galleryImg} />
                                <div className="eachGalleryContent">
                                    <div>
                                        <h1>{eachGallery.galleryName}</h1>
                                        <span>{eachGallery.galleryDate}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection9;
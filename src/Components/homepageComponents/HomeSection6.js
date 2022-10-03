import "./HomeSection6.css";
import SliderSection6 from "./Slider-section6/SliderSection6";
import naghsh from "../../img/naghsh.png";
import blog1Image from "../../img/blog1.jpg";
import blog2Image from "../../img/blog2.jpg";
import blog3Image from "../../img/blog3.jpg";



function HomeSection6() {

    const blogs = [
        {
            img: blog1Image,
            date: "Jul 20,2016",
            comment: "The nicest things are always made of joy with love"
        },
        {
            img: blog2Image,
            date: "Jul 20,2016",
            comment: "Everlasting beauty of flowers: amazing photoshoot"
        },
        {
            img: blog3Image,
            date: "Jul 20,2016",
            comment: "The most extravagant weddings of Viktorian era"
        }
    ]

    return(
        <section className="section6">
            <div className="sec6Content">
                <div className="sec6part1">
                    <SliderSection6 />
                </div>
                <div className="sec6part2">
                    <div className="sec6part2description">
                        <h1>Articles from My Blog</h1>
                        <span>SHOP</span>
                        <img src={naghsh} />
                    </div>

                    <div className="sec6part2Content">
                        <div className="sec6part2Divs">
                            {blogs.map((blog) => (
                                    <div className="sec6EachDiv" key={blog.img}>
                                        <img src={blog.img}/>
                                        <a href="#">{blog.date}</a>
                                        <h1>{blog.comment}</h1>
                                    </div>
                                ))}
                        </div>
                        <button>More Posts</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection6;
import "../../Components/homepageComponents/HomeSection5.css";
import { useState } from "react";

function HomeSection5() {

    const [s5p2Display, s5p2setDisplay] = useState(
        {
            opacity: '0',
            transition: '0.5s'
        }
    )
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;


        if(Math.ceil(scrolled > 4450)) {
            s5p2setDisplay({
                opacity: '1',
                transition: '0.5s'
            })
        }

    })



    return (
        <section className="section5">
            <div className="sec5background">
                <div className="sec5content">
                    <div className="sec5part2">
                        <div className="sec5part2Cont" style={s5p2Display}>
                            <span>welcome</span>
                            <h2>Exclusive Design by Best Florists</h2>
                            <p>The floristry business has a significant market in the corporate and social event world, as flowers play a large part in the decor of special events and meetings.</p>
                            <a href="">shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}


export default HomeSection5;
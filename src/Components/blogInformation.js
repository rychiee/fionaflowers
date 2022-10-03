import WelcomePart from "../pages/WelcomePart";
import "./blogInformation.css";
import Header from "./Header";
import Footer from "./homepageComponents/Footer";
import Calendar from 'react-calendar';
import { HiSearch } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import Blog1Img from "../img/mainBlog1.jpg";
import Blog2Img from "../img/mainBlog2.jpg";
import Blog3Img from "../img/mainBlog3.jpg";
import Blog4Img from "../img/mainBlog4.jpg";


function BlogInformation() {

    const [value, onChange] = useState(new Date());

    const [likeCount1, setLikeCount1] = useState(3);
    const [likeCount2, setLikeCount2] = useState(0);
    const [likeCount3, setLikeCount3] = useState(0);
    const [likeCount4, setLikeCount4] = useState(1);

    const blogs = [
        {
            blogName: "Flowers Help You Find the Harmony",
            blogImg: Blog1Img,
            blogDate: "JUN 23, 2016",
            blogDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc",
            commentCount: 2,
            likeCount: likeCount1,
            countChanger: setLikeCount1
        },
        {
            blogName: "Who Gives Florist Lessons?",
            blogImg: Blog2Img,
            blogDate: "JUN 14, 2016",
            blogDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc",
            commentCount: 3,
            likeCount: likeCount2,
            countChanger: setLikeCount2
        },
        {
            blogName: "Top Decor Ideas for September Events",
            blogImg: Blog3Img,
            blogDate: "MAY 29, 2016",
            blogDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc",
            commentCount: 0,
            likeCount: likeCount3,
            countChanger: setLikeCount3
        },
        {
            blogName: "A Fairytale for a Modern Princess",
            blogImg: Blog4Img,
            blogDate: "MAY 17, 2016",
            blogDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc",
            commentCount: 0,
            likeCount: likeCount4,
            countChanger: setLikeCount4
        }
    ]

    return(
        <div className="blogInfoPage">
            <Header />
            <WelcomePart PageName={"Blog"} />
            <section className="blogSection">
                <div className="blogContentDiv">
                    <div className="blogContent">
                        {blogs.map((blog, index) => (
                            <div className="eachBlogDiv" key={index}>
                            <h1>{blog.blogName}</h1>
                            <img src={blog.blogImg} />
                            <div className="EachBlogInformationDiv">
                                <span className="dateSpan">{blog.blogDate}</span>

                                <div className="CommentDiv">
                                    <div className="commentIconDiv"><FaRegComment className="comIcon"/></div><span className="commentTitle">{blog.commentCount}</span>
                                </div>
                                <div className="LikeDiv" onClick={() => {
                                    blog.countChanger(blog.likeCount +1)
                                }}>
                                    <div className="likeIconDiv"><AiFillHeart className="likeIcon"/></div><span className="likeTitle">{blog.likeCount}</span>
                                </div>
                                
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc</p>
                        </div>
                        ))}
                    </div>
                    <div className="blogInfoDiv">
                        <div className="blogCategories">
                            <h2>Categories</h2>
                            <div className="blogCategoriesContent">
                                <li>2017 Design Trends</li>
                                <li>Decor Ideas</li>
                                <li>Florists Magic Tricks</li>
                                <li>Gifts Ideas</li>
                                <li>Special Occasions</li>
                                <li>Wedding Day</li>
                            </div>
                        </div>

                        <div className="searchDiv">
                            <h2>Search</h2>
                            <div className="searchDivContent">
                                <input type="text" placeholder="Search ..."/><HiSearch className="searchIcon"/>
                            </div>
                        </div>

                        <div className="blogArchives">
                            <h2>Categories</h2>
                            <div className="blogArchivesContent">
                                <li>July 2016</li>
                                <li>June 2016</li>
                                <li>May 2016</li>
                                <li>April 2016</li>
                                <li>March 2016</li>
                            </div>
                        </div>

                        <div className="blogCalendarDiv">
                            <h2>Calendar</h2>
                            <Calendar onChange={onChange} value={value}/>
                        </div>

                        <div className="blogPosts">
                            <h2>Recent Posts</h2>
                            <div className="blogPostsContent">
                                <li>The nicest things are always made of joy with love</li>
                                <li>Everlasting beauty of flowers: amazing photoshoot</li>
                                <li>The most extravagant weddings of Viktorian era</li>
                            </div>
                        </div>

                        <div className="blogTags">
                            <h2>Tags</h2>
                            <div className="blogTagsContent">
                                <div>Beauty</div>
                                <div>Design</div>
                                <div>Lilies</div>
                                <div>Pionies</div>
                                <div>Roses</div>
                                <div>Wedding</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    )
}

export default BlogInformation;
import "./QuestionForm.css";
import naghsh from "../../img/naghsh.png";

function QuestionForm(props) {
    return(
        <section className="questionSection">
            <div className="questionBackground" style={props.style}>
                <div className="questionContent">
                    <div className="questionDivDescription">
                        <h1>Have a Question?</h1>
                        <span>Drop a line</span>
                        <img src={naghsh} />
                    </div>
                    <div className="questionForm">
                        <form>
                            <input type="text" placeholder="Name*" />
                            <input type="email" placeholder="E - mail*" />
                            <textarea type="text" placeholder="Message*" />
                            <input type="checkbox" />
                            <span>I agree that my submitted data is being collected and stored.</span>
                            <br/>
                            <input type="submit" value="send message" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QuestionForm;
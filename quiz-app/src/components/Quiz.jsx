import "./Quiz.css"
import { data } from "../assets/data"
import {useState } from "react"
export default function Quiz(){

    const [index,setIndex]=useState(0)
    const [question,setQuestion]=useState(data[index])
    const [selected,setSelected]=useState(null)

    function nextQuestion(){
        setIndex(index+1)
        setQuestion(data[index+1])
    }
    function list(ans){
        if(question.ans===ans){
            console.log("true")
            setSelected(ans)
        }
        else{
            console.log("false")
            
        }
    }
    return(
        
        <div className="quiz-container">
            <h1 className="title">Quiz-App</h1>
            <hr className="hr"/>
            <h2 className="quiz-question">{index+1} .{question.question}</h2>
            <ul className="quiz-options">
                <li className={`quiz-list ${selected===1 && question.ans===1 ? "selected":""}`} onClick={()=>list(1)}>{question.option1}</li>
                <li className={`quiz-list ${selected===2 && question.ans===2 ? "selected":""}`} onClick={()=>list(2)}>{question.option2}</li>
                <li className={`quiz-list ${selected===3 && question.ans===3 ? "selected":""}`} onClick={()=>list(3)}>{question.option3}</li>
                <li className={`quiz-list ${selected===4 && question.ans===4 ? "selected":""}`} onClick={()=>list(4)}>{question.option4}</li>
            </ul>
            <button className="next" onClick={nextQuestion}>Next</button>
            <h3 className="next-page">{index+1} of {data.length} Question </h3>
        </div>
    )
}
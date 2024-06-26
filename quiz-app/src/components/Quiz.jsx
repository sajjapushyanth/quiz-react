import "./Quiz.css"
import { data } from "../assets/data"
import {useEffect, useState } from "react"
export default function Quiz(){

    const [index,setIndex]=useState(0)
    const [question,setQuestion]=useState(data[index])
    const [selected,setSelected]=useState(null)
    const [isCorrect,setIsCorrect]=useState(null)
    const [result,setResult]=useState(0)
    const [answered,setAnswered]=useState(false)

    console.log("result : ",result)

    useEffect(()=>{
        setQuestion(data[index])

    },[index])
    function nextQuestion(){
        
        if(index+1===5){
            setQuestion(null)
        }
        else{
            setIndex(index+1)
        
        }
        setSelected(null)
        setIsCorrect(null)
        setAnswered(false)
    }
    function list(ans){
        if(!answered){
            
        if(question.ans===ans){
            setIsCorrect(true)
            setResult(prevResult=>prevResult+1)
            console.log("true")
            
        }
        else{
            setIsCorrect(false)
            
        }
        setSelected(ans)
        setAnswered(true)

        }
    }

    function getClassNames(option){
        if(selected===option &&isCorrect!==null){
            if(isCorrect){
                return "selected"
            }
            else{
                return "wrong"
            }
        }
        else if(answered){
            if(option===question.ans){
                return "selected"
            }
        }
        return ""

    }
    function reset(){
        setIndex(0)                           
        setSelected(null)
        setIsCorrect(null)
        setAnswered(false)
        setResult(0)
    }
    return(
        
        <div className="quiz-container">
            <h1 className="title">Quiz-App</h1>
            <hr className="hr"/>
            {question?(
                <>
                <h2 className="quiz-question">{index+1} .{question.question}</h2>
            <ul className="quiz-options">
                <li className={`quiz-list ${getClassNames(1)}`} onClick={()=>list(1)}>{question.option1}</li>
                <li className={`quiz-list ${getClassNames(2)}`} onClick={()=>list(2)}>{question.option2}</li>
                <li className={`quiz-list ${getClassNames(3)}`} onClick={()=>list(3)}>{question.option3}</li>
                <li className={`quiz-list ${getClassNames(4)}`} onClick={()=>list(4)}>{question.option4}</li>
                
            </ul>
            <button className="next" onClick={nextQuestion}>Next</button>
            <h3 className="next-page">{index+1} of {data.length} Question </h3>
                </>
            ):
            (<div className="result"> Your Result is : <b>{result}</b>

                <button className="next" onClick={reset}>Reset</button>
             </div>)}
            
        </div>
    )
}
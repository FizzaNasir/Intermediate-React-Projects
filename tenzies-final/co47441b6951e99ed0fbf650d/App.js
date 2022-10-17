import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
export default function App() {
    
const[dieVal,setdieVal]=React.useState(allNewDice()) //initailize the state with array when apploads
const[tenzies, settenzies]=React.useState(false)
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isheld: false,
                id: nanoid()
                }
            )
        }
        return newDice
    }
    
    function holdDice(id){
        setdieVal(val=>{
            return dieVal.map(prevdieval=>{
            if(prevdieval.id===id){
                return {...prevdieval, isheld:!prevdieval.isheld}
            }
            else{
                return prevdieval;
            }  })  })  }
            

function roll(event){
    if(event.target.id==="New game"){
        settenzies(false)
        setdieVal(allNewDice())
    }
else{setdieVal(prev=>{
   return prev.map(
        prevDieVal=>{
         return prevDieVal.isheld? prevDieVal:{...prevDieVal, value:Math.ceil(Math.random() * 6)}
        })
     })}
}
        
React.useEffect(()=>{
          //My shitty but working code
//     const arr=[]
//     let result
//     dieVal.map(prevVal=>{
//         if(prevVal.isheld===true)
//         arr.push(prevVal.value)})
//     if(arr.length===10){
//        result = arr.every(element => {
//           return element === arr[0]? true: false
//         })
//     }
//    settenzies(prevState=>result)
   
          //Scrimba's consize and obviously, a working code
   const allHeld = dieVal.every(die => die.isheld) //will return true if every die is held
        const firstValue = dieVal[0].value
        const allSameValue = dieVal.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            settenzies(true)
            
        }
},[dieVal])

const dieElements= dieVal.map(dieObj=> <Die key={dieObj.id} HandleClick={()=>holdDice(dieObj.id)} isheld={dieObj.isheld} value={dieObj.value}/>)
    
    
    return (
        <main>
         {tenzies && <Confetti/>}
         <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {dieElements}    
            </div>
            <button className="roll--btn" onClick={roll} id={tenzies ? "New game" : "Roll"} >
            {tenzies ? "New game" : "Roll"}
            </button>
        </main> 
    )
}
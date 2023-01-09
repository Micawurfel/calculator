import React, {useState} from 'react'
import './calculator.css'

const Calculator = () => {
    const [number, setNumber] = useState(0)
    const [oldNumber, setOldNumber] = useState(0)
    const [operator, setOperator] = useState()

    function inputNumber(e) {
        let input = e.target.value
        if(number != 0){
            setNumber(number + input)
        } else{
            setNumber(input)
        }
    }

    function clear() {
        setNumber(0)
    }

    function percentage(){
        setNumber(number/100)
    }

    function sign(){
        if(number > 0){
            setNumber(-number)
        }else(
            setNumber(Math.abs(number))
        )
    }

    function operationHandler(e){
        setOperator(e.target.value)
        setOldNumber(number)
        setNumber(0)
    }

    function calculate() {
        if (operator === "+"){
            setNumber(parseFloat(oldNumber) + parseFloat(number))
        } else if(operator === "-"){
            setNumber(oldNumber - number)
        }else if(operator === "/"){
            setNumber(oldNumber / number)
        }else if(operator === "*"){
            setNumber(oldNumber * number)
        }
    }


    return (
        <>
            <div>
                
                <div className='screen'>{number}</div> 

                <button className='btn other' onClick={clear}>AC</button>
                <button className='btn other' onClick={sign}>+/-</button>
                <button className='btn other' onClick={percentage}>%</button>

                <button className='btn operator' onClick={operationHandler} value={"/"}>/</button>

                <button className='btn number' onClick={inputNumber} value={7}>7</button>
                <button className='btn number' onClick={inputNumber} value={8}>8</button>
                <button className='btn number' onClick={inputNumber} value={9}>9</button>

                <button className='btn operator' onClick={operationHandler} value={"*"}>*</button>

                <button className='btn number' onClick={inputNumber} value={4}>4</button>
                <button className='btn number' onClick={inputNumber} value={5}>5</button>
                <button className='btn number' onClick={inputNumber} value={6}>6</button>

                <button className='btn operator' onClick={operationHandler} value={"-"}>-</button>
                

                <button className='btn number' onClick={inputNumber} value={1}>1</button>
                <button className='btn number' onClick={inputNumber} value={2}>2</button>
                <button className='btn number' onClick={inputNumber} value={3}>3</button>

                <button className='btn operator' onClick={operationHandler} value={"+"}>+</button>
                
                <button className='btn number zero' onClick={inputNumber} value={0}>0</button>
                <button className='btn number' onClick={inputNumber} value={"."}>.</button>

                <button className='btn operator' onClick={calculate}>=</button>

            </div>
        </>
    )
}

export default Calculator
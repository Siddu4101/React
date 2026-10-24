import { useState, useEffect } from "react";
import InputBox from "./InputBox";

export default function CurrencyConvertor(){
    let [currencies, setCurrencies] = useState({})
    let [fromCurrncy, setFromCurrency] = useState('inr')
    let [toCurrncy, setToCurrency] = useState('usd')
    let [fromCurrencyAmount, setfromCurrencyAmount] = useState(0)
    let [toCurrencyAmount, settoCurrencyAmount] = useState(0)

    useEffect(()=> {fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrncy}.json`)
    .then(res => {
        console.log("fetching currency data for",  fromCurrncy )
        return res.json()
    })
    .then(res=> setCurrencies(res[fromCurrncy]))
    },[fromCurrncy])

    useEffect(()=>{
        console.log("Calculating the convertion...")
        if(currencies[toCurrncy] != undefined)
            settoCurrencyAmount(fromCurrencyAmount * currencies[toCurrncy])
    },[fromCurrncy,toCurrncy,fromCurrencyAmount])

    return<>
    <h1 className="text-2xl">How to create a reuseable components</h1>
    <div className="caret-indigo-400 border-2 w-fit h-fit p-5 m-5 ">
        <h1 className="text-2xl p-1 mb-3">Currency Convertor</h1>
        <InputBox fieldLable="From" currencies={currencies} readOnly={false}currencySetter={setFromCurrency} setCurrancyAmount={setfromCurrencyAmount} amount={fromCurrencyAmount} region={fromCurrncy}/> <br />
        <InputBox fieldLable="To" currencies={currencies} readOnly={true} currencySetter={setToCurrency} setCurrancyAmount={settoCurrencyAmount} amount={toCurrencyAmount} region={toCurrncy}/>
    </div>
    </>
}
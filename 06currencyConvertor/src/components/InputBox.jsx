import React from 'react'
import { useId } from 'react';
function InputBox({
    label,
    amount,
    currencyOptions=[],
    Oncurrencychange,
    selectcurrency="usd",
    Onamountchange,
    Amountdisabled=false,
    Currencydisabled=false,
 
    className = "",
}) {
   
    const amountInputId=useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor='{amountInputID' className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={Amountdisabled}
                    onChange={(e)=>Onamountchange && Onamountchange(Number(e.target.value))}

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectcurrency}
                    onChange={(e)=>Oncurrencychange(e.target.value)}
                    disabled={Currencydisabled}
                    
                >
                       {
                        currencyOptions.map((currency)=>{
                            return (
                        <option key={currency} value={currency}>
                        {currency}
                        </option>
                    )}
                    )
                       }
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

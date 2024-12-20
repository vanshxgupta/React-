import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import './App.css'

function App() {
  
  const [amount,setamount]=useState(0)
  const[from,setfrom]=useState("usd")
  const[to,setto]=useState("inr");
  const[convertedamount,setconvertedamount]=useState(0)

  const currencyinfo=useCurrencyInfo(from)
  
  const options=Object.keys(currencyinfo)

  const swap=()=>{
    setfrom(to)
    setto(from)
    setconvertedamount(amount)
    setamount(convertedamount)

  }

  const convert=()=>{
    setconvertedamount(amount*currencyinfo[to])
  }

  return (
    <div className="w-full h-screen flex">
   
    <div
      className="w-1/2 h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlfGVufDB8fDB8fHww')`,
      }}
    ></div>

    <div
      className="w-1/2 flex flex-wrap  justify-center items-center h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1502920514313-52581002a659?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uZXl8ZW58MHx8MHx8fDA%3D')`,
      }}
    >
    
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >

                    <div className="w-full mb-1">
                        <InputBox
                            label={from}
                            amount={amount}
                            Onamountchange={(amount)=>setamount(amount)}
                            currencyOptions={options}
                            Oncurrencychange={(currency)=>setfrom(currency)}
                            selectcurrency={from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label={to}
                            amount={convertedamount}
                            currencyOptions={options}
                            
                            Oncurrencychange={(currency)=>setto(currency)}
                            selectcurrency={to}
                            Amountdisabled
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
        </div>
    </div>
)
}

export default App

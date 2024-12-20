import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const reactelement=React.createElement(//react element banane ka syntax->1)tag,2)attributes,3)children..
  'a',
  {href:'https://google.com',target:'blank'},
  'click me to visit google'
)

function MyApp(){
  return(
    <div>
      <h1>Custom APP!</h1>
  
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
<>
<App/>
{reactelement}{/* Wrap in JSX ,, dono app and reactelement chalane ke liye jsx mai wrap kro , vrna nahi  chalega kyunki render sirf ek element allow krta hai, isliye frgaement mai daalke aur jsk mai daalo tooh chalega */}
</>
    

)

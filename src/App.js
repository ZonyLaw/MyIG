
import {useState} from 'react'
import './App.css';
import IG from 'ig-api'


function App() {

//api goes head

  const ig = new IG(apiKey, false)


 const [acc, setacc] = useState()

        ig.login(username, password)
          // Response data is automatically
          // passed to the resolve callback
          .then((summary) => {
             console.log('summary:', summary)

            //setacc(summary)
            const {accountInfo} = summary 
            const {balance} = accountInfo
            setacc(balance)
            console.log(balance)

            // ig.get('price',  {
            //  epics: 'CS.D.USDJPY.TODAY.IP'
            // })
            //  .then((price) => {
            //  console.log(price)
            // })
          

              
          })
             
              // const myArr = JSON.parse(acc)



  return (
    <div className="App">
      <header className="App-header">
       
        <p>Balance: {acc} </p>
        <p>Position: </p>

        {/* myArr.accountType */}
      </header>
    </div>
  );
}

export default App;

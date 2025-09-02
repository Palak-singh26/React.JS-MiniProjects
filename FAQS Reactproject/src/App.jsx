// import { useState } from 'react'
import './App.css'
import FAQs from './FAQs'
// import { question } from './FAQSData/FAQQuestion'

function App() {
  // const [showAns, setshowAns] = useState(question[0].id);

  return (
    <div className='App'>
      <div>
        <FAQs/>
  {/* <div>
        <h1 className='head'>Frequently Asked Questions (FAQs)</h1>
        <div className="faqouter">
          {question.map((FAQItem) => {
            return (
              <div className="FAQItem" key={FAQItem.id}>
                <h2 onClick={()=>setshowAns(FAQItem.id)}>{FAQItem.question}</h2>
                <p className={showAns==FAQItem.id? 'activeAns' : ''}>{FAQItem.answer}</p>
              </div>
            )
          })}
        </div>
      </div> */} 
      </div>
    </div>
  )
}

export default App

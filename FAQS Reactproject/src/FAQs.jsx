import React, { useState } from 'react'
import { question } from './FAQSData/FAQQuestion';


export default function FAQs() {
    let [currentid, setcurrntid] = useState(question[0].id);
    let items = question.map((itemData, i) => {
        let itemdetails = {
            itemData,
            currentid,
            setcurrntid
        }
        return (
            <FAQItem itemdetails={itemdetails} key={i} />
        )
    })
    return (
        <div>
            <h1 className='head'>Frequently Asked Questions (FAQs)</h1>
            <div className="faqouter">
                {items}
            </div>
        </div>

    )
}

function FAQItem({ itemdetails }) {
    let {itemData,currentid,setcurrntid} = itemdetails;
    return (
        <div className="FAQItem">
            <h2 onClick={()=>setcurrntid(itemData.id)}>{itemData.question}</h2>
            <p className={currentid === itemData.id ? 'activeAns' : ''}>{itemdetails.itemData.answer}</p>
        </div>
    )
}

//  its components base FAQs project
// here we are using props drilling concept
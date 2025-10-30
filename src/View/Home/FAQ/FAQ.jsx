import React, { useState } from 'react'
import './FAQ.css'
import img from '../../../assets/7191139_3568950 1.png'
const FAQ = () => {
    const [index, setIndex] = useState([1]);

    const indexFunction = (i) => {
        if (index.includes(i)) {
            setIndex(index.filter((e) => e !== i))
        } else {
            setIndex([...index, i])
        }
    }
    const data = [
        {
            question: 'Vestibulum dictum ex sit amet pulvinar laoreet.',
            answer: 'Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper.'
        },
        {
            question: 'What we like to do & what we don’t like to do',
            answer: 'Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper.'
        },
        {
            question: 'Integer tristique nisi sit amet consequat pharetra. ',
            answer: 'Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper.'
        },
        {
            question: 'Quisque quis ex eleifend dolor maximus lacinia.  ',
            answer: 'Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper.'
        },
        {
            question: 'Mauris ullamcorper tortor sed purus interdum. ',
            answer: 'Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper.'
        },
        {
            question: 'Fermentum efficitur est dictum.  ',
            answer: 'Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel semper.'
        },


    ]
    return (
        <>
            <div className='faq_wrapper'>
                <div className='container faw_content_wrapper'>
                    <div className='faq_left'>
                        <h1 className='heading' style={{
                            textAlign: 'left'
                        }}>FAQs</h1>
                        <p>Find answers to frequently asked questions about our courses and company.</p>
                        <img src={img} />
                    </div>
                    <div className='faq_right'>
                        {data.map((e, i) => (
                            <div key={e} onClick={(() => indexFunction(i))} className='faq_question_answer_wrapper'>
                                <div className='question_wrapper' style={index?.includes(i) ? {backgroundColor:'rgba(58, 53, 103, 1)'} : {}}>
                                    <p style={index?.includes(i) ?{color:'#fff'}:{}}>{e.question}</p>
                                    <i class="fa-solid fa-plus" style={index?.includes(i) ?{rotate:'45deg',color:'#fff'}:{}}></i>
                                </div>
                                {index?.includes(i) && <div  className='answer_wrapper'>
                                    {e.answer}
                                </div>}
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ

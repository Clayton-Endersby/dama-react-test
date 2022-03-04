import React, {useState} from 'react'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'
import {Link} from 'react-router-dom'

// Material UI arrows

// function to control slider arrows


export default function Carousel() {
    
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {

        if(slideIndex !== dataSlider.length)
        {
            setSlideIndex(slideIndex + 1)
        }
        else if(slideIndex === dataSlider.length)
        {
            setSlideIndex(1)
        }

    }

    const prevSlide = () => {
        if(slideIndex !== 1)
        {
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 1)
        {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    const DisplaySignUpForm = index => {
        
        if (slideIndex === 1){
        return (
            <div className="homeForm-container">
                <h3>Signup for our Newsletter</h3>
                <form action="POST" name="emailSignUp">
                    
                    <input type="email" required/>
                    <input type="submit" />
                </form>
            </div>
            
        )} else if (slideIndex === 5){
            return(
                <Link to="/memberships" className="carousel-link">Membership Page</Link>
            )
        } else if (slideIndex !== 1 || slideIndex !== 5){
            return(
                <></>
            )
        }
        
    }

    return (
        <>
            <div className="slider-wrapper">
                <section className="slider-container">
                    {dataSlider.map((obj, index) => {
                        return(
                            <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                                <img src={process.env.PUBLIC_URL + `/assets/images/carousel/slide${index + 1}.jpg`} alt=""/>
                            </div>
                        )
                    })}

                    <aside className="slider-content-container">
                        {dataSlider.map((obj, index) => {
                            return(
                                <div key={obj.id} className="slide-wrapper">
                                    <h1 className={slideIndex === index + 1 ? "slide-content content-active" : "slide-content"}>{obj.title}</h1>
                                    <p className={slideIndex === index + 1 ? "slide-content content-active" : "slide-content"}>{obj.subTitle}</p>
                                   
                                </div>
                            )
                        })}
                         <DisplaySignUpForm/>
                    </aside>

                    <BtnSlider moveSlide={nextSlide} direction={"next"} />
                    <BtnSlider moveSlide={prevSlide} direction={"prev"} />

                    <div className="container-dots">
                        {Array.from({length: 5}).map((item, index) => (
                            <div 
                                onClick={() => moveDot(index + 1)}
                                className={slideIndex === index + 1 ? "dot active" : "dot"} key={index}
                            ></div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}
import React from 'react'
import heroImg1 from '../../assets/images/main/apple-icon.svg'
import heroImg2 from '../../assets/images/main/hero-img.png'

function Hero() {
  return (
    <section className="hero-section">
        <div className="container">
            <div className="hero-section__content" data-aos="flip-up">
                <div className="hero-section__title">
                    <div className="hero-section__title-seria">
                        <img src={heroImg1} alt="Apple Icon"/>
                        <p>iPhone 14 Series</p>
                    </div>
                    <h1>Up to 10% off Voucher</h1>
                    <a href="exclusive" className="hero-section__title-shop">
                        <span>
                            Shop Now
                        </span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 12H20M20 12L13 5M20 12L13 19" stroke="#FAFAFA" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </a>
                </div>
                <img src={heroImg2} alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Hero
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../assets/Style/style.css";

import img1 from '../assets/Image/globjamun.png';
import img2 from '../assets/Image/jalebi.png';
import img3 from '../assets/Image/laddu.png';
import img4 from '../assets/Image/rasagula.png';

import img5 from '../assets/Image/sweet1.jpg';
import img6 from '../assets/Image/sweet2.jpg';
import img7 from '../assets/Image/sweet3.jpg';
import img8 from '../assets/Image/sweet4.jpg';
import img9 from '../assets/Image/sweet5.jpg';
import img10 from '../assets/Image/sweet6.jpg';
import img11 from '../assets/Image/sweet7.jpg';
import img12 from '../assets/Image/sweetabout.jpg';

// 4 sweets for the carousel
const sweets = [
    { name: "Gulab Jamun", img: img1, text: "Soft, hot and soaked in sugar syrup" },
    { name: "Jalebi", img: img2, text: "Crispy swirls, sweet and juicy" },
    { name: "Laddu", img: img3, text: "Ghee laddu, made fresh every morning" },
    { name: "Rasagulla", img: img4, text: "Light, spongy and full of milk" },
];

// 4 cards (heading + content only)
const features = [
    { title: "Pure Ghee", text: "We use only pure ghee and jaggery, no shortcuts and no artificial colours." },
    { title: "Fresh Every Morning", text: "Sweets are made early morning, so they reach you soft and fresh." },
    { title: "Festival Orders", text: "Diwali, Pongal or wedding, we pack big boxes on time for your function." },
    { title: "Home Delivery", text: "Order today and we deliver to your door, safely packed." },
];

// 6 products (change name, text, price as you like)
const products = [
    { name: "Mysore Pak", img: img5, tag: "Bestseller", price: 320, text: "Melt in mouth sweet,made in small batches." },
    { name: "Adhirasam", img: img6, tag: "Traditional", price: 240, text: "Old style jaggery and rice flour sweet." },
    { name: "Badusha", img: img7, tag: "Fresh", price: 260, text: "Flaky outside, soft inside, dipped in sugar." },
    { name: "Kaju Katli", img: img8, tag: "Premium", price: 520, text: "Thin cashew diamonds, perfect for gifting." },
    { name: "Carrot Halwa", img: img9, tag: "Hot Pick", price: 350, text: "Slow cooked with milk, ghee and cardamom." },
    { name: "Festival Box", img: img10, tag: "Gift Box", price: 650, text: "Mixed box of our best sweets for your family." },
];

// Instagram logo (simple svg)
function InstagramIcon() {
    return (
        <svg className="social-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" />
        </svg>
    );
}

// WhatsApp logo (simple svg)
function WhatsappIcon() {
    return (
        <svg className="social-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21l1.65-4.9A9 9 0 1 1 8 19.4L3 21z" />
            <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-1.9-1.3-2.3-2.3l.8-1-1-2L9 8.5z" />
        </svg>
    );
}

function Home() {
    // which sweet is in the front
    const [active, setActive] = useState(0);

    // contact form message
    const [sent, setSent] = useState(false);

    // order popup open or close
    const [ordered, setOrdered] = useState(false);

    // start AOS (works if AOS is linked in index.html)
    useEffect(() => {
        if (window.AOS) {
            window.AOS.init({ duration: 900, once: true });
        }
    }, []);

    // scroll to a section when navbar link is clicked
    function goTo(id) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    // next and previous sweet
    function nextSweet() {
        setActive((active + 1) % sweets.length);
    }

    function prevSweet() {
        setActive((active - 1 + sweets.length) % sweets.length);
    }

    // swipe left / right on the carousel
    function handleSwipe(event, info) {
        if (info.offset.x < -50) {
            nextSweet();
        }
        if (info.offset.x > 50) {
            prevSweet();
        }
    }

    // decide position of each sweet (front, right, left, back)
    function getPosition(index) {
        const diff = (index - active + sweets.length) % sweets.length;

        if (diff === 0) {
            // front
            return { x: "0%", scale: 1.2, opacity: 1, filter: "blur(0px)", zIndex: 3, rotateY: 0 };
        }
        if (diff === 1) {
            // right side
            return { x: "85%", scale: 0.8, opacity: 0.7, filter: "blur(3px)", zIndex: 2, rotateY: -25 };
        }
        if (diff === 3) {
            // left side
            return { x: "-85%", scale: 0.8, opacity: 0.7, filter: "blur(3px)", zIndex: 2, rotateY: 25 };
        }
        // back
        return { x: "0%", scale: 0.5, opacity: 0, filter: "blur(6px)", zIndex: 1, rotateY: 0 };
    }

    // contact form submit
    function handleSubmit(event) {
        event.preventDefault();
        setSent(true);
        event.target.reset();
    }

    return (<>
        {/* ---------- Navbar ---------- */}
        <nav className="navbar">
            <h1 className="logo">sweetTamil</h1>
            <ul className="nav-links">
                <li onClick={() => goTo("home")}>Home</li>
                <li onClick={() => goTo("about")}>About</li>
                <li onClick={() => goTo("products")}>Products</li>
                <li onClick={() => goTo("contact")}>Contact</li>
            </ul>
        </nav>

        {/* ---------- Hero ---------- */}
        <section className="hero" id="home">

            {/* left side: content */}
            <div className="hero-left" data-aos="fade-right">
                <p className="hero-small">Traditional Tamil Sweets</p>
                <h2 className="hero-title">Sweets made with love, ghee and Tamil tradition</h2>
                <p className="hero-text">
                    Fresh every morning. Pick your favourite and order for
                    your home, your festival or your wedding.
                </p>
                <button className="hero-button" onClick={() => goTo("products")}>
                    Shop Sweets
                </button>
            </div>

            {/* right side: 3D carousel */}
            <div className="hero-right" data-aos="fade-left">
                <div className="carousel">
                    <motion.div className="carousel-stage" onPanEnd={handleSwipe}>
                        {sweets.map((item, index) => (
                            <motion.img
                                key={item.name}
                                src={item.img}
                                alt={item.name}
                                className="carousel-img"
                                animate={getPosition(index)}
                                transition={{ duration: 0.6 }}
                                onClick={() => setActive(index)}
                                draggable="false"
                            />
                        ))}
                    </motion.div>

                    {/* name of the front sweet */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            className="carousel-info"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="carousel-name">{sweets[active].name}</h3>
                            <p className="carousel-text">{sweets[active].text}</p>
                        </motion.div>
                    </AnimatePresence>

                    {/* small dots */}
                    <div className="carousel-dots">
                        {sweets.map((item, index) => (
                            <span
                                key={item.name}
                                className={index === active ? "dot dot-active" : "dot"}
                                onClick={() => setActive(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* ---------- Content section (no images) ---------- */}
        <section className="features-section">
            <h2 className="section-title" data-aos="fade-up">Why SweetTamil?</h2>
            <p className="section-sub" data-aos="fade-up">
                Small things we care about in every box
            </p>

            <div className="features-grid">
                {features.map((item, index) => (
                    <div className="feature-card" key={item.title} data-aos="fade-up" data-aos-delay={index * 100}>
                        <h3 className="feature-title">{item.title}</h3>
                        <p className="feature-text">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* ---------- Products ---------- */}
        <section className="products-section" id="products">
            <h2 className="section-title" data-aos="fade-up">Our Products</h2>
            <p className="section-sub" data-aos="fade-up">
                Handmade sweets, packed fresh for you
            </p>

            <div className="products-grid">
                {products.map((item, index) => (
                    <div className="product-card" key={item.name} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>

                        {/* image box (image zooms on hover) */}
                        <div className="product-img-box">
                            <img src={item.img} alt={item.name} className="product-img" />
                            <span className="product-tag">{item.tag}</span>
                        </div>

                        <div className="product-body">
                            <h3 className="product-name">{item.name}</h3>
                            <p className="product-text">{item.text}</p>

                            <div className="product-bottom">
                                <span className="product-price">₹{item.price}</span>
                                <button className="product-button" onClick={() => goTo("order")}>
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* ---------- About ---------- */}
        <section className="about-section" id="about">
            <div className="about-image-box" data-aos="fade-right">
                <img src={img12} alt="About sweetTamil" className="about-img" />
            </div>

            <div className="about-content" data-aos="fade-left">
                <p className="about-small">Our Story</p>
                <h2 className="about-title">Three generations of sweet making</h2>
                <p className="about-text">
                    It started in a small kitchen, where our grandmother made sweets
                    for every festival. Her recipes were simple: pure ghee, fresh
                    jaggery and a lot of patience.
                </p>
                <p className="about-text">
                    Today we still make every sweet by hand, early in the morning.
                    No machines for the taste, no artificial colours, no preservatives.
                    Only the same recipes, made with the same love.
                </p>
                <p className="about-text">
                    Whether it is a small box for your home or a big order for
                    a wedding, we pack every sweet like it is going to our own family.
                </p>
            </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section className="contact-section" id="contact">
            <h2 className="contact-title" data-aos="fade-up">Contact Us</h2>
            <p className="contact-sub" data-aos="fade-up">
                Have a question or a big order? Send us a message.
            </p>

            <form className="contact-form" onSubmit={handleSubmit} data-aos="zoom-in">
                <label className="form-label">Your Name</label>
                <input className="form-input" type="text" placeholder="Enter your name" required />

                <label className="form-label">Phone Number</label>
                <input className="form-input" type="tel" placeholder="Enter your phone number" required />

                <label className="form-label">Message</label>
                <textarea className="form-input form-textarea" placeholder="Tell us what you need" required></textarea>

                <button className="form-button" type="submit">Send Message</button>

                {sent && <p className="form-success">Thank you! We will call you soon.</p>}
            </form>
        </section>

        {/* ---------- Diwali Sale ---------- */}
        <section className="diwali-section" id="sale">
            <div className="diwali-box">

                {/* left side: content */}
                <div className="diwali-left" data-aos="fade-right">
                    <span className="diwali-badge">🪔 Diwali Special</span>
                    <h2 className="diwali-title">Diwali Sale</h2>
                    <p className="diwali-big">Up to 30% OFF</p>
                    <p className="diwali-text">
                        Make your Diwali sweeter. Order festival boxes for your
                        family, friends and neighbours at special prices.
                    </p>

                    <div className="diwali-offers">
                        <p className="diwali-offer">✨ Free gift box above ₹999</p>
                        <p className="diwali-offer">🚚 Free home delivery</p>
                        <p className="diwali-offer">🎁 Extra sweets on 5 kg orders</p>
                    </div>

                    <p className="diwali-code">Use code: <span>DIWALI30</span></p>

                    <button className="diwali-button" onClick={() => goTo("order")}>
                        Grab the Offer
                    </button>
                </div>

                {/* right side: images */}
                <div className="diwali-right" data-aos="fade-left">
                    <img src={img11} alt="Diwali sweets" className="diwali-main-img" />
                    <img src={img1} alt="Gulab jamun" className="diwali-float diwali-float-one" />
                    <img src={img3} alt="Laddu" className="diwali-float diwali-float-two" />
                </div>
            </div>
        </section>

        {/* ---------- EatSweet order section ---------- */}
        <section className="order-section" id="order">
            <div className="order-box" data-aos="zoom-in">
                <p className="order-small">Ready to taste?</p>
                <h2 className="order-title">Your sweet moment is one click away</h2>
                <p className="order-text">
                    Press the button and we will start packing your fresh sweets right away.
                </p>
                <button className="eat-button" onClick={() => setOrdered(true)}>
                    EatSweet
                </button>
            </div>
        </section>

        {/* ---------- Order placed popup ---------- */}
        <AnimatePresence>
            {ordered && (
                <motion.div
                    className="popup-back"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="popup-box"
                        initial={{ scale: 0.7, y: 40 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.7, y: 40 }}
                    >
                        <h3 className="popup-title">Order Placed! 🎉</h3>
                        <p className="popup-text">
                            Thank you for choosing sweetTamil. Your sweets will reach you very soon.
                        </p>
                        <button className="popup-button" onClick={() => setOrdered(false)}>
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>

        {/* ---------- Footer ---------- */}
        <footer className="footer">
            <div className="footer-top">

                {/* column 1 */}
                <div className="footer-col">
                    <h2 className="footer-logo">sweetTamil</h2>
                    <p className="footer-text">
                        Fresh Tamil sweets made with pure ghee, every single morning.
                        From our kitchen to your family, with love.
                    </p>
                    <div className="social-row">
                        {/* put your own instagram link here */}
                        <a className="social-icon" href="https://instagram.com" target="_blank" rel="noreferrer">
                            <InstagramIcon />
                        </a>
                        {/* put your own whatsapp number here */}
                        <a className="social-icon" href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
                            <WhatsappIcon />
                        </a>
                    </div>
                </div>

                {/* column 2 */}
                <div className="footer-col">
                    <h3 className="footer-heading">Quick Links</h3>
                    <p className="footer-link" onClick={() => goTo("home")}>Home</p>
                    <p className="footer-link" onClick={() => goTo("about")}>About Us</p>
                    <p className="footer-link" onClick={() => goTo("products")}>Our Products</p>
                    <p className="footer-link" onClick={() => goTo("sale")}>Diwali Sale</p>
                    <p className="footer-link" onClick={() => goTo("contact")}>Contact</p>
                </div>

                {/* column 3 */}
                <div className="footer-col">
                    <h3 className="footer-heading">Our Sweets</h3>
                    <p className="footer-link" onClick={() => goTo("products")}>Mysore Pak</p>
                    <p className="footer-link" onClick={() => goTo("products")}>Adhirasam</p>
                    <p className="footer-link" onClick={() => goTo("products")}>Kaju Katli</p>
                    <p className="footer-link" onClick={() => goTo("products")}>Carrot Halwa</p>
                    <p className="footer-link" onClick={() => goTo("products")}>Festival Box</p>
                </div>

                {/* column 4 */}
                <div className="footer-col">
                    <h3 className="footer-heading">Contact Info</h3>
                    <p className="footer-text">📍 12, Temple Street, Your City, Tamil Nadu</p>
                    <p className="footer-text">📞 91235 34267</p>
                    <p className="footer-text">✉️ hello@sweettamil.com</p>
                    <p className="footer-text">🕖 Open daily, 7 AM to 9 PM</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 sweetTamil. All rights reserved.</p>
                <p>Made with ❤️ for sweet lovers</p>
            </div>
        </footer>
    </>);
}
export default Home;
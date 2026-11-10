import DishCard from "./DishCard";

import ribeyeSteak from "../assets/images/Ribeye_Steak.png";
import Truffle_Mushroom from "../assets/images/Truffle_Mushroom.png";
import Pan_Seared_Salmon from "../assets/images/Pan_Seared_Salmon.png";
import Burrata_Heirloom from "../assets/images/Burrata_ Heirloom.png";
import restaurantPhoto from "../assets/images/restaurant_photo.png";
import restaurantInside from "../assets/images/restaurant_inside.png";

import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const dishes = [
    {
        id: 1,
        title: "Ribeye Steak with Herbs",
        description:
            "Juicy prime ribeye steak grilled to perfection, served with aromatic rosemary butter and roasted seasonal garlic.",
        image: ribeyeSteak,
    },
    {
        id: 2,
        title: "Pan-Seared Salmon",
        description:
            "Crispy-skinned Atlantic salmon fillet resting on a bed of creamy asparagus risotto and drizzled with lemon-herb oil.",
        image: Pan_Seared_Salmon,
    },
    {
        id: 3,
        title: "Truffle Mushroom Fettuccine",
        description:
            "Handcrafted fettuccine tossed in a rich, velvety wild mushroom cream sauce and infused with premium black truffle oil.",
        image: Truffle_Mushroom,
    },
    {
        id: 4,
        title: "Burrata & Heirloom Salad",
        description:
            "Creamy Italian burrata cheese paired with sweet heirloom tomatoes, fresh basil leaves, and finished with a balsamic glaze.",
        image: Burrata_Heirloom,
    },
];

const viewport = {
    once: true,
    amount: 0.2,
};

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 28,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const sliderReveal = {
    hidden: {
        opacity: 0,
        y: 32,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.8,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const imageReveal = {
    hidden: {
        opacity: 0,
        scale: 0.97,
    },

    visible: {
        opacity: 1,
        scale: 1,

        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const contentReveal = {
    hidden: {
        opacity: 0,
        x: 28,
    },

    visible: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.8,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const Specials = () => {
    return (
        <section className="specials" id="specials">
            <div className="container">
                <div className="specials__top">
                    <motion.div
                        className="specials__info"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                    >
                        <h2 className="specials__title">
                            Our Special Dishes
                        </h2>

                        <p className="specials__text">
                            Explore our carefully crafted dishes made with fresh
                            ingredients, rich flavors, and a modern touch
                            designed to satisfy every taste.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={sliderReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                    >
                        <Swiper
                            className="specials__cards"
                            modules={[Autoplay]}
                            slidesPerView="auto"
                            spaceBetween={16}
                            loop={true}
                            speed={10000}
                            grabCursor={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 28,
                                },

                                992: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 35,
                                },

                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                            }}
                        >
                            {dishes.map((dish) => (
                                <SwiperSlide
                                    key={dish.id}
                                    className="specials__item"
                                >
                                    <DishCard
                                        image={dish.image}
                                        title={dish.title}
                                        description={dish.description}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>

                <div className="specials__bottom">
                    <motion.div
                        className="specials__bottom-img"
                        variants={imageReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                    >
                        <img
                            src={restaurantPhoto}
                            alt="Deliciora Restaurant"
                            className="specials__bottom-main-img"
                        />

                        <img
                            src={restaurantInside}
                            alt="Deliciora Restaurant Interior"
                            className="specials__bottom-small-img"
                        />
                    </motion.div>

                    <motion.div
                        className="specials__bottom-content"
                        variants={contentReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                    >
                        <span className="specials__bottom-label">
                            Our Story
                        </span>

                        <h2 className="specials__bottom-title">
                            A Passion for Food, Born in 2018
                        </h2>

                        <p className="specials__bottom-text">
                            Deliciora began in 2018 with a simple idea — to
                            bring exceptional food and warm hospitality
                            together. Inspired by European cuisine, seasonal
                            ingredients, and years of tradition, our restaurant
                            grew into a place where memorable evenings are
                            created around every table.
                        </p>

                        <div className="specials__bottom-meta">
                            <span>EST. 2018</span>

                            <span className="specials__bottom-dot"></span>

                            <span>EUROPEAN CUISINE</span>
                        </div>

                        <div className="specials__bottom-actions">
                            <button
                                className="btn btn--primary"
                                type="button"
                            >
                                Our Story
                            </button>

                            <button
                                className="btn btn--secondary"
                                type="button"
                            >
                                Meet the Team
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Specials;
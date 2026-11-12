import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import DishCard from "./DishCard";

import ribeyeSteak from "../assets/images/Ribeye_Steak.png";
import Truffle_Mushroom from "../assets/images/Truffle_Mushroom.png";
import Pan_Seared_Salmon from "../assets/images/Pan_Seared_Salmon.png";
import Burrata_Heirloom from "../assets/images/Burrata_ Heirloom.png";

import Duck_Breast from "../assets/images/Roasted_Duck.png";
import Seared_Scallops from "../assets/images/Seared_Scallops.png";
import Wild_Mushroom_Risotto from "../assets/images/Wild_Mushroom_Risotto.png";
import Chocolate_Fondant from "../assets/images/Chocolate_Fondant.png";

import restaurantPhoto from "../assets/images/restaurant_photo.png";
import restaurantInside from "../assets/images/restaurant_inside.png";

import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const dishes = [
    {
        id: 1,
        number: "01",
        translationKey: "ribeye",
        image: ribeyeSteak,
    },
    {
        id: 2,
        number: "02",
        translationKey: "salmon",
        image: Pan_Seared_Salmon,
    },
    {
        id: 3,
        number: "03",
        translationKey: "fettuccine",
        image: Truffle_Mushroom,
    },
    {
        id: 4,
        number: "04",
        translationKey: "burrata",
        image: Burrata_Heirloom,
    },
    {
        id: 5,
        number: "05",
        translationKey: "duck",
        image: Duck_Breast,
    },
    {
        id: 6,
        number: "06",
        translationKey: "scallops",
        image: Seared_Scallops,
    },
    {
        id: 7,
        number: "07",
        translationKey: "risotto",
        image: Wild_Mushroom_Risotto,
    },
    {
        id: 8,
        number: "08",
        translationKey: "fondant",
        image: Chocolate_Fondant,
    },
];

const repeatedDishes = [
    ...dishes.map((dish) => ({
        ...dish,
        copy: 0,
    })),

    ...dishes.map((dish) => ({
        ...dish,
        copy: 1,
    })),

    ...dishes.map((dish) => ({
        ...dish,
        copy: 2,
    })),
];

const DISHES_COUNT = dishes.length;
const START_INDEX = DISHES_COUNT;

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
    const { t } = useTranslation();

    const swiperRef = useRef(null);
    const autoplayTimerRef = useRef(null);
    const resumeTimerRef = useRef(null);

    const stopAutoplay = () => {
        if (autoplayTimerRef.current) {
            clearInterval(autoplayTimerRef.current);
            autoplayTimerRef.current = null;
        }
    };

    const startAutoplay = () => {
        stopAutoplay();

        autoplayTimerRef.current = setInterval(() => {
            const swiper = swiperRef.current;

            if (!swiper || swiper.destroyed) {
                return;
            }

            swiper.slideNext(600);
        }, 3800);
    };

    const restartAutoplayLater = () => {
        stopAutoplay();

        if (resumeTimerRef.current) {
            clearTimeout(resumeTimerRef.current);
        }

        resumeTimerRef.current = setTimeout(() => {
            startAutoplay();
        }, 1800);
    };

    const normalizeSliderPosition = (swiper) => {
        if (!swiper || swiper.destroyed) {
            return;
        }

        const currentIndex = swiper.activeIndex;

        if (currentIndex < DISHES_COUNT) {
            swiper.slideTo(
                currentIndex + DISHES_COUNT,
                0,
                false,
            );

            return;
        }

        if (currentIndex >= DISHES_COUNT * 2) {
            swiper.slideTo(
                currentIndex - DISHES_COUNT,
                0,
                false,
            );
        }
    };

    useEffect(() => {
        autoplayTimerRef.current = setInterval(() => {
            const swiper = swiperRef.current;

            if (!swiper || swiper.destroyed) {
                return;
            }

            swiper.slideNext(600);
        }, 3800);

        return () => {
            if (autoplayTimerRef.current) {
                clearInterval(autoplayTimerRef.current);
                autoplayTimerRef.current = null;
            }

            if (resumeTimerRef.current) {
                clearTimeout(resumeTimerRef.current);
                resumeTimerRef.current = null;
            }
        };
    }, []);

    return (
        <section
            className="specials"
            id="specials"
        >
            <div className="container">
                <div className="specials__top">
                    <motion.div
                        className="specials__info"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                    >
                        <span className="specials__label">
                            {t("specials.label")}
                        </span>

                        <h2 className="specials__title">
                            {t("specials.title")}
                        </h2>

                        <p className="specials__text">
                            {t("specials.description")}
                        </p>
                    </motion.div>

                    <motion.div
                        className="specials__slider-wrapper"
                        variants={sliderReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                    >
                        <Swiper
                            className="specials__cards"
                            initialSlide={START_INDEX}
                            slidesPerView={1.22}
                            spaceBetween={16}
                            centeredSlides={true}
                            speed={600}
                            grabCursor={true}
                            followFinger={true}
                            threshold={4}
                            touchRatio={1}
                            resistance={false}
                            watchSlidesProgress={true}
                            observer={true}
                            observeParents={true}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onTouchStart={() => {
                                stopAutoplay();
                            }}
                            onSliderFirstMove={() => {
                                stopAutoplay();
                            }}
                            onTouchEnd={() => {
                                restartAutoplayLater();
                            }}
                            onTransitionEnd={(swiper) => {
                                normalizeSliderPosition(swiper);
                            }}
                            breakpoints={{
                                480: {
                                    slidesPerView: 1.35,
                                    spaceBetween: 20,
                                    centeredSlides: true,
                                },

                                768: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 24,
                                    centeredSlides: true,
                                },

                                992: {
                                    slidesPerView: 2.6,
                                    spaceBetween: 28,
                                    centeredSlides: true,
                                },

                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                    centeredSlides: false,
                                },
                            }}
                        >
                            {repeatedDishes.map((dish) => (
                                <SwiperSlide
                                    key={`${dish.copy}-${dish.id}`}
                                    className="specials__item"
                                >
                                    <DishCard
                                        image={dish.image}
                                        title={t(
                                            `specials.dishes.${dish.translationKey}.title`,
                                        )}
                                        description={t(
                                            `specials.dishes.${dish.translationKey}.description`,
                                        )}
                                        number={dish.number}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div
                            className="specials__slider-hint"
                            aria-hidden="true"
                        >
                            <span>
                                {t("specials.dragToExplore")}
                            </span>

                            <span className="specials__slider-hint-line"></span>
                        </div>
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
                            alt={t(
                                "specials.story.restaurantAlt",
                            )}
                            className="specials__bottom-main-img"
                        />

                        <img
                            src={restaurantInside}
                            alt={t(
                                "specials.story.interiorAlt",
                            )}
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
                            {t("specials.story.label")}
                        </span>

                        <h2 className="specials__bottom-title">
                            {t("specials.story.title")}
                        </h2>

                        <p className="specials__bottom-text">
                            {t("specials.story.description")}
                        </p>

                        <div className="specials__bottom-meta">
                            <span>
                                {t(
                                    "specials.story.established",
                                )}
                            </span>

                            <span className="specials__bottom-dot"></span>

                            <span>
                                {t("specials.story.cuisine")}
                            </span>
                        </div>

                        <div className="specials__bottom-actions">
                            <button
                                className="btn btn--primary"
                                type="button"
                            >
                                {t("specials.story.ourStory")}
                            </button>

                            <button
                                className="btn btn--secondary"
                                type="button"
                            >
                                {t("specials.story.meetTeam")}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Specials;
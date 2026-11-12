import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

import chef from "../assets/images/chef.png";

const viewport = {
    once: true,
    amount: 0.45,
};

const imageReveal = {
    hidden: {
        opacity: 0,
        x: -22,
        scale: 0.97,
    },

    visible: {
        opacity: 1,
        x: 0,
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
        x: 22,
    },

    visible: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.85,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const factsContainer = {
    hidden: {},

    visible: {
        transition: {
            delayChildren: 0.35,
            staggerChildren: 0.12,
        },
    },
};

const factReveal = {
    hidden: {
        opacity: 0,
        y: 16,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const Chef = () => {
    const { t } = useTranslation();

    return (
        <section className="chef">
            <div
                className="section-divider"
                aria-hidden="true"
            ></div>

            <div className="container">
                <div className="chef__inner">
                    <motion.div
                        className="chef__image-wrapper"
                        variants={imageReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                    >
                        <img
                            src={chef}
                            alt={t("chef.imageAlt")}
                            className="chef__image"
                        />
                    </motion.div>

                    <motion.div
                        className="chef__content"
                        variants={contentReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewport}
                    >
                        <span className="chef__label">
                            {t("chef.label")}
                        </span>

                        <h2 className="chef__title">
                            {t("chef.title")}
                        </h2>

                        <p className="chef__text">
                            {t("chef.description")}
                        </p>

                        <motion.div
                            className="chef__facts"
                            variants={factsContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.6,
                            }}
                        >
                            <motion.div
                                className="chef__fact"
                                variants={factReveal}
                            >
                                <span className="chef__fact-value">
                                    12+
                                </span>

                                <span className="chef__fact-label">
                                    {t("chef.facts.experience")}
                                </span>
                            </motion.div>

                            <motion.div
                                className="chef__fact"
                                variants={factReveal}
                            >
                                <span className="chef__fact-value">
                                    {t("chef.facts.european")}
                                </span>

                                <span className="chef__fact-label">
                                    {t("chef.facts.cuisine")}
                                </span>
                            </motion.div>

                            <motion.div
                                className="chef__fact"
                                variants={factReveal}
                            >
                                <span className="chef__fact-value">
                                    {t("chef.facts.seasonal")}
                                </span>

                                <span className="chef__fact-label">
                                    {t("chef.facts.menu")}
                                </span>
                            </motion.div>
                        </motion.div>

                        <button
                            className="btn btn--secondary chef__btn"
                            type="button"
                        >
                            {t("chef.button")}
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Chef;
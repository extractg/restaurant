import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const containerVariants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
        },
    },
};

const itemVariants = {
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

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="container">
                <div className="hero__inner">
                    <motion.div
                        className="hero__content"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="hero__title"
                            variants={itemVariants}
                        >
                            {t("hero.title")}
                        </motion.h1>

                        <motion.p
                            className="hero__text"
                            variants={itemVariants}
                        >
                            {t("hero.description")}
                        </motion.p>

                        <motion.div
                            className="hero__actions"
                            variants={itemVariants}
                        >
                            <Link
                                to="/products"
                                className="btn btn--primary"
                            >
                                {t("hero.menu")}
                            </Link>

                            <button
                                className="btn btn--secondary"
                                type="button"
                            >
                                {t("hero.bookTable")}
                            </button>
                        </motion.div>

                        <motion.div
                            className="hero__socials"
                            variants={itemVariants}
                        >
                            <a
                                href="#"
                                className="hero__social-link"
                                aria-label="Facebook"
                            >
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>

                            <a
                                href="#"
                                className="hero__social-link"
                                aria-label="Instagram"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                            <a
                                href="#"
                                className="hero__social-link"
                                aria-label="Twitter"
                            >
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
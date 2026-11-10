import { Link } from "react-router-dom";
import { motion } from "motion/react";

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
                            We provide the best food for you
                        </motion.h1>

                        <motion.p
                            className="hero__text"
                            variants={itemVariants}
                        >
                            Discover a unique dining experience where culinary
                            mastery meets an elegant, cozy ambiance. We carefully
                            craft every dish using only the freshest seasonal
                            ingredients, rich traditional flavors, and a modern
                            touch designed to satisfy every taste and create
                            unforgettable moments.
                        </motion.p>

                        <motion.div
                            className="hero__actions"
                            variants={itemVariants}
                        >
                            <Link
                                to="/products"
                                className="btn btn--primary"
                            >
                                Menu
                            </Link>

                            <button
                                className="btn btn--secondary"
                                type="button"
                            >
                                Book a table
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
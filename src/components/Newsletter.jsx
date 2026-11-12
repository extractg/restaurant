import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const newsletterReveal = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.08,
        },
    },
};

const itemReveal = {
    hidden: {
        opacity: 0,
        y: 20,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const Newsletter = () => {
    const { t } = useTranslation();

    return (
        <section className="newsletter">
            <div className="container">
                <motion.div
                    className="newsletter__inner"
                    variants={newsletterReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.45,
                    }}
                >
                    <div className="newsletter__content">
                        <motion.span
                            className="newsletter__label"
                            variants={itemReveal}
                        >
                            {t("newsletter.label")}
                        </motion.span>

                        <motion.h2
                            className="newsletter__title"
                            variants={itemReveal}
                        >
                            {t("newsletter.titleFirst")}
                            <br />
                            {t("newsletter.titleSecond")}
                        </motion.h2>

                        <motion.p
                            className="newsletter__text"
                            variants={itemReveal}
                        >
                            {t("newsletter.description")}
                        </motion.p>

                        <motion.form
                            className="newsletter__form"
                            variants={itemReveal}
                        >
                            <input
                                type="email"
                                className="newsletter__input"
                                placeholder={t(
                                    "newsletter.emailPlaceholder",
                                )}
                                aria-label={t(
                                    "newsletter.emailLabel",
                                )}
                                required
                            />

                            <button
                                type="submit"
                                className="newsletter__button"
                            >
                                {t("newsletter.button")}
                            </button>
                        </motion.form>

                        <motion.span
                            className="newsletter__note"
                            variants={itemReveal}
                        >
                            {t("newsletter.note")}
                        </motion.span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";

import logo from "../assets/images/logo.png";

const LanguageModal = () => {
    const { i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(() => {
        return !localStorage.getItem("language");
    });

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isOpen]);

    const selectLanguage = async (language) => {
        await i18n.changeLanguage(language);

        localStorage.setItem("language", language);

        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="language-modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                >
                    <motion.div
                        className="language-modal__content"
                        initial={{
                            opacity: 0,
                            y: 16,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: 8,
                        }}
                        transition={{
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="language-modal-title"
                    >
                        <div className="language-modal__brand">
                            <img
                                src={logo}
                                alt="Deliciora"
                                className="language-modal__logo"
                            />
                        </div>

                        <span className="language-modal__eyebrow">
                            WELCOME TO DELICIORA
                        </span>

                        <h2
                            className="language-modal__title"
                            id="language-modal-title"
                        >
                            Choose your language
                        </h2>

                        <p className="language-modal__text">
                            Select your preferred language to continue.
                            You can change it anytime.
                        </p>

                        <div className="language-modal__languages">
                            <button
                                className="language-modal__language"
                                type="button"
                                onClick={() => selectLanguage("en")}
                            >
                                <span className="language-modal__language-code">
                                    EN
                                </span>

                                <span className="language-modal__language-info">
                                    <strong>English</strong>

                                    <small>
                                        Continue in English
                                    </small>
                                </span>

                                <span
                                    className="language-modal__arrow"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </button>

                            <button
                                className="language-modal__language"
                                type="button"
                                onClick={() => selectLanguage("lv")}
                            >
                                <span className="language-modal__language-code">
                                    LV
                                </span>

                                <span className="language-modal__language-info">
                                    <strong>Latviešu</strong>

                                    <small>
                                        Turpināt latviešu valodā
                                    </small>
                                </span>

                                <span
                                    className="language-modal__arrow"
                                    aria-hidden="true"
                                >
                                    →
                                </span>
                            </button>
                        </div>

                        <p className="language-modal__note">
                            Your preference will be remembered for your
                            next visit.
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LanguageModal;
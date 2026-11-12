import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import {
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react";

import restaurantPhoto from "../assets/images/restaurant-photo.png";
import restaurantInside from "../assets/images/restaurant-small.png";
import restaurantKitchen from "../assets/images/restaurant-kitchen.png";
import restaurantChef from "../assets/images/restaurant-chef.png";
import restaurantBuilding from "../assets/images/restaurant-building.png";

const storyChapters = [
    {
        id: 1,
        year: "2018",
        number: "01",
        translationKey: "beginning",
        image: restaurantBuilding,
    },
    {
        id: 2,
        number: "02",
        translationKey: "philosophy",
        image: restaurantKitchen,
    },
    {
        id: 3,
        number: "03",
        translationKey: "today",
        image: restaurantChef,
    },
];

const StoryChapter = ({ chapter, index }) => {
    const { t } = useTranslation();

    const chapterRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: chapterRef,
        offset: ["start 90%", "end 10%"],
    });

    const smoothChapterProgress = useSpring(scrollYProgress, {
        stiffness: 75,
        damping: 22,
        mass: 0.45,
        restDelta: 0.001,
    });

    const imageOpacity = useTransform(
        smoothChapterProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [0.45, 0.78, 1, 0.82, 0.55],
    );

    const imageY = useTransform(
        smoothChapterProgress,
        [0, 0.5, 1],
        [34, 0, -18],
    );

    const imageScale = useTransform(
        smoothChapterProgress,
        [0, 0.5, 1],
        [0.975, 1, 0.985],
    );

    const contentOpacity = useTransform(
        smoothChapterProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [0.4, 0.75, 1, 0.84, 0.6],
    );

    const contentY = useTransform(
        smoothChapterProgress,
        [0, 0.5, 1],
        [28, 0, -14],
    );

    return (
        <article
            ref={chapterRef}
            className={`our-story__chapter ${
                index % 2 !== 0
                    ? "our-story__chapter--reverse"
                    : ""
            }`}
        >
            <motion.div
                className="our-story__chapter-image"
                style={{
                    opacity: imageOpacity,
                    y: imageY,
                    scale: imageScale,
                }}
            >
                <img
                    src={chapter.image}
                    alt={t(
                        `ourStory.chapters.${chapter.translationKey}.imageAlt`,
                    )}
                />

                <span className="our-story__chapter-number">
                    {chapter.number}
                </span>
            </motion.div>

            <motion.div
                className="our-story__chapter-content"
                style={{
                    opacity: contentOpacity,
                    y: contentY,
                }}
            >
                <span className="our-story__chapter-year">
                    {chapter.year ||
                        t(
                            `ourStory.chapters.${chapter.translationKey}.year`,
                        )}
                </span>

                <span className="our-story__chapter-label">
                    {t(
                        `ourStory.chapters.${chapter.translationKey}.label`,
                    )}
                </span>

                <h3 className="our-story__chapter-title">
                    {t(
                        `ourStory.chapters.${chapter.translationKey}.title`,
                    )}
                </h3>

                <p className="our-story__chapter-text">
                    {t(
                        `ourStory.chapters.${chapter.translationKey}.text`,
                    )}
                </p>
            </motion.div>
        </article>
    );
};

const OurStory = () => {
    const { t } = useTranslation();

    const [storyOpen, setStoryOpen] = useState(false);

    const timelineRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 50%", "end 50%"],
    });

    const smoothTimelineProgress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        mass: 0.35,
        restDelta: 0.001,
    });

    const timelineLightPosition = useTransform(
        smoothTimelineProgress,
        [0, 0.88, 1],
        ["0%", "95%", "95%"],
    );

    const toggleStory = () => {
        setStoryOpen((current) => !current);
    };

    return (
        <section
            className="our-story"
            id="our-story"
        >
            <div className="container">
                <div className="our-story__intro">
                    <motion.div
                        className="our-story__visual"
                        initial={{
                            opacity: 0,
                            x: -30,
                            scale: 0.98,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="our-story__image-main">
                            <img
                                src={restaurantPhoto}
                                alt={t(
                                    "ourStory.images.atmosphereAlt",
                                )}
                            />
                        </div>

                        <div className="our-story__image-small">
                            <img
                                src={restaurantInside}
                                alt={t(
                                    "ourStory.images.interiorAlt",
                                )}
                            />
                        </div>

                        <span className="our-story__year">
                            {t("ourStory.established")}
                        </span>
                    </motion.div>

                    <motion.div
                        className="our-story__content"
                        initial={{
                            opacity: 0,
                            x: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.08,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <span className="our-story__label">
                            {t("ourStory.label")}
                        </span>

                        <h2 className="our-story__title">
                            {t("ourStory.title")}

                            <span>
                                {t("ourStory.titleAccent")}
                            </span>
                        </h2>

                        <p className="our-story__text">
                            {t("ourStory.description")}
                        </p>

                        <div className="our-story__meta">
                            <span>
                                {t("ourStory.established")}
                            </span>

                            <span className="our-story__meta-dot"></span>

                            <span>
                                {t("ourStory.location")}
                            </span>
                        </div>

                        <button
                            className="btn btn--primary our-story__button"
                            type="button"
                            aria-expanded={storyOpen}
                            onClick={toggleStory}
                        >
                            {storyOpen
                                ? t("ourStory.closeStory")
                                : t("ourStory.discoverStory")}
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    className="our-story__timeline"
                    initial={false}
                    animate={
                        storyOpen
                            ? {
                                  height: "auto",
                                  opacity: 1,
                                  marginTop: "140px",
                              }
                            : {
                                  height: 0,
                                  opacity: 0,
                                  marginTop: 0,
                              }
                    }
                    transition={{
                        height: {
                            duration: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                        },

                        opacity: {
                            duration: storyOpen ? 0.55 : 0.3,
                            delay: storyOpen ? 0.12 : 0,
                        },

                        marginTop: {
                            duration: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                        },
                    }}
                >
                    <div
                        ref={timelineRef}
                        className="our-story__timeline-inner"
                    >
                        <div
                            className="our-story__timeline-line"
                            aria-hidden="true"
                        >
                            <motion.span
                                className="our-story__timeline-light"
                                style={{
                                    top: timelineLightPosition,
                                }}
                            ></motion.span>
                        </div>

                        <div className="our-story__chapters">
                            {storyChapters.map(
                                (chapter, index) => (
                                    <StoryChapter
                                        key={chapter.id}
                                        chapter={chapter}
                                        index={index}
                                    />
                                ),
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurStory;
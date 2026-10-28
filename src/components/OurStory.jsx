import { useRef, useState } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "motion/react";

import restaurantPhoto from "../assets/images/restaurant_photo.png";
import restaurantInside from "../assets/images/restaurant_inside.png";

const storyChapters = [
    {
        id: 1,
        year: "2018",
        number: "01",
        label: "THE BEGINNING",
        title: "A Small Idea Became Deliciora",
        text: "Deliciora began with a simple belief — that a restaurant should be more than a place to eat. It should be a place where atmosphere, thoughtful cooking, and genuine hospitality come together around one table.",
        image: restaurantPhoto,
        imageAlt: "The beginning of Deliciora",
    },
    {
        id: 2,
        year: "OUR PHILOSOPHY",
        number: "02",
        label: "THE PHILOSOPHY",
        title: "Food With a Purpose",
        text: "Our approach is rooted in European cuisine, seasonal ingredients, and respect for simplicity. Every dish is designed to feel familiar yet refined, allowing quality ingredients and carefully balanced flavours to remain at the centre.",
        image: restaurantInside,
        imageAlt: "Deliciora culinary philosophy",
    },
    {
        id: 3,
        year: "TODAY",
        number: "03",
        label: "DELICIORA TODAY",
        title: "A Place Built Around the Table",
        text: "Today, Deliciora continues to evolve while staying true to the idea that started it all — creating memorable evenings through food, atmosphere, and the people gathered around every table.",
        image: restaurantPhoto,
        imageAlt: "Deliciora restaurant today",
    },
];

    const StoryChapter = ({
        chapter,
        index,
    }) => {
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
                alt={chapter.imageAlt}
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
                {chapter.year}
            </span>

            <span className="our-story__chapter-label">
                {chapter.label}
            </span>

            <h3 className="our-story__chapter-title">
                {chapter.title}
            </h3>

            <p className="our-story__chapter-text">
                {chapter.text}
            </p>
        </motion.div>
    </article>
    );
};

const OurStory = () => {
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
                    <div className="our-story__visual">
                        <div className="our-story__image-main">
                            <img
                                src={restaurantPhoto}
                                alt="Deliciora restaurant atmosphere"
                            />
                        </div>

                        <div className="our-story__image-small">
                            <img
                                src={restaurantInside}
                                alt="Deliciora restaurant interior"
                            />
                        </div>

                        <span className="our-story__year">
                            EST. 2018
                        </span>
                    </div>

                    <div className="our-story__content">
                        <span className="our-story__label">
                            Our Story
                        </span>

                        <h2 className="our-story__title">
                            More Than a Restaurant.
                            <span>
                                A Story Built Around the Table.
                            </span>
                        </h2>

                        <p className="our-story__text">
                            Deliciora was created from a passion for
                            thoughtful European cuisine and the belief
                            that the best evenings are built around more
                            than food alone. Seasonal ingredients, warm
                            hospitality, and an intimate atmosphere shape
                            every experience we create.
                        </p>

                        <div className="our-story__meta">
                            <span>EST. 2018</span>

                            <span className="our-story__meta-dot"></span>

                            <span>RIGA, LATVIA</span>
                        </div>

                        <button
                            className="btn btn--primary our-story__button"
                            type="button"
                            aria-expanded={storyOpen}
                            onClick={toggleStory}
                        >
                            {storyOpen
                                ? "Close Story"
                                : "Discover Our Story"}
                        </button>
                    </div>
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
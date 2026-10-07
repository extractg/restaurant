import { useState, useEffect } from "react";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10;

      if (window.scrollY > window.innerHeight && !isAtBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
    <button
    id="backToTop"
    className={isVisible ? "back-to-top is-visible" : "back-to-top"}
    type="button"
    aria-label="Back to top"
    onClick={scrollToTop}
    >
    <i className="fa-solid fa-arrow-up"></i>
    </button>
    );
};

export default BackToTop;
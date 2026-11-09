import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "lenis/dist/lenis.css";
import "./css/style.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ReactLenis
            root
            options={{
                lerp: 0.22,
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 1.2,
                anchors: true,
                stopInertiaOnNavigate: true,
            }}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ReactLenis>
    </StrictMode>,
);
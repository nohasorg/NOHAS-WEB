import React from "react"
import ReactDOM from "react-dom/client"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import App from "./App"
import "./index.css"

gsap.registerPlugin(ScrollTrigger)
gsap.defaults({ ease: "power3.out", duration: 0.65 })

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

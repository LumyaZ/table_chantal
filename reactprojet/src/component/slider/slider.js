import DataSlider from "./dataslider";
import { useState, useEffect } from "react";
import "./slider.css"

let position = 0;

export default function Slider () {
    
    const [currentSlide, setCurrentSlide] = useState(DataSlider[0]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            position++;
            if(position > DataSlider.length - 1){
                position = 0;  
            }
            setCurrentSlide(DataSlider[position]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
    <div>
        <div>
            <img src={currentSlide.url} alt={currentSlide.alt} />
        </div>
    </div>
    );
}

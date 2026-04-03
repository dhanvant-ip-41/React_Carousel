import { useState, useEffect } from "react";
import "./carousel.css";
import img1 from "./assets/bird-3772889_1920.jpg";
import img2 from "./assets/cat-8361048_1920.jpg";
import img3 from "./assets/glacier-7187291_1920.jpg";
import img4 from "./assets/landscape.jpg";
import img5 from "./assets/polynesia-3021072_1920.jpg";
import img6 from "./assets/tree-7619791_1920.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Previous Image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(nextImage, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <button className="btn prev" onClick={prevImage}>❮</button>
        
      <img src={images[currentIndex]} alt="carousel-img" className="carousel-image" />

      <button className="btn next" onClick={nextImage}>❯</button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
import { useState, useEffect } from "react";

const images = [
  "https://i.imgur.com/efWmjnA.jpg",
  "https://i.imgur.com/8j1xiHV.jpg",
  "https://i.imgur.com/T70Ln5B.jpg",
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}

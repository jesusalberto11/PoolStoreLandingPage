import { useEffect, useState } from "react";

export const useBackgroundImage = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(
    "img/bgImages/main-background.jpg"
  );
  const backgroundImages = [
    "img/bgImages/main-background.jpg",
    "img/bgImages/main-background-2.jpg",
    "img/bgImages/main-background-3.jpg",
    "img/bgImages/main-background-4.jpg",
    "img/bgImages/main-background-5.jpg",
    "img/bgImages/main-background-6.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((imageIndex) => imageIndex + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (imageIndex === backgroundImages.length) {
      setImageIndex(0);
    }
    setCurrentBackgroundImage(backgroundImages[imageIndex]);
  }, [imageIndex]);

  return {
    currentBackgroundImage,
  };
};

// ImageAnimation.js

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ImageAnimation = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const initialImages = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      x: 0, // Initial x position
      y: 0, // Initial y position
    }));

    setImages(initialImages);

    // Animate to random positions after a delay
    const animationTimeout = setTimeout(() => {
      const updatedImages = initialImages.map((image) => ({
        ...image,
        x: Math.random() * (window.innerWidth - 100), // Assuming image width is 100px
        y: Math.random() * (window.innerHeight - 100), // Assuming image height is 100px
      }));
      setImages(updatedImages);
    }, 1000); // Adjust the delay as needed

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <div className="image-container">
      {images.map((image) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, x: image.x, y: image.y }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            left: image.x,
            top: image.y,
          }}
        >
          <img
            src="/static/media/meter1.c4085ff859afbd8488e9da47d4953850.svg" // Replace with your image source
            alt={`Image ${image.id}`}
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      ))}
    </div>
  );
};

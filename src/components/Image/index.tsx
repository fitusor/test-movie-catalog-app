import React, { useState } from 'react';
import placeholderImage from '../../assets/images/placeholder-image.png';

interface ImageProps {
  src?: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState<string | undefined>(src);

  const handleImageError = () => {
    setImageSrc(placeholderImage);
  };

  const handleImageLoad = () => {
    // We can perform additional actions when the image uploads successfully, if necessary
  };

  return (
    <img
      src={imageSrc || placeholderImage}
      alt={alt || 'Placeholder'}
      onError={handleImageError}
      onLoad={handleImageLoad}
    />
  );
};

export default Image;

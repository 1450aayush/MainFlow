import React, { useState } from 'react';
import Image from './Image';
import Modal from './Modal';
import './ImageGallery.css';

const ImageGallery = () => {
  const [images] = useState([
    { id: 1, url: 'https://via.placeholder.com/300', alt: 'Image 1' },
    { id: 2, url: 'https://via.placeholder.com/301', alt: 'Image 2' },
    { id: 3, url: 'https://via.placeholder.com/302', alt: 'Image 3' },
    { id: 4, url: 'https://via.placeholder.com/303', alt: 'Image 4' },
    { id: 5, url: 'https://via.placeholder.com/304', alt: 'Image 5' },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleNextImage = () => {
    const currentIndex = images.findIndex((image) => image.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePreviousImage = () => {
    const currentIndex = images.findIndex((image) => image.id === selectedImage.id);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex]);
  };

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <Image key={image.id} image={image} onClick={handleImageClick} />
      ))}
      {modalOpen && (
        <Modal
          image={selectedImage}
          onClose={handleModalClose}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
        />
      )}
    </div>
  );
};

export default ImageGallery;

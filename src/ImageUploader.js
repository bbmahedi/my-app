import React, { useState, useCallback } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useDropzone } from "react-dropzone";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [croppedImage, setCroppedImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const onCropChange = (crop) => {
    setCrop(crop);
  };

  const onImageLoaded = (image) => {
    // handle image load
  };

  const onCropComplete = (crop, pixelCrop) => {
    // handle crop completion
  };

  const onSaveClick = () => {
    // Save the cropped image on the server or perform any desired action
    console.log("Cropped Image:", croppedImage);
  };

  return (
    <div>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #ccc",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select one</p>
      </div>

      {image && (
        <ReactCrop
          src={image}
          crop={crop}
          onChange={onCropChange}
          onImageLoaded={onImageLoaded}
          onComplete={onCropComplete}
        />
      )}

      {croppedImage && (
        <div>
          <h2>Cropped Image</h2>
          <img src={croppedImage} alt="Cropped" />
          <button onClick={onSaveClick}>Save Cropped Image</button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;

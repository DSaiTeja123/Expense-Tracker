import React, { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfileImageSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
        aria-label="Upload profile image"
      />

      {!image ? (
        <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-purple-100">
          <LuUser className="text-4xl text-primary" aria-hidden="true" />
          <button
            type="button"
            onClick={onChooseFile}
            aria-label="Upload profile image"
            className="absolute -bottom-1 -right-1 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white shadow-md hover:bg-primary-dark transition"
          >
            <LuUpload size={18} />
          </button>
        </div>
      ) : (
        <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-md">
          <img
            src={previewUrl}
            alt="Profile preview"
            className="object-cover w-full h-full rounded-full"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            aria-label="Remove profile image"
            className="absolute -bottom-1 -right-1 flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white shadow-md hover:bg-red-600 transition"
          >
            <LuTrash size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileImageSelector;

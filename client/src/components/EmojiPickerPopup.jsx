import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { LuImage, LuX } from "react-icons/lu";

function EmojiPickerPopup({ icon, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center gap-5 mb-6">
      <div
        className="flex items-center gap-4 cursor-pointer select-none"
        onClick={() => setIsOpen(true)}
      >
        <div className="w-14 h-14 flex items-center justify-center bg-purple-100 text-primary rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          {icon ? (
            <img src={icon} alt="Icon" className="w-12 h-12 object-contain" />
          ) : (
            <LuImage className="text-3xl" />
          )}
        </div>
        <p className="text-gray-700 font-medium select-none">
          {icon ? "Change Icon" : "Pick Icon"}
        </p>
      </div>

      {isOpen && (
        <div className="relative z-50 mt-3 md:mt-0 md:absolute md:top-full md:left-0 bg-white rounded-lg shadow-lg border border-gray-200 p-3 max-w-[320px]">
          <button
            aria-label="Close emoji picker"
            className="w-7 h-7 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-sm absolute -top-3 -right-3 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <LuX className="text-gray-600" />
          </button>
          <EmojiPicker
            onEmojiClick={(emoji) => {
              onSelect(emoji?.imageUrl || emoji?.emoji || "");
              setIsOpen(false);
            }}
            lazyLoadEmojis={true}
            theme="light"
          />
        </div>
      )}
    </div>
  );
}

export default EmojiPickerPopup;

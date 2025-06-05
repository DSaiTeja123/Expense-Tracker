import React from "react";

function Modal({ children, isOpen, onClose, title }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity"
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg bg-white shadow-xl p-6">

        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-6 text-gray-700">{children}</div>
      </div>
    </div>
  );
}

export default Modal;

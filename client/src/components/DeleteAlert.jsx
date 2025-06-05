import React from "react";

function DeleteAlert({ content, onDelete }) {
  return (
    <section aria-label="Delete confirmation" className="p-4">
      <p className="text-sm">{content}</p>
      <div className="flex justify-end mt-6">
        <button
          type="button"
          className="add-btn add-btn-fill"
          onClick={onDelete}
          aria-label="Confirm delete"
        >
          Delete
        </button>
      </div>
    </section>
  );
}

export default DeleteAlert;

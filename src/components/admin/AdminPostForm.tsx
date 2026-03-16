"use client";
import { useState } from "react";
import { toast } from "react-toastify";

type TAdminPostProps ={
  isOpen:boolean;
  onClose:() => void
}

const AdminPostForm = ({isOpen,onClose} : TAdminPostProps) => {
  const [title, setTitle] = useState("");
  const [descripition, setDescripition] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (title === "") return toast.error("Title is required");
    if (descripition === "") return toast.error("Descripition is required");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <p className=" text-slate-700 font-bold text-3xl">
        Add post details
      </p>
      <div className="grid grid-cols-1  gap-4">
        <label htmlFor="email" className="flex flex-col text-sm text-gray-700">
          <span className="mb-1">title</span>
          <input
            type="text"
            id="title"
            placeholder="football...."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </label>
        <label
          htmlFor="password"
          className="flex flex-col text-sm text-gray-700"
        >
          <span className="mb-1">Password</span>
          <input
            type="text"
            id="descripition"
            placeholder=" Lorem ipsum dolor sit amet"
            value={descripition}
            onChange={(e) => setDescripition(e.target.value)}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 hover:cursor-pointer"
      >
        Add post
      </button>
    </form>
  );
};

export default AdminPostForm;
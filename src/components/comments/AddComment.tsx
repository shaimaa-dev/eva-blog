"use client"

import React, { useState } from 'react'
import { toast } from 'react-toastify'

const AddComment = () => {
   
    const [comment, setComment] = useState("")
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        if (comment === "") return toast.error("please enter a comment")
            console.log(comment)
    }

    return (
        < form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-8" >
            {/* ADD COMMENT */}
                <input
                    type="text"
                    placeholder="Add a comment..."

                    value={comment}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
            {/* Submit */}
            <button
                type="submit"
                className="w-full py-2.5  rounded-lg bg-indigo-800 hover:bg-indigo-700 text-white font-medium  transition"
            >
                Add Comment
            </button >     
         
        </form >
    )
}

export default AddComment

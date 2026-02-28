"use client"

import React, { useState } from 'react'
import { toast } from 'react-toastify'

const LoginForm = () => {
    const [remember, setRemember] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        if (email === "") return toast.error("please enter your email")
        if (password === "") return toast.error("please enter your password")
    }

    return (
        < form onSubmit={handleSubmit} className="space-y-6" >

            {/* Email */}
            <div className="flex flex-col gap-2" >
                <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"

                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
            </div >

            {/* Password */}
            <div className="flex flex-col gap-2" >
                <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="••••••••"

                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
            </div >

            {/* Remember Me */}
            <div className="flex items-center justify-between" >
                <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={() => setRemember(!remember)}
                        className="h-4 w-4 accent-black"
                    />
                    Remember me
                </label>

                <button
                    type="button"
                    className="text-sm text-gray-500 hover:text-black dark:hover:text-white transition"
                >
                    Forgot password?
                </button>
            </div >

            {/* Submit */}
            <button
                type="submit"
                className="w-full py-2.5  rounded-lg bg-indigo-800 hover:bg-indigo-700 text-white font-medium  transition"
            >
                Sign In
            </button >
            <div className="flex items-center text-gray-500">
                <span className="flex-1 border-t-2 border-gray-400"></span>
                <span className="pb-1 px-2">or continue with</span>
                <span className="flex-1 border-t-2 border-gray-400"></span>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-3">
                <button
                    type="button"
                    className="flex items-center justify-center py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50"
                >
                    Google
                </button>
                <button
                    type="button"
                    className="flex items-center justify-center py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50"
                >
                    GitHub
                </button>
            </div>
        </form >
    )
}

export default LoginForm

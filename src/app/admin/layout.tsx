"use client"
import Sidebar from "@/src/components/admin/Sidebar"
import { useState } from "react"
import { IoMenu } from "react-icons/io5"

type TAdminLayoutProps = {
    children: React.ReactNode
}

const AdminLayout = ({ children }: TAdminLayoutProps) => {
    const [openSidebar,setOpenSidebar] = useState(true)
    return (
        <div className="flex min-h-screen bg-slate-50 ">
            <Sidebar isOpen={openSidebar} onClose={() => setOpenSidebar(false)} />
            <main className="flex-1 md:ml-64 p-4 md:m-8">
                <div className="max-w-5xl mx-auto">
                    {/* icon toggle Sidebar  */}

                    <div className="flex items-center  justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">Dashboard</h2>
                            <p className="text-slate-600 mt-2">welcome to your to admin panel</p>
                        </div>
                        <button onClick={() => setOpenSidebar(!openSidebar)} className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white border-slate-300 hover:bg-slate-100 transition-colors ">
                            <IoMenu className='w-6 h-6' />
                        </button>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md ">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdminLayout

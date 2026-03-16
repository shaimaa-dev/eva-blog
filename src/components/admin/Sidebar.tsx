import Link from "next/link"
import { CgClose } from "react-icons/cg"
import { FaCommentDots, FaNewspaper } from "react-icons/fa"
import { IoHome } from "react-icons/io5"

type TNavItem = {
    path: string
    label: string
    icon: React.ReactNode
}

const Sidebar = ({ isOpen, onClose }: { isOpen?: boolean, onClose?: () => void }) => {

    const navItems: TNavItem[] = [
        {
            path: '/admin', label: "Dashboard", icon: <IoHome />
        },
        {
            path: '/admin/posts-table', label: "Posts", icon: <FaNewspaper />
        },
        {
            path: '/admin/comments-table', label: "Comments", icon: <FaCommentDots />
        },
    ]

    return (
        <>
        {isOpen && <div onClick={onClose} className="fixed inset-0 bg-black/50 md:hidden z-30" />}
            <aside className={`fixed top-14 left-0 sm:top-0 md:top-auto h-screen w-64 bg-linear-to-b from-slate-900 to-slate-800 border-r border-slate-700 shadow-lg transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`} >
                <button className="absolute top-6 right-4 md:hidden text-white hover:text-2xl cursor-pointer " onClick={onClose}>
                    <CgClose className="" />
                </button>
                <div className="flex items-center justify-center h-20 border-b border-slate-700 ">
                    <h2 className="font-bold text-2xl text-white capitalize">admin</h2>
                </div>
                <nav className="flex-1 px-4 py-8 space-y-2">
                    {
                        navItems.map((link, index) => {
                            return (
                                <Link key={index} href={link.path} className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-slate-700 hover:text-white transition-all duration-200 group">

                                    <span className="text-xl group-hover:scale-110 transition-transform"> {link.icon}</span>
                                    <span className="font-medium">{link.label}</span>
                                </Link>
                            )
                        })
                    }
                </nav>
                <div className="border-t border-slate-700 p-4">
                    <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-100 cursor-pointer">
                        Logout
                    </button>
                </div>
            </aside>
        </>

    )
}

export default Sidebar

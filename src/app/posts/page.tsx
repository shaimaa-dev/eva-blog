"use client"

import Pagination from "@/src/components/pagination/Pagination"
import PostItem from "@/src/components/post/PostItem"
import SearchInputForm from "@/src/components/searchinputform/SearchInputForm"
import { TPost } from "@/src/utils/types"
import axios from "axios"
import { useEffect, useState } from "react"

const Posts = () => {
    const [posts, setPosts] = useState<TPost[]>([])


    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get("https://dummyjson.com/posts?limit=3")
                setPosts(res.data.posts)
            } catch (error) {
                console.log(error)
            }
        }

        getPosts()
    }, [])

    return (
        <>
            <SearchInputForm />
            <div className="flex flex-wrap items-center justify-center gap-7">
                {posts.map((post) => (
                    <PostItem key={post.id} post={post} />
                ))}
            </div>
            <Pagination />
        </>

    )
}

export default Posts
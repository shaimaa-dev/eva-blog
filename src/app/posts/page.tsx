import PostItem from "@/src/components/post/PostItem";
import { type TPost } from "@/src/utils/types";


const Posts = async () => {
    const res = await fetch("https://dummyjson.com/posts")
    if (!res.ok) {
        throw new Error("Faild to get data!")
    }
    const data = await res.json()
    const postsData: TPost[] = data.posts

    return (
        <div className='flex items-center justify-center flex-wrap gap-7'>
            {postsData?.map((post) =>
            (
                <PostItem key={post.id} post={post} />
            )

            )}
        </div>
    )
}

export default Posts

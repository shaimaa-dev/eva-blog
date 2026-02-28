import { TPost } from "@/src/utils/types";


const PostPage = async ({ params }: { params: { postid: string }}) => {
    const { postid } = await params;
    console.log('id', postid)
    const res = await fetch(`https://dummyjson.com/posts/${postid}`, { cache: "no-cache" });
    const post: TPost = await res.json();
    return (
        <main className="max-w-3xl mx-auto px-6 py-12">

            {/* Title */}
            <header className="mb-8">
                
                <h1 className="text-4xl font-bold leading mb-4">
                    {post.title}
                </h1>

                <div className="flex items-center gap-6 text-sm text-gray-500">
                    <span>👁 {post.views} views</span>
                    <span>👍 {post.reactions?.likes}</span>
                    <span>👎 {post.reactions?.dislikes}</span>
                </div>
            </header>

            {/* Divider */}
            <hr className="my-8 border-gray-200" />

            {/* Body */}
            <article className="prose prose-lg max-w-none">
                <p>{post.body}</p>
            </article>

            {/* Tags */}
            <section className="mt-10">
                <h2 className="text-sm uppercase tracking-wide text-gray-400 mb-3">
                    Tags
                </h2>

                <div className="flex flex-wrap gap-3">
                    {post.tags?.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-sm rounded-full hover:bg-gray-200 transition"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </section>

        </main>
    )
}

export default PostPage

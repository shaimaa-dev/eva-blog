import React from 'react';
import { TPost } from '@/src/utils/types';
import Link from 'next/link';

const PostItem = React.memo(({ post }: { post: TPost }) => {
  return (
    <article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg max-w-sm p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      
      <h3 className="font-extrabold text-xl mb-3 text-gray-900 dark:text-white line-clamp-1">
        {post.title}
      </h3>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-4">
        {post.body}
      </p>
      <Link href={`/posts/${post.id}`}>read more...</Link>
      <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1">
          👍 {post?.reactions?.likes}
        </span>
        <span className="flex items-center gap-1">
          👎 {post?.reactions?.dislikes}
        </span>
        <span>👀 {post.views} views</span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {post?.tags?.map(tag => (
          <span
            key={tag}
            className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
});

PostItem.displayName = "PostItem";

export default PostItem;
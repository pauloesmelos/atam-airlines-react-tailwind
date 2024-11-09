import React from 'react';
import { blog } from '../../data/data';
import CardBlog from './cards/CardBlog';

const Blog = () => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    setPosts(blog);
  }, [blog]);

  return (
    <section className="w-full bg-neutral-50 py-24">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <div className="w-full">
            <div className="w-full text-center flex flex-col gap-5">
                <span className="py-2 px-4 font-bold bg-blue-400 text-white rounded-md w-[100px] mx-auto">
                    Our Blog
                </span>
                <h1 className="text-4xl text-neutral-600 font-bold">
                    Our Latest Posts
                </h1>
                <p className="text-xl text-neutral-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {posts.map((post, index) => (
                    <CardBlog key={(index * Math.random()) * post.id} {...post} />
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Blog;
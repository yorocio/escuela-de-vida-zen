'use client'
import { blogs } from "@/components/Blog/Blog";
import BlogDetail from "@/components/Blog/BlogDetail";
import { notFound } from "next/navigation";


const BlogPage = ({params}) => {
    
    const id = Number(params.id); // Convertimos `id` a número

    const blog = blogs.find((b, index) => b.id === id);

    if (!blog) return notFound(); 

    return <BlogDetail blog={blog} />;
};

export default BlogPage;
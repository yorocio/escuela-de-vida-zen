'use client'
import Image from "next/image"
import Link from "next/link"

const BlogDetail = ({ blog }) => {
    return (
        <div className='my-32'>
        <div className="flex justify-center">
            <div className="shadow-sm shadow-gray-300 w-full max-w-md rounded-lg overflow-hidden font-[sans-serif] p-6">
                <div className="min-h-[256px]">
                    <Image src="/blog.jpg" width={300} height={300} className="w-full" />
                </div>

                <div className="mt-2">
                    <h3 className="text-gray-900 text-xl font-bold text-center">{blog.title}</h3>
                    <p className="mt-4 text-base text-gray-800 leading-relaxed text-justify">{blog.description} </p>
                </div>
                <div className='mt-2'>
                    <p className='text-md text-gray-800 leading-relaxed'>{blog.date}</p>
                </div>
            </div>
             
        </div>
        <div className="flex justify-center items-center">
        <Link className="text-gray-200 mt-8 px-6 py-3 rounded-lg border border-gray-800 bg-gray-800 hover:bg-gray-600 flex justify-center" href='/blog'>Volver</Link>
        </div>
        </div>
    )
}

export default BlogDetail
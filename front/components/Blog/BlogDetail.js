'use client'
import Image from "next/image"
import Link from "next/link"

const BlogDetail = ({ blog }) => {
    return (
        <div className="my-14">
            <div className="container px-6 py-24 mx-auto flex justify-center">
                <div className="shadow-md rounded-lg overflow-hidden w-full max-w-4xl">
                    <div className="min-h-[200px]">
                        <Image
                            src={blog.image}
                            width={600}
                            height={400}
                            className="w-full object-cover h-72 rounded-t-lg"
                            alt={`Blog ${blog.title}`}
                        />
                    </div>

                    {/* Contenedor de contenido */}
                    <div className="px-6 py-4">
                        {/* Título */}
                        <h3 className="text-gray-900 text-3xl font-bold text-center mb-6">{blog.title}</h3>

                        {/* Descripción del blog */}
                        <p className="text-base text-gray-800 leading-relaxed text-justify mb-4">
                            {blog.description}
                        </p>

                        {/* Fecha */}
                        <p className="text-sm text-gray-600 text-center mb-6">{blog.date}</p>

                        {/* Botón de "Volver" */}
                        <div className="flex justify-center">
                            <Link
                                className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-all duration-300"
                                href={`/blog`}
                            >
                                Volver
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail
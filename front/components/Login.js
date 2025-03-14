import React from 'react'

const Login = () => {
    return (
        <section className='my-44'>
            <form className="font-[sans-serif] text-[#333] max-w-4xl mx-auto px-6 mt-28 mb-20">
                <div className="grid sm:grid-cols-2 gap-10">
                    <div className="relative flex items-center sm:col-span-2">
                        <label className="text-lg absolute top-[-10px] left-0">Email</label>
                        <input type="email" placeholder="nombre@ejemplo.com" className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                            <defs>
                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 512h512V0H0Z" dataoriginal="#000000"></path>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" dataoriginal="#000000"></path>
                                <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" dataoriginal="#000000"></path>
                            </g>
                        </svg>
                    </div>

                    <div className="relative flex items-center sm:col-span-2">
                        <label className="text-lg absolute top-[-10px] left-0">Contraseña</label>
                        <input type="password" autoComplete="new-password" placeholder="********" className="px-2 pt-5 pb-2 bg-white w-full text-sm border-b-2 border-gray-100 focus:border-[#333] outline-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                            <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" dataoriginal="#000000"></path>
                        </svg>
                    </div>
                </div>

                <button type="button" className="mt-10 mb-10 px-2 py-2.5 w-full rounded-sm text-base bg-[#333] hover:bg-[#222] text-white">Iniciar Sesión</button>
            </form>
        </section>
    )
}

export default Login
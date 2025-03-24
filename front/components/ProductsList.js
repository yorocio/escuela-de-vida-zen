import { CircleMinus, CirclePlus, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductsList = () => {
  return (
    <div className="max-w-5xl max-md:max-w-xl mx-auto p-4 my-24">
      <h1 className="text-2xl font-bold text-slate-900">Tus compras</h1>
      <div className="grid md:grid-cols-3 gap-10 mt-8">
        <div className="md:col-span-2 space-y-4">

          <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]">
            <div className="flex gap-4">
              <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                <Image src="/libro2.png" className="w-full h-full object-contain" width={500} height={600} />
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900">El libro del Shiatsu</h3>
                </div>

                <div className="mt-auto flex items-center gap-3">
                  <button type="button"
                    className="flex items-center justify-center w-5 h-5 outline-none rounded-full">
                    <CircleMinus />
                  </button>
                  <span className="font-semibold text-sm leading-[18px]">2</span>
                  <button type="button"
                    className="flex items-center justify-center w-5 h-5 outline-none rounded-full">
                    <CirclePlus />
                  </button>
                </div>
              </div>
            </div>
            <div className="ml-auto flex flex-col">
              <button className="flex items-start gap-4 justify-end" type='button'>
                <Trash2 />
              </button>
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mt-auto">$120.00</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(61,63,68,0.3)]">
          <ul className="text-slate-900 font-medium space-y-4">
            <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-semibold">$120.00</span></li>
            <li className="flex flex-wrap gap-4 text-sm">Envio <span className="ml-auto font-semibold">$10</span></li>
            <li className="flex flex-wrap gap-4 text-sm">Impuestos <span className="ml-auto font-semibold">$0</span></li>
            <hr className="border-slate-300" />
            <li className="flex flex-wrap gap-4 text-sm font-semibold">Total <span className="ml-auto">$130.00</span></li>
          </ul>

          <div className="mt-8 space-y-2">
            <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-slate-800 hover:bg-slate-900 text-white rounded-md">Pagar</button>
            <button className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-slate-800 hover:bg-slate-900 text-white rounded-md" type='button'>
            <Link href='/store'>Volver a la tienda</Link>
            </button>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <img src='https://readymadeui.com/images/master.webp' alt="card1" className="w-10 object-contain" />
            <img src='https://readymadeui.com/images/visa.webp' alt="card2" className="w-10 object-contain" />
            <img src='https://readymadeui.com/images/american-express.webp' alt="card3" className="w-10 object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsList
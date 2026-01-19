// Hanya berjalan di sisi client
"use client"

import { FiArrowRight, FiChevronDown, FiChevronUp, FiShoppingBag } from "react-icons/fi"
import Button from "../ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"


const ProductActions = () => {


  // Menyimpan data yang bisa di ubah" di react
  const [qty, setQty] = useState(1)

  const {push} = useRouter()
  // 
  const checkout = () => {
    push("/checkout")
  }
  return (
    <div className="flex gap-5">

      {/* Action */}
      <div className="border border-gray-500 inline-flex w-fit min-w-20 5">
        <div className="aspect-square text-xl font-medium border-r border-gray-500 flex justify-center items-center">
          <span>{qty}</span>
        </div>

        {/* Arrow */}
        <div className="flex flex-col">
          <button className="border-b border-gray-500 cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={() => setQty(qty +1 )}
          >
            <FiChevronUp />
          </button>
          <button className="cursor-pointer h-1/2 aspect-square flex items-center justify-center"
            onClick={() => setQty(qty > 1 ? qty - 1 : qty)} // qty lebih besar dari 1 maka qty bisa dikurangi 1 jika tidak, tidak bisa mengurangi nya
          >
            <FiChevronDown />
          </button>
        </div>
      </div>


      {/* Button Cart and Checkout */}
      <Button className="px-20 w-full">
        <FiShoppingBag size={24}/>
        Add to Cart
      </Button>
      <Button variant="dark" className="px-20 w-full" onClick={checkout}>
        Checkout Now
        <FiArrowRight size={24}/>
      </Button>
    </div>
  )
}

export default ProductActions
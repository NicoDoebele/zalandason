"use client"

interface articleProps {
    name: string
    price: number
}

const addToCart = () => {

}

export default function Article({name, price}: articleProps) {
    return (<>
    
        <div className="flex flex-col w-fit p-1 border-gray-300 border-2 rounded-md bg-gray-50 gap-2">
            <div className="w-72 h-72 rounded-md bg-gray-300">

            </div>
            <div className="flex justify-center gap-2 items-center">
                <span>{name} - {price}$</span>
                <button onClick={addToCart} className="bg-green-200 rounded-md hover:bg-green-300 p-1 border-2 border-gray-300">Add to cart</button>
            </div>
        </div>
    
    </>)
}
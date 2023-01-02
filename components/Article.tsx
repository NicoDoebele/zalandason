interface articleProps {
    name: string
    price: number
}

export default function Article({name, price}: articleProps) {
    return (<>
    
        <div className="flex w-fit p-1 border-gray-300 border-2 rounded-md bg-gray-50">
            {name} - {price}$
        </div>
    
    </>)
}
export default function navbar() {
    return (<>
    
        <div className="flex justify-center items-center gap-6 w-screen h-12 bg-gray-300">
            <a href="/" className="bg-gray-100 p-1 rounded-md hover:bg-gray-200">
                Home
            </a>

            <a href="/articles" className="bg-gray-100 p-1 rounded-md hover:bg-gray-200">
                Articles
            </a>

            <a href="/login" className="bg-gray-100 p-1 rounded-md hover:bg-gray-200">
                Login
            </a>
        </div>
    
    </>)
}
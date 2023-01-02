"use client"

import { useRef } from "react"
import { useRouter } from "next/navigation"
import { getHostAddress } from "../../utils/getHostAddress"

export default function register() {

    const router = useRouter()

    const usernameRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        if (!usernameRef.current || !passwordRef.current) return
        
        const { value : username } = usernameRef.current
        const { value : password } = passwordRef.current

        const res = await fetch(getHostAddress() + "/api/register", {
            method: "POST",
            body: JSON.stringify({username, password})
        })

        if (res.status === 500) alert("Register failed.")
        else router.push("/")
    }

    return (<>

        <div className="flex w-screen h-fit items-center justify-center">

            <form onSubmit={handleSubmit} className="flex w-fit h-fit items-center flex-col gap-10 mt-10 p-6 bg-gray-100 rounded-md border-2 border-gray-300">

                <div>
                    <label htmlFor="username">E-Mail: </label>
                    <input ref={usernameRef} name="username" />
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input ref={passwordRef} name="password" />
                </div>

                <div className="flex gap-4">
                    <button className="bg-white p-2 border-gray-200 border-2 rounded-md" type="submit" >Register</button>
                    <button className="bg-white p-2 border-gray-200 border-2 rounded-md" type="reset" >Reset</button>
                </div>

            </form>

        </div>

    </>)
}
"use client"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Login() {
    const router = useRouter()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = async(data) => {
        try {            
            const res = await axios.post("http://localhost:8000/users/register", data)
            if(res) router.push('/question')
        } catch (error) {
            console.log(error, "error while submitting user details")
        }
    }

    // useEffect(()=>{ check for cookie/session
                        // if yes, route back to questions page
    // },[]) // change in the session

    return (
        <div className="w-full flex items-center justify-center h-[90vh] ">
            <div>
                <p className="w-full flex items-center justify-center text-lg font-bold mb-4">Candidate Registration</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <span className="grid grid-rows-4 gap-3">
                        <input {...register("fullName")} type="text" className="border rounded 2px text-black p-2" />
                        <input {...register("email")} type="email" className="border rounded 2px text-black p-2" />
                        <input {...register("password")} type="password" className="border rounded 2px text-black p-2" />
                        <button className="border 2px" type="submit">Submit</button>
                    </span>
                </form>
            </div>
        </div>
    )
}
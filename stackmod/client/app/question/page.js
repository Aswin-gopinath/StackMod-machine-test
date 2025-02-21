"use client"
import QuestionCard from "@/components/QuestionCard"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function Questions() {
    const [questions, setQuestions] = useState([])
    const router = useRouter()
    useEffect(() => {
        async function fetchData() {
            const res = await axios.get("http://localhost:8000/questions")
            if (res?.data) setQuestions(res?.data)
        }
        fetchData()
    }, [])
    return (
        <div className="w-full p-10 h-[90vh]">
            <span className="flex items-center gap-5">
            <p className="font-bold text-xs cursor-pointer" onClick={()=>{router.push('/login')}}>Back</p>
            <p>Please attend the Questions</p>
            </span>
            {questions?.map((item) => (
                <div key={item?.slNo}>
                    <QuestionCard item={item} />
                </div>
            ))}
        </div>
    )
}
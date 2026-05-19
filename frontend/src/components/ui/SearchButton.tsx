'use client'

import { useState } from "react"
import { Search } from "lucide-react"

export default function SearchButton(){
    const [isClicked, setIsClicked] = useState(false)

    const [userTyped, setUserTyped] = useState("")

    const handleClick = () => {
        if (userTyped.length > 0 && isClicked) {
            setIsClicked(true)
        } else {
            setIsClicked(!isClicked)
        }
    }
     
    
    return (
        <div className="flex gap-3 items-center">
            {
                isClicked && (
                    <div className="w-51.5 h-11 bg-neutral-300">
                        <input className="w-51.5 h-11" onChange={(e) => setUserTyped(e.target.value)} type="text" />
                    </div>
                )
            }
            <button onClick={() => handleClick()} type="button" className={`bg-black text-neutral-200 flex justify-center items-center cursor-pointer h-11 w-11`}>
                <Search size={20}/>
            </button>
        </div>
    )
}
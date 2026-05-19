import type { ReactElement } from "react"

type ButtonColor = 'bg-blue-500' | 'bg-black' | 'bg-neutral-700'

export default function CustomButton({icon, text, color}: {icon: ReactElement | null, text: string, color: ButtonColor}){
    return (
        <button type="button" className={`${color} flex items-center gap-2 px-4 w-51.5 h-11 bg-neutral-700 text-white text-md`}>
            {icon && icon}
            {text}
        </button>
    )
}
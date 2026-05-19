import { Calendar } from "lucide-react"
export default function ScheduledDate() {
    return (
        <div className="flex items-center gap-1 text-neutral-400">
            <Calendar size={16}/>
            19/05/2026
        </div>
    )
}
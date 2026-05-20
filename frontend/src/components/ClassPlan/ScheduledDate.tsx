import { Calendar } from "lucide-react"
export default function ScheduledDate({data}: {data: string}) {
    const cleanDate = new Date(data).toLocaleDateString('pt-BR')
    return (
        <div className="flex truncate items-center gap-1 text-neutral-400">
            <Calendar size={16}/>
            {cleanDate}
        </div>
    )
}
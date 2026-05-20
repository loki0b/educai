'use client'
import { ArrowDownUp, CalendarArrowUp, Plus, Filter } from "lucide-react"
import CustomButton from "../ui/CustomButton.js"
import SearchButton from "../ui/SearchButton.js"
import { useState } from "react"
import FilterModal from "../modals/FilterModal.js"
import NewClassPlan from "../modals/NewClassPlan.js"

interface HeadingSectionProps {
    onRefresh: () => void;
}

export default function HeadingSection({ onRefresh }: HeadingSectionProps) {
    const [isFilterOn, setIsFilterOn] = useState(false)
    const [isClassOn, setisClassOn] = useState(false)

    return (
        <div className="w-full relative max-w-7xl flex gap-1 items-center justify-between mb-4">
            <div className="flex gap-1 items-center">
                <h1 className="text-xl font-bold mr-3">Planos de Aula</h1>
                <div className="flex gap-1 items-center">
                    <ArrowDownUp size={16} className="text-neutral-500 hover:text-neutral-600 cursor-pointer"/>
                    <CalendarArrowUp size={16} className="text-neutral-500 hover:text-neutral-600 cursor-pointer"/>
                </div>
            </div>
            
            <div className="flex gap-3 items-center">
                <div className="relative flex flex-col items-right">
                    <Filter onClick={() => setIsFilterOn(!isFilterOn)} size={16} className="text-neutral-500 hover:text-neutral-600 cursor-pointer"/>
                    {isFilterOn && <FilterModal/>}
                </div>
                <div onClick={() => setisClassOn(true)}>
                    <CustomButton
                        icon={<Plus size={20}/>}
                        text="Novo Plano de Aula"
                        color="bg-neutral-700"
                    />
                </div>
                <SearchButton/>
            </div>

            {isClassOn && (
                <NewClassPlan
                    isOn={isClassOn}
                    onClose={() => setisClassOn(false)}
                    empty={true} 
                    data={null}
                />
            )}
        </div>
    )
}
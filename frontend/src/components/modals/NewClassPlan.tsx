'use client'
import { useState } from "react";
import TagContainer from "../ClassPlan/TagContainer.js";
import { X } from "lucide-react";
import CustomForm from "../ui/CustomForm.js";

interface Class {
    id: number;
    title: string;
    objective: string;
    subject: string;
    scheduled_date?: string;
    contents?: string;
    tags?: string[];
}

export default function NewClassPlan({ isOn, onClose, data, empty }: { isOn: boolean, onClose: () => void, data: Class | null, empty: boolean}) {
    if (!isOn) return null;
; 

    return (
        <div className="h-screen justify-center items-center flex w-full fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={onClose}></div>
            <div className="relative justify-center p-6 bg-white w-130 h-135 z-10">
                <div className="text-neutral-400 text-sm flex items-center justify-between">
                    {empty ? <p>NOVO PLANO DE AULA</p> : <p>EDITAR PLANO DE AULA</p>}
                    <X className="cursor-pointer" size={16} onClick={onClose}/>
                </div>
                
                <CustomForm
                empty={empty}
                data={data}
                onClose={onClose}
                />
            </div>
        </div>
    );
}
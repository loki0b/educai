'use client'
import { useState } from "react";
import TagContainer from "../ClassPlan/TagContainer.js";
import { X } from "lucide-react";
import CustomButton from "../ui/CustomButton.js";

export default function NewClassPlan({isOn, onClose}: {isOn: boolean, onClose: () => void}) {
    if (!isOn) return null
    return (
        <div className="h-screen justify-center items-center flex w-full fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-xs"></div>
            <div className="relative justify-center p-6 bg-white w-130 h-135">
                <div className="text-neutral-400 text-sm flex items-center justify-between">
                    <p>NOVO PLANO DE AULA</p>
                    <X className="cursor-pointer" size={16} onClick={onClose}/>
                </div>
                <form className="mt-4">
                    <label className="text-neutral-400 text-sm" htmlFor="title">Título da aula</label>
                    <input type="text" id="title" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full"/>
                    <div className="flex gap-3 mt-1">
                        <div>
                        <label className="text-neutral-400 text-sm" htmlFor="goals">Objetivos</label>
                        <input type="text" id="goals" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full"/>
                        </div>
                        <div>
                        <label className="text-neutral-400 text-sm" htmlFor="date">Data</label>
                        <input type="date" id="date" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full"/>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-1">
                        <div>
                        <label className="text-neutral-400 text-sm" htmlFor="subject">Disciplina</label>
                        <input type="text" id="subject" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full"/>
                        </div>
                        <div>
                        <label className="text-neutral-400 text-sm" htmlFor="content">Conteúdo</label>
                        <input type="text" id="content" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full"/>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-1">
                        <div>
                        <label className="text-neutral-400 text-sm" htmlFor="resources">Recursos de apoio</label>
                        <input type="text" id="resources" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full"/>
                        </div>
                        <div>
                        <label className="text-neutral-400 text-sm" htmlFor="content">Tags</label>
                        <input type="text" id="content" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full"/>
                        </div>
                    </div>
                    <label className="text-neutral-400 text-sm" htmlFor="text">Ementa</label>
                    <textarea id="text" className="p-4 text-neutral-500 h-20 mt-1 bg-neutral-300 w-full"/>
                    <div className="flex mt-3 text-white gap-3">
                        <button type="button" className="cursor-pointer w-full h-11 bg-blue-500 text-center">
                            Gerar Recomendações com IA
                        </button>
                        <button type="submit" className="cursor-pointer w-full h-11 bg-black text-center">
                            Criar Plano de Aula
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
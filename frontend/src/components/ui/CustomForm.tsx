'use client'
import React from "react";

interface Class {
    id: number;
    title: string;
    objective: string;
    subject: string;
    scheduled_date?: string;
    contents?: string;
    tags?: string[];
    learning_resources?: string[];
    syllabus?: string;
}

interface CustomFormProps {
    empty: boolean;
    data: Class | null;
    onClose: () => void;
}

export default function CustomForm({ empty, data, onClose }: CustomFormProps) {
    
    const formatPayload = (rawEntries: Record<string, any>) => {
        const formatted = { ...rawEntries };
        
        if (typeof formatted.tags === 'string') {
            formatted.tags = formatted.tags.trim() 
                ? formatted.tags.split(',').map((t: string) => t.trim()) 
                : [];
        }

        if (typeof formatted.learning_resources === 'string') {
            formatted.learning_resources = formatted.learning_resources.trim() 
                ? formatted.learning_resources.split(',').map((r: string) => r.trim()) 
                : [];
        }

        return formatted;
    };

    const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const dataItems = Object.fromEntries(formData.entries());

        const payload = formatPayload(dataItems);

        try {
            const response = await fetch('http://127.0.0.1:5000/api/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                onClose();
                window.location.reload();
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

    const handleEdit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const dataItems = Object.fromEntries(formData.entries());
        
        if (data?.id) {
            dataItems.id = data.id.toString();
        }

        const payload = formatPayload(dataItems);

        try {
            const response = await fetch('http://127.0.0.1:5000/api/edit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                onClose();
                window.location.reload();
            }
        } catch (error) {
            console.error("Network error during update:", error);
        }
    };

    return (
        <div>
            {empty && (
                <form onSubmit={handleCreate} className="mt-4">
                    <label className="text-neutral-400 text-sm" htmlFor="title">Título da aula</label>
                    <input type="text" name="title" id="title" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full rounded" required/>
                    
                    <div className="flex gap-3 mt-1">
                        <div className="w-1/2">
                            <label className="text-neutral-400 text-sm" htmlFor="objective">Objetivos</label>
                            <input type="text" name="objective" id="objective" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full rounded"/>
                        </div>
                        <div className="w-1/2">
                            <label className="text-neutral-400 text-sm" htmlFor="scheduled_date">Data</label>
                            <input type="date" name="scheduled_date" id="scheduled_date" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full rounded"/>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-1">
                        <div className="w-1/2">
                            <label className="text-neutral-400 text-sm" htmlFor="subject">Disciplina</label>
                            <input type="text" name="subject" id="subject" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full rounded"/>
                        </div>
                        <div className="w-1/2">
                            <label className="text-neutral-400 text-sm" htmlFor="contents">Conteúdo</label>
                            <input type="text" name="contents" id="contents" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full rounded"/>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-1">
                        <div className="w-1/2">
                            <label className="text-neutral-400 text-sm" htmlFor="learning_resources">Recursos de apoio</label>
                            <input type="text" name="learning_resources" id="learning_resources" placeholder="Ex: Livro, Slides, Video" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full rounded"/>
                        </div>
                        <div className="w-1/2">
                            <label className="text-neutral-400 text-sm" htmlFor="tags">Tags</label>
                            <input type="text" name="tags" id="tags" placeholder="Ex: algebra, matrizes" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full rounded"/>
                        </div>
                    </div>

                    <label className="text-neutral-400 text-sm mt-1 block" htmlFor="syllabus">Ementa</label>
                    <textarea name="syllabus" id="syllabus" className="p-4 text-neutral-500 h-20 mt-1 bg-neutral-300 w-full rounded resize-none"/>
                    
                    <div className="flex mt-3 text-white gap-3">
                        <button type="button" className="w-full h-11 bg-blue-500 text-center rounded font-medium">Gerar Recomendações com IA</button>
                        <button type="submit" className="w-full h-11 bg-black text-center rounded font-medium">Criar Plano de Aula</button>
                    </div>
                </form>
            )}

            {data && (
                <form onSubmit={handleEdit} className="mt-4">
                    <label className="text-neutral-400 text-sm" htmlFor="edit-title">Título da aula</label>
                    <input defaultValue={data.title} type="text" name="title" id="edit-title" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full rounded" required/>
                    
                    <div className="flex gap-3 mt-1">
                        <div className="w-1/2">
                            <label className="text-neutral-400 text-sm" htmlFor="edit-objective">Objetivos</label>
                            <input defaultValue={data.objective} type="text" name="objective" id="edit-objective" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full rounded"/>
                        </div>
                        <div className="w-1/2">
                            <label className="text-neutral-400 text-sm" htmlFor="edit-date">Data</label>
                            <input defaultValue={data.scheduled_date} type="date" name="scheduled_date" id="edit-date" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full rounded"/>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-1">
                        <div className="w-1/2">
                            <label className="text-neutral-400 text-sm" htmlFor="edit-subject">Disciplina</label>
                            <input defaultValue={data.subject} type="text" name="subject" id="edit-subject" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full rounded"/>
                        </div>
                        <div className="w-1/2">
                            <label className="text-neutral-400 text-sm" htmlFor="edit-contents">Conteúdo</label>
                            <input defaultValue={data.contents} type="text" name="contents" id="edit-contents" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full rounded"/>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-1">
                        <div className="w-1/2">
                            <label className="text-neutral-400 text-sm" htmlFor="edit-resources">Recursos de apoio</label>
                            <input defaultValue={data.learning_resources?.join(", ") || ""} type="text" name="learning_resources" id="edit-resources" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full rounded"/>
                        </div>
                        <div className="w-1/2">
                            <label className="text-neutral-400 text-sm" htmlFor="edit-tags">Tags</label>
                            <input defaultValue={data.tags?.join(", ") || ""} type="text" name="tags" id="edit-tags" className="px-4 text-neutral-500 h-10 mt-1 bg-neutral-300 w-full rounded"/>
                        </div>
                    </div>

                    <label className="text-neutral-400 text-sm mt-1 block" htmlFor="edit-syllabus">Ementa</label>
                    <textarea defaultValue={data.syllabus || ""} name="syllabus" id="edit-syllabus" className="p-4 text-neutral-500 h-20 mt-1 bg-neutral-300 w-full rounded resize-none"/>
                    
                    <button type="submit" className="w-full h-11 text-white bg-black text-center mt-3 rounded font-medium">Salvar Alterações</button>
                </form>
            )}
        </div>
    );
}
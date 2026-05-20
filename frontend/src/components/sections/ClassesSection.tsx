'use client'
import ClassPlan from "../ClassPlan/ClassPlan.js"
import { useState, useEffect } from "react";

interface Class {
    id: number;
    title: string;
    objective: string;
    subject: string;
    scheduled_date?: string;
    contents?: string;
    tags?: string[];
}

interface ClassesSectionProps {
    classe: Class[];
    loading: boolean;
    error: string | null;
}

export default function ClassesSection({ classe, loading, error }: ClassesSectionProps) {
    const [curPage, setCurPage] = useState(0); 

    const maxPages = Math.ceil(classe.length / 8);
    const pages: Class[][] = Array.from({ length: maxPages }, (_, index) => {
        const start = index * 8;
        return classe.slice(start, start + 8);
    });
    
    useEffect(() => {
        if (curPage >= maxPages && maxPages > 0) {
            setCurPage(maxPages - 1);
        }
    }, [classe.length, maxPages, curPage]);

    if (error) {
        return (
            <div className="text-red-500 py-12 text-center">
                <p>Erro ao carregar dados: {error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-7xl w-full flex flex-col justify-center items-center">
            {!loading && pages.map((page, index) => (
                curPage === index && (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5.5 w-full">
                        {page.map((item) => (
                            <ClassPlan key={item.id} data={item}/>
                        ))}
                    </div>
                )
            ))}

            {!loading && maxPages > 1 && (
                <div className="flex gap-2 mt-8 select-none">
                    {pages.map((_, index) => (
                        <p 
                            className={`cursor-pointer px-2 py-1 rounded text-sm transition-colors ${
                                curPage === index ? 'text-neutral-900 font-bold bg-neutral-200' : 'text-neutral-400 hover:text-neutral-600'
                            }`} 
                            key={index} 
                            onClick={() => setCurPage(index)}
                        >
                            {index + 1}
                        </p>
                    ))}
                </div>
            )}

            {classe.length === 0 && !loading && (
                <p className="text-neutral-400 py-12">Nenhum plano de aula cadastrado.</p>
            )}

            {loading && (
                <p className="text-neutral-400 animate-pulse py-12">Carregando planos de aula...</p>
            )}
        </div>
    );
}
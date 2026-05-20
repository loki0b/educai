'use client'
import { useState, useEffect, useCallback } from "react";
import HeadingSection from "./HeadingSection.js";
import ClassesSection from "./ClassesSection.js";

interface Class {
    id: number;
    title: string;
    objective: string;
    subject: string;
    scheduled_date?: string;
    contents?: string;
    tags?: string[];
}

export default function MainSection() {
    const [classe, setClasse] = useState<Class[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchClasses = useCallback(async (signal: AbortSignal | null) => {
        try {
            setLoading(true);
            setError(null);
            
            const response = await fetch('http://127.0.0.1:5000/api/getAll', { signal });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const data = await response.json();
            setClasse(data);
        } catch (err) {
            if (err instanceof Error && err.name === 'AbortError') return;
            setError(err instanceof Error ? err.message : 'Something went wrong');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        fetchClasses(controller.signal);
        return () => controller.abort();
    }, [fetchClasses]);

    return (
        <div className="flex flex-col items-center w-full p-6">
            <HeadingSection onRefresh={() => fetchClasses()} />
            
            <ClassesSection 
                classe={classe} 
                loading={loading} 
                error={error} 
            />
        </div>
    );
}
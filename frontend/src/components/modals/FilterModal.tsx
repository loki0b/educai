'use client'

interface Class {
    id: number;
    subject: string;
    scheduled_date?: string;
    tags?: string[];
}

interface FilterModalProps {
    data: Class[];
    currentFilters: { subject: string; tag: string; date: string };
    onFilterChange: React.Dispatch<React.SetStateAction<{ subject: string; tag: string; date: string }>>;
}

export default function FilterModal({ data = [], currentFilters, onFilterChange }: FilterModalProps) {
    
    const uniqueSubjects = Array.from(new Set(data.map((item) => item.subject).filter(Boolean)));
    const uniqueTags = Array.from(new Set(data.flatMap((item) => item.tags || []).filter(Boolean)));

    const toggleSubject = (subject: string) => {
        onFilterChange((prev) => ({
            ...prev,
            subject: prev.subject === subject ? "" : subject 
        }));
    };

    const toggleTag = (tag: string) => {
        onFilterChange((prev) => ({
            ...prev,
            tag: prev.tag === tag ? "" : tag
        }));
    };

    return (
        <div className="w-62.5 gap-3 flex flex-col justify-start text-neutral-400 min-h-48 absolute -translate-x-56 translate-y-8 shadow-lg p-4 shadow-neutral-400 bg-white z-50 rounded-sm">
            
            <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold tracking-wider text-neutral-400">DISCIPLINAS</span>
                <div className="flex flex-wrap gap-1">
                    {uniqueSubjects.map((sub, idx) => {
                        const isSelected = currentFilters.subject === sub;
                        return (
                            <button
                                key={idx}
                                onClick={() => toggleSubject(sub)}
                                className={`text-xs px-2 py-1 rounded transition-all cursor-pointer ${
                                    isSelected 
                                    ? "bg-neutral-800 text-white" 
                                    : "bg-neutral-200 text-neutral-600 hover:bg-neutral-300"
                                }`}
                            >
                                {sub}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-1.5 mt-1">
                <span className="text-xs font-bold tracking-wider text-neutral-400">TAGS</span>
                <div className="flex flex-wrap gap-1">
                    {uniqueTags.map((tag, idx) => {
                        const isSelected = currentFilters.tag === tag;
                        return (
                            <button
                                key={idx}
                                onClick={() => toggleTag(tag)}
                                className={`text-xs px-2 py-1 rounded-full transition-all cursor-pointer ${
                                    isSelected 
                                    ? "bg-blue-600 text-white" 
                                    : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                                }`}
                            >
                                #{tag}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-1 mt-1">
                <span className="text-xs font-bold tracking-wider text-neutral-400">DATA PREVISTA</span>
                <input 
                    type="date" 
                    value={currentFilters.date}
                    onChange={(e) => onFilterChange((prev) => ({ ...prev, date: e.target.value }))}
                    className="border border-neutral-200 px-2 py-1 text-sm text-neutral-500 rounded focus:outline-none focus:border-neutral-400 bg-neutral-50 cursor-pointer"
                />
            </div>

            {(currentFilters.subject || currentFilters.tag || currentFilters.date) && (
                <button 
                    onClick={() => onFilterChange({ subject: "", tag: "", date: "" })}
                    className="text-center text-xs text-red-400 hover:text-red-500 font-semibold underline mt-2 cursor-pointer"
                >
                    Limpar Filtros
                </button>
            )}
        </div>
    );
}
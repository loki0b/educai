'use client'
import Title from "./Title.js"
import Subject from "./Subject.js";
import ScheduledDate from "./ScheduledDate.js";
import TextBox from "./TextBox.js";
import TagContainer from "./TagContainer.js";
import { Edit, Trash, Ellipsis } from "lucide-react";
import { useState } from "react";
import NewClassPlan from "../modals/NewClassPlan.js";

interface Class {
    id: number;
    title: string;
    objective: string;
    subject: string;
    scheduled_date: string;
    contents: string;
    tags: string[];
}

export default function ClassPlan({ data }: { data: Class }) {
    const [editBttn, setEditBttn] = useState(false);
    const [elipsisOn, setElipsisOn] = useState(false);

    const handleDelete = async (classId: number) => {
        try {
            const response = await fetch('http://127.0.0.1:5000/api/delete', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: classId }),
            });

            if (response.ok) {
                window.location.reload();
            }
        } catch (error) {
            console.error("Error deleting plan:", error);
        }
    }; 

    return (
        <div className="flex flex-col gap-1 justify-center w-68 h-54 bg-white shadow-lg shadow-neutral-400 p-8 relative">
            <div className="flex items-center w-full justify-between">
                <Title title={data.title} />
                
                <div className="flex items-center gap-2">
                    <Ellipsis 
                        onClick={() => setElipsisOn(!elipsisOn)} 
                        size={16} 
                        className={`cursor-pointer text-neutral-400 transition-transform ${elipsisOn && 'rotate-90'}`}
                    />
                    
                    {elipsisOn && (
                        <div className="flex gap-2 text-neutral-400 items-center animate-in fade-in duration-200">
                            <Edit onClick={() => setEditBttn(true)} className="hover:text-neutral-600 cursor-pointer" size={16}/>
                            <Trash onClick={() => handleDelete(data.id)} className="hover:text-red-500 cursor-pointer" size={16}/>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex gap-2 items-center mt-1">
                <Subject sub={data.subject} />
                <ScheduledDate data={data.scheduled_date} />
            </div>
            
            <TextBox text={data.contents}/>
            <TagContainer tags={data.tags}/>

            {editBttn && (
                <NewClassPlan
                    isOn={editBttn}
                    onClose={() => setEditBttn(false)}
                    data={data}
                    empty={false}
                    />
            )}
        </div>
    );
}
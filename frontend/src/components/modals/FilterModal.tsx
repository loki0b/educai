'use client'
import { useState } from "react";
import TagContainer from "../ClassPlan/TagContainer.js";

export default function FilterModal() {
    
    return (
        <div className="w-62.5 gap-1 flex flex-col justify-center text-neutral-400 h-48 absolute -translate-x-56 translate-y-8 shadow-lg p-4 shadow-neutral-400 bg-white">
            DISCIPLINAS
            <TagContainer/>
            TAGS
            <TagContainer/>
            DATA PREVISTA
            <input type="date" />

        </div>
    )
}
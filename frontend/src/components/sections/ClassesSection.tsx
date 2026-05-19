'use client'
import ClassPlan from "../ClassPlan/ClassPlan.js"
import { useState, useEffect } from "react";

interface Class {
    id: number;
}

export default function ClassesSection(){
    const classes: Class[] = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10},
        {id: 11},
        {id: 12},
        {id: 13},
        {id: 14},
        {id: 15},
        {id: 16}
    ]
    const maxPages = Math.ceil(classes.length / 8)
    const pages: Class[][] = Array.from({ length: maxPages }, (_, index) => {
        const start = index * 8;
        return classes.slice(start, start + 8);
        });
    
    const [curPage, setCurPage] = useState(0)
    
    const handleTurnPage = (page: number) => (
        setCurPage(page)
    )
    return (
        <div className="max-w-7xl w-full flex flex-col items-center">
            {
                pages.map((page, index) => (
                        <div key={index} className="flex flex-wrap gap-5.5">
                            {
                                curPage === index && (
                                    page.map((classes) => (
                                    <ClassPlan key={classes.id}/>
                                ))
                                )
                            }
                        </div>
                        
                ))
            }
            <div className="flex gap-2 mt-8">
                {
                    pages.map((page, index) => (
                        <p className={`cursor-pointer ${curPage === index ? 'text-neutral-600': 'text-neutral-400'}`} key={index} onClick={() => handleTurnPage(index)}>{index + 1}</p>
                    ))
                }
            </div>
        </div>
    )
}
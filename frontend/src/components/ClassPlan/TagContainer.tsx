import Tag from "./Tag.js";

export default function TagContainer() {
    const list = [

        {id: 1},
        {id: 2},
        {id: 3}

    ]
    
    return (
        <div className="flex gap-2 items-center max-w-100">
            {list.map((listItem) => (
                <Tag key={listItem.id}/>
            ))}
        </div>
    )
}
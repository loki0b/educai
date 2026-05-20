import Tag from "./Tag.js";

export default function TagContainer({tags}: {tags: string[]}) {
    const myTags = tags.slice(0,2)
    return (
        <div className="flex gap-2 items-center">
            {myTags.map((listItem, index) => (
                <Tag key={index} tag={listItem}/>
            ))}
        </div>
    )
}
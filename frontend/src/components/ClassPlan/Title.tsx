export default function Title({title}: {title: string}) {
    return (
        <h1 className="font-semibold text-xl max-w-32 truncate">
            {title}
        </h1>
    )
}
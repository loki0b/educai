export default function TextBox({text}: {text: string}) {
    return (
        <p className="h-20 max-h-24 mb-1 line-clamp-2 text-sm text-neutral-400">
            {text}
        </p>
    )
}
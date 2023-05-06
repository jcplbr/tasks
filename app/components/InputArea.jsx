import { useState } from "react"

export default function InputArea({ onSubmit }) {
    const [item, setItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if(item === "") return

        onSubmit(item)

        setItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-task">
            <textarea onChange={(e) => setItem(e.target.value)} value={item} rows={2} placeholder="Type something to do"></textarea>
            <button className="btn-add">Add new</button>
        </form>
    )
}
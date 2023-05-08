import { useEffect, useRef, useState } from "react"

export default function InputArea({ onSubmit }) {
    const [item, setItem] = useState("")
    const textareaRef = useRef(null)

    function handleSubmit(e) {
        e.preventDefault()

        if(item === "") return

        onSubmit(item)

        setItem("")
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') handleSubmit(e)
            
        if (e.key === '/') {
            e.preventDefault();
            textareaRef.current.focus();
        }
        
        if (e.key === 'Escape') textareaRef.current.blur()
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleSubmit]);

    return (
        <form onSubmit={handleSubmit} className="new-task">
            <textarea ref={textareaRef} onChange={(e) => setItem(e.target.value)} value={item} rows={2} placeholder="Type something to do"></textarea>
            <button className="btn-add">Add new</button>
        </form>
    )
}
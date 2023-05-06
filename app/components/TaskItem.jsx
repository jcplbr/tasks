import { CrumpledPaperIcon } from "@radix-ui/react-icons";

export default function TaskItem({ id, checked, content, toggleItem, deleteItem }) {
    return (
        <li>
            <input name="checkbox" type="checkbox" checked={checked} onChange={e => toggleItem(id, e.target.checked)} />
            <label>
                {content}
                <button className="btn-delete">
                    <CrumpledPaperIcon width={16} height={16} onClick={() => deleteItem(id)} />
                </button>
            </label>
        </li>
    )
}
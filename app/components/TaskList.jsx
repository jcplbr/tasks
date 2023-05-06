import TaskItem from "./TaskItem";

export default function TaskList({ items, toggleItem, deleteItem }) {
    const uncheckedItems = items.filter(item => !item.checked).sort((a, b) => b.timestamp - a.timestamp)
    const checkedItems = items.filter(item => item.checked).sort((a, b) => b.lastChecked - a.lastChecked)
    const sortedItems = [...uncheckedItems, ...checkedItems]

    return (
        <>
            {items.length !== 0 && (
                <>
                    <hr />
                    <ul className="tasklist">
                        {sortedItems.map(item => {
                            return (
                                <TaskItem 
                                    {...item}
                                    key={item.id}
                                    toggleItem={toggleItem}
                                    deleteItem={deleteItem}
                                />
                            )
                        })}
                    </ul>
                </>
            )}
        </>
    )
}
import { CrumpledPaperIcon } from "@radix-ui/react-icons";
import * as Tooltip from '@radix-ui/react-tooltip';

export default function TaskItem({ id, checked, content, toggleItem, deleteItem }) {
    return (
        <li>
            <input id={id} name="checkbox" type="checkbox" checked={checked} onChange={e => toggleItem(id, e.target.checked)} />
            <label htmlFor={id}>
                {content}
                    <Tooltip.Provider delayDuration={500}>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <button className="btn-delete">
                                    <CrumpledPaperIcon width={16} height={16} onClick={() => deleteItem(id)} />
                                </button>
                            </Tooltip.Trigger>
                            <Tooltip.Portal>
                                <Tooltip.Content sideOffset={5} className="tooltipContent">
                                    Delete item
                                </Tooltip.Content>
                            </Tooltip.Portal>
                        </Tooltip.Root>
                    </Tooltip.Provider>
            </label>
        </li>
    )
}
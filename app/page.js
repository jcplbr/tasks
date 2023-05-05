import { CrumpledPaperIcon } from "@radix-ui/react-icons"

export default function Home() {
  return (
    <main>
      <div className="layout">
        <h1>Tasks</h1>

        <form className="new-task">
          <textarea rows={2} placeholder="Type something in here"></textarea>
          <button className="btn-add">Add new</button>
        </form>

        <hr />

        <ul className="tasklist">
          <li>
            <input name="checkbox" type="checkbox" />
            <label>
              Item 1
              <button className="btn-delete">
                <CrumpledPaperIcon width={16} height={16} />
              </button>
            </label>
          </li>
          <li>
            <input name="checkbox" type="checkbox" />
            <label>
              Item 2
              <button className="btn-delete">
                <CrumpledPaperIcon width={16} height={16} />
              </button>
            </label>
          </li>
          <li>
            <input name="checkbox-checked" type="checkbox" checked />
            <label>
              Item 3
              <button className="btn-delete">
                <CrumpledPaperIcon width={16} height={16} />
              </button>
            </label>
          </li>
        </ul>
      </div>
    </main>
  )
}

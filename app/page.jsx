"use client"

import { useEffect, useState } from "react"
import InputArea from "./components/InputArea"
import TaskList from "./components/TaskList"
import Header from "./components/Header"

export default function Home() {

  const [items, setItems] = useState([])

  useEffect(() => {
    const storedItems = localStorage.getItem('items')
    if(storedItems) {
      setItems(JSON.parse(storedItems))
    }
  }, [])

  function addItem(content) {
    setItems(currentItems => {
      const newItem = { id: crypto.randomUUID(), content, checked: false, timestamp: Date.now(), lastChecked: null }
      const updatedItems = [...currentItems, newItem]
      
      localStorage.setItem('items', JSON.stringify(updatedItems))

      return updatedItems
    })
  }

  function deleteItem(id) {
    setItems(currentItems => {
      const updatedItems = currentItems.filter(item => item.id !== id)
      
      localStorage.setItem('items', JSON.stringify(updatedItems))
      
      return updatedItems
    })
  }

  function toggleItem(id, checked) {
    setItems(currentItems => {
      const updatedItems = currentItems.map(item => {
        if (item.id === id) {
          return {...item, checked, lastChecked: checked && Date.now()}
        }
        return item
      })

      localStorage.setItem('items', JSON.stringify(updatedItems))

      return updatedItems
    })
  }

  return (
    <div id="body-wrapper">
      <main>
        <div className="layout">
          <Header />
          <InputArea onSubmit={addItem} />
          <TaskList items={items} toggleItem={toggleItem} deleteItem={deleteItem} />
        </div>
      </main>
    </div>
  )
}

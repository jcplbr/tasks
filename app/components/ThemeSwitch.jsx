import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { 
  LaptopIcon, 
  SunIcon, 
  MoonIcon 
} from '@radix-ui/react-icons'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className='btn-theme' aria-label='Mode toggle'>
          <SunIcon className='theme-light' />
          <MoonIcon className='theme-dark' />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className='dropdownContent' align='end'>
        <DropdownMenu.Item onClick={() => setTheme('light')} className='dropdownItem'>
          <SunIcon className='theme-menu-item'/>
          <span>Light</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('dark')} className='dropdownItem'>
          <MoonIcon className='theme-menu-item'/>
          <span>Dark</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('system')} className='dropdownItem'>
          <LaptopIcon className='theme-menu-item'/>
          <span>System</span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

export default ThemeSwitch
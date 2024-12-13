import React from 'react'
import useTheme from '../CustomHooks/useTheme'
import "../CSS/toggle.css"

export default function ThemeToggle() {
    const [theme, toggleTheme] = useTheme()
  return (
    <>
    <input type="checkbox" className="theme-checkbox" onChange={toggleTheme}/>
    </>
  )
}

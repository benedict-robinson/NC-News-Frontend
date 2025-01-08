import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

export default function SearchBar() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchTerm, setSearchTerm] = useState("")

    function handleInput(e) {
        setSearchTerm(e.target.value)
    }
    function handleSubmit() {
        setSearchParams(`?search=${searchTerm}`)
    }
    function handleEnterKey(e) {
        if (e.key === "Enter") {
            handleSubmit()
        }
    }
  return (
    <div className="search-bar">
        <input type="text" placeholder="Search..." onChange={handleInput} onKeyDown={handleEnterKey}/>
        <button onClick={handleSubmit}>Go</button>
    </div>
  )
}

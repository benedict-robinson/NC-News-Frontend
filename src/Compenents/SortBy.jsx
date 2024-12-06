import { useSearchParams } from "react-router-dom"
import "../CSS/sortcontrols.css"
import { useEffect, useState } from "react"

export default function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectValue, setSelectValue] = useState(localStorage.getItem("selectValue") ? localStorage.getItem("selectValue") : "")

    function handleChange (event) {
        setSearchParams(event.target.value)
        setSelectValue(event.target.value)
      }
        
    useEffect(() => {
        localStorage.setItem("selectValue", selectValue)
      }, [selectValue])

  return (
    <div className="sort-container">
    <div className="sort-controls">
        <label>Sorted by:&nbsp; </label>
        <select value={selectValue} onChange={handleChange}>
            <option value={""}>Newest</option>
            <option value={"?order=asc"}>Oldest</option>
            <option value={"?sort_by=votes"}>Most Votes</option>
            <option value={"?sort_by=votes&order=asc"}>Least Votes</option>
            <option value={"?sort_by=comment_count&order=desc"}>Most Comments</option>
            <option value={"?sort_by=comment_count"}>Least Comments</option>
        </select>
    </div>
    </div>
  )
}

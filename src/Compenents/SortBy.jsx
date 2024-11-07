import "../CSS/sortcontrols.css"

export default function SortBy({setSortQuery}) {
    function handleChange (event) {
        setSortQuery(event.target.value)
    }
  return (
    <div className="sort-controls">
        <label>Sorted by:&nbsp; </label>
        <select onChange={handleChange}>
            <option value={""}>Newest</option>
            <option value={"?order=asc"}>Oldest</option>
            <option value={"?sort_by=votes"}>Most Votes</option>
            <option value={"?sort_by=votes&order=asc"}>Least Votes</option>
            <option value={"?sort_by=comment_count&order=desc"}>Most Comments</option>
            <option value={"?sort_by=comment_count"}>Least Comments</option>
        </select>
    </div>
  )
}

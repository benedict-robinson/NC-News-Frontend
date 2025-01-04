
export default function Stats({userArticles, articleVotes, userComments, commentVotes}) {
  return (
    <div className="stats">
            <h3>Stats</h3>
            <p id="stat-name">Articles &nbsp; <span id="stat-value">{userArticles.length}</span></p>
            <p id="stat-name">Votes on Articles &nbsp; <span id="stat-value">{articleVotes}</span></p>
            <p id="stat-name">Comments &nbsp; <span id="stat-value">{userComments.length}</span></p>
            <p id="stat-name">Votes on Comments &nbsp; <span id="stat-value">{commentVotes}</span></p>
            <p id="stat-name">Total Votes &nbsp; <span id="stat-value">{commentVotes + articleVotes}</span></p>
          </div>
  )
}

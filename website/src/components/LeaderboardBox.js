import './LeaderboardBox.css'


function LeaderboardBox() {
	return (
		<div className="leaderboard-box">
			<div className="leaderboard-box-header">
				<h3 className="leaderboard-box-title">
					Top Boosted
				</h3>
				<p className="leaderboard-box-trophy">🏆</p>
			</div>

			<div className="leaderboard-box-entry">
				<div className="leaderboard-box-avatar">
					<img src="logo192.png" alt="name"/>
				</div>
				<div className="leaderboard-box-name">Name 1</div>
				<div className="leaderboard-box-score">#</div>
			</div>

			<div className="leaderboard-box-entry">
				<div className="leaderboard-box-avatar">
					<img src="logo192.png" alt="name" />
				</div>
				<div className="leaderboard-box-name">Name 2</div>
				<div className="leaderboard-box-score">#</div>
			</div>

			<div className="leaderboard-box-entry">
				<div className="leaderboard-box-avatar">
					<img src="logo192.png" alt="name" />
				</div>
				<div className="leaderboard-box-name">Name 3</div>
				<div className="leaderboard-box-score">#</div>
			</div>
			

		</div>
	)
}

export default LeaderboardBox
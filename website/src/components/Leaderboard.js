import LeaderboardBox from './LeaderboardBox';

import './Leaderboard.css'

function Leaderboard() {
	return (
		<div id="leaderboard-container">
			<div id="leaderboard-monthly-text">
				Monthly Leaderboard
			</div>
			<div id="leaderboard-entires">
				<LeaderboardBox />
				<div className="divider">temporary</div>
				<LeaderboardBox />
				<div className="divider">temporary</div>
				<LeaderboardBox />
			</div>
		</div>
	)
}

export default Leaderboard
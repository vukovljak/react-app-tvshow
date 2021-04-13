import React, {useState, useEffect} from 'react'
import '../../Results.css'


function Progress({votes}) {
    const [style, setStyle] = useState([]);
	
	useEffect(() => {
		const newStyle = {
			opacity: 1,
			width: `${votes*10}%`
		}
		
		setStyle(newStyle);
	}, []);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
			</div>
		</div>
	)
}

export default Progress

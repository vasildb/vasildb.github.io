import { Link } from "react-router-dom";
import "./style.scss";

function GlitchLogo() {
	return (
		<Link to="/" className="glitch-wrapper">
			<div className="glitch" data-glitch="Vasil Zidrovski">
				Vasil Zidrovski
			</div>
		</Link>
	);
}

export default GlitchLogo;

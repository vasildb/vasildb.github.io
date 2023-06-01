import { Outlet, Link } from "react-router-dom";
import DarkModeToggle from "./components/dark-mode-toggle/DarkModeToggle";
import GlitchLogo from "./components/glitch-logo/GlitchLogo";

function Layout() {
	return (
		<>
			<div className="nav">
				<GlitchLogo />
				<Link to="/contact">Contact</Link>
				<DarkModeToggle />
			</div>
			<div className="content">
				<Outlet />
			</div>
			<div className="footer logos">
				<a href="https://github.com/vasildb" target="_blank" title="Github" aria-label="My Github Profile">
					<div className="github" />
				</a>
				<a href="https://www.linkedin.com/in/vasilz/" target="_blank" title="LinkedIn" aria-label="My LinkedIn Profile">
					<div className="linkedin" />
				</a>
				<a href="https://www.upwork.com/freelancers/vzidrovski" target="_blank" title="Upwork" aria-label="My Upwork Profile">
					<div className="upwork" />
				</a>
				<a href="https://www.zend-zce.com/en/yellow-pages/ZEND022160" target="_blank" title="Zend ZCE" aria-label="My Zend PHP Certification">
					<div className="php" />
				</a>
			</div>
		</>
	);
}

export default Layout;

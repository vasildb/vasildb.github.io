import { useState, Fragment } from "react";

function Contact() {
	const [message, setMessage] = useState("");
	const [email, setEmail] = useState("");
	const [sendMode, setSendMode] = useState("send");
	const [subject, setSubject] = useState("");

	const pickInterest = (interest: string) => {
		let msg = "Hey Vasil, ";
		let sub = "";

		switch (interest) {
			case "full-stack":
				msg += "I need a full-stack dev to cover the back-end and front-end of my business website";
				sub = "I need full-stack dev";
				break;
			case "mvp":
				msg += "I want to create an MVP but I don't know where to start";
				sub = "I need an MVP";
				break;
			case "new-business":
				msg += "I'm starting a new business, and want to utilize the web to help me be more productive";
				sub = "Make a web for my business";
				break;
			case "startup":
				msg += "let's create the new unicorn";
				sub = "Creating a startup";
				break;
			case "beer":
				msg += "I don't have a clear idea, let's talk and see if we can collaborate";
				sub = "Beer?";
				break;
		}

		setMessage(msg + "...");
		setSubject(sub);
	};

	const calcCurl = () => {
		return ["curl --location 'https://vasil.nulius.com/contact' \\ ", "--header 'Content-Type: application/x-www-form-urlencoded' \\ ", "--data-urlencode 'email=" + email + "' \\ ", "--data-urlencode 'message=" + message + "'"];
	};

	const calcHTTP = () => {
		const params = "email=" + encodeURI(email) + "&message=" + encodeURI(message);
		return ["POST /contact HTTP/1.1", "Host: vasil.nulius.com", "Content-Type: application/x-www-form-urlencoded", "Content-Length: " + params.length, "", params];
	};

	return (
		<div className="contact-page">
			<div className="titles">
				I'm always interested in
				<span onClick={() => pickInterest("full-stack")}>Full-Stack Development</span>
				<span onClick={() => pickInterest("startup")}>Startups</span>
				<span onClick={() => pickInterest("mvp")}>Minimum Viable Products</span>
				<span onClick={() => pickInterest("new-business")}>New Businesses</span>
				<span onClick={() => pickInterest("beer")}>A Beer</span>
			</div>
			<div className="text">
				<input type="email" placeholder="Your email address" onChange={(e) => setEmail(e.target.value)} />
				<textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
				<div className="send">
					<button className="btn">Send</button> &nbsp; or{" "}
					<button className="btn link" onClick={() => setSendMode("http")}>
						HTTP
					</button>{" "}
					or{" "}
					<button className="btn link" onClick={() => setSendMode("curl")}>
						cURL
					</button>
					or{" "}
					<a href={"mailto:vasildb@gmail.com?subject=" + encodeURI(subject)} className="btn link">
						email
					</a>
				</div>
			</div>
			{sendMode === "http" && (
				<div className="code">
					{calcHTTP().map((h, i) => (
						<Fragment key={i}>
							{h}
							<br />
						</Fragment>
					))}
				</div>
			)}
			{sendMode === "curl" && (
				<div className="code">
					{calcCurl().map((c, i) => (
						<Fragment key={i}>
							{c}
							<br />
						</Fragment>
					))}
				</div>
			)}
		</div>
	);
}

export default Contact;

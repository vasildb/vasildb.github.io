import { useState } from "react";

function Contact() {
	const [message, setMessage] = useState("");
	const [sendMode, setSendMode] = useState("send");

	const pickInterest = (interest: string) => {
		let msg = "Hey Vasil, ";

		switch (interest) {
			case "full-stack":
				msg += "I need a full-stack dev to cover the back-end and front-end of my business website";
				break;
			case "mvp":
				msg += "I want to create an MVP but I don't know where to start";
				break;
			case "new-business":
				msg += "I'm starting a new business, and want to utilize the web to help me be more productive";
				break;
			case "startup":
				msg += "let's create the new unicorn";
				break;
			case "beer":
				msg += "I don't have a clear idea, let's talk and see if we can collaborate";
				break;
		}

		setMessage(msg + "...");
	};

	return (
		<div className="contact-page">
			<div className="titles">
				I'm always interested in
				<span onClick={() => pickInterest("full-stack")}>Full-Stack Development</span>
				<span onClick={() => pickInterest("mvp")}>Minimum Viable Products</span>
				<span onClick={() => pickInterest("new-business")}>New Businesses</span>
				<span onClick={() => pickInterest("startup")}>Startups</span>
				<span onClick={() => pickInterest("beer")}>A Beer</span>
			</div>
			<div className="text">
				<textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
			</div>
			<div className="send">
				<button className="btn">Send</button> or{" "}
				<button className="btn link" onClick={() => setSendMode("http")}>
					HTTP
				</button>{" "}
				or{" "}
				<button className="btn link" onClick={() => setSendMode("curl")}>
					cURL
				</button>
			</div>
			{sendMode === "http" && <div className="code">HTTP POST https://www.google.com/...</div>}
			{sendMode === "curl" && <div className="code">curl https://www.google.com/...</div>}
		</div>
	);
}

export default Contact;

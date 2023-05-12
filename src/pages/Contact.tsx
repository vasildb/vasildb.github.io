import { useState, Fragment, useCallback, useEffect, useRef } from "react";

interface UserMessage {
	success: boolean;
	message: string;
}

interface ValidationErrors {
	email?: string;
	message?: string;
}

interface ContactObject {
	email: string;
	message: String;
}

const contactHost = "vasil.nulius.com";

const contact = async (obj: ContactObject) => {
	const formBody = Object.entries(obj)
		.map(([key, value]) => encodeURIComponent(key) + "=" + encodeURIComponent(value))
		.join("&");

	const response = await fetch("https://" + contactHost + "/contact", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: formBody,
	});
	const data = await response.json();

	return data;
};

function Contact() {
	const [message, setMessage] = useState("");
	const [email, setEmail] = useState("");
	const [sendMode, setSendMode] = useState("send");
	const [subject, setSubject] = useState("");
	const [isSending, setIsSending] = useState(false);
	const [userMessage, setUserMessage] = useState<UserMessage | null>(null);
	const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
	const mounted = useRef(false);

	useEffect(() => {
		mounted.current = true;
		return () => {
			mounted.current = false;
		};
	}, []);

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
			case "web3":
				msg += "I need a smart contract implemented";
				sub = "Crypto stuff";
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
		return ["curl --location https://" + contactHost + "'/contact' \\ ", "--header 'Content-Type: application/x-www-form-urlencoded' \\ ", "--data-urlencode 'email=" + email + "' \\ ", "--data-urlencode 'message=" + message + "'"];
	};

	const calcHTTP = () => {
		const params = "email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message);
		return ["POST /contact HTTP/1.1", "Host: " + contactHost, "Content-Type: application/x-www-form-urlencoded", "Content-Length: " + params.length, "", params];
	};

	const send = useCallback(async () => {
		if (isSending) return;
		setIsSending(true);
		try {
			const obj: ContactObject = { email, message };
			const data = await contact(obj);
			if (!mounted.current) return;
			if (data.message) {
				setUserMessage({ success: data.success, message: data.message });
				if (data.success) {
					setMessage("");
					setEmail("");
				}
			}
			if (data.errors) {
				setValidationErrors(data.errors);
			}
		} catch (e) {
			if (!mounted.current) return;
			setUserMessage({ success: false, message: "Error processing the request." });
		} finally {
			if (!mounted.current) return;
			setIsSending(false);
		}
	}, [isSending, email, message]);

	return (
		<div className="contact-page">
			<div className="titles">
				I'm always interested in
				<span onClick={() => pickInterest("full-stack")}>Full-Stack Development</span>
				<span onClick={() => pickInterest("startup")}>Startups</span>
				<span onClick={() => pickInterest("mvp")}>Minimum Viable Products</span>
				<span onClick={() => pickInterest("web3")}>Web3</span>
				<span onClick={() => pickInterest("new-business")}>New Businesses</span>
				<span onClick={() => pickInterest("beer")}>A Beer</span>
			</div>
			<div className="text">
				<div>
					{userMessage && <div className={"user-message" + (userMessage.success ? " success" : " error")}>{userMessage.message}</div>}
					<input type="email" placeholder="Your email address" onChange={(e) => setEmail(e.target.value)} value={email} />
					{validationErrors.email && <div className="validation-error">{validationErrors.email}</div>}
					<textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
					{validationErrors.message && <div className="validation-error">{validationErrors.message}</div>}
					<div className="send">
						<button className="btn" onClick={send} disabled={isSending}>
							Send
						</button>{" "}
						&nbsp; or{" "}
						<button className="btn link" onClick={() => setSendMode("http")}>
							HTTP
						</button>{" "}
						or{" "}
						<button className="btn link" onClick={() => setSendMode("curl")}>
							cURL
						</button>
						or{" "}
						<a href={"mailto:vasildb+contact@gmail.com?subject=" + encodeURI(subject)} className="btn link">
							email
						</a>
					</div>
				</div>{" "}
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

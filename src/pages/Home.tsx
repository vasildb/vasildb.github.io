function Home() {
	return (
		<div className="homepage">
			<div className="bio">
				<div className="info">
					I've been building stuff for the web since 2007, for clients spanning from early-stage startups, to medium-sized companies and governments, from scripts built just for fun, with myself being the only user, to platforms
					used by millions.
					<br />
					<br />I can help you build beautiful things, and come up with great solutions to your business problems and ideas, no matter the complexity.
					<br />
					<br />
					Sometimes I{" "}
					<a href="https://www.nulius.com/blog/the-art-of-writing-a-project-proposal" target="_blank">
						write
					</a>
					,{" "}
					<a href="https://www.facebook.com/events/772693189913606?ref=newsfeed" target="_blank">
						speak
					</a>{" "}
					at{" "}
					<a href="https://www.facebook.com/predaplus.eu/posts/pfbid02HtKzuRjBuYEv2us6a4MfUKRAtUggpgtgsGvq4nBWF4SoG4mjsKEkK8qRTxbLcnDKl" target="_blank">
						public events
					</a>
					, and sometimes others{" "}
					<a href="https://relaxirano.mk/News/5131/intervju-so-vasil-zidrovski-inovator-i-mlad-chovek-so-interesn-pogled-na-svetot" target="_blank">
						say
					</a>{" "}
					something about me. In between all this, I swim, bike, and{" "}
					<a href="https://utmb.world/en/runner/4221680.vasil.zidrovski" target="_blank">
						run
					</a>
					. <br />
				</div>
			</div>
			<div className="projects">
				<div>
					<div className="title">
						CTO -
						<a href="https://contentmutual.com" target="_blank">
							ContentMutual.com
						</a>
						<span>Dec 2014 - Nov 2022</span>
					</div>
					<ul>
						<li>Created the architecture of the platform with scaling in mind.</li>
						<li>Setup the platform completely to Amazon Web Services, and led a small team.</li>
						<li>Implemented NFT minting for authors, wrote a smart contract for escrow payments and integrated it seamlessly on the frontend.</li>
					</ul>
					<div className="technologies">
						<span>Laravel</span>
						<span>React</span>
						<span>Nginx</span>
						<span>Linux Servers</span>
						<span>Web Sockets</span>
						<span>ethers.js</span>
						<span>Cypress</span>
						<span>Hardhat</span>
						<span>Solidity</span>
					</div>
				</div>
				<div>
					<div className="title">
						Software Engineer -
						<a href="https://staffconnect-app.com" target="_blank">
							StaffConnect.net
						</a>
						<span>May 2019 - Nov 2021</span>
					</div>
					<ul>
						<li>Worked on building a whole new multi server architecture for the backend while serving 500k users worldwide.</li>
						<li>Included in every aspect of the platform - frontend, backend, web sockets, queues, mail servers, implementing new features and improving current ones.</li>
						<li>Built a few smaller projects using many experimental technologies.</li>
					</ul>
					<div className="technologies">
						<span>Laravel</span>
						<span>Nginx</span>
						<span>Angular</span>
						<span>fabric.js</span>
						<span>Caddy Server</span>
					</div>
				</div>
				<div>
					<div className="title">
						CEO -
						<a href="https://nulius.com" target="_blank">
							Nulius.com
						</a>
						<span>Jun 2018 - Apr 2019</span>
					</div>
					<ul>
						<li>Leading a team of developers and a designer, creating the high level design and coding standards.</li>
						<li>Focused on user acquisition and improving the platform as well.</li>
						<li>Speaking at local IT and motivational events to engage the community and promote the product.</li>
					</ul>
					<div className="technologies">
						<span>Laravel</span>
						<span>React</span>
						<span>AWS</span>
						<span>MySQL</span>
						<span>Web Sockets</span>
					</div>
				</div>
				<div>
					<div className="title">
						Team Lead -
						<a href="https://www.grabit.io/" target="_blank">
							GrabIT.mk
						</a>
						<span>Apr 2011 - Nov 2013</span>
					</div>
					<ul>
						<li>Started as a web developer, working on e-Commerce and auction web platforms.</li>
						<li>Led a small team working on a pricewatch engine, created the architecture of the platform, developed parsers, and duplicate detection algorithms.</li>
						<li>Involved in project time estimations and organizing the teams for better performance.</li>
					</ul>
					<div className="technologies">
						<span>PHP</span>
						<span>Kohana</span>
						<span>Apache</span>
						<span>jQuery</span>
						<span>Linux</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;

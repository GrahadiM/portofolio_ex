"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							Rapid technological developments have changed the way the world works. User behavior and media consumption have changed in different directions due to the rapid development of the internet world.
						</p>
						<p className="my-3.5">
							Ability Pictures is here to help corporations and MSMEs with their visual production needs such as quality product photos, product videos and company profiles.
						</p>
						<p className="my-3.5">
							Ability Pictures is a Production House that operates in the field of Creative Visuals. Digital Commercial is our main focus, supported by professional equipment and teams.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}

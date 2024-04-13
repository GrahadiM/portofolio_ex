const author        = `${process.env.NEXT_PUBLIC_SANITY_AUTHOR}`;
const company 		= `${process.env.NEXT_PUBLIC_SANITY_COMPANY}`;
const url           = `${process.env.NEXT_PUBLIC_SANITY_URL}`;
const description   = "Ability Pictures merupakan Production House yang bergerak dibidang Visual Kreatif. Digital Commercial menjadi fokus utama kami dengan didukung equipment dan tim yang professional.";

export const AppMetadata = {
	metadataBase: new URL(url),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Abdurrahman GM",
		"Portfolio Website",
		"Portfolio Developer",
		"Frontend Developer Portfolio",
		"Backend Developer Portfolio",
		"Fullstack Developer Portfolio",
        "Ability Pictures",
        "Brand Creation and Publishing Services",
        "Brand Publishing",
        "Content Creation Partners",
        "Company Branding",
        "Company Profile Branding",
        "Entertainment Production ",
        "Fotografi",
        "Jasa Branding",
        "Jasa Branding UMKM",
        "Jasa Foto UMKM",
        "Jasa Video UMKM",
        "Photography",
        "Photography Products",
        "Photography Services",
        "Videografi",
        "Videography",
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: `${url}/screenshot.webp`,
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: `${url}/screenshot.webp`,
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};

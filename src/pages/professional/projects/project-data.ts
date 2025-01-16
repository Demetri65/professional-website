import { ProjectTimelineProps } from "../../../components/timeline";

export const labelMap = {
    conceptual: "Conceptual",
    discovery: "Discovery",
    planning: "Planning",
    "in-progress": "In Progress",
    completed: "Completed"
}

export const PROJECTS: ProjectTimelineProps[] = [
    {
        title: "Personal Website",
        status: "in-progress",
        description: "A public space to host projects and information about me. This will sevre as a hub for research and projects. As this website evolves it will reflect learnings from graduate studies.",
        timeline:
            [
                {
                    task: "Set Up",
                    description: ["This includes hosting service, acquiring domain, and setting up React application with Typescript"],
                    completed: true,
                    date: "Sept 2024"
                },
                {
                    task: "Page Population",
                    description: [
                        "The initial website is going to use Material UI Design Library",
                        "In the future this website will adopt my personal Design System WAI-React"],
                    completed: true,
                    date: "Jan 2025"
                },
                {
                    task: "Update Styles",
                    description: [
                        "Get rid of this horrendous typeface",
                        "To replace typeface with Geist and Geist Mono for subtitles"],
                    completed: false,
                    date: "Jan 2025"
                },
                {
                    task: "Update Components",
                    description: [
                        "This will update the components that rely on Material UI to instead use WAI-React",
                        "This will be an incremental process that requires months of research to ensure accessible design patterns"],
                    completed: false,
                    date: "May 2025"
                },
                {
                    task: "Website Architecture",
                    description: [
                        "Set up website architecture to support university projects, goals, research, and case studies",
                        "This will serve as a living breathing document where acedemics, professionals, and enthusiasts may interact with such projects "],
                    completed: false,
                    date: "Aug 2025"
                },
            ],
    },
    {
        title: "WAI-React",
        description: "A fully accessible Design System component library at the WAI-ARIA specification.",
        status: "planning",
        timeline:
            [
                {
                    task: "Repository Creation",
                    description: ["This includes hosting service, acquiring domain, and setting up React application with Typescript"],
                    completed: true,
                    date: "Oct 2024"
                },
                {
                    task: "Register Packages",
                    description: [
                        "Register WAI-React as NPM organization.", 
                        "Publish workspaces:", 
                        "@wai-react/patterns", 
                        "@wai-react/components", 
                        "@wai-react/hooks",
                        "Website:", 
                        "www.npmjs.com/package/wai-react"
                    ],
                    completed: true,
                    date: "Nov 2024"
                },
                {
                    task: "Component Roadmap",
                    description: ["Come up with minimum viable product neccessary to replace personal website"],
                    completed: false,
                    date: "Feb 2025"
                },
                {
                    task: "AI Integration",
                    description: ["Come up with potential integrations that can be used within the component library", ""],
                    completed: false,
                    date: "May 2025"
                }
            ],
    },
    {
        title: "Career Builder",
        description: "A LLM that helps students to pick personalized studies and activities to reach identified career goals.",
        status: "conceptual",
        timeline:
            [
                {
                    task: "Research",
                    description: ["Find out neccessary constraints and ways to display the actionable timelines that students can complete"],
                    completed: false,
                    date: "Oct 2024"
                },
            ],
    }
];
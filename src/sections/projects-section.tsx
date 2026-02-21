import Section from "../components/section";

export default function ProjectsSection() {
    const projects = [
        {
            title: "Live Chat Application",
            description: "A Flask application with live chat functionality ",
            link: "https://github.com/Harsh7-dit/Live_Chat_Application_2_Tier_Over_Kubernetes_Cluster_GCP",
            image: "assets/Live_Chat.png",
        },
        {
            title: "Self-Healing Backup Monitoring System",
            description: "Automatically detects and resolves backup failures using a self-healing mechanism.",
            link: "https://github.com/Harsh7-dit/Self-Healing_MongoDB_Backup_Monitor",
            image: "assets/self_heal.png",
        },
    ];

    return (
        <Section title="Projects">
            <div className="flex flex-wrap justify-center items-center gap-4 mr-auto">
            {projects.map((project) => (
                <a
                    key={project.title}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:-translate-y-0.5 transition duration-300 max-w-75 border border-gray-200 rounded-xl block cursor-pointer"
                >
                    <img
                    className="rounded-t-xl h-42 object-cover"
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={170}
                    />
                    <div className="p-4">
                    <h3 className="text-base font-medium">
                        {project.title}
                    </h3>
                    <p className="text-gray-500 mt-1">
                        {project.description}
                    </p>
                    </div>
                </a>
                ))}
            </div>
        </Section>
    );
}
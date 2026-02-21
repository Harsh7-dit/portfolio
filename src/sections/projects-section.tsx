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
            description: "Detects and resolves backup failures",
            link: "https://github.com/Harsh7-dit/Self-Healing_MongoDB_Backup_Monitor",
            image: "assets/self_heal.png",
        },
    ];

    return (
        <Section title="Projects">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project) => (
            <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 overflow-hidden"
            >
                <img
                className="w-full h-48 object-cover"
                src={project.image}
                alt={project.title}
                />
                
                <div className="p-4 flex flex-col h-40 justify-between">
                <h3 className="text-lg font-semibold">
                    {project.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                    {project.description}
                </p>
                </div>
            </a>
            ))}
            </div>
        </Section>
    );
}
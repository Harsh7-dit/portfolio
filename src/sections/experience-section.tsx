import Section from "../components/section";

export default function ExperienceSection() {
    const experience = [
           {
            image: "assets/bing.png",
            title: "Innovation Lab Student Assistant",
            company: "Binghamton University",
            location: "Binghamton, NY",
            start: "Aug 2025",
            end: "Present",
            description: [
                "Assisting 50+ students and instructors to manage the innovation lab space with technology.", 
                "Managing windows, apple operating systems and online conferencing software tools.",        
            ],
        },
        {
            image: "assets/interlinked.png",
            title: "Cloud/Infrastructure Intern",
            company: "Interlinked",
            location: "Berkeley, CA",
            start: "July 2025",
            end: "Dec 2025",
            description: [
                "Architected and scaled AWS cloud infrastructure across 3+ environments, achieving system reliability through automated mechanis-ms and monitoring.", 
                "Collaborated with backend, infrastructure, and data team to support AI-driven applications used by public agencies.", 
                "Implemented automated validation scripts for infrastructure components, catching 95% of configuration drift before production deployment.", 
            ],
        },
        {
            image: "assets/edel.png",
            title: "DevOps Engineer",
            company: "Edelweiss Global Markets",
            location: "Mumbai, India",
            start: " June 2022",
            end: "Aug 2024",
            description: [
                "Automated 20+ CI/CD pipelines using Jenkins, Python, Bash, and Groovy eliminating 80% of manual deployment errors and accelerating release cycles from 6 hours to under 2 minutes.", 
                "Engineered Groovy-based Jenkins pipeline that automated build, test, tag, and deployment across Dev/QA/Prod environments boosting developer productivity by 90% and reducing time-to-market by quick release.",
                "Optimized Linux system performance by developing automated cleanup scripts that reclaimed 0.5TB storage and reduced CPU overhead by 22%, extending server lifespan.",
                "Enforced security compliance across Bitbucket, SVN, and Nexus repositories established IAM policies and access controls achieving 100% audit compliance with zero security incidents.", 
                "Validated platform stability through load testing and performance benchmarking, identifying and resolving 15+ critical bottlenecks before production deployment.",
            ],
        },
    ];

    return (
        <Section title="Experience">
            <div className="space-y-6">
                {experience.map((experience) => (
                    <div key={experience.title} className="w-full border border-gray-200 p-6 rounded-xl">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <img
                                        src={experience.image}
                                        alt={experience.title}
                                        width={25}
                                        height={25}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium text-gray-800">
                                        {experience.title}
                                    </h3>
                                    <div>{experience.company}</div>
                                </div>
                            </div>
                            <div>{experience.start} - {experience.end}</div>
                        </div>
                        <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
                            {experience.description.map((description) => (
                                <li key={description}>{description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
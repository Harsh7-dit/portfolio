import Section from "../components/section";

export default function SkillsSection() {
    const skills = [
        "Python",
        "Java",
        "shell/Bash scripting",
        "Groovy",
        "SQL",
        "Linux",
        "MongoDB",
        "Git",
        "Jenkins",
        "Docker",
        "Kubernetes",
        "Ansible",
        "Terraform",
        "AWS",
        "Azure",
        "GCP",
        "CI/CD",
        "BitBucket",
        "Jira",
        "SVN",
    ];

    return (
        <Section title="Skills">
            <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                    <p key={skill} className="border cursor-default border-gray-300 hover:bg-gray-100/70 text-gray-600 text-[13px] rounded-full px-5 py-1.5">
                        {skill}
                    </p>
                ))}
            </div>
        </Section>
    );
}
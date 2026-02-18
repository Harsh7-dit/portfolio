import Section from "../components/section";

export default function AboutSection() {
    return (
        <Section title="About">
            <div className="text-sm/6.5">
                <p>
                    I'm Harsh Masane, a DevOps Engineer and Cloud Enthusiast passionate on automating CI/CD pipelines, improving infrastructure reliability, and optimizing system performance, database and storage optimization. My experience intersect with automation,  containerization, orchestration , infrastructure as code with monitoring and observability.
                </p>
                <p className="mt-5">
                    I love solving issues - especially at the system level and then automating the solution so it never happens again. It’s deeply satisfying to make a service faster, safer, and more reliable not just once, but permanently.
                </p>
            </div>
        </Section>
    );
}
import type { WorkExperience } from "@/domain/work-experience";

export const workExperiences: WorkExperience[] = [
    {
        company: "PT. Digdaya Olah Teknologi Indonesia",
        position: "Frontend Engineer",
        type: "remote",
        time: "internship",
        period: [new Date(2024, 10), new Date(2025, 5)],
        details: [
            "Ensured frontend code adhered to company coding standards and best practices.",
            "Resolved document download issues in the All Reporting Document module within SAP OTC.",
            "Fixed minor and major bugs in the PAMA Tax System website to improve system reliability.",
            "Applied Agile methodologies to streamline development workflows and enhance team collaboration.",
            "Collaborated with cross-functional teams to deliver scalable, high-quality solutions."
        ],
        technologies: [
            "typescript",
            "ant design",
            "next js",
            "dotnet"
        ],
    },
    {
        company: "PT. Olahkarsa Inovasi Indonesia",
        position: "Fullstack Developer",
        type: "remote",
        time: "freelance",
        period: [new Date(2024, 2), new Date(2024, 9)],
        details: [
            "Built IPSPI talent search platform with Laravel, Tailwind CSS, and jQuery, enabling nationwide search and filtering of verified social workers.",
            "Developed an Open Journal System (OJS) with Spring Boot and Next.js to manage books, articles, journals, and issues, including submission, review, and journal publishing workflows.",
            "Developed Olahkarsa corporate website using Laravel, Bootstrap, Livewire, and jQuery, with improvements to UI consistency, navigation flow, and optimized event certificate generation process."
        ],
        technologies: [
            "postgresql",
            "jquery",
            "bootstrap",
            "livewire",
            "laravel",
            "tailwind",
            "typescript",
            "ant design",
            "springboot",
            "next js"
        ],
    },
    {
        company: "Nexteam Teknologi Indonesia",
        position: "Fullstack Developer",
        type: "remote",
        time: "internship",
        period: [new Date(2024, 5), new Date(2024, 8)],
        details: [
            "Ensured application code complied with company standards and maintained high readability.",
            "Implemented the Repository Pattern to manage parking resources, improving maintainability and scalability.",
            "Collaborated with the development team to deliver stable and efficient features."
        ],
        technologies: [
            "jquery",
            "bootstrap",
            "laravel"
        ],
    },
    {
        company: "PT. Metrotech Digital Asia",
        position: "Laravel Developer",
        type: "remote",
        time: "freelance",
        period: [new Date(2023, 2), new Date(2024, 0)],
        details: [
            "Developed the Perumda Makassar Raya operational activity management system using Laravel, Bootstrap, and jQuery.",
            "Implemented the Repository Pattern for parking resource management, enhancing system efficiency and scalability.",
            "Worked closely with the team to deliver functional and user-friendly solutions."
        ],
        technologies: [
            "laravel",
            "bootstrap",
            "jquery",
            "mysql"
        ],
    },
    {
        company: "PT. Metrotech Digital Asia",
        position: "Backend Developer",
        type: "remote",
        time: "freelance",
        period: [new Date(2023, 0), new Date(2023, 2)],
        details: [
            "Developed REST APIs using Node.js and TypeScript for document search applications integrated with blockchain technology.",
            "Built backend APIs for digital land certificate applications leveraging blockchain for security and transparency.",
            "Resolved blockchain-related issues to ensure smooth application operations.",
            "Maintained code quality and adherence to company development standards.",
            "Collaborated in a team environment to deliver robust and secure backend services."
        ],
        technologies: [
            "express js",
            "prisma",
            "node js",
            "typescript",
            "symbol blockchain",
            "mysql"
        ],
    },
    {
        company: "PT. Gema Solusindo Utama",
        position: "Software Engineer",
        type: "onsite",
        time: "internship",
        period: [new Date(2018, 11), new Date(2019, 2)],
        details: [
            "Integrated attendance applications with fingerprint devices for multiple departments in the city of Jember."
        ],
        technologies: [
            "laravel"
        ],
    },
];

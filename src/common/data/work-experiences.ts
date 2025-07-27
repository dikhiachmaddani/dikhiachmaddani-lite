import type { WorkExperience } from "@/domain/work-experience";

export const workExperiences: WorkExperience[] = [
    {
        company: "PT. Digdaya Olah Teknologi Indonesia",
        position: "Frontend Engineer",
        type: "remote",
        time: "internship",
        period: [new Date(2024, 10), new Date(2025, 5)],
        details: [
            "Participate in the creation of the PAMA Tax System website using Nextjs and Ant Design both in fixing bugs, adding features to ensurethe code is in accordance with company standards.",
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
            "Participated in creating the IPSPI website to search for social worker talents throughout Indonesia using laravel, tailwind and jquery.",
            "Participated in creating the Olahkarsa website using Laravel, Bootstrap, Liveware and JQuery.",
            "Participated in the creation of Open Journal System using springboot and nextjs.",
        ],
        technologies: [
            "typescript",
            "next js",
            "springboot",
            "postgresql",
            "tailwind",
            "ant design",
            "jquery",
            "bootstrap",
            "livewire",
            "laravel"
        ],
    },
    {
        company: "Nexteam Teknologi Indonesia",
        position: "Fullstack Developer",
        type: "remote",
        time: "internship",
        period: [new Date(2024, 5), new Date(2024, 8)],
        details: [
            "Participated in working on the Perumda Makassar Raya website project for the operational activity management system in Perumda Makassar.",
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
            "Developed a comprehensive parking management system for over 50 locations, including features like attendance tracking, mailing, field operations, and deposit monitoring.",
            "Implemented the Repository Pattern to manage parking resources, improving system efficiency and scalability."
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
            "Participate to create an API using node typescript for document search applications with blockchain technology.",
            "Participate to create API using node typescript for digital land certificate application with blockchain technology.",
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
            "Participated in the integration of attendance applications with fingerprint devices in each department in the city of Jember."
        ],
        technologies: [
            "laravel"
        ],
    },
];
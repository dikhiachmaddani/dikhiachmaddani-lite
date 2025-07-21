export type WorkExperience = {
    company: String,
    position: String,
    type: String,
    time: String,
    period: [Date, Date | null],
    details: String[],
    technologies: String[],
};
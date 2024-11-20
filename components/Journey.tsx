import React from "react";

const JourneyTimeline = () => {
  const events = [
    {
      date: "After 12th Grade",
      description: `I wanted to pursue a career in computer science, but due to personal medical issues, I missed the application deadline. As a result, I chose to study B.Com. During the COVID-19 pandemic in 2020, I decided to become a CA (Chartered Accountant) and joined A.C. Kathiriya (CA office) in November 2020. For two years, I focused on CA, but eventually realized that I wanted to create software related to accounting.`,
    },
    {
      date: "Early 2023",
      description: `I left CA, spent two months visiting IT companies, conducted thorough research on CA-related software and technology, and studied programming languages and development frameworks. I ultimately decided to start my journey in IT.`,
    },
    {
      date: "July 2023 - November 2023",
      description: `I began a full-stack developer internship at Anv Tech, a company focused on trading. After completing my internship, I joined JBS Technology, working on trading, financial, educational, and banking management software. Unfortunately, financial losses forced the company to disband the developer team in July 2024.`,
    },
    {
      date: "July 2024 - Present",
      description: `I joined Editsh Technology as a full-stack developer, taking on both trainee and developer responsibilities. I’m working on hospital CRM panels and banking CRM panels, continuously improving my skills and exploring new technologies.`,
    },
  ];

  return (
    <div className="mt-4">
      <hr />
      <h2 className="my-4 text-lg font-medium">Journey</h2>
      <div className="p-6 dark">
        <div className="relative border-l-2 border-[#e1e1e1]">
          {events.map((event, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute w-4 h-4 border-2 border-white rounded-full bg-[#e1e1e1] -left-2 dark:border-gray-900"></div>
              <p className="text-sm font-semibold">
                {event.date}
              </p>
              <p className="mt-2 text-xs tracking-wider">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;

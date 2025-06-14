import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private hardcodedUsers = [
    {
      name: 'Saad', 
      username: 'saad',
      email: "xdsaad5@gmail.com",
      // github: "https://github.com/Xdsaad5",
      mobile: "+92 300 8101304",
      location: "Lahore Pakistan",
      presentation: [
        { field: 'ImageURL', value: 'assets/img/saad.jpeg' },
        { field: 'Name', value: 'Muhammad Saad Sultan' },
        { field: 'Profession', value: `Software Developer - Bachelor of Science in Software Engineering` },
        { field: 'Presentation', value: "A highly experienced Software Developer with a proven track record in developing and delivering robust, scalable solutions. Proficient in a frontend technologies, including Angular, as well as backend frameworks such as Node.js, .NET, Python, Node, Express . Passionate about utilizing cutting-edge tools to solve complex problems and drive innovation, with expertise in full-stack development and a solid foundation in mechanical engineering." }
      ],
      templateSettings: [
        { field: 'BackgroundURL', value: 'https://img.freepik.com/free-vector/abstract-background-with-minimalist-design_1048-13338.jpg' }
      ],
      workExperiences: [[
        { field: 'CompanyLogoUrl', value: 'assets/icons/ebryx.jpeg' },
        { field: 'CompanyName', value: 'Ebryx Pvt Limited' },
        { field: 'Period', value: 'Dec 2024 - Present' },
        { field: 'Position', value: 'Software Engineer' },
        { field: 'Achievements', value: 'Bug Fixes & Maintenance: Continuously working on identifying and resolving bugs in the project to ensure smooth functionality and optimal performance. Feature Implementation: Implementing new features based on evolving requirements, enhancing the overall functionality and user experience.Shell Scripting: Writing and maintaining shell scripts for automating repetitive tasks, improving deployment processes, and streamlining the workflow.Documentation: Updating and maintaining clear, concise documentation for developers and end-users, covering setup instructions, API details, and troubleshooting guides.Technology Stack: The project is built using Node.js and Express for the backend, Docker for containerization, MySQL for database management, and Angular for the frontend.Collaboration: Working closely with cross-functional teams to ensure smooth integration of new features, bug fixes, and seamless communication between the backend and frontend' }
      ],
      [
        { field: 'CompanyLogoUrl', value: 'assets/icons/devsinc.png' },
        { field: 'CompanyName', value: 'Devsinc' },
        { field: 'Period', value: 'May 2024 - Nov 2024' },
        { field: 'Position', value: 'Associate Software Engineer' },
        { field: 'Achievements', value: 'Developed and maintained web applications using ASP DOTNET, actively participating in the entire Software Development Life Cycle (SDLC), from Analysis and Design to Implementation, Testing, and Maintenance.Responsible for bug fixes and implementing new features.Scheduled AWS Lambda functions and implemented cron job schedules.Conducted load testing on Lambda functions to ensure performance and reliability.Collaborated with a team of developers and used Git/GitHub for version control.Ensured high performance and code reusability.Applied the Single Responsibility Principle to enhance code quality.Prepared test cases and conducted unit testing.Wrote SQL migrations for DOTNET production web applications to ensure seamless cross-platform functionality.Resolved production issues using debugging and problem-solving skills.Worked with Microsoft Azure SQL Database.Addressed support issues as they arose, solving them in both the database and code.Used Microsoft Azure ETL services for data engineering.Demonstrated proficiency in C#, VB DOTNET, ASP DOTNET, ASPDOTNET Windows Forms, DOTNET Framework, DOTNET Core, Object-Oriented Programming (OOP), Stored Procedures, Views, Database Optimization, and Microsoft Azure' }
      ],
      [
        { field: 'CompanyLogoUrl', value: 'https://www.kics.edu.pk/images/lab_logos/iril.png' },
        { field: 'CompanyName', value: 'UET Research Lab' },
        { field: 'Period', value: 'Sep 2023 - Feb 2024' },
        { field: 'Position', value: 'Python Backend Internee' },
        { field: 'Achievements', value: 'Worked extensively in Python, with a focus on Flask and Restful APIs. Conducted unit testing to ensure the robustness and reliability of the codebase.Completed networking tasks and web scraping projects, efficiently navigating and extracting data from static web pages using BeautifulSoup and employing XPath for precise data gathering in dynamic, JavaScript-rendered content. Utilized expertise in Python, Flask, RESTful APIs, and web scraping for effective data extraction across diverse sources. Utilized skills in Python, Flask, Restful APIs and Sacraping' }
      ],
      [
        { field: 'CompanyLogoUrl', value: 'assets/img/freelance.png' },
        { field: 'CompanyName', value: 'Freelance' },
        { field: 'Period', value: 'Jan 2022 - Present' },
        { field: 'Position', value: 'Other' },
        { field: 'Achievements', value: 'Managed multiple freelance projects simultaneously, ensuring all deadlines were met and clients expectations were exceeded.Developed and maintained websites using .Net adhering to modern design principles and responsive web practices. Collaborated with designers, content creators, and clients to translate project requirements into technical specifications and deliverables. Managed project budgets effectively, minimizing costs while delivering high-quality results. Stayed updated on industry trends and best practices through continuous learning.Utilized skills in C++, C#, Python, Javascript, Dotnet, SQL, Dotnet Mvc framework, Dotnet Core, APIs, unit testing, websockets and SignalR' }
      ],
      ],
      academicExperiences: [
        [
          { field: 'InstitutionLogoUrl', value: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBIynYzvGePN6DiOzFby-tUO-dZud0fbFC6w&s' },
          { field: 'InstitutionName', value: 'Punjab University Collge of Information Technology' },
          { field: 'Period', value: 'Nov 2020 - Jun 2024' },
          { field: 'DegreeAcquired', value: 'BS in Software Engineering' },
          { field: 'Achievements', value: 'CGPA: 356.Awarded with scholorship due to academic excellence.Runner-up in coding competitions' }

        ],
        [
          { field: 'InstitutionLogoUrl', value: 'https://seekvectors.com/files/download/4a1d8516570931f82cf62bb570d785e7.jpg' },
          { field: 'InstitutionName', value: 'Punjab Group of Colleges' },
          { field: 'Period', value: 'Sep 2018 - Aug 2020' },
          { field: 'DegreeAcquired', value: 'FSc Pre-Engineering' },
          { field: 'Achievements', value: 'Marks: 945/1100.Grades: A+. Got scholorship due to academic excellance' }
        ],
        [
          { field: 'InstitutionLogoUrl', value: 'https://gcmslowermall.edu.pk/images/logo2.jpg' },
          { field: 'InstitutionName', value: 'Central Model School Lower Mall' },
          { field: 'Period', value: 'March 2016 - Jun 2018' },
          { field: 'DegreeAcquired', value: 'Secondary School Certificate' },
          { field: 'Achievements', value: 'Marks: 1041/1100.Grades: A+. Got scholorship due to academic excellance' }
        ]
      ],
      skills: [
        {
          name: "Frontend", type: 'score', content: [
            { name: "HTML", score: 95 },
            { name: "CSS", score: 95 },
            { name: "JavaScript", score: 90 },
            { name: "TypeScript", score: 90 },
            { name: "Angular", score: 40 },
            { name: "AngularJS", score: 40 },
          ]
        },
        {
          name: "Backend", type: 'score', content: [
            { name: "C++", score: 85},
            { name: "C", score: 60},
            { name: "C#", score: 75},
            { name: ".Net", score: 80 },
            { name: ".Net-MVC", score: 80 },
            { name: "ADO .NET", score: 80 },
            { name: "LINQ Query", score: 40 },
            { name: "DB First Approach", score: 80 },
            { name: "Code First Approach", score: 80 },
            { name: "ORM", score: 80 },
            { name: "NodeJS", score: 80 },
            { name: "ExpressJS", score: 80 },
            { name: "PHP", score: 60 },
            { name: "MySQL", score: 80 },
            { name: "Firebase", score: 50 },
            { name: "Mongo", score: 65 },
            { name: "Docker", score: 60 }
          ]
        },
        {
          name: "IDE's & Development Tools", type: 'image', content: [
            { name: "GIT", logoUrl: 'assets/icons/git.svg' },
            { name: "SolidWorks", logoUrl: 'assets/icons/sw.svg' },
            { name: "IntelliJ", logoUrl: 'assets/icons/intellij.svg' },
            { name: "VSCode", logoUrl: 'assets/icons/vscode.svg' },
            { name: "Autodesk", logoUrl: 'assets/icons/inventor.svg' },
            { name: "Photoshop", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
            { name: "Figma", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
            { name: "JIRA", logoUrl: 'assets/icons/jira.svg' },
            { name: "Proteus", logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Proteus_Design_Suite_Atom_Logo.png/172px-Proteus_Design_Suite_Atom_Logo.png' },
            { name: "Arduino", logoUrl: 'assets/icons/arduino.svg' },
            { name: "Raspberry", logoUrl: 'assets/icons/raspberry.png' },
            { name: "Blender", logoUrl: 'assets/icons/blender.svg' },
            { name: "Docker", logoUrl: 'https://avatars.githubusercontent.com/u/5429470?s=200&v=4'},
            { name: "Ruby on Rails", logoUrl: 'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png'},
            { name: "CKEditor", logoUrl: 'https://cdn.worldvectorlogo.com/logos/ckeditor-2.svg'},
            { name: "DevExtreme", logoUrl: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_a57b152e38712ef08473c51e9cce49c8/devexpress.png'},
            
          ]
        },
        {
          name: "Interests", type: 'image', content: [
            { name: "Nasa", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg' },
            { name: "SpaceX", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/SpaceX-Logo-Xonly.svg' },
            { name: "AI", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
            { name: "Department of Energy DOE", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Seal_of_the_United_States_Department_of_Energy.svg' },
          ]
        },
        {
          name: "Languages", type: 'score', content: [
            { name: "English", score: 90 }
          ]
        },
      ]
    },
  ];

  private mongoUri = 'mongodb://localhost/gravity-193';

  constructor() {}

  getUsers(): Observable<any[]> {
    return of(this.hardcodedUsers);
  }

  getUserByusername(username: string): Observable<any> {
    const user = this.hardcodedUsers.find(user => user.username === username);
    return of(user || {}); // Return an empty object if no user is found
  }
}

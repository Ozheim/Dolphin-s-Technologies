import mongoose from "mongoose";
import JobOffer from "./models/job.js";

const jobOffers = [
    {
        title: "Full Stack Developer",
        company: "Tech Innovators Inc.",
        location: "Paris, France",
        salary: 50000, // Salaire fixe
        description: "We are looking for a Full Stack Developer proficient in JavaScript, React, and Node.js...",
        requirements: ["3+ years of experience", "JavaScript", "React", "Node.js", "MongoDB"],
        jobType: "Full-time",
        applyLink: "https://techinnovators.com/apply/fullstack"
    },
    {
        title: "Data Scientist",
        company: "AI Revolution Ltd.",
        location: "Lyon, France",
        salary: {
            min: 60000,
            max: 80000
        }, // Fourchette de salaire
        description: "Join our AI team to develop and implement machine learning models...",
        requirements: ["2+ years of experience", "Python", "Machine Learning", "R"],
        jobType: "Full-time",
        applyLink: "https://aitech.com/apply/datascientist"
    },
    {
        title: "Backend Developer",
        company: "NextGen Web",
        location: "Bordeaux, France",
        salary: 48000, // Salaire fixe
        description: "As a Backend Developer, you will be responsible for the server-side application logic...",
        requirements: ["Node.js", "Django", "RESTful APIs"],
        jobType: "Full-time",
        applyLink: "https://nextgenweb.com/apply/backend"
    },
    {
        title: "DevOps Engineer",
        company: "CloudSys Enterprises",
        location: "Marseille, France",
        salary: {
            min: 55000,
            max: 75000
        }, // Fourchette de salaire
        description: "We are looking for an experienced DevOps Engineer to help us automate and streamline our operations...",
        requirements: ["3+ years in DevOps", "Experience with AWS or Azure", "CI/CD pipelines", "Docker", "Kubernetes"],
        jobType: "Full-time",
        applyLink: "https://cloudsys.com/apply/devops"
    },
    {
        title: "Mobile App Developer",
        company: "Appify Studios",
        location: "Remote",
        salary: 60000, // Salaire fixe
        description: "We are seeking a Mobile App Developer with experience in iOS and Android development...",
        requirements: ["Swift", "Kotlin", "React Native", "UI/UX mobile best practices"],
        jobType: "Contract",
        applyLink: "https://appifystudios.com/apply/mobile"
    },
    {
        title: "Project Manager",
        company: "Global Solutions Ltd.",
        location: "Toulouse, France",
        salary: {
            min: 70000,
            max: 90000
        }, // Fourchette de salaire
        description: "Manage software development projects across multiple teams, ensuring successful delivery...",
        requirements: ["5+ years in project management", "Agile methodologies", "Excellent communication skills"],
        jobType: "Full-time",
        applyLink: "https://globalsolutions.com/apply/pm"
    },
    {
        title: "UI/UX Designer",
        company: "Creative Minds Studio",
        location: "Paris, France",
        salary: 40000, // Salaire fixe
        description: "We are looking for a talented UI/UX Designer to create engaging user interfaces...",
        requirements: ["Figma", "Adobe XD", "User-centered design principles"],
        jobType: "Part-time",
        applyLink: "https://creativeminds.com/apply/uiux"
    },
    {
        title: "Cybersecurity Analyst",
        company: "SecureTech",
        location: "Nice, France",
        salary: {
            min: 65000,
            max: 85000
        }, // Fourchette de salaire
        description: "Work with our cybersecurity team to identify and mitigate potential threats...",
        requirements: ["Penetration testing", "Network security", "Firewalls", "VPNs"],
        jobType: "Full-time",
        applyLink: "https://securetech.com/apply/cybersec"
    },
    {
        title: "Frontend Developer",
        company: "BrightFuture Tech",
        location: "Remote",
        salary: 47000, // Salaire fixe
        description: "We are hiring a Frontend Developer to develop dynamic and responsive user interfaces...",
        requirements: ["HTML", "CSS", "JavaScript", "React", "Vue.js"],
        jobType: "Full-time",
        applyLink: "https://brightfuturetech.com/apply/frontend"
    },
    {
        title: "Machine Learning Engineer",
        company: "AI Labs",
        location: "Grenoble, France",
        salary: {
            min: 55000,
            max: 80000
        }, // Fourchette de salaire
        description: "Join our research team to develop machine learning algorithms...",
        requirements: ["Python", "TensorFlow", "Scikit-learn", "Data analysis"],
        jobType: "Full-time",
        applyLink: "https://ailabs.com/apply/mlengineer"
    },
    {
        title: "IT Support Specialist",
        company: "TechHelp Services",
        location: "Nantes, France",
        salary: 38000, // Salaire fixe
        description: "Provide IT support and troubleshoot technical issues for internal teams...",
        requirements: ["Windows", "Linux", "Customer support experience"],
        jobType: "Full-time",
        applyLink: "https://techhelp.com/apply/itsupport"
    },
    {
        title: "Marketing Manager",
        company: "Brand Innovators",
        location: "Paris, France",
        salary: {
            min: 60000,
            max: 80000
        }, // Fourchette de salaire
        description: "Lead marketing campaigns and strategies to drive brand awareness...",
        requirements: ["5+ years in marketing", "SEO", "Digital marketing strategies"],
        jobType: "Full-time",
        applyLink: "https://brandinnovators.com/apply/marketingmanager"
    },
    {
        title: "QA Engineer",
        company: "QualitySoft",
        location: "Lille, France",
        salary: 45000, // Salaire fixe
        description: "Work with the development team to test software and ensure quality...",
        requirements: ["Automated testing", "Manual testing", "Selenium", "Jira"],
        jobType: "Full-time",
        applyLink: "https://qualitysoft.com/apply/qaengineer"
    },
    {
        title: "Software Architect",
        company: "Code Builders",
        location: "Toulon, France",
        salary: {
            min: 75000,
            max: 95000
        }, // Fourchette de salaire
        description: "Design and oversee software architecture for large-scale projects...",
        requirements: ["Microservices architecture", "Cloud solutions", "System design"],
        jobType: "Full-time",
        applyLink: "https://codebuilders.com/apply/softwarearchitect"
    },
    {
        title: "Product Manager",
        company: "Innovate Solutions",
        location: "Lyon, France",
        salary: {
            min: 70000,
            max: 90000
        }, // Fourchette de salaire
        description: "Drive product development from concept to launch, ensuring alignment with market needs...",
        requirements: ["5+ years in product management", "Agile methodology", "Customer-focused mindset"],
        jobType: "Full-time",
        applyLink: "https://innovatesolutions.com/apply/productmanager"
    }
];

mongoose.connect("mongodb://localhost:27017/job_board", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");

        return JobOffer.insertMany(jobOffers);
    })
    .then(() => {
        console.log("Job offers inserted successfully!");
        mongoose.disconnect();
    })
    .catch((err) => {
        console.error("Error inserting job offers: ", err);
        mongoose.disconnect();
    });

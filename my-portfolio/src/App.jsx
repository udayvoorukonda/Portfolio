import React, { useState } from 'react';

// Main App Component
const App = () => {
    // State for managing current active section for navigation
    const [activeSection, setActiveSection] = useState('home');

    // Function to handle navigation clicks and smooth scroll
    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    // Data extracted from the resume
    const personalInfo = {
        name: 'UDAY KIRAN VOORUKONDA',
        email: 'udaykiranv45@gmail.com',
        phone: '(+1)314-319-7731 US',
        // Updated tagline
        tagline: 'Full Stack Developer',
        summary: "Highly motivated and results-oriented Master's student with a strong foundation in software development, data management, and cloud technologies. Proven ability to design, develop, and deploy scalable applications and optimize complex systems. Eager to leverage expertise in full-stack development, machine learning, and data engineering to contribute to innovative projects."
    };

    const education = [
        {
            degree: 'Master of Science in Information Systems and Technology',
            university: 'University of Missouri-St. Louis, St. Louis, MO',
            duration: 'Aug 2023 - May 2025'
        },
        {
            degree: 'Bachelor of Technology in Computer Science and Engineering',
            university: 'R.M.D. Engineering College, Chennai',
            duration: 'Jul 2019 - May 2023'
        }
    ];

    const experience = [
        {
            title: 'CapStone Project - Smart Inventory Optimization System for E-Commerce',
            company: 'University of Missouri-St. Louis',
            duration: 'Apr 2024 - May 2025',
            description: [
                'Developed a scalable, multi-tiered inventory management system to optimize stock allocation across distributed warehouses.',
                'Integrated time-series forecasting to predict customer demand and inform proactive restocking decisions.',
                'Implemented optimization algorithms to minimize storage and shipping costs while considering warehouse constraints and demand variability.',
                'Built RESTful services for real-time inventory tracking, ensuring accurate and consistent product availability data.',
                'Designed efficient MySQL schemas to support high-volume transactional and analytical queries.'
            ]
        }
    ];

    const skills = {
        languages: ['Core Java', 'Python', 'C', 'Typescript', 'SQL'],
        webDev: ['HTML', 'CSS', 'JavaScript', 'BootStrap', 'MySQL', 'Oracle', 'Spring Boot', 'NodeJS', 'ReactJS', 'MongoDB', 'PostgreSQL'],
        tools: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Mongo DB', 'Kafka', 'Openshift', 'PowerBI', 'SQL Server Tableau', 'Jenkins'],
        courseWork: ['Object Oriented Programming', 'Data Processing', 'Business Analytics', 'Cloud Computing', 'Software Engineering', 'Operating Systems', 'Data Science', 'AI', 'ML', 'Data Engineering']
    };

    const projects = [
        {
            title: 'Smart Task Scheduler',
            description: [
                'Developed a desktop-based Java application to optimize daily task scheduling based on priority, estimated duration, and deadlines.',
                'Implemented linear programming techniques to maximize user productivity through efficient time-slot allocation.',
                'Designed and integrated a relational database (SQL) using JDBC for persistent task management.',
                'Built an user interface with JavaFX for task input and real-time optimized schedule visualization.',
                'Applied optimization algorithms to handle constraints and resolve scheduling conflicts dynamically.',
                'Demonstrated ability to model abstract problems, articulate technical solutions, and develop scalable, logic-driven systems.'
            ],
            technologies: ['Java', 'JavaFX', 'SQL', 'JDBC', 'Linear Programming'],
            imageUrl: 'https://i.postimg.cc/fyMSnWxF/person-using-futuristic-digital-calendar-260nw-2608196535.webp'
        },
        {
            title: 'WeatherTrack - Interactive Weather App',
            description: [
                'Designed and developed a responsive weather application using HTML, CSS and JavaScript.',
                'Integrated the OpenWeatherMap RESTful API to fetch and display real-time temperature, humidity, wind speed, and weather conditions.',
                'Applied event-driven programming and JavaScript fetch API to dynamically retrieve and display data based on user input.',
                'Created an intuitive user interface with interactive components, dark/light mode toggle, and semantic HTML for enhanced accessibility.',
                'Implemented form validation, error handling, and optional features like geolocation API and theme Persistence using localStorage.'
            ],
            technologies: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API', 'Geolocation API', 'localStorage'],
            imageUrl: 'https://i.postimg.cc/63vyG2hF/original-9135d0dbfcad7c79284c0068e83959fa.webp'
        },
        {
            title: 'AI-Powered Waste Classification & Recycling Assistant',
            description: [
                'Built a cross-platform mobile app integrating TensorFlow Lite with CNN models for real-time classification of waste into plastic, paper, metal, and organic categories.',
                'Trained and optimized convolutional neural networks in Python using TensorFlow, achieving high on-device inference accuracy for efficient waste sorting.',
                'Integrated Google Maps API to provide location-based guidance to nearby recycling centers and relevant disposal information.',
                'Designed a user dashboard to track disposal habits and sustainability goals, leveraging Firebase for cloud storage and secure user authentication.',
                'Improved user engagement through real-time feedback, personalized waste disposal suggestions, and eco-friendly practice recommendations.'
            ],
            technologies: ['TensorFlow Lite', 'CNN', 'Python', 'Firebase', 'Google Maps API', 'Mobile Development'],
            imageUrl: 'https://i.postimg.cc/jjq15yRd/Revolutionizing-Recycling-The-Relevance-of-Artificial-Intelligence-in-the-Recycling-Industry-Recycli.jpg'
        },
        {
            title: 'Cloud-Based Data Warehouse and ETL Pipeline Implementation',
            description: [
                'Improved data storage and query performance, reducing query execution time by 40%.',
                'Increased data storage capacity by 300%, data processing time by 60%.',
                'Streamlined data ingestion and transformation processes, reducing manual data handling by 50%.',
                'Established a robust change management process and reducing deployment errors by 25% and increasing system reliability by 30%.'
            ],
            technologies: ['Data Warehousing', 'ETL', 'Cloud Computing', 'Data Optimization'],
            imageUrl: 'https://i.postimg.cc/NFv7ywR7/cloud-data-engineering.webp'
        }
    ];

    return (
        <div className={`min-h-screen bg-gray-950 text-gray-200 transition-colors duration-300 font-inter`}>
            {/* Header and Navigation */}
            <header className="fixed top-0 left-0 right-0 bg-gray-800 shadow-md z-50 py-4 px-6 md:px-10 flex justify-between items-center rounded-b-lg">
                <h1 className="text-2xl font-bold text-white">Uday Kiran</h1>
                <nav className="hidden md:flex space-x-6">
                    {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                        <button
                            key={section}
                            onClick={() => handleNavClick(section)}
                            className={`text-lg font-medium hover:text-gray-400 transition-colors duration-200 ${activeSection === section ? 'text-white border-b-2 border-white' : 'text-gray-400'}`}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                    ))}
                </nav>
            </header>

            <main className="pt-24 pb-12 px-4 md:px-8 max-w-6xl mx-auto">
                {/* Hero Section */}
                <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-6rem)] py-16 text-center md:text-left">
                    <div className="md:w-2/3">
                        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-100 leading-tight mb-4 animate-fade-in-down">
                            Hi, I'm <span className="text-white">{personalInfo.name}</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up">
                            {personalInfo.tagline}
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <button
                                onClick={() => handleNavClick('projects')}
                                className="px-6 py-3 bg-white text-gray-800 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                            >
                                View My Work
                            </button>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="px-6 py-3 border border-white text-white rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
                        <img
                            src="https://i.postimg.cc/NMSjssqb/e659ec48-cc6c-4c50-aba8-30c16a41b7d6.jpg"
                            alt="Uday Kiran Voorukonda"
                            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl animate-bounce-in"
                        />
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-16 border-t border-gray-700">
                    <h3 className="text-4xl font-bold text-center text-white mb-10">About Me</h3>
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <p className="text-lg leading-relaxed text-gray-300">
                            {personalInfo.summary}
                        </p>
                        <h4 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">Education</h4>
                        {education.map((edu, index) => (
                            <div key={index} className="mb-6 pb-4 border-b border-gray-700 last:border-b-0">
                                <h5 className="text-xl font-bold text-gray-300">{edu.degree}</h5>
                                <p className="text-md text-gray-400">{edu.university}</p>
                                <p className="text-md text-gray-400">{edu.duration}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-16 border-t border-gray-700">
                    <h3 className="text-4xl font-bold text-center text-white mb-10">My Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                                <h4 className="text-2xl font-semibold text-gray-200 mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((item, index) => (
                                        <span key={index} className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm font-medium">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-16 border-t border-gray-700">
                    <h3 className="text-4xl font-bold text-center text-white mb-10">Experience</h3>
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        {experience.map((exp, index) => (
                            <div key={index} className="mb-8 pb-6 border-b border-gray-700 last:border-b-0">
                                <h4 className="text-2xl font-bold text-gray-200">{exp.title}</h4>
                                <p className="text-lg text-gray-400">{exp.company}</p>
                                <p className="text-md text-gray-500 mb-4">{exp.duration}</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    {exp.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-16 border-t border-gray-700">
                    <h3 className="text-4xl font-bold text-center text-white mb-10">My Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={project.imageUrl}
                                    alt={`Screenshot of ${project.title}`}
                                    className="w-full h-auto rounded-lg mb-4 object-cover"
                                />
                                <h4 className="text-2xl font-bold text-gray-200 mb-3">{project.title}</h4>
                                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                                    {project.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-16 border-t border-gray-700">
                    <h3 className="text-4xl font-bold text-center text-white mb-10">Get In Touch</h3>
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                        <p className="text-lg text-gray-300 mb-6">
                            I'm always open to new opportunities and collaborations. Feel free to reach out!
                        </p>
                        <div className="flex flex-col items-center space-y-4">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center space-x-2 text-white hover:underline text-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7m18 0A2 2 0 0020 6H4a2 2 0 00-2 2m18 0V7a2 2 0 00-2-2H4a2 2 0 00-2 2v1" />
                                </svg>
                                <span>{personalInfo.email}</span>
                            </a>
                            <a
                                href={`tel:${personalInfo.phone.replace(/\D/g, '')}`}
                                className="flex items-center space-x-2 text-white hover:underline text-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                                </svg>
                                <span>{personalInfo.phone}</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-6 text-center rounded-t-lg">
                <p>&copy; {new Date().getFullYear()} Uday Kiran Voorukonda. All rights reserved.</p>
            </footer>

            {/* Global Styles for Inter font and animations */}
            <style jsx="true">{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
                html {
                    scroll-behavior: smooth;
                }
                body {
                    font-family: 'Inter', sans-serif;
                }
                /* Custom animations */
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes bounceIn {
                    0% { opacity: 0; transform: scale(0.3); }
                    50% { opacity: 0.9; transform: scale(1.1); }
                    80% { opacity: 0.95; transform: scale(0.9); }
                    100% { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in-down {
                    animation: fadeInDown 0.8s ease-out forwards;
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                    animation-delay: 0.2s;
                }
                .animate-bounce-in {
                    animation: bounceIn 1s ease-out forwards;
                    animation-delay: 0.4s;
                }
            `}</style>
        </div>
    );
};

export default App;

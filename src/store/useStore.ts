import { create } from "zustand";
// import {
//   Project,
//   Experience,
//   Skill,
//   ContactInfo,
//   PersonalInfo,
// } from "../types";

interface AppState {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  // personalInfo: PersonalInfo;
  // contactInfo: ContactInfo;
  // projects: Project[];
  // experiences: Experience[];
  // skills: Skill[];
}

const useStore = create<AppState>((set) => ({
  isDarkTheme: false,
  toggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),

  personalInfo: {
    name: "Alex Chen",
    title: "Full Stack Developer",
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. I love creating intuitive user experiences and robust backend systems.",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    skills: ["React", "Node.js", "TypeScript", "Python", "AWS", "Docker"],
    experience: "5+ years",
  },

  contactInfo: {
    email: "alex.chen@email.com",
    phone: "+1 (555) 123-4567",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    resume: "/resume.pdf",
  },

  projects: [
    {
      id: "1",
      name: "E-Commerce Platform",
      goal: "Build a scalable e-commerce solution with real-time inventory management",
      tools: ["React", "Node.js", "MongoDB", "Redis"],
      technologies: ["TypeScript", "Express", "Socket.io", "Stripe"],
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    },
    {
      id: "2",
      name: "Task Management System",
      goal: "Create a collaborative project management tool for remote teams",
      tools: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      technologies: ["FastAPI", "WebSocket", "JWT", "Kubernetes"],
      image:
        "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "Collaborative task management platform with real-time updates and team collaboration features.",
    },
    {
      id: "3",
      name: "AI Analytics Dashboard",
      goal: "Develop an AI-powered analytics dashboard for business intelligence",
      tools: ["React", "Python", "TensorFlow", "D3.js"],
      technologies: [
        "Machine Learning",
        "Data Visualization",
        "REST API",
        "OAuth",
      ],
      image:
        "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "AI-powered analytics dashboard with predictive insights and interactive data visualizations.",
    },
  ],

  experiences: [
    {
      id: "1",
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      startDate: "2022-01",
      endDate: "Present",
      achievements: [
        "Led development of microservices architecture reducing system latency by 40%",
        "Mentored 3 junior developers and established code review processes",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
      description:
        "Leading full-stack development for enterprise applications serving 100k+ users.",
    },
    {
      id: "2",
      company: "StartupX",
      position: "Full Stack Developer",
      startDate: "2020-03",
      endDate: "2021-12",
      achievements: [
        "Built MVP from scratch using React and Node.js",
        "Implemented real-time features using WebSocket technology",
        "Optimized database queries improving performance by 50%",
      ],
      description:
        "Developed core features for a fast-growing fintech startup.",
    },
    {
      id: "3",
      company: "Digital Agency Co",
      position: "Frontend Developer",
      startDate: "2019-06",
      endDate: "2020-02",
      achievements: [
        "Delivered 15+ responsive websites with 99% client satisfaction",
        "Implemented modern JavaScript frameworks and build tools",
        "Collaborated with designers to create pixel-perfect interfaces",
      ],
      description:
        "Created modern, responsive web applications for diverse clients.",
    },
  ],

  skills: [
    {
      id: "1",
      name: "React",
      category: "Frontend",
      level: 95,
      certificates: [
        "React Developer Certification",
        "Advanced React Patterns",
      ],
      relatedProjects: ["E-Commerce Platform", "AI Analytics Dashboard"],
      relatedJobs: ["TechCorp Solutions", "StartupX"],
      icon: "⚛️",
    },
    {
      id: "2",
      name: "Node.js",
      category: "Backend",
      level: 90,
      certificates: ["Node.js Application Developer", "Express.js Mastery"],
      relatedProjects: ["E-Commerce Platform", "Task Management System"],
      relatedJobs: ["TechCorp Solutions", "StartupX"],
      icon: "🟢",
    },
    {
      id: "3",
      name: "TypeScript",
      category: "Language",
      level: 85,
      certificates: ["TypeScript Fundamentals", "Advanced TypeScript"],
      relatedProjects: ["E-Commerce Platform", "AI Analytics Dashboard"],
      relatedJobs: ["TechCorp Solutions"],
      icon: "🔷",
    },
    {
      id: "4",
      name: "Python",
      category: "Backend",
      level: 80,
      certificates: [
        "Python Developer Certification",
        "Data Science with Python",
      ],
      relatedProjects: ["Task Management System", "AI Analytics Dashboard"],
      relatedJobs: ["StartupX"],
      icon: "🐍",
    },
    {
      id: "5",
      name: "AWS",
      category: "Cloud",
      level: 75,
      certificates: ["AWS Solutions Architect", "AWS Developer Associate"],
      relatedProjects: ["E-Commerce Platform", "Task Management System"],
      relatedJobs: ["TechCorp Solutions"],
      icon: "☁️",
    },
    {
      id: "6",
      name: "Docker",
      category: "DevOps",
      level: 70,
      certificates: ["Docker Mastery", "Kubernetes Fundamentals"],
      relatedProjects: ["Task Management System", "AI Analytics Dashboard"],
      relatedJobs: ["TechCorp Solutions"],
      icon: "🐳",
    },
  ],
}));

export default useStore;

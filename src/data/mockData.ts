// Mock employee data with diverse values for filtering demonstrations

export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  salary: number;
  joinDate: string;
  isActive: boolean;
  skills: string[];
  address: {
    city: string;
    state: string;
    country: string;
  };
  projects: number;
  lastReview: string;
  performanceRating: number;
}

export const mockEmployees: Employee[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@company.com",
    department: "Engineering",
    role: "Senior Developer",
    salary: 95000,
    joinDate: "2021-03-15",
    isActive: true,
    skills: ["React", "TypeScript", "Node.js", "GraphQL"],
    address: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    },
    projects: 3,
    lastReview: "2024-01-15",
    performanceRating: 4.5
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@company.com",
    department: "Engineering",
    role: "Junior Developer",
    salary: 65000,
    joinDate: "2023-06-20",
    isActive: true,
    skills: ["JavaScript", "React", "CSS"],
    address: {
      city: "Austin",
      state: "TX",
      country: "USA"
    },
    projects: 1,
    lastReview: "2024-02-10",
    performanceRating: 3.8
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@company.com",
    department: "Product",
    role: "Product Manager",
    salary: 110000,
    joinDate: "2020-11-08",
    isActive: true,
    skills: ["Product Strategy", "Analytics", "Agile"],
    address: {
      city: "New York",
      state: "NY",
      country: "USA"
    },
    projects: 5,
    lastReview: "2024-01-20",
    performanceRating: 4.7
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily.r@company.com",
    department: "Design",
    role: "UX Designer",
    salary: 85000,
    joinDate: "2022-01-10",
    isActive: true,
    skills: ["Figma", "User Research", "Prototyping"],
    address: {
      city: "Seattle",
      state: "WA",
      country: "USA"
    },
    projects: 4,
    lastReview: "2024-03-01",
    performanceRating: 4.2
  },
  {
    id: 5,
    name: "David Kim",
    email: "david.kim@company.com",
    department: "Engineering",
    role: "Tech Lead",
    salary: 130000,
    joinDate: "2019-05-22",
    isActive: true,
    skills: ["Python", "Django", "AWS", "Docker", "Kubernetes"],
    address: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    },
    projects: 7,
    lastReview: "2024-01-05",
    performanceRating: 4.9
  },
  {
    id: 6,
    name: "Lisa Anderson",
    email: "lisa.a@company.com",
    department: "Marketing",
    role: "Marketing Manager",
    salary: 90000,
    joinDate: "2021-09-14",
    isActive: true,
    skills: ["SEO", "Content Marketing", "Analytics"],
    address: {
      city: "Los Angeles",
      state: "CA",
      country: "USA"
    },
    projects: 6,
    lastReview: "2024-02-15",
    performanceRating: 4.3
  },
  {
    id: 7,
    name: "Robert Taylor",
    email: "robert.t@company.com",
    department: "Engineering",
    role: "DevOps Engineer",
    salary: 105000,
    joinDate: "2022-03-30",
    isActive: true,
    skills: ["AWS", "Terraform", "Jenkins", "Linux"],
    address: {
      city: "Denver",
      state: "CO",
      country: "USA"
    },
    projects: 3,
    lastReview: "2024-01-25",
    performanceRating: 4.4
  },
  {
    id: 8,
    name: "Jennifer White",
    email: "jennifer.w@company.com",
    department: "Sales",
    role: "Sales Representative",
    salary: 70000,
    joinDate: "2023-02-18",
    isActive: false,
    skills: ["CRM", "Negotiation", "Client Relations"],
    address: {
      city: "Chicago",
      state: "IL",
      country: "USA"
    },
    projects: 2,
    lastReview: "2023-12-10",
    performanceRating: 3.5
  },
  {
    id: 9,
    name: "James Wilson",
    email: "james.wilson@company.com",
    department: "Engineering",
    role: "Full Stack Developer",
    salary: 88000,
    joinDate: "2022-07-05",
    isActive: true,
    skills: ["React", "Node.js", "MongoDB", "Express"],
    address: {
      city: "Boston",
      state: "MA",
      country: "USA"
    },
    projects: 4,
    lastReview: "2024-02-28",
    performanceRating: 4.1
  },
  {
    id: 10,
    name: "Maria Garcia",
    email: "maria.garcia@company.com",
    department: "HR",
    role: "HR Manager",
    salary: 95000,
    joinDate: "2020-04-12",
    isActive: true,
    skills: ["Recruitment", "Employee Relations", "HRIS"],
    address: {
      city: "Miami",
      state: "FL",
      country: "USA"
    },
    projects: 2,
    lastReview: "2024-01-10",
    performanceRating: 4.6
  },
  {
    id: 11,
    name: "Christopher Brown",
    email: "chris.brown@company.com",
    department: "Engineering",
    role: "Backend Developer",
    salary: 92000,
    joinDate: "2021-11-20",
    isActive: true,
    skills: ["Java", "Spring Boot", "PostgreSQL", "Redis"],
    address: {
      city: "Portland",
      state: "OR",
      country: "USA"
    },
    projects: 5,
    lastReview: "2024-03-05",
    performanceRating: 4.3
  },
  {
    id: 12,
    name: "Amanda Lee",
    email: "amanda.lee@company.com",
    department: "Design",
    role: "UI Designer",
    salary: 78000,
    joinDate: "2023-04-15",
    isActive: true,
    skills: ["Sketch", "Adobe XD", "Illustration"],
    address: {
      city: "San Diego",
      state: "CA",
      country: "USA"
    },
    projects: 3,
    lastReview: "2024-02-20",
    performanceRating: 3.9
  },
  {
    id: 13,
    name: "Daniel Martinez",
    email: "daniel.m@company.com",
    department: "Engineering",
    role: "Senior Developer",
    salary: 102000,
    joinDate: "2020-08-30",
    isActive: true,
    skills: ["Vue.js", "TypeScript", "GraphQL", "Jest"],
    address: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    },
    projects: 6,
    lastReview: "2024-01-18",
    performanceRating: 4.5
  },
  {
    id: 14,
    name: "Jessica Thompson",
    email: "jessica.t@company.com",
    department: "Product",
    role: "Product Designer",
    salary: 96000,
    joinDate: "2021-12-05",
    isActive: true,
    skills: ["Figma", "User Testing", "Design Systems"],
    address: {
      city: "Seattle",
      state: "WA",
      country: "USA"
    },
    projects: 4,
    lastReview: "2024-02-12",
    performanceRating: 4.4
  },
  {
    id: 15,
    name: "Kevin Zhang",
    email: "kevin.zhang@company.com",
    department: "Engineering",
    role: "Mobile Developer",
    salary: 98000,
    joinDate: "2022-05-18",
    isActive: true,
    skills: ["React Native", "iOS", "Android", "Swift"],
    address: {
      city: "Austin",
      state: "TX",
      country: "USA"
    },
    projects: 3,
    lastReview: "2024-01-30",
    performanceRating: 4.2
  },
  {
    id: 16,
    name: "Nicole Davis",
    email: "nicole.davis@company.com",
    department: "Marketing",
    role: "Content Writer",
    salary: 68000,
    joinDate: "2023-08-22",
    isActive: true,
    skills: ["Copywriting", "SEO", "Social Media"],
    address: {
      city: "Nashville",
      state: "TN",
      country: "USA"
    },
    projects: 2,
    lastReview: "2024-02-25",
    performanceRating: 3.7
  },
  {
    id: 17,
    name: "Ryan Murphy",
    email: "ryan.murphy@company.com",
    department: "Engineering",
    role: "QA Engineer",
    salary: 75000,
    joinDate: "2022-09-10",
    isActive: true,
    skills: ["Selenium", "Cypress", "Test Automation", "Jest"],
    address: {
      city: "Phoenix",
      state: "AZ",
      country: "USA"
    },
    projects: 5,
    lastReview: "2024-03-08",
    performanceRating: 4.0
  },
  {
    id: 18,
    name: "Sophie Williams",
    email: "sophie.w@company.com",
    department: "Sales",
    role: "Sales Manager",
    salary: 115000,
    joinDate: "2019-07-15",
    isActive: true,
    skills: ["Sales Strategy", "Team Leadership", "CRM"],
    address: {
      city: "New York",
      state: "NY",
      country: "USA"
    },
    projects: 8,
    lastReview: "2024-01-12",
    performanceRating: 4.8
  },
  {
    id: 19,
    name: "Thomas Jackson",
    email: "thomas.j@company.com",
    department: "Engineering",
    role: "Data Engineer",
    salary: 108000,
    joinDate: "2021-02-28",
    isActive: true,
    skills: ["Python", "Spark", "Airflow", "SQL", "Kafka"],
    address: {
      city: "Seattle",
      state: "WA",
      country: "USA"
    },
    projects: 4,
    lastReview: "2024-02-05",
    performanceRating: 4.6
  },
  {
    id: 20,
    name: "Olivia Harris",
    email: "olivia.harris@company.com",
    department: "Product",
    role: "Associate Product Manager",
    salary: 82000,
    joinDate: "2023-01-25",
    isActive: true,
    skills: ["Product Analysis", "User Research", "Roadmapping"],
    address: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    },
    projects: 2,
    lastReview: "2024-02-18",
    performanceRating: 3.9
  },
  {
    id: 21,
    name: "William Clark",
    email: "william.clark@company.com",
    department: "Engineering",
    role: "Frontend Developer",
    salary: 87000,
    joinDate: "2022-11-12",
    isActive: true,
    skills: ["Angular", "TypeScript", "RxJS", "SCSS"],
    address: {
      city: "Atlanta",
      state: "GA",
      country: "USA"
    },
    projects: 3,
    lastReview: "2024-01-22",
    performanceRating: 4.1
  },
  {
    id: 22,
    name: "Emma Lewis",
    email: "emma.lewis@company.com",
    department: "Design",
    role: "Visual Designer",
    salary: 72000,
    joinDate: "2023-05-08",
    isActive: false,
    skills: ["Illustration", "Branding", "Photoshop"],
    address: {
      city: "Portland",
      state: "OR",
      country: "USA"
    },
    projects: 2,
    lastReview: "2023-11-15",
    performanceRating: 3.6
  },
  {
    id: 23,
    name: "Alexander Walker",
    email: "alex.walker@company.com",
    department: "Engineering",
    role: "Security Engineer",
    salary: 125000,
    joinDate: "2020-01-20",
    isActive: true,
    skills: ["Penetration Testing", "Security Auditing", "OWASP"],
    address: {
      city: "Washington",
      state: "DC",
      country: "USA"
    },
    projects: 6,
    lastReview: "2024-01-08",
    performanceRating: 4.7
  },
  {
    id: 24,
    name: "Grace Hall",
    email: "grace.hall@company.com",
    department: "Marketing",
    role: "Digital Marketing Specialist",
    salary: 73000,
    joinDate: "2022-12-01",
    isActive: true,
    skills: ["Google Ads", "Facebook Ads", "Analytics"],
    address: {
      city: "Dallas",
      state: "TX",
      country: "USA"
    },
    projects: 3,
    lastReview: "2024-02-22",
    performanceRating: 4.0
  },
  {
    id: 25,
    name: "Benjamin Young",
    email: "benjamin.y@company.com",
    department: "Engineering",
    role: "Machine Learning Engineer",
    salary: 140000,
    joinDate: "2019-09-10",
    isActive: true,
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps"],
    address: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    },
    projects: 5,
    lastReview: "2024-01-28",
    performanceRating: 4.9
  },
  {
    id: 26,
    name: "Chloe King",
    email: "chloe.king@company.com",
    department: "HR",
    role: "Recruiter",
    salary: 65000,
    joinDate: "2023-03-20",
    isActive: true,
    skills: ["Talent Acquisition", "Interviewing", "ATS"],
    address: {
      city: "Minneapolis",
      state: "MN",
      country: "USA"
    },
    projects: 1,
    lastReview: "2024-03-01",
    performanceRating: 3.8
  },
  {
    id: 27,
    name: "Matthew Wright",
    email: "matthew.w@company.com",
    department: "Engineering",
    role: "Senior Backend Developer",
    salary: 118000,
    joinDate: "2020-06-15",
    isActive: true,
    skills: ["Go", "Microservices", "gRPC", "Kubernetes"],
    address: {
      city: "Seattle",
      state: "WA",
      country: "USA"
    },
    projects: 7,
    lastReview: "2024-02-08",
    performanceRating: 4.8
  },
  {
    id: 28,
    name: "Lily Lopez",
    email: "lily.lopez@company.com",
    department: "Product",
    role: "Product Manager",
    salary: 112000,
    joinDate: "2021-04-05",
    isActive: true,
    skills: ["Product Strategy", "Data Analysis", "Stakeholder Management"],
    address: {
      city: "Los Angeles",
      state: "CA",
      country: "USA"
    },
    projects: 6,
    lastReview: "2024-01-30",
    performanceRating: 4.6
  },
  {
    id: 29,
    name: "Nathan Hill",
    email: "nathan.hill@company.com",
    department: "Engineering",
    role: "Junior Developer",
    salary: 62000,
    joinDate: "2023-10-12",
    isActive: true,
    skills: ["JavaScript", "HTML", "CSS", "Git"],
    address: {
      city: "Raleigh",
      state: "NC",
      country: "USA"
    },
    projects: 1,
    lastReview: "2024-02-15",
    performanceRating: 3.5
  },
  {
    id: 30,
    name: "Zoe Scott",
    email: "zoe.scott@company.com",
    department: "Design",
    role: "UX Researcher",
    salary: 89000,
    joinDate: "2022-02-18",
    isActive: true,
    skills: ["User Interviews", "Usability Testing", "Data Analysis"],
    address: {
      city: "Boston",
      state: "MA",
      country: "USA"
    },
    projects: 4,
    lastReview: "2024-02-28",
    performanceRating: 4.3
  },
  {
    id: 31,
    name: "Andrew Green",
    email: "andrew.green@company.com",
    department: "Engineering",
    role: "Full Stack Developer",
    salary: 94000,
    joinDate: "2021-07-22",
    isActive: true,
    skills: ["React", "Django", "PostgreSQL", "Docker"],
    address: {
      city: "Denver",
      state: "CO",
      country: "USA"
    },
    projects: 4,
    lastReview: "2024-01-20",
    performanceRating: 4.4
  },
  {
    id: 32,
    name: "Mia Adams",
    email: "mia.adams@company.com",
    department: "Sales",
    role: "Account Executive",
    salary: 85000,
    joinDate: "2022-04-30",
    isActive: true,
    skills: ["B2B Sales", "Client Management", "Prospecting"],
    address: {
      city: "Chicago",
      state: "IL",
      country: "USA"
    },
    projects: 3,
    lastReview: "2024-02-10",
    performanceRating: 4.2
  },
  {
    id: 33,
    name: "Joshua Baker",
    email: "joshua.baker@company.com",
    department: "Engineering",
    role: "Site Reliability Engineer",
    salary: 120000,
    joinDate: "2020-03-12",
    isActive: true,
    skills: ["Kubernetes", "Prometheus", "Grafana", "Terraform"],
    address: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    },
    projects: 5,
    lastReview: "2024-01-15",
    performanceRating: 4.7
  },
  {
    id: 34,
    name: "Isabella Nelson",
    email: "isabella.n@company.com",
    department: "Marketing",
    role: "Marketing Analyst",
    salary: 76000,
    joinDate: "2022-08-25",
    isActive: true,
    skills: ["Data Analysis", "SQL", "Tableau", "Excel"],
    address: {
      city: "Austin",
      state: "TX",
      country: "USA"
    },
    projects: 3,
    lastReview: "2024-03-03",
    performanceRating: 4.1
  },
  {
    id: 35,
    name: "Ethan Carter",
    email: "ethan.carter@company.com",
    department: "Engineering",
    role: "Backend Developer",
    salary: 91000,
    joinDate: "2021-10-08",
    isActive: true,
    skills: ["Ruby", "Rails", "PostgreSQL", "Redis"],
    address: {
      city: "Portland",
      state: "OR",
      country: "USA"
    },
    projects: 4,
    lastReview: "2024-02-20",
    performanceRating: 4.3
  },
  {
    id: 36,
    name: "Ava Mitchell",
    email: "ava.mitchell@company.com",
    department: "Design",
    role: "Interaction Designer",
    salary: 86000,
    joinDate: "2022-01-15",
    isActive: true,
    skills: ["Prototyping", "Animation", "Framer"],
    address: {
      city: "Seattle",
      state: "WA",
      country: "USA"
    },
    projects: 5,
    lastReview: "2024-01-25",
    performanceRating: 4.2
  },
  {
    id: 37,
    name: "Noah Perez",
    email: "noah.perez@company.com",
    department: "Engineering",
    role: "Senior Frontend Developer",
    salary: 115000,
    joinDate: "2019-12-05",
    isActive: true,
    skills: ["React", "TypeScript", "Next.js", "Webpack"],
    address: {
      city: "New York",
      state: "NY",
      country: "USA"
    },
    projects: 8,
    lastReview: "2024-01-10",
    performanceRating: 4.8
  },
  {
    id: 38,
    name: "Charlotte Roberts",
    email: "charlotte.r@company.com",
    department: "HR",
    role: "HR Business Partner",
    salary: 98000,
    joinDate: "2021-05-18",
    isActive: true,
    skills: ["Employee Relations", "HR Strategy", "Compensation"],
    address: {
      city: "Los Angeles",
      state: "CA",
      country: "USA"
    },
    projects: 3,
    lastReview: "2024-02-14",
    performanceRating: 4.5
  },
  {
    id: 39,
    name: "Lucas Turner",
    email: "lucas.turner@company.com",
    department: "Engineering",
    role: "Cloud Architect",
    salary: 145000,
    joinDate: "2018-11-20",
    isActive: true,
    skills: ["AWS", "Azure", "Cloud Architecture", "Terraform"],
    address: {
      city: "Seattle",
      state: "WA",
      country: "USA"
    },
    projects: 9,
    lastReview: "2024-01-05",
    performanceRating: 5.0
  },
  {
    id: 40,
    name: "Harper Phillips",
    email: "harper.p@company.com",
    department: "Product",
    role: "Senior Product Manager",
    salary: 135000,
    joinDate: "2019-02-14",
    isActive: true,
    skills: ["Product Strategy", "Go-to-Market", "Analytics"],
    address: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    },
    projects: 10,
    lastReview: "2024-01-12",
    performanceRating: 4.9
  },
  {
    id: 41,
    name: "Mason Campbell",
    email: "mason.campbell@company.com",
    department: "Engineering",
    role: "Developer",
    salary: 80000,
    joinDate: "2022-06-28",
    isActive: true,
    skills: ["JavaScript", "Vue.js", "Firebase"],
    address: {
      city: "Miami",
      state: "FL",
      country: "USA"
    },
    projects: 2,
    lastReview: "2024-02-05",
    performanceRating: 3.9
  },
  {
    id: 42,
    name: "Evelyn Parker",
    email: "evelyn.parker@company.com",
    department: "Marketing",
    role: "Brand Manager",
    salary: 92000,
    joinDate: "2021-08-30",
    isActive: true,
    skills: ["Brand Strategy", "Campaign Management", "Creative Direction"],
    address: {
      city: "New York",
      state: "NY",
      country: "USA"
    },
    projects: 5,
    lastReview: "2024-02-18",
    performanceRating: 4.4
  },
  {
    id: 43,
    name: "Logan Evans",
    email: "logan.evans@company.com",
    department: "Engineering",
    role: "Database Administrator",
    salary: 103000,
    joinDate: "2020-10-12",
    isActive: true,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Database Optimization"],
    address: {
      city: "Dallas",
      state: "TX",
      country: "USA"
    },
    projects: 4,
    lastReview: "2024-01-22",
    performanceRating: 4.5
  },
  {
    id: 44,
    name: "Abigail Edwards",
    email: "abigail.e@company.com",
    department: "Sales",
    role: "Sales Development Representative",
    salary: 58000,
    joinDate: "2023-07-05",
    isActive: true,
    skills: ["Lead Generation", "Cold Calling", "CRM"],
    address: {
      city: "Phoenix",
      state: "AZ",
      country: "USA"
    },
    projects: 1,
    lastReview: "2024-03-10",
    performanceRating: 3.4
  },
  {
    id: 45,
    name: "Aiden Collins",
    email: "aiden.collins@company.com",
    department: "Engineering",
    role: "Software Engineer",
    salary: 88500,
    joinDate: "2022-03-22",
    isActive: false,
    skills: ["Java", "Spring", "Hibernate", "Maven"],
    address: {
      city: "Boston",
      state: "MA",
      country: "USA"
    },
    projects: 3,
    lastReview: "2023-11-20",
    performanceRating: 3.7
  },
  {
    id: 46,
    name: "Madison Stewart",
    email: "madison.s@company.com",
    department: "Design",
    role: "Design Lead",
    salary: 118000,
    joinDate: "2020-05-10",
    isActive: true,
    skills: ["Design Systems", "Team Leadership", "Figma", "Prototyping"],
    address: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    },
    projects: 7,
    lastReview: "2024-01-18",
    performanceRating: 4.7
  },
  {
    id: 47,
    name: "Jackson Sanchez",
    email: "jackson.sanchez@company.com",
    department: "Engineering",
    role: "API Developer",
    salary: 96500,
    joinDate: "2021-12-18",
    isActive: true,
    skills: ["REST APIs", "GraphQL", "Node.js", "Express"],
    address: {
      city: "Austin",
      state: "TX",
      country: "USA"
    },
    projects: 5,
    lastReview: "2024-02-25",
    performanceRating: 4.4
  },
  {
    id: 48,
    name: "Scarlett Morris",
    email: "scarlett.m@company.com",
    department: "Marketing",
    role: "Social Media Manager",
    salary: 71000,
    joinDate: "2022-09-25",
    isActive: true,
    skills: ["Social Media Strategy", "Content Creation", "Community Management"],
    address: {
      city: "Los Angeles",
      state: "CA",
      country: "USA"
    },
    projects: 4,
    lastReview: "2024-03-05",
    performanceRating: 4.0
  },
  {
    id: 49,
    name: "Liam Rogers",
    email: "liam.rogers@company.com",
    department: "Engineering",
    role: "Infrastructure Engineer",
    salary: 111000,
    joinDate: "2021-01-08",
    isActive: true,
    skills: ["Linux", "Docker", "Kubernetes", "CI/CD"],
    address: {
      city: "Seattle",
      state: "WA",
      country: "USA"
    },
    projects: 6,
    lastReview: "2024-02-12",
    performanceRating: 4.6
  },
  {
    id: 50,
    name: "Victoria Reed",
    email: "victoria.reed@company.com",
    department: "Product",
    role: "Technical Product Manager",
    salary: 128000,
    joinDate: "2020-07-22",
    isActive: true,
    skills: ["Technical Product Management", "API Design", "System Architecture"],
    address: {
      city: "New York",
      state: "NY",
      country: "USA"
    },
    projects: 8,
    lastReview: "2024-01-28",
    performanceRating: 4.8
  },
  {
    id: 51,
    name: "Henry Cook",
    email: "henry.cook@company.com",
    department: "Engineering",
    role: "Junior Developer",
    salary: 60000,
    joinDate: "2023-11-15",
    isActive: true,
    skills: ["Python", "Django", "SQL"],
    address: {
      city: "Raleigh",
      state: "NC",
      country: "USA"
    },
    projects: 1,
    lastReview: "2024-03-12",
    performanceRating: 3.6
  },
  {
    id: 52,
    name: "Aria Morgan",
    email: "aria.morgan@company.com",
    department: "HR",
    role: "Talent Acquisition Specialist",
    salary: 69000,
    joinDate: "2023-02-10",
    isActive: true,
    skills: ["Technical Recruiting", "Sourcing", "Interview Coordination"],
    address: {
      city: "Denver",
      state: "CO",
      country: "USA"
    },
    projects: 2,
    lastReview: "2024-02-28",
    performanceRating: 3.9
  },
  {
    id: 53,
    name: "Sebastian Bell",
    email: "sebastian.bell@company.com",
    department: "Engineering",
    role: "Senior Full Stack Developer",
    salary: 122000,
    joinDate: "2019-08-05",
    isActive: true,
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    address: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    },
    projects: 9,
    lastReview: "2024-01-08",
    performanceRating: 4.9
  },
  {
    id: 54,
    name: "Luna Murphy",
    email: "luna.murphy@company.com",
    department: "Design",
    role: "Motion Designer",
    salary: 81000,
    joinDate: "2022-07-18",
    isActive: true,
    skills: ["After Effects", "Motion Graphics", "Animation"],
    address: {
      city: "Los Angeles",
      state: "CA",
      country: "USA"
    },
    projects: 3,
    lastReview: "2024-02-22",
    performanceRating: 4.1
  },
  {
    id: 55,
    name: "Carter Bailey",
    email: "carter.bailey@company.com",
    department: "Sales",
    role: "Enterprise Sales Executive",
    salary: 132000,
    joinDate: "2019-04-20",
    isActive: true,
    skills: ["Enterprise Sales", "Contract Negotiation", "Account Management"],
    address: {
      city: "New York",
      state: "NY",
      country: "USA"
    },
    projects: 7,
    lastReview: "2024-01-15",
    performanceRating: 4.7
  }
];


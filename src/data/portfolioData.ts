import intersiImg from "../assets/projects/Login - INTERSI.png";
import rt36Img from "../assets/projects/Landing - Website Administrasi RT.36.png";
import pariwisataImg from "../assets/projects/Explore More Pariwisata Balikpapan.png";
import kidecoMatrixImg from "../assets/projects/Dashboard - Kideco Matrix.png";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  keyFeatures: string[];
  technicalChallenges: string[];
  techStack: string[];
  image: string;
  demoUrl?: string;
  githubUrl: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: "Advanced" | "Intermediate" | "Proficient";
    iconName: string;
  }[];
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  degree: string;
  description: string;
  highlights: string[];
  type: "education" | "certification";
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Taufik Ilham",
    role: "Web Developer",
    subtitle:
      "Specializing in robust RESTful APIs, microservices architecture, efficient database schemas, and scalable backend infrastructure.",
    bio: "Lulusan prodi Sistem Informasi di Institut Teknologi Kalimantan (ITK) yang berfokus pada Web Development. Berpengalaman merancang arsitektur server, RESTful API yang aman dan terstruktur, serta pengolahan basis data relasional & non-relasional. Berkomitmen pada performa tinggi, efisiensi sistem, serta pengintegrasian infrastruktur cloud & containerization.",
    location: "Balikpapan, Indonesia",
    email: "ilham1994.it@gmail.com",
    phone: "+62 853-8743-2115",
    github: "https://github.com/paylays",
    linkedin: "https://www.linkedin.com/in/taufikilham/",
    facebook:
      "https://www.facebook.com/profile.php?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=100080858852174&sk=about",
    twitter: "https://x.com/payylayss",
    cvUrl: "/src/assets/CV ATS - Taufik Ilham.pdf",
    availableForWork: true,
  },

  softSkills: [
    "Problem Solving",
    "Critical Thinking",
    "Communication",
    "Teamwork",
    "Collaboration",
    "Adaptability",
    "Continuous Learning",
    "Leadership",
    "Decision Making",
    "Flexibility",
    "Project Management",
  ],

  aboutHighlights: [
    {
      title: "Backend & API Engineering",
      description:
        "Perancangan RESTful API & mikroservis aman, cepat, dan scalable menggunakan Node.js, Laravel, serta Python.",
    },
    {
      title: "Database & Schema Architecture",
      description:
        "Desain skema basis data relasional & NoSQL terstruktur dengan pemodelan relasi dan kueri yang efisien.",
    },
    {
      title: "System Problem Solver",
      description:
        "Pendekatan analitis dan pemikiran kritis dalam analisis logika bisnis, alur kerja sistem, dan penanganan bug.",
    },
    {
      title: "Modern Workflow & DevOps",
      description:
        "Pengelolaan versi dengan Git/GitHub, containerization dengan Docker, serta penyebaran layanan di Cloud.",
    },
  ],

  // 4 Skill Categories as specified by user
  skillCategories: [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: "Advanced", iconName: "Layout" },
        { name: "CSS3", level: "Advanced", iconName: "Css3" },
        { name: "React.js", level: "Advanced", iconName: "Code2" },
        { name: "Next.js", level: "Intermediate", iconName: "Nextjs" },
        { name: "Vue.js", level: "Intermediate", iconName: "Vue" },
        { name: "Vite", level: "Advanced", iconName: "Zap" },
        { name: "Tailwind CSS", level: "Advanced", iconName: "Palette" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: "Advanced", iconName: "Server" },
        { name: "Laravel", level: "Advanced", iconName: "Laravel" },
        { name: "PHP", level: "Advanced", iconName: "Php" },
        { name: "Python", level: "Intermediate", iconName: "Python" },
        { name: "FastAPI", level: "Intermediate", iconName: "FastApi" },
        { name: "RESTful API", level: "Advanced", iconName: "Globe" },
      ],
    },
    {
      title: "Database Management",
      skills: [
        { name: "MySQL", level: "Advanced", iconName: "Mysql" },
        { name: "PostgreSQL", level: "Advanced", iconName: "Database" },
        { name: "MongoDB", level: "Intermediate", iconName: "Layers" },
        {
          name: "Firebase Firestore",
          level: "Intermediate",
          iconName: "Firebase",
        },
        { name: "Supabase", level: "Intermediate", iconName: "Supabase" },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "GitHub", level: "Advanced", iconName: "Github" },
        { name: "Postman", level: "Advanced", iconName: "Send" },
        { name: "Figma", level: "Intermediate", iconName: "Figma" },
        { name: "Docker", level: "Intermediate", iconName: "Docker" },
        {
          name: "Google Cloud Platform",
          level: "Intermediate",
          iconName: "Gcp",
        },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "proj-1",
      title: "Kideco Matrix (Contractor Fuel Ratio Monitoring & Analytics)",
      shortDescription:
        "🏆 Juara 2 Hackathon KIC 2026 — Sistem Monitoring Fuel Ratio & Simulator Penyelarasan Operasional Tambang.",
      fullDescription:
        "Platform sistem informasi monitoring efisiensi Fuel Ratio (FR) kontraktor tambang berbasis Standar Parameter Operasional (SPO) yang berhasil meraih JUARA 2 Kategori Lomba Hackathon KIDECO Innovation Challenge (KIC) 2026 (Sertifikat No. 2618/IT10.1/AK.05/2026 oleh PT Kideco Jaya Agung - Indika Energy Group). Sistem ini melakukan analisis dekomposisi deterministik atas selisih 17% konsumsi bahan bakar, validasi guardrail input SPO otomatis, perbandingan multi-kontraktor, serta simulasi interaktif penyelarasan parameter operasional (produktivitas, populasi unit support, & jarak angkut).",
      problemStatement:
        "Forecast Fuel Ratio operasional tambang membengkak over 17% dari rencana tahunan tanpa transparansi akar penyebab (low load alat produksi vs populasi unit support/dewatering) serta risiko klaim kelebihan konsumsi bahan bakar oleh kontraktor.",
      keyFeatures: [
        "🏆 Juara 2 Kategori Lomba Hackathon KIDECO Innovation Challenge (KIC) 2026",
        "Dashboard Monitoring Multi-Kontraktor & breakdown FR per aktivitas (Loading, Hauling, Supporting, Dewatering)",
        "Dekomposisi Selisih Deterministik untuk mengurai selisih konsumsi LPH vs produktivitas",
        "Guardrail Validasi SPO Otomatis untuk mendeteksi low load, LPH out-of-bound, & integritas jam kerja",
        "Simulator Penyelarasan Interaktif untuk proyeksi penurunan Fuel Ratio secara real-time",
        "Audit Trail & Alur Approval Terkunci (Draft -> Diajukan -> Disetujui Kideco) pencegah manipulasi data",
      ],
      technicalChallenges: [
        "Mengolah 51.888+ baris data operasional PostgreSQL dengan calculation engine deterministik real-time tanpa menyimpan nilai turunan FR di database",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      image: kidecoMatrixImg,
      githubUrl: "https://github.com/paylays/initial_d",
      featured: true,
    },
    {
      id: "proj-2",
      title: "INTERSI-ITK (Internship Sistem Informasi ITK)",
      shortDescription:
        "Sistem Informasi Manajemen Kerja Praktik & Magang Mahasiswa Sistem Informasi ITK.",
      fullDescription:
        "Platform sistem informasi terpadu yang memfasilitasi alur pengajuan, verifikasi dokumen, alokasi dosen pembimbing, serta penilaian kerja praktik mahasiswa Sistem Informasi Institut Teknologi Kalimantan.",
      problemStatement:
        "Proses administrasi kerja praktik sebelumnya dilakukan secara manual sehingga membutuhkan waktu lama dalam verifikasi berkas dan pemantauan status magang.",
      keyFeatures: [
        "Manajemen alur pengajuan & verifikasi berkas magang online",
        "Penjadwalan seminar & alokasi pembimbing otomatis",
        "Dashboard terpisah untuk Mahasiswa, Dosen, dan Admin Prodi",
        "Notifikasi status pengajuan & integrasi ekspor rekapitulasi data",
      ],
      technicalChallenges: [
        "Merancang alur otorisasi berbasis peran (RBAC) yang aman untuk 3 jenis peran pengguna berbeda",
        "Mengoptimalkan arsitektur basis data relasional untuk menjaga integritas data pengajuan",
      ],
      techStack: [
        "Laravel",
        "PHP",
        "MySQL",
        "Bootstrap / Tailwind",
        "RESTful API",
      ],
      image: intersiImg,
      demoUrl: "https://intersi-itk.myst-tech.com",
      githubUrl: "https://github.com/paylays/sim-kp",
      featured: true,
    },
    {
      id: "proj-3",
      title: "SI-RT (Sistem Informasi RT 36 Wonorejo)",
      shortDescription:
        "Sistem Pelayanan Digital Kependudukan dan Administrasi Keuangan RT 36 Wonorejo.",
      fullDescription:
        "Aplikasi layanan mandiri warga RT 36 Wonorejo Balikpapan untuk pengajuan surat pengantar, pengumuman warga, serta transparansi iuran kas lingkungan.",
      problemStatement:
        "Warga kesulitan mendapatkan informasi pengumuman dan surat pengantar secara cepat tanpa harus datang langsung ke rumah Ketua RT.",
      keyFeatures: [
        "Pengajuan surat keterangan kependudukan online",
        "Modul pencatatan kas RT & laporan keuangan transparan",
        "Papan pengumuman kegiatan & jadwal ronda malam warga",
        "Responsive mobile-friendly UI",
      ],
      technicalChallenges: [
        "Menyediakan antarmuka yang sangat simpel agar ramah digunakan oleh warga dari berbagai kelompok usia",
      ],
      techStack: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
      image: rt36Img,
      demoUrl: "https://rt36-wonorejo.my.id",
      githubUrl: "https://github.com/paylays/administrasi-rt",
      featured: true,
    },
    {
      id: "proj-4",
      title: "SITA-BPP (Sistem Informasi Pariwisata Kota Balikpapan)",
      shortDescription:
        "Portal Informasi Destinasi Wisata, Kuliner & Ekowisata Kota Balikpapan.",
      fullDescription:
        "Platform promosi dan direktori tempat wisata, kuliner lokal, fasilitas umum, dan acara kebudayaan Kota Balikpapan yang dilengkapi dengan peta lokasi interaktif.",
      problemStatement:
        "Informasi tempat wisata dan event kebudayaan di Balikpapan masih tersebar di banyak kanal sehingga wisatawan luar daerah kesulitan membuat rencana kunjungan.",
      keyFeatures: [
        "Direktori destinasi wisata dengan kategorisasi objek alam, kuliner, & budaya",
        "Filter pencarian cepat berdasarkan lokasi dan rating pengunjung",
        "Integrasi peta interaktif peta lokasi & petunjuk arah",
        "CMS Admin untuk pembaruan data destinasi & event wisata",
      ],
      technicalChallenges: [
        "Mengintegrasikan API peta dan mengoptimalkan pemuatan gambar destinasi resolusi tinggi",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      image: pariwisataImg,
      githubUrl: "https://github.com/paylays/sita-bpp",
      featured: false,
    },
  ] as Project[],

  // Ordered from newest (2026 -> 2022) as requested
  educationTimeline: [
    {
      id: "cert-4",
      period: "2026",
      institution: "PT Kideco Jaya Agung (Indika Energy Group)",
      degree: "Juara 2 Kategori Lomba Hackathon - KIDECO Innovation Challenge 2026",
      description:
        "Meraih Juara 2 dalam kompetisi Hackathon KIDECO Innovation Challenge (KIC) 2026 dengan membangun Kideco Matrix, sistem monitoring analytics Fuel Ratio berbasis Standar Parameter Operasional (SPO).",
      highlights: [
        "Sertifikat Resmi No. 2618/IT10.1/AK.05/2026 dari HSE & Sustainability Director PT Kideco Jaya Agung",
        "Mengembangkan dashboard monitoring multi-kontraktor, validasi SPO otomatis, dekomposisi selisih 17% FR, dan simulator penyelarasan operasional tambang",
      ],
      type: "certification",
    },
    {
      id: "cert-3",
      period: "2024",
      institution: "HMSI ITK (Himpunan Mahasiswa Sistem Informasi)",
      degree: "Sertifikat Pelatihan UI/UX Design - EKSPRESI 2024",
      description:
        "Pelatihan Edukasi dan Pelatihan Kreatif Sistem Informasi (EKSPRESI) dengan tema 'From Idea to Reality: Transforming Ideas into Visual with Figma'.",
      highlights: [
        "Sertifikat Resmi No. 2125/SFT-Pst/MEDFO/SYNERGIA/HMSI/I/2025 dari Himpunan Mahasiswa Sistem Informasi ITK",
        "Pelatihan praktis perancangan antarmuka, wireframing visual, dan prototyping interaktif berbasis User-Centered Design menggunakan Figma",
      ],
      type: "certification",
    },
    {
      id: "cert-2",
      period: "2023",
      institution: "HMSI ITK (Himpunan Mahasiswa Sistem Informasi)",
      degree: "Sertifikat Workshop Full-Stack Web Developer - WORKER 2023",
      description:
        "Workshop Keprofesian (WORKER) dengan tema 'Becoming a Full-Stack Developer: A Comprehensive Learning Adventure'.",
      highlights: [
        "Sertifikat Resmi No. 1259/SFT-Pst/WORKER/BPH/MANSION/HMSI/IX/2023 dari HMSI ITK",
        "Pembekalan komprehensif alur kerja pengembang web full-stack, arsitektur frontend & backend, serta integrasi sistem",
      ],
      type: "certification",
    },
    {
      id: "cert-1",
      period: "2022",
      institution: "Kominfo x Google (Digital Talent Scholarship)",
      degree: "Sertifikat Pelatihan Google Digital Entrepreneurship (DEA Kominfo)",
      description:
        "Program Digital Entrepreneurship Academy (DEA) - Digital Talent Scholarship 2022 kerja sama Kominfo, Grow with Google, dan ITK Balikpapan.",
      highlights: [
        "Sertifikat Pelatihan Resmi No. DEA/2022/4679/145467935101-7 oleh Badan Penelitian & Pengembangan SDM Kominfo",
        "Pembekalan strategi pemasaran digital (Plan Your Online Business Strategy) dan pengelolaan toko online (Build Your Online Shop)",
      ],
      type: "certification",
    },
    {
      id: "edu-1",
      period: "2022 - 2026",
      institution: "Institut Teknologi Kalimantan (ITK)",
      degree: "Sarjana Komputer (S.Kom) - Program Studi Sistem Informasi",
      description:
        "Menempuh pendidikan Sarjana Komputer di ITK Balikpapan dengan fokus pada Rekayasa Perangkat Lunak, Backend Web Development, Analisis Sistem Informasi, dan Manajemen Basis Data.",
      highlights: [
        "Academic IPK: 3.70 / 4.00",
        "Aktif dalam berbagai proyek sistem informasi kampus dan instansi publik",
        "Berfokus pada arsitektur sistem backend, API engineering, dan pengelolaan database",
      ],
      type: "education",
    },
  ] as EducationItem[],
};

export const PORTFOLIO_DATA_EN = {
  ...PORTFOLIO_DATA,
  personalInfo: {
    ...PORTFOLIO_DATA.personalInfo,
    subtitle:
      "Specializing in robust RESTful APIs, microservices architecture, efficient database schemas, and scalable backend infrastructure.",
    bio: "Information Systems graduate from Kalimantan Institute of Technology (ITK) focused on Web Development. Experienced in designing server architecture, secure RESTful APIs, and relational & NoSQL database management. Committed to high performance, system efficiency, and cloud infrastructure integration.",
  },
  aboutHighlights: [
    {
      title: "Backend & API Engineering",
      description:
        "Designing secure, fast, and scalable RESTful APIs & microservices using Node.js, Laravel, and Python.",
    },
    {
      title: "Database & Schema Architecture",
      description:
        "Structured relational & NoSQL database schema design with efficient entity modeling and query optimization.",
    },
    {
      title: "System Problem Solver",
      description:
        "Analytical approach and critical thinking in business logic analysis, system workflows, and bug resolution.",
    },
    {
      title: "Modern Workflow & DevOps",
      description:
        "Version control with Git/GitHub, containerization with Docker, and cloud service deployments.",
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "Kideco Matrix (Contractor Fuel Ratio Monitoring & Analytics)",
      shortDescription:
        "🏆 2nd Place Winner KIC 2026 Hackathon — Fuel Ratio Monitoring System & Mine Ops Alignment Simulator.",
      fullDescription:
        "Mine contractor Fuel Ratio (FR) efficiency monitoring web platform based on Standard Operating Parameters (SPO), which won 2nd Place in the KIDECO Innovation Challenge (KIC) 2026 Hackathon (Certificate No. 2618/IT10.1/AK.05/2026 by PT Kideco Jaya Agung - Indika Energy Group). Features a deterministic decomposition engine explaining the 17% fuel over-consumption variance, automated SPO input guardrails, multi-contractor benchmarking, and real-time operational parameter alignment simulation (productivity, support fleet population, & haulage distance).",
      problemStatement:
        "Mine operational Fuel Ratio forecast inflated over 17% from annual targets without clear root-cause breakdown (production equipment low-load vs support/dewatering fleet population) alongside financial risks of over-claim fuel consumption by contractors.",
      keyFeatures: [
        "🏆 2nd Place Winner of KIDECO Innovation Challenge (KIC) 2026 Hackathon",
        "Multi-Contractor Monitoring Dashboard & FR Breakdown by Activity (Loading, Hauling, Supporting, Dewatering)",
        "Deterministic Variance Decomposition isolating LPH consumption vs productivity ratios",
        "Automated SPO Validation Guardrails detecting low-load, out-of-bound LPH, & calendar-hour integrity",
        "Interactive Alignment Simulator projecting real-time Fuel Ratio reductions",
        "Audit Trail & Locked Approval Workflow (Draft -> Submitted -> Approved by Kideco) preventing data manipulation",
      ],
      technicalChallenges: [
        "Processing 51,888+ PostgreSQL operational rows with a real-time deterministic calculation engine without storing derived FR values in DB",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      image: kidecoMatrixImg,
      githubUrl: "https://github.com/paylays/initial_d",
      featured: true,
    },
    {
      id: "proj-2",
      title: "INTERSI-ITK (ITK Information Systems Internship Management)",
      shortDescription:
        "Internship & Field Work Management System for Information Systems Students at ITK.",
      fullDescription:
        "Integrated management system facilitating submission workflows, document verification, academic advisor allocation, and internship performance evaluation for Information Systems students at Kalimantan Institute of Technology.",
      problemStatement:
        "Previous internship administration processes were handled manually, causing delays in document verification and student internship tracking.",
      keyFeatures: [
        "Online internship document submission & verification workflow",
        "Automated seminar scheduling & academic advisor assignment",
        "Dedicated role-based dashboards for Students, Lecturers, and Dept Admin",
        "Real-time submission status notifications & data export integration",
      ],
      technicalChallenges: [
        "Designing secure Role-Based Access Control (RBAC) authorization for 3 distinct user roles",
        "Optimizing relational database schema to guarantee submission data integrity",
      ],
      techStack: [
        "Laravel",
        "PHP",
        "MySQL",
        "Bootstrap / Tailwind",
        "RESTful API",
      ],
      image: intersiImg,
      demoUrl: "https://intersi-itk.myst-tech.com",
      githubUrl: "https://github.com/paylays/sim-kp",
      featured: true,
    },
    {
      id: "proj-3",
      title: "SI-RT (RT 36 Wonorejo Digital Neighborhood System)",
      shortDescription:
        "Digital Citizen Service & Financial Administration System for RT 36 Wonorejo.",
      fullDescription:
        "Self-service neighborhood web application for residents of RT 36 Wonorejo Balikpapan to request official cover letters, view announcements, and track neighborhood fund transparency.",
      problemStatement:
        "Residents faced difficulties obtaining announcement updates and cover letters quickly without visiting the RT Head's residence in person.",
      keyFeatures: [
        "Online population cover letter request workflow",
        "RT cash bookkeeping module & transparent financial reporting",
        "Community announcement board & night patrol schedule tracker",
        "Responsive mobile-friendly UI design",
      ],
      technicalChallenges: [
        "Crafting an intuitive interface accessible for residents across all age groups",
      ],
      techStack: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
      image: rt36Img,
      demoUrl: "https://rt36-wonorejo.my.id",
      githubUrl: "https://github.com/paylays/administrasi-rt",
      featured: true,
    },
    {
      id: "proj-4",
      title: "SITA-BPP (Balikpapan Tourism Information System)",
      shortDescription:
        "Tourism, Culinary & Ecotourism Information Portal for Balikpapan City.",
      fullDescription:
        "Promotion and directory platform for tourist destinations, local culinary spots, public facilities, and cultural events in Balikpapan City, featuring an interactive map.",
      problemStatement:
        "Tourism and cultural event information in Balikpapan was scattered across fragmented channels, making it hard for out-of-town visitors to plan visits.",
      keyFeatures: [
        "Tourism destination directory categorized by nature, culinary, & culture",
        "Fast search filtering by location and visitor rating",
        "Interactive map integration with directions & pinpoints",
        "Admin CMS for updating destinations & event data",
      ],
      technicalChallenges: [
        "Integrating map APIs and optimizing high-resolution destination image loading performance",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      image: pariwisataImg,
      githubUrl: "https://github.com/paylays/sita-bpp",
      featured: false,
    },
  ] as Project[],
  educationTimeline: [
    {
      id: "cert-4",
      period: "2026",
      institution: "PT Kideco Jaya Agung (Indika Energy Group)",
      degree: "2nd Place Winner - Hackathon Category - KIDECO Innovation Challenge 2026",
      description:
        "Won 2nd Place in the KIDECO Innovation Challenge (KIC) 2026 Hackathon by engineering Kideco Matrix, an SPO-based Contractor Fuel Ratio Monitoring & Analytics platform.",
      highlights: [
        "Official Certificate No. 2618/IT10.1/AK.05/2026 issued by HSE & Sustainability Director of PT Kideco Jaya Agung",
        "Engineered multi-contractor dashboard, automatic SPO guardrails, 17% FR variance decomposition, and mine ops alignment simulator",
      ],
      type: "certification",
    },
    {
      id: "cert-3",
      period: "2024",
      institution: "HMSI ITK (Information Systems Student Association)",
      degree: "UI/UX Design Training Certification - EKSPRESI 2024",
      description:
        "Creative Information Systems Education & Training (EKSPRESI) themed 'From Idea to Reality: Transforming Ideas into Visual with Figma'.",
      highlights: [
        "Official Certificate No. 2125/SFT-Pst/MEDFO/SYNERGIA/HMSI/I/2025 issued by HMSI ITK",
        "Hands-on training in UI design, visual wireframing, and interactive prototyping with User-Centered Design using Figma",
      ],
      type: "certification",
    },
    {
      id: "cert-2",
      period: "2023",
      institution: "HMSI ITK (Information Systems Student Association)",
      degree: "Full-Stack Web Developer Workshop Certification - WORKER 2023",
      description:
        "Professional Workshop (WORKER) themed 'Becoming a Full-Stack Developer: A Comprehensive Learning Adventure'.",
      highlights: [
        "Official Certificate No. 1259/SFT-Pst/WORKER/BPH/MANSION/HMSI/IX/2023 issued by HMSI ITK",
        "Comprehensive training covering full-stack web developer workflows, frontend & backend architecture, and system integration",
      ],
      type: "certification",
    },
    {
      id: "cert-1",
      period: "2022",
      institution: "Kominfo x Google (Digital Talent Scholarship)",
      degree: "Google Digital Entrepreneurship Training Certificate (DEA Kominfo)",
      description:
        "Digital Entrepreneurship Academy (DEA) program under Kominfo Digital Talent Scholarship 2022 in collaboration with Grow with Google and ITK.",
      highlights: [
        "Official Certificate No. DEA/2022/4679/145467935101-7 issued by Kominfo HR Research & Development Board",
        "Training in online business marketing strategy (Plan Your Online Business Strategy) and e-commerce platform management (Build Your Online Shop)",
      ],
      type: "certification",
    },
    {
      id: "edu-1",
      period: "2022 - 2026",
      institution: "Kalimantan Institute of Technology (ITK)",
      degree: "Bachelor of Computer Science (S.Kom) - Information Systems",
      description:
        "Completed Bachelor's degree at ITK Balikpapan specializing in Software Engineering, Backend Web Development, Information Systems Analysis, and Database Management.",
      highlights: [
        "Academic GPA: 3.70 / 4.00",
        "Active in multiple campus and public institution software development projects",
        "Focused on backend system architecture, API engineering, and database optimization",
      ],
      type: "education",
    },
  ] as EducationItem[],
};

export const getPortfolioData = (lang: 'id' | 'en' = 'id') => {
  return lang === 'en' ? PORTFOLIO_DATA_EN : PORTFOLIO_DATA;
};

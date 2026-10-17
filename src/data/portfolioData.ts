import intersiImg from "../assets/projects/Login - INTERSI.png";
import rt36Img from "../assets/projects/Landing - Website Administrasi RT.36.png";
import pariwisataImg from "../assets/projects/Explore More Pariwisata Balikpapan.png";
import kidecoMatrixImg from "../assets/projects/Dashboard - Kideco Matrix.png";
import cvPdf from "../assets/Taufik-Ilham-CV.pdf";
import avatarImg from "../assets/profile-avatar.webp";
import type { Language } from "../context/LanguageContext";

// Every entry is written once with both languages side by side, so facts like
// the tech stack cannot drift apart between the English and Indonesian versions.
type Text = Record<Language, string>;
type TextList = Record<Language, string[]>;

export interface Project {
  id: string;
  title: string;
  tag: string;
  isAward?: boolean;
  summary: string;
  role?: string;
  description: string;
  problem?: string;
  features: string[];
  notes: string[];
  stack: string[];
  image?: string;
  demoUrl?: string;
  githubUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  period: string;
  highlights: string[];
  projectId?: string;
}

export interface Credential {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  isAward?: boolean;
}

export interface StackGroup {
  label: string;
  items: string[];
}

const PERSONAL_INFO = {
  name: "Taufik Ilham",
  location: "Balikpapan, Indonesia",
  email: "ilham1994.it@gmail.com",
  phone: "+62 853-8743-2115",
  github: "https://github.com/paylays",
  linkedin: "https://www.linkedin.com/in/taufikilham/",
  cvUrl: cvPdf,
  avatar: avatarImg,
};

interface ProjectSource {
  id: string;
  title: string;
  tag: Text;
  isAward?: boolean;
  summary: Text;
  role?: Text;
  description: Text;
  problem?: Text;
  features: TextList;
  notes: TextList;
  stack: string[];
  image?: string;
  demoUrl?: string;
  githubUrl: string;
}

const PROJECTS: ProjectSource[] = [
  {
    id: "kideco",
    title: "Kideco Matrix",
    tag: { en: "Hackathon, 2nd place", id: "Hackathon, Juara 2" },
    isAward: true,
    summary: {
      en: "Fuel ratio monitoring for mining contractors. 2nd place at the KIDECO Innovation Challenge 2026.",
      id: "Monitoring fuel ratio kontraktor tambang. Juara 2 KIDECO Innovation Challenge 2026.",
    },
    role: {
      en: "Frontend (React) and API integration, in a team",
      id: "Frontend (React) dan integrasi API, dalam tim",
    },
    description: {
      en: "A monitoring platform for the fuel ratio (FR) of mining contractors, based on Kideco's standard operating parameters (SPO). It explains why the fuel ratio forecast ran over plan, checks contractor data against the SPO and simulates how operational changes would bring the ratio down. It won 2nd place in the hackathon category of the KIDECO Innovation Challenge 2026 (certificate No. 2618/IT10.1/AK.05/2026, PT Kideco Jaya Agung, Indika Energy Group).",
      id: "Platform monitoring fuel ratio (FR) kontraktor tambang berbasis Standar Parameter Operasional (SPO) Kideco. Sistem ini menjelaskan penyebab forecast fuel ratio melebihi rencana, memvalidasi data kontraktor terhadap SPO, dan menyimulasikan dampak perubahan operasional terhadap penurunan rasio. Meraih Juara 2 kategori hackathon KIDECO Innovation Challenge 2026 (Sertifikat No. 2618/IT10.1/AK.05/2026, PT Kideco Jaya Agung, Indika Energy Group).",
    },
    problem: {
      en: "The mine's fuel ratio forecast was more than 17% over the annual plan, with no clear breakdown of the cause (low load on production equipment versus the number of support and dewatering units) and a risk of contractors over-claiming fuel.",
      id: "Forecast fuel ratio operasional tambang membengkak lebih dari 17% dari rencana tahunan tanpa transparansi akar penyebab (low load alat produksi vs populasi unit support/dewatering), serta ada risiko klaim kelebihan konsumsi bahan bakar oleh kontraktor.",
    },
    features: {
      en: [
        "Multi-contractor dashboard with the fuel ratio broken down by activity: loading, hauling, supporting and dewatering",
        "Deterministic variance decomposition that separates fuel use per hour (LPH) from productivity",
        "Automatic SPO checks that flag low load, out-of-range LPH and inconsistent working hours",
        "Interactive simulator that projects how the fuel ratio drops when operations change",
        "Audit trail and a locked approval flow (draft, submitted, approved by Kideco) that keeps approved data from being changed",
      ],
      id: [
        "Dashboard monitoring multi-kontraktor dengan breakdown fuel ratio per aktivitas: loading, hauling, supporting, dan dewatering",
        "Dekomposisi selisih deterministik untuk memisahkan konsumsi LPH dari produktivitas",
        "Validasi SPO otomatis untuk mendeteksi low load, LPH di luar batas, dan integritas jam kerja",
        "Simulator penyelarasan interaktif untuk memproyeksikan penurunan fuel ratio",
        "Audit trail dan alur approval terkunci (draft, diajukan, disetujui Kideco) agar data yang sudah disetujui tidak bisa diubah",
      ],
    },
    notes: {
      en: [
        "The backend calculates the fuel ratio on the fly from 51,888+ rows of operational data in PostgreSQL instead of storing derived values.",
        "My part was the React frontend and connecting it to the backend API.",
      ],
      id: [
        "Backend menghitung fuel ratio secara langsung dari 51.888+ baris data operasional PostgreSQL tanpa menyimpan nilai turunan di database.",
        "Bagian saya adalah frontend React dan integrasinya dengan API backend.",
      ],
    },
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    image: kidecoMatrixImg,
    githubUrl: "https://github.com/paylays/initial_d",
  },
  {
    id: "intersi",
    title: "INTERSI-ITK",
    tag: { en: "Thesis, in use", id: "Skripsi, digunakan" },
    summary: {
      en: "Internship management for ITK's Information Systems program, used by 40 to 60 students per period.",
      id: "Sistem manajemen kerja praktik Prodi Sistem Informasi ITK, digunakan 40 sampai 60 mahasiswa per periode.",
    },
    role: { en: "Solo, full stack", id: "Sendiri, full stack" },
    description: {
      en: "My thesis project. It replaces a manual internship process spread across Google Sheets, Google Forms and Google Classroom with one system for submissions, document checks, supervisor assignment, monitoring and grading. It serves four roles: program coordinator, academic staff, lecturers and students. I built it using the Extreme Programming method.",
      id: "Proyek skripsi saya. Sistem ini menggantikan proses kerja praktik manual yang tersebar di Google Spreadsheet, Google Form, dan Google Classroom menjadi satu sistem untuk pengajuan, verifikasi dokumen, penentuan dosen pembimbing, monitoring, dan penilaian. Ada empat peran pengguna: koordinator prodi, tendik, dosen, dan mahasiswa. Dikembangkan dengan metode Extreme Programming.",
    },
    problem: {
      en: "Internship administration was manual and slow, split across three platforms, and student progress was hard to monitor.",
      id: "Administrasi kerja praktik masih manual dan memakan waktu, tersebar di tiga platform berbeda, dan progres mahasiswa sulit dipantau.",
    },
    features: {
      en: [
        "Online submission and document verification",
        "Seminar scheduling and supervisor assignment",
        "A separate dashboard for each of the four roles",
        "Status notifications and data export",
      ],
      id: [
        "Pengajuan dan verifikasi berkas kerja praktik secara online",
        "Penjadwalan seminar dan penentuan dosen pembimbing",
        "Dashboard terpisah untuk keempat peran",
        "Notifikasi status pengajuan dan ekspor rekap data",
      ],
    },
    notes: {
      en: [
        "Role-based access control for the four user roles",
        "A relational schema designed to keep submission data consistent",
      ],
      id: [
        "Otorisasi berbasis peran (RBAC) untuk keempat peran pengguna",
        "Skema basis data relasional yang menjaga konsistensi data pengajuan",
      ],
    },
    stack: ["Laravel", "Vue", "Inertia.js", "MySQL"],
    image: intersiImg,
    demoUrl: "https://intersi-itk.myst-tech.com",
    githubUrl: "https://github.com/paylays/sim-kp",
  },
  {
    id: "sirt",
    title: "SI-RT",
    tag: { en: "In use", id: "Digunakan" },
    summary: {
      en: "Letter requests and neighborhood administration for RT 36 Wonorejo, used by 200+ residents.",
      id: "Pengajuan surat dan administrasi RT 36 Wonorejo, digunakan oleh 200+ warga.",
    },
    role: { en: "Solo, full stack", id: "Sendiri, full stack" },
    description: {
      en: "A self-service site for residents of RT 36 Wonorejo, Balikpapan. Residents request cover letters online, read announcements and see how the neighborhood fund is used, without visiting the head of the RT in person.",
      id: "Layanan mandiri untuk warga RT 36 Wonorejo, Balikpapan. Warga dapat mengajukan surat pengantar secara online, membaca pengumuman, dan melihat penggunaan kas RT tanpa harus datang ke rumah Ketua RT.",
    },
    problem: {
      en: "Residents had to visit the head of the RT in person to get a cover letter or hear about announcements.",
      id: "Warga kesulitan mendapatkan informasi pengumuman dan surat pengantar secara cepat tanpa harus datang langsung ke rumah Ketua RT.",
    },
    features: {
      en: [
        "Online requests for residence cover letters",
        "Cash bookkeeping with a public financial report",
        "Announcement board and night patrol schedule",
        "Layout that works on phones",
      ],
      id: [
        "Pengajuan surat keterangan kependudukan secara online",
        "Pencatatan kas RT dan laporan keuangan yang transparan",
        "Papan pengumuman kegiatan dan jadwal ronda malam",
        "Tampilan yang nyaman di ponsel",
      ],
    },
    notes: {
      en: ["An interface simple enough for residents of every age"],
      id: ["Antarmuka yang sederhana agar mudah digunakan warga dari berbagai usia"],
    },
    stack: ["Laravel", "PHP", "MySQL"],
    image: rt36Img,
    demoUrl: "https://rt36-wonorejo.my.id",
    githubUrl: "https://github.com/paylays/administrasi-rt",
  },
  {
    id: "sita",
    title: "SITA-BPP",
    tag: { en: "Internship", id: "Magang" },
    summary: {
      en: "A central directory of tourist destinations in Balikpapan, built during my internship.",
      id: "Direktori terpusat destinasi wisata Kota Balikpapan, dibangun saat magang.",
    },
    role: { en: "Solo, full stack", id: "Sendiri, full stack" },
    description: {
      en: "A full-stack prototype I built during my internship at Dinas Pemuda Olahraga dan Pariwisata Kota Balikpapan, from requirements analysis to deployment. It collects nature, culinary and cultural spots, public facilities and events on one site with a map, for residents and tourists.",
      id: "Prototipe full-stack yang saya bangun saat magang di Dinas Pemuda Olahraga dan Pariwisata Kota Balikpapan, dari analisis kebutuhan hingga deployment. Situs ini mengumpulkan wisata alam, kuliner, budaya, fasilitas umum, dan acara dalam satu tempat dengan peta, untuk warga dan wisatawan.",
    },
    problem: {
      en: "The agency's tourism guidebook only existed in print and did not reach the whole city, so residents and tourists had no single place to find information about destinations in Balikpapan.",
      id: "Buku panduan wisata dinas hanya tersedia dalam bentuk cetak dan tidak menjangkau seluruh kota, sehingga warga dan wisatawan tidak memiliki satu sumber informasi terpusat tentang destinasi wisata di Balikpapan.",
    },
    features: {
      en: [
        "Destination directory grouped into nature, culinary and culture",
        "Search filters by location and visitor rating",
        "Interactive map with directions",
        "Admin CMS for destinations and events",
      ],
      id: [
        "Direktori destinasi wisata dengan kategori alam, kuliner, dan budaya",
        "Filter pencarian berdasarkan lokasi dan rating pengunjung",
        "Peta interaktif dengan petunjuk arah",
        "CMS admin untuk memperbarui data destinasi dan acara",
      ],
    },
    notes: {
      en: ["Integrating a map API and keeping high-resolution destination photos quick to load"],
      id: ["Mengintegrasikan API peta dan mengoptimalkan pemuatan foto destinasi beresolusi tinggi"],
    },
    stack: ["React", "Node.js", "Express", "MySQL"],
    image: pariwisataImg,
    githubUrl: "https://github.com/paylays/sita-bpp",
  },
  {
    id: "myhotel",
    title: "myhotel",
    tag: { en: "Coursework", id: "Tugas kuliah" },
    summary: {
      en: "Online hotel booking, built for the Cloud Computing course.",
      id: "Aplikasi reservasi hotel online, dibuat untuk mata kuliah Cloud Computing.",
    },
    role: {
      en: "Backend and database (Flask, PostgreSQL), in a team",
      id: "Backend dan basis data (Flask, PostgreSQL), dalam tim",
    },
    description: {
      en: "A web app for booking hotel rooms online. Guests choose check-in and check-out dates and the number of guests, then see which rooms are available. Built as the major assignment for the Cloud Computing course over about half a semester.",
      id: "Aplikasi web untuk memesan kamar hotel secara online. Tamu memilih tanggal check-in, check-out, dan jumlah tamu, lalu melihat kamar yang tersedia. Dibuat sebagai tugas besar mata kuliah Cloud Computing selama kurang lebih setengah semester.",
    },
    features: {
      en: [
        "Home page with a short introduction to the hotel",
        "Booking form with check-in and check-out dates and number of guests",
        "Room availability check",
      ],
      id: [
        "Halaman utama dengan informasi singkat tentang hotel",
        "Form booking dengan tanggal check-in, check-out, dan jumlah tamu",
        "Pengecekan ketersediaan kamar",
      ],
    },
    notes: { en: [], id: [] },
    stack: ["React", "Vite", "Flask", "PostgreSQL"],
    githubUrl: "https://github.com/paylays/myhotel",
  },
];

interface ExperienceSource {
  id: string;
  role: Text;
  organization: Text;
  organizationUrl?: string;
  period: Text;
  highlights: TextList;
  projectId?: string;
}

const ITK = { en: "Institut Teknologi Kalimantan", id: "Institut Teknologi Kalimantan" };
const HMSI = {
  en: "HMSI ITK (Information Systems Student Association)",
  id: "HMSI ITK (Himpunan Mahasiswa Sistem Informasi)",
};
const INSPACE = {
  en: "INSPACE (Information System Path to Creativity), HMSI ITK",
  id: "INSPACE (Information System Path to Creativity), HMSI ITK",
};

// Newest first
const WORK: ExperienceSource[] = [
  {
    id: "ta-cloud",
    role: { en: "Teaching Assistant, Cloud Computing", id: "Asisten Dosen, Cloud Computing" },
    organization: ITK,
    period: { en: "Jul 2025 - Dec 2025", id: "Jul 2025 - Des 2025" },
    highlights: {
      en: [
        "Helped students build web apps with Laravel, React and MySQL",
        "Supported cloud deployment and CI/CD with GitHub Actions",
        "Ran the practical sessions together with the lecturers",
      ],
      id: [
        "Membantu mahasiswa membangun aplikasi web dengan Laravel, React, dan MySQL",
        "Mendampingi deployment ke cloud dan CI/CD dengan GitHub Actions",
        "Mengelola sesi praktikum bersama dosen",
      ],
    },
  },
  {
    id: "ta-se",
    role: { en: "Teaching Assistant, Software Engineering", id: "Asisten Dosen, Software Engineering" },
    organization: ITK,
    period: { en: "Jan 2025 - Jun 2025", id: "Jan 2025 - Jun 2025" },
    highlights: {
      en: [
        "Assisted the course across its 16 weeks",
        "Guided students in writing software requirements (SKPL) and design specifications (DPPL)",
        "Coached students on development methodologies and UML-based analysis",
      ],
      id: [
        "Mendampingi perkuliahan selama 16 minggu",
        "Membimbing mahasiswa menyusun Spesifikasi Kebutuhan Perangkat Lunak (SKPL) dan Deskripsi Perancangan Perangkat Lunak (DPPL)",
        "Membimbing penerapan metodologi pengembangan perangkat lunak dan analisis berbasis UML",
      ],
    },
  },
  {
    id: "internship",
    role: { en: "IT Support Intern", id: "Magang IT Support" },
    organization: {
      en: "Dinas Pemuda Olahraga dan Pariwisata Kota Balikpapan",
      id: "Dinas Pemuda Olahraga dan Pariwisata Kota Balikpapan",
    },
    period: { en: "Dec 2024 - Feb 2025", id: "Des 2024 - Feb 2025" },
    highlights: {
      en: [
        "Supported staff in the tourism division with laptops, printers and basic network issues",
        "Compiled tourism data and automated registration for Pokdarwis (tourism awareness groups)",
        "Noticed the agency's tourism guidebook only existed in print, then built SITA-BPP, a full-stack prototype, from requirements to deployment",
      ],
      id: [
        "Memberikan dukungan IT untuk staf bidang pariwisata: laptop, printer, dan masalah jaringan dasar",
        "Menyusun data pariwisata dan mengotomatiskan pendaftaran Pokdarwis (kelompok sadar wisata)",
        "Melihat bahwa buku panduan wisata dinas hanya tersedia dalam bentuk cetak, lalu membangun SITA-BPP, prototipe full-stack, dari analisis kebutuhan hingga deployment",
      ],
    },
    projectId: "sita",
  },
];

// Newest first
const ORGANIZATIONS: ExperienceSource[] = [
  {
    id: "treasurer",
    role: { en: "Treasurer", id: "Bendahara" },
    organization: HMSI,
    period: { en: "Aug 2024 - Jun 2025", id: "Agu 2024 - Jun 2025" },
    highlights: {
      en: [
        "Managed the association's budget, cash flow and financial reports",
        "Planned budgets with division heads and tracked spending against them",
      ],
      id: [
        "Mengelola anggaran, arus kas, dan laporan keuangan himpunan",
        "Menyusun anggaran bersama kepala divisi dan memantau pengeluaran agar sesuai anggaran",
      ],
    },
  },
  {
    id: "inspace-head",
    role: { en: "Head of Sponsorship Division", id: "Kepala Divisi Sponsorship" },
    organization: INSPACE,
    organizationUrl: "https://inspace.itk.ac.id",
    period: { en: "Dec 2023 - Aug 2024", id: "Des 2023 - Agu 2024" },
    highlights: {
      en: [
        "Led the sponsorship team: wrote proposals, pitched to corporate and institutional partners and tracked progress toward the funding target",
        "Maintained relationships with sponsors beyond a single event",
      ],
      id: [
        "Memimpin tim sponsorship: menyusun proposal, presentasi ke mitra korporat dan institusi, serta memantau target pendanaan",
        "Menjaga hubungan jangka panjang dengan sponsor",
      ],
    },
  },
  {
    id: "inspace-staff",
    role: { en: "Sponsorship Division Staff", id: "Staf Divisi Sponsorship" },
    organization: INSPACE,
    period: { en: "Mar 2023 - Dec 2023", id: "Mar 2023 - Des 2023" },
    highlights: {
      en: [
        "Found and approached potential sponsors and prepared proposals",
        "Handled communication with sponsors and helped the division reach its funding target",
      ],
      id: [
        "Mencari dan menghubungi calon sponsor serta menyiapkan proposal",
        "Menangani komunikasi dengan sponsor dan membantu divisi mencapai target pendanaan",
      ],
    },
  },
];

const localizeExperience = (lang: Language) => (e: ExperienceSource): ExperienceItem => ({
  id: e.id,
  role: e.role[lang],
  organization: e.organization[lang],
  organizationUrl: e.organizationUrl,
  period: e.period[lang],
  highlights: e.highlights[lang],
  projectId: e.projectId,
});

const EDUCATION = {
  degree: {
    en: "Bachelor of Computer Science (S.Kom), Information Systems",
    id: "Sarjana Komputer (S.Kom), Sistem Informasi",
  },
  institution: "Institut Teknologi Kalimantan (ITK)",
  period: "2022-2026",
  gpa: "3.70 / 4.00",
  thesisTitle:
    "Pengembangan Sistem Informasi Manajemen Kerja Praktik dengan Metode Extreme Programming pada Program Studi Sistem Informasi ITK",
  thesisTranslation: {
    en: "Developing an internship management information system using Extreme Programming for the ITK Information Systems program",
    id: "",
  },
  thesisProjectId: "intersi",
};

const CREDENTIALS: {
  id: string;
  name: Text;
  issuer: Text;
  date: Text;
  credentialId?: string;
  isAward?: boolean;
}[] = [
  {
    id: "kic-2026",
    name: {
      en: "2nd place, Hackathon category, KIDECO Innovation Challenge 2026",
      id: "Juara 2 Kategori Hackathon, KIDECO Innovation Challenge 2026",
    },
    issuer: {
      en: "PT Kideco Jaya Agung (Indika Energy Group)",
      id: "PT Kideco Jaya Agung (Indika Energy Group)",
    },
    date: { en: "2026", id: "2026" },
    credentialId: "2618/IT10.1/AK.05/2026",
    isAward: true,
  },
  {
    id: "dicoding-js",
    name: { en: "JavaScript Programming", id: "JavaScript Programming" },
    issuer: { en: "Dicoding Indonesia", id: "Dicoding Indonesia" },
    date: { en: "Feb 2023", id: "Feb 2023" },
  },
  {
    id: "ekspresi-2024",
    name: {
      en: "UI/UX Design Workshop (EKSPRESI 2024)",
      id: "Workshop UI/UX Design (EKSPRESI 2024)",
    },
    issuer: {
      en: "HMSI, Institut Teknologi Kalimantan",
      id: "HMSI, Institut Teknologi Kalimantan",
    },
    date: { en: "Oct 2024", id: "Okt 2024" },
    credentialId: "2125/SFT-Pst/MEDFO/SYNERGIA/HMSI/I/2025",
  },
  {
    id: "worker-2023",
    name: {
      en: "Professionalization Workshop: Becoming a Full Stack Developer (WORKER 2023)",
      id: "Workshop Keprofesian: Becoming a Full Stack Developer (WORKER 2023)",
    },
    issuer: {
      en: "HMSI, Institut Teknologi Kalimantan",
      id: "HMSI, Institut Teknologi Kalimantan",
    },
    date: { en: "Oct 2023", id: "Okt 2023" },
    credentialId: "1259/SFT-Pst/WORKER/BPH/MANSION/HMSI/IX/2023",
  },
  {
    id: "dea-2022",
    name: { en: "Google Digital Entrepreneurship", id: "Google Digital Entrepreneurship" },
    issuer: {
      en: "Digital Talent Scholarship, Kominfo",
      id: "Digital Talent Scholarship, Kominfo",
    },
    date: { en: "Dec 2022", id: "Des 2022" },
    credentialId: "DEA/2022/4679/145467935101-7",
  },
];

const STACK: { label: Text; items: string[] }[] = [
  {
    label: { en: "Frontend", id: "Frontend" },
    items: ["HTML", "CSS", "React", "Next.js", "Vue", "Inertia.js", "Vite", "Tailwind CSS"],
  },
  {
    label: { en: "Backend", id: "Backend" },
    items: ["Node.js (Express)", "Laravel (PHP)", "Python (Flask, FastAPI)", "REST APIs"],
  },
  {
    label: { en: "Databases", id: "Basis data" },
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase Firestore", "Supabase"],
  },
  {
    label: { en: "Tools", id: "Tools" },
    items: ["Git", "GitHub", "GitHub Actions", "Docker", "Postman", "Figma", "Google Cloud Platform"],
  },
];

export const getPortfolioData = (lang: Language) => ({
  personalInfo: PERSONAL_INFO,
  projects: PROJECTS.map(
    (p): Project => ({
      id: p.id,
      title: p.title,
      tag: p.tag[lang],
      isAward: p.isAward,
      summary: p.summary[lang],
      role: p.role?.[lang],
      description: p.description[lang],
      problem: p.problem?.[lang],
      features: p.features[lang],
      notes: p.notes[lang],
      stack: p.stack,
      image: p.image,
      demoUrl: p.demoUrl,
      githubUrl: p.githubUrl,
    }),
  ),
  work: WORK.map(localizeExperience(lang)),
  organizations: ORGANIZATIONS.map(localizeExperience(lang)),
  education: {
    degree: EDUCATION.degree[lang],
    institution: EDUCATION.institution,
    period: EDUCATION.period,
    gpa: EDUCATION.gpa,
    thesisTitle: EDUCATION.thesisTitle,
    thesisTranslation: EDUCATION.thesisTranslation[lang],
    thesisProjectId: EDUCATION.thesisProjectId,
  },
  credentials: CREDENTIALS.map(
    (c): Credential => ({
      id: c.id,
      name: c.name[lang],
      issuer: c.issuer[lang],
      date: c.date[lang],
      credentialId: c.credentialId,
      isAward: c.isAward,
    }),
  ),
  stack: STACK.map((g): StackGroup => ({ label: g.label[lang], items: g.items })),
});

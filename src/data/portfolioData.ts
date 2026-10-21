import intersiImg from "../assets/projects/Login - INTERSI.png";
import rt36Img from "../assets/projects/Landing - Website Administrasi RT.36.png";
import pariwisataImg from "../assets/projects/Explore More Pariwisata Balikpapan.png";
import kidecoMatrixImg from "../assets/projects/Dashboard - Kideco Matrix.png";
import stubImg from "../assets/projects/Home - Stub.png";
import giliranImg from "../assets/projects/Display - Giliran.png";
import cvPdf from "../assets/Taufik-Ilham-CV-EN.pdf";
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
  // The header uses the short name; the intro and footer keep the full one
  shortName: "Ilham",
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
    id: "stub",
    title: "Stub",
    tag: { en: "Personal project", id: "Proyek pribadi" },
    summary: {
      en: "A URL shortener that needs no account. Each short link comes with a QR code and a private stats page.",
      id: "Pemendek URL tanpa akun. Setiap link pendek dilengkapi kode QR dan halaman statistik privat.",
    },
    role: { en: "Solo, full stack", id: "Sendiri, full stack" },
    description: {
      en: "Stub turns a long web address into a short link and counts its clicks, with no sign-up. The stats for each link sit on a private page that opens through a secret link, shown once when the short link is created. The live site runs on Vercel with a Neon Postgres database.",
      id: "Stub mengubah alamat web yang panjang menjadi link pendek dan mencatat jumlah kliknya, tanpa perlu mendaftar. Statistik tiap link ada di halaman privat yang dibuka lewat link rahasia, dan link rahasia itu hanya ditampilkan sekali saat link pendek dibuat. Versi publiknya berjalan di Vercel dengan database Neon Postgres.",
    },
    features: {
      en: [
        "7-character short links for most http and https addresses",
        "Optional expiry date, with a clear notice for visitors once the link has expired",
        "QR code for each short link, downloadable as a PNG",
        "Private stats page with clicks and unique visitors per day for the last 30 days, plus breakdowns by device, browser and operating system",
        "Light and dark themes that follow the device setting, with a switch in the header",
      ],
      id: [
        "Link pendek 7 karakter untuk sebagian besar alamat http dan https",
        "Tanggal kedaluwarsa opsional, dengan pemberitahuan yang jelas untuk pengunjung setelah link tidak berlaku lagi",
        "Kode QR untuk setiap link pendek, bisa diunduh dalam format PNG",
        "Halaman statistik privat berisi klik dan pengunjung unik per hari selama 30 hari terakhir, serta rincian per perangkat, browser, dan sistem operasi",
        "Tema terang dan gelap yang mengikuti pengaturan perangkat, dengan tombol pengalih di header",
      ],
    },
    notes: {
      en: [
        "Stub shows the stats link once and stores only its SHA-256 hash, so a lost stats link cannot be recovered.",
        "Stub stores no visitor IP addresses or raw user agents. Each visit keeps a timestamp, a hash that changes every day and differs per link, and labels for device, browser and OS.",
        "Each IP address can create 20 new links per hour. Stub counts them in PostgreSQL against an HMAC of the IP instead of the address itself.",
        "Tested with 128 unit and integration tests in Vitest and 7 end-to-end tests in Playwright. The integration tests run against a real PostgreSQL database.",
      ],
      id: [
        "Stub hanya menampilkan link statistik sekali dan menyimpan hash SHA-256-nya saja, jadi link statistik yang hilang tidak bisa dipulihkan.",
        "Stub tidak menyimpan alamat IP maupun user agent mentah milik pengunjung. Setiap kunjungan hanya mencatat waktu, hash yang berganti setiap hari dan berbeda untuk tiap link, serta label perangkat, browser, dan sistem operasi.",
        "Setiap alamat IP bisa membuat 20 link baru per jam. Batas ini dihitung di PostgreSQL memakai HMAC dari alamat IP, bukan alamat aslinya.",
        "Diuji dengan 128 tes unit dan integrasi di Vitest serta 7 tes end-to-end di Playwright. Tes integrasinya berjalan di database PostgreSQL sungguhan.",
      ],
    },
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM"],
    image: stubImg,
    demoUrl: "https://stub-link.vercel.app",
    githubUrl: "https://github.com/paylays/stub-link",
  },
  {
    id: "giliran",
    title: "Giliran",
    tag: { en: "Personal project", id: "Proyek pribadi" },
    summary: {
      en: "A real-time queue system for one venue on a local network. Visitors take a number with a QR code, and a TV calls it out loud.",
      id: "Sistem antrean real-time untuk satu lokasi di jaringan lokal. Pengunjung mengambil nomor lewat kode QR, lalu nomornya dipanggil dengan suara di TV.",
    },
    role: { en: "Solo, full stack", id: "Sendiri, full stack" },
    description: {
      en: "Giliran manages the queue at one venue and runs from a single PC on the local network. Visitors take a number by scanning a QR code, then follow their ticket on their phone. A TV in the waiting room announces each call in Indonesian, while staff work through the queue from a counter panel. The admin defines the services and counters, so the same system works for any type of business. Visitors never give a name or phone number, and the system keeps no personal data about them.",
      id: "Giliran mengelola antrean di satu lokasi dan berjalan dari satu PC di jaringan lokal. Pengunjung mengambil nomor dengan memindai kode QR, lalu memantau tiketnya di ponsel. TV di ruang tunggu mengumumkan setiap panggilan dalam bahasa Indonesia, sementara petugas melayani antrean dari panel loket. Layanan dan loket diatur oleh admin, sehingga sistem yang sama bisa dipakai untuk jenis usaha apa pun. Pengunjung tidak perlu memberikan nama atau nomor ponsel, dan sistem tidak menyimpan data pribadi mereka.",
    },
    features: {
      en: [
        "Live ticket on the visitor's phone that shows how many people are ahead and alerts them when their turn is near",
        "TV display with the latest call, every counter, recent calls and the number of people waiting per service, with each call spoken in Indonesian",
        "Counter panel where staff call the next number, recall it, skip it or mark it done",
        "Admin pages for services, counters and staff accounts, plus a QR poster sized for A4 printing",
        "Optional Wi-Fi QR code on the poster and the TV, so visitors join the venue's Wi-Fi before they take a number",
      ],
      id: [
        "Tiket di ponsel yang diperbarui otomatis, menampilkan sisa antrean di depan, dan memberi tahu saat giliran hampir tiba",
        "Layar TV berisi panggilan terbaru, semua loket, panggilan sebelumnya, dan jumlah orang yang menunggu di tiap layanan, dengan panggilan bersuara dalam bahasa Indonesia",
        "Panel loket untuk memanggil nomor berikutnya, memanggil ulang, melewati, atau menyelesaikan nomor",
        "Halaman admin untuk mengatur layanan, loket, dan akun petugas, serta poster QR ukuran A4 yang siap dicetak",
        "Kode QR Wi-Fi opsional di poster dan layar TV, agar pengunjung tersambung ke Wi-Fi tempat itu sebelum mengambil nomor",
      ],
    },
    notes: {
      en: [
        "One Node 24 process runs the Hono API, serves the React app and pushes each change to phones, the TV and counter panels with Server-Sent Events.",
        "Data sits in one SQLite file through Node's built-in node:sqlite module. Each service keeps a separate number sequence per day, so numbers restart at midnight in the business timezone on their own.",
        "Tested with 94 unit and integration tests in Vitest and 4 end-to-end tests in Playwright, including a visitor, a counter and the TV staying in sync.",
        "It runs only on a local network over plain HTTP, so there is no public demo, and phone alerts work only while the ticket page is open.",
      ],
      id: [
        "Satu proses Node 24 menjalankan API Hono, menyajikan aplikasi React, dan mengirim setiap perubahan ke ponsel, TV, dan panel loket lewat Server-Sent Events.",
        "Data disimpan dalam satu file SQLite melalui modul bawaan node:sqlite. Setiap layanan punya urutan nomor sendiri per hari, sehingga nomor otomatis mulai dari awal setiap tengah malam sesuai zona waktu tempat usaha.",
        "Diuji dengan 94 tes unit dan integrasi di Vitest serta 4 tes end-to-end di Playwright, termasuk sinkronisasi antara pengunjung, loket, dan TV.",
        "Hanya berjalan di jaringan lokal dengan HTTP biasa, jadi tidak ada demo publik, dan pemberitahuan di ponsel hanya muncul selama halaman tiket terbuka.",
      ],
    },
    stack: ["TypeScript", "React", "Hono", "SQLite"],
    image: giliranImg,
    githubUrl: "https://github.com/paylays/giliran",
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
    items: ["HTML", "CSS", "TypeScript", "React", "Next.js", "Vue", "Inertia.js", "Vite", "Tailwind CSS"],
  },
  {
    label: { en: "Backend", id: "Backend" },
    items: ["Node.js (Express, Hono)", "Laravel (PHP)", "Python (Flask, FastAPI)", "REST APIs"],
  },
  {
    label: { en: "Databases", id: "Basis data" },
    items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Firebase Firestore", "Supabase", "Neon", "Drizzle ORM"],
  },
  {
    label: { en: "Tools", id: "Tools" },
    items: ["Git", "GitHub", "GitHub Actions", "Docker", "Postman", "Figma", "Google Cloud Platform", "Vercel"],
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

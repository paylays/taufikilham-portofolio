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
  problem: string;
  features: string[];
  contributions: string[];
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
  problem: Text;
  features: TextList;
  contributions: TextList;
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
    problem: {
      en: "Kideco's case study for the KIDECO Innovation Challenge 2026 was about fuel. The contractors' fuel ratio, meaning the liters of fuel used for each cubic meter of material dug, was forecast to run more than 17% over the annual plan. It was not clear where the extra fuel went: to production machines working below their capacity, or to too many support machines and pumps that keep the pits dry. Without that answer, contractors could bill Kideco for more fuel than the work called for.",
      id: "Studi kasus dari Kideco untuk KIDECO Innovation Challenge 2026 mengangkat masalah bahan bakar. Fuel ratio kontraktor, yaitu jumlah liter bahan bakar untuk setiap meter kubik material yang digali, diperkirakan lebih dari 17% di atas rencana tahunan. Tidak jelas ke mana kelebihan bahan bakar itu terpakai: oleh alat produksi yang bekerja di bawah kapasitasnya, atau oleh alat pendukung dan pompa penyedot air di lubang tambang yang jumlahnya terlalu banyak. Tanpa jawaban itu, kontraktor bisa menagih Kideco untuk bahan bakar yang melebihi kebutuhan pekerjaannya.",
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
    contributions: {
      en: [
        "Built the platform's React frontend, including the multi-contractor fuel ratio dashboard, the interactive simulator and the locked approval flow.",
        "Connected the frontend to the team's backend API, which calculates the fuel ratio on the fly from 51,888+ rows of operational data in PostgreSQL instead of storing derived values.",
      ],
      id: [
        "Membangun frontend React untuk platform ini, termasuk dashboard fuel ratio multi-kontraktor, simulator interaktif, dan alur approval terkunci.",
        "Mengintegrasikan frontend dengan API backend tim, yang menghitung fuel ratio secara langsung dari 51.888+ baris data operasional PostgreSQL tanpa menyimpan nilai turunan di database.",
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
    problem: {
      en: "A long link is hard to share. It clutters a chat message, and anyone reading it on a poster or a presentation slide has to type it out by hand. Many link shorteners ask users to create an account first just to see the click count, and they collect more visitor data than counting clicks requires.",
      id: "Link yang panjang sulit dibagikan. Di chat, link itu memenuhi pesan, dan orang yang melihatnya di poster atau slide presentasi harus mengetiknya ulang secara manual. Banyak layanan pemendek link meminta pengguna membuat akun dulu hanya untuk melihat jumlah klik, dan mengumpulkan data pengunjung lebih banyak daripada yang dibutuhkan untuk menghitung klik.",
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
    contributions: {
      en: [
        "Put each stats page behind a secret link that is shown once and stored only as a SHA-256 hash, so a lost stats link cannot be recovered.",
        "Recorded each visit without the visitor's IP address or raw user agent, keeping only a timestamp, a hash that changes every day and differs per link, and labels for device, browser and OS.",
        "Limited each IP address to 20 new links per hour, counted in PostgreSQL against an HMAC of the IP instead of the address itself.",
        "Tested Stub with 128 unit and integration tests in Vitest, the integration tests running against a real PostgreSQL database, and 7 end-to-end tests in Playwright, then launched it on Vercel with a Neon Postgres database.",
      ],
      id: [
        "Menempatkan setiap halaman statistik di balik link rahasia yang hanya ditampilkan sekali dan disimpan sebagai hash SHA-256 saja, sehingga link statistik yang hilang tidak bisa dipulihkan.",
        "Mencatat setiap kunjungan tanpa alamat IP maupun user agent mentah milik pengunjung, hanya waktu, hash yang berganti setiap hari dan berbeda untuk tiap link, serta label perangkat, browser, dan sistem operasi.",
        "Membatasi setiap alamat IP hingga 20 link baru per jam, yang dihitung di PostgreSQL memakai HMAC dari alamat IP, bukan alamat aslinya.",
        "Menguji Stub dengan 128 tes unit dan integrasi di Vitest, dengan tes integrasi yang berjalan di database PostgreSQL sungguhan, serta 7 tes end-to-end di Playwright, lalu merilisnya di Vercel dengan database Neon Postgres.",
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
    problem: {
      en: "At a clinic, a service office or a ticket counter, visitors usually wait with a paper number in hand. They have to keep watching the number board or listening for each call so they do not miss their turn, and they cannot tell how many people are still ahead of them. Online queue apps that alert visitors on their phone exist, but they often depend on the internet and ask for a phone or WhatsApp number.",
      id: "Di klinik, kantor layanan, atau loket, pengunjung biasanya menunggu sambil memegang nomor kertas. Mereka harus terus memperhatikan papan nomor atau menyimak setiap panggilan agar gilirannya tidak terlewat, tanpa tahu berapa orang lagi di depannya. Aplikasi antrean online yang memberi kabar lewat ponsel memang ada, tetapi sering bergantung pada internet dan meminta nomor HP atau WhatsApp pengunjung.",
    },
    features: {
      en: [
        "Live ticket on the visitor's phone that shows how many people are ahead and alerts them when their turn is near, while the ticket page is open",
        "TV display with the latest call, every counter, recent calls and the number of people waiting per service, with each call spoken in Indonesian",
        "Counter panel where staff call the next number, recall it, skip it or mark it done",
        "Admin pages for services, counters and staff accounts, plus a QR poster sized for A4 printing",
        "Optional Wi-Fi QR code on the poster and the TV, so visitors join the venue's Wi-Fi before they take a number",
      ],
      id: [
        "Tiket di ponsel yang diperbarui otomatis, menampilkan sisa antrean di depan, dan memberi tahu saat giliran hampir tiba, selama halaman tiket terbuka",
        "Layar TV berisi panggilan terbaru, semua loket, panggilan sebelumnya, dan jumlah orang yang menunggu di tiap layanan, dengan panggilan bersuara dalam bahasa Indonesia",
        "Panel loket untuk memanggil nomor berikutnya, memanggil ulang, melewati, atau menyelesaikan nomor",
        "Halaman admin untuk mengatur layanan, loket, dan akun petugas, serta poster QR ukuran A4 yang siap dicetak",
        "Kode QR Wi-Fi opsional di poster dan layar TV, agar pengunjung tersambung ke Wi-Fi tempat itu sebelum mengambil nomor",
      ],
    },
    contributions: {
      en: [
        "Built Giliran as one Node 24 process that runs the Hono API, serves the React app and pushes every change to phones, the TV and counter panels with Server-Sent Events.",
        "Stored everything in one SQLite file through Node's built-in node:sqlite module, with no personal data about visitors and a separate number sequence for each service per day that restarts at midnight in the business's timezone.",
        "Designed it to run from a single PC on the venue's local network, with no cloud service.",
        "Tested it with 94 unit and integration tests in Vitest and 4 end-to-end tests in Playwright, including a visitor, a counter and the TV staying in sync.",
      ],
      id: [
        "Membangun Giliran sebagai satu proses Node 24 yang menjalankan API Hono, menyajikan aplikasi React, dan mengirim setiap perubahan ke ponsel, TV, dan panel loket lewat Server-Sent Events.",
        "Menyimpan seluruh data dalam satu file SQLite melalui modul bawaan node:sqlite, tanpa data pribadi pengunjung, dengan urutan nomor sendiri untuk tiap layanan per hari yang otomatis mulai dari awal setiap tengah malam sesuai zona waktu tempat usaha.",
        "Merancang sistem agar berjalan dari satu PC di jaringan lokal tempat usaha, tanpa layanan cloud.",
        "Menguji sistem dengan 94 tes unit dan integrasi di Vitest serta 4 tes end-to-end di Playwright, termasuk sinkronisasi antara pengunjung, loket, dan TV.",
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
    problem: {
      en: "In ITK's Information Systems program, the internship process was run by hand and spread across Google Sheets, Google Forms and Google Classroom. Getting each student's internship from submission to grading took a long time, and with the records split across three platforms, it was hard to see where a student stood.",
      id: "Di Prodi Sistem Informasi ITK, proses kerja praktik masih dikerjakan secara manual dan tersebar di Google Spreadsheet, Google Form, dan Google Classroom. Mengurus kerja praktik setiap mahasiswa dari pengajuan sampai penilaian memakan waktu lama, dan karena datanya terpisah di tiga platform, progres mahasiswa sulit dipantau.",
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
    contributions: {
      en: [
        "Developed INTERSI-ITK as my thesis project using the Extreme Programming method, bringing the whole internship process into one system, from submissions and document checks to supervisor assignment, monitoring and grading.",
        "Set up role-based access control (RBAC) for the four user roles: program coordinator, administrative staff, lecturers and students.",
        "Designed a relational database schema that keeps submission data consistent.",
      ],
      id: [
        "Mengembangkan INTERSI-ITK sebagai proyek skripsi dengan metode Extreme Programming, menyatukan seluruh alur kerja praktik dalam satu sistem, mulai dari pengajuan dan verifikasi berkas hingga penentuan dosen pembimbing, monitoring, dan penilaian.",
        "Menerapkan otorisasi berbasis peran (RBAC) untuk empat peran pengguna: koordinator prodi, tendik, dosen, dan mahasiswa.",
        "Merancang skema basis data relasional yang menjaga konsistensi data pengajuan.",
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
    problem: {
      en: "In RT 36 Wonorejo, a neighborhood unit in Balikpapan, residents had to visit the head of the RT at home to get a cover letter for their official paperwork. News from the RT was also hard to get without stopping by, so announcements reached residents slowly.",
      id: "Di RT 36 Wonorejo, Balikpapan, warga yang membutuhkan surat pengantar untuk mengurus administrasi harus datang langsung ke rumah Ketua RT. Informasi pengumuman juga sulit didapat tanpa datang ke sana, sehingga kabar dari RT lambat sampai ke warga.",
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
    contributions: {
      en: [
        "Developed SI-RT as a full-stack Laravel and MySQL site that residents of RT 36 Wonorejo use to request cover letters, read announcements and see how the RT's cash is spent.",
        "Designed an interface simple enough for residents of every age, with a layout that works on phones.",
      ],
      id: [
        "Mengembangkan SI-RT secara full stack dengan Laravel dan MySQL sebagai layanan mandiri bagi warga RT 36 Wonorejo untuk mengajukan surat pengantar, membaca pengumuman, dan melihat penggunaan kas RT.",
        "Merancang antarmuka yang sederhana agar mudah digunakan warga dari berbagai usia, dengan tampilan yang nyaman di ponsel.",
      ],
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
    problem: {
      en: "The tourism guidebook from Balikpapan's agency for youth, sports and tourism existed only in print, and the copies did not reach the whole city. Residents and tourists who wanted to know where to go in Balikpapan had no single place to look it up.",
      id: "Buku panduan wisata milik Dinas Pemuda Olahraga dan Pariwisata Kota Balikpapan hanya tersedia dalam bentuk cetak, dan tidak menjangkau seluruh kota. Warga dan wisatawan yang ingin berwisata di Balikpapan tidak punya satu tempat untuk mencari informasi tentang destinasinya.",
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
    contributions: {
      en: [
        "Built SITA-BPP as a full-stack prototype during my internship at Dinas Pemuda Olahraga dan Pariwisata Kota Balikpapan, from requirements analysis to deployment.",
        "Integrated a map API for the interactive map with directions, and optimized the loading of high-resolution destination photos.",
      ],
      id: [
        "Membangun SITA-BPP sebagai prototipe full-stack saat magang di Dinas Pemuda Olahraga dan Pariwisata Kota Balikpapan, mulai dari analisis kebutuhan hingga deployment.",
        "Mengintegrasikan API peta untuk peta interaktif dengan petunjuk arah, serta mengoptimalkan pemuatan foto destinasi beresolusi tinggi.",
      ],
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
    problem: {
      en: "When a hotel has no online booking, a guest has to call or send a message, then wait for staff to check which rooms are still free for the dates and number of guests they asked for. Until staff reply, the guest does not know whether there is a room at all.",
      id: "Jika hotel tidak menyediakan reservasi online, tamu harus menelepon atau mengirim pesan, lalu menunggu petugas mengecek kamar mana yang masih tersedia untuk tanggal dan jumlah tamu yang ia minta. Sebelum petugas membalas, tamu belum tahu apakah masih ada kamar untuknya.",
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
    contributions: {
      en: [
        "Built the backend with Flask and the database with PostgreSQL, as part of the team's major assignment for the Cloud Computing course, which took about half a semester.",
        "Worked on the backend side of booking, where guests choose check-in and check-out dates and the number of guests, then see which rooms are available.",
      ],
      id: [
        "Membangun backend dengan Flask dan basis data dengan PostgreSQL sebagai bagian dari tugas besar tim untuk mata kuliah Cloud Computing, yang dikerjakan selama kurang lebih setengah semester.",
        "Mengerjakan sisi backend untuk alur pemesanan, tempat tamu memilih tanggal check-in, check-out, dan jumlah tamu, lalu melihat kamar yang tersedia.",
      ],
    },
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
        "Helped manage the SKPL, DPPL, DUPL and DLPA software documents",
        "Coached students on development methodologies and UML-based analysis",
      ],
      id: [
        "Mendampingi perkuliahan selama 16 minggu",
        "Membantu mengurus dokumen SKPL, DPPL, DUPL, dan DLPA",
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
      problem: p.problem[lang],
      features: p.features[lang],
      contributions: p.contributions[lang],
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

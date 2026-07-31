export interface Project {
  id: string;
  title: string;
  category: 'Backend' | 'Fullstack' | 'Frontend' | 'Web Utility';
  shortDescription: string;
  fullDescription: string;
  problemStatement: string;
  keyFeatures: string[];
  technicalChallenges: string[];
  techStack: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: 'Advanced' | 'Intermediate' | 'Proficient'; iconName: string }[];
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  degree: string;
  description: string;
  highlights: string[];
  type: 'education' | 'certification';
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: 'Taufik Ilham',
    role: 'Backend-Focused Web Developer',
    subtitle: 'Specializing in robust RESTful APIs, microservices architecture, efficient database schemas, and scalable backend infrastructure.',
    bio: 'Mahasiswa prodi Sistem Informasi di Institut Teknologi Kalimantan (ITK) yang berfokus pada Backend Web Development. Berpengalaman merancang arsitektur server, RESTful API yang aman dan terstruktur, serta pengolahan basis data relasional & non-relasional. Berkomitmen pada performa tinggi, efisiensi sistem, serta pengintegrasian infrastruktur cloud & containerization.',
    location: 'Balikpapan, Indonesia',
    email: 'ilham1994.it@gmail.com',
    phone: '+62 853-8743-2115',
    github: 'https://github.com/paylays',
    linkedin: 'https://www.linkedin.com/in/taufikilham/',
    facebook: 'https://www.facebook.com/profile.php?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=100080858852174&sk=about',
    twitter: 'https://x.com/payylayss',
    cvUrl: '/src/assets/CV ATS - Taufik Ilham.pdf',
    availableForWork: true
  },

  softSkills: [
    'Problem Solving',
    'Critical Thinking',
    'Communication',
    'Teamwork',
    'Collaboration',
    'Adaptability',
    'Continuous Learning',
    'Leadership',
    'Decision Making',
    'Flexibility',
    'Project Management'
  ],

  aboutHighlights: [
    {
      title: 'Backend & API Engineering',
      description: 'Perancangan RESTful API & mikroservis aman, cepat, dan scalable menggunakan Node.js, Laravel, serta Python.'
    },
    {
      title: 'Database & Schema Architecture',
      description: 'Desain skema basis data relasional & NoSQL terstruktur dengan pemodelan relasi dan kueri yang efisien.'
    },
    {
      title: 'System Problem Solver',
      description: 'Pendekatan analitis dan pemikiran kritis dalam analisis logika bisnis, alur kerja sistem, dan penanganan bug.'
    },
    {
      title: 'Modern Workflow & DevOps',
      description: 'Pengelolaan versi dengan Git/GitHub, containerization dengan Docker, serta penyebaran layanan di Cloud.'
    }
  ],

  // 4 Skill Categories as specified by user
  skillCategories: [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 'Advanced', iconName: 'Layout' },
        { name: 'CSS3', level: 'Advanced', iconName: 'Css3' },
        { name: 'React.js', level: 'Advanced', iconName: 'Code2' },
        { name: 'Next.js', level: 'Intermediate', iconName: 'Nextjs' },
        { name: 'Vue.js', level: 'Intermediate', iconName: 'Vue' },
        { name: 'Vite', level: 'Advanced', iconName: 'Zap' },
        { name: 'Tailwind CSS', level: 'Advanced', iconName: 'Palette' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 'Advanced', iconName: 'Server' },
        { name: 'Laravel', level: 'Advanced', iconName: 'Laravel' },
        { name: 'PHP', level: 'Advanced', iconName: 'Php' },
        { name: 'Python', level: 'Intermediate', iconName: 'Python' },
        { name: 'FastAPI', level: 'Intermediate', iconName: 'FastApi' },
        { name: 'RESTful API', level: 'Advanced', iconName: 'Globe' }
      ]
    },
    {
      title: 'Database Management',
      skills: [
        { name: 'MySQL', level: 'Advanced', iconName: 'Mysql' },
        { name: 'PostgreSQL', level: 'Advanced', iconName: 'Database' },
        { name: 'MongoDB', level: 'Intermediate', iconName: 'Layers' },
        { name: 'Firebase Firestore', level: 'Intermediate', iconName: 'Firebase' },
        { name: 'Supabase', level: 'Intermediate', iconName: 'Supabase' }
      ]
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'GitHub', level: 'Advanced', iconName: 'Github' },
        { name: 'Postman', level: 'Advanced', iconName: 'Send' },
        { name: 'Figma', level: 'Intermediate', iconName: 'Figma' },
        { name: 'Docker', level: 'Intermediate', iconName: 'Docker' },
        { name: 'Google Cloud Platform', level: 'Intermediate', iconName: 'Gcp' }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: 'proj-1',
      title: 'INTERSI-ITK (Internship Sistem Informasi ITK)',
      category: 'Fullstack',
      shortDescription: 'Sistem Informasi Manajemen Kerja Praktik & Magang Mahasiswa Sistem Informasi ITK.',
      fullDescription: 'Platform sistem informasi terpadu yang memfasilitasi alur pengajuan, verifikasi dokumen, alokasi dosen pembimbing, serta penilaian kerja praktik mahasiswa Sistem Informasi Institut Teknologi Kalimantan.',
      problemStatement: 'Proses administrasi kerja praktik sebelumnya dilakukan secara manual sehingga membutuhkan waktu lama dalam verifikasi berkas dan pemantauan status magang.',
      keyFeatures: [
        'Manajemen alur pengajuan & verifikasi berkas magang online',
        'Penjadwalan seminar & alokasi pembimbing otomatis',
        'Dashboard terpisah untuk Mahasiswa, Dosen, dan Admin Prodi',
        'Notifikasi status pengajuan & integrasi ekspor rekapitulasi data'
      ],
      technicalChallenges: [
        'Merancang alur otorisasi berbasis peran (RBAC) yang aman untuk 3 jenis peran pengguna berbeda',
        'Mengoptimalkan arsitektur basis data relasional untuk menjaga integritas data pengajuan'
      ],
      techStack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap / Tailwind', 'RESTful API'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
      demoUrl: 'https://github.com/paylays',
      githubUrl: 'https://github.com/paylays',
      featured: true
    },
    {
      id: 'proj-2',
      title: 'SI-RT (Sistem Informasi RT 36 Wonorejo)',
      category: 'Fullstack',
      shortDescription: 'Sistem Pelayanan Digital Kependudukan dan Administrasi Keuangan RT 36 Wonorejo.',
      fullDescription: 'Aplikasi layanan mandiri warga RT 36 Wonorejo Balikpapan untuk pengajuan surat pengantar, pengumuman warga, serta transparansi iuran kas lingkungan.',
      problemStatement: 'Warga kesulitan mendapatkan informasi pengumuman dan surat pengantar secara cepat tanpa harus datang langsung ke rumah Ketua RT.',
      keyFeatures: [
        'Pengajuan surat keterangan kependudukan online',
        'Modul pencatatan kas RT & laporan keuangan transparan',
        'Papan pengumuman kegiatan & jadwal ronda malam warga',
        'Responsive mobile-friendly UI'
      ],
      technicalChallenges: [
        'Menyediakan antarmuka yang sangat simpel agar ramah digunakan oleh warga dari berbagai kelompok usia'
      ],
      techStack: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop',
      demoUrl: 'https://github.com/paylays',
      githubUrl: 'https://github.com/paylays',
      featured: true
    },
    {
      id: 'proj-3',
      title: 'SITA-BPP (Sistem Informasi Pariwisata Kota Balikpapan)',
      category: 'Fullstack',
      shortDescription: 'Portal Informasi Destinasi Wisata, Kuliner & Ekowisata Kota Balikpapan.',
      fullDescription: 'Platform promosi dan direktori tempat wisata, kuliner lokal, fasilitas umum, dan acara kebudayaan Kota Balikpapan yang dilengkapi dengan peta lokasi interaktif.',
      problemStatement: 'Informasi tempat wisata dan event kebudayaan di Balikpapan masih tersebar di banyak kanal sehingga wisatawan luar daerah kesulitan membuat rencana kunjungan.',
      keyFeatures: [
        'Direktori destinasi wisata dengan kategorisasi objek alam, kuliner, & budaya',
        'Filter pencarian cepat berdasarkan lokasi dan rating pengunjung',
        'Integrasi peta interaktif peta lokasi & petunjuk arah',
        'CMS Admin untuk pembaruan data destinasi & event wisata'
      ],
      technicalChallenges: [
        'Mengintegrasikan API peta dan mengoptimalkan pemuatan gambar destinasi resolusi tinggi'
      ],
      techStack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
      demoUrl: 'https://github.com/paylays',
      githubUrl: 'https://github.com/paylays',
      featured: false
    },
    {
      id: 'proj-4',
      title: 'SIMTEK (Sistem Informasi Apotek)',
      category: 'Backend',
      shortDescription: 'Sistem Manajemen Inventaris Obat, Transaksi Penjualan & Stok Gudang Apotek.',
      fullDescription: 'Sistem informasi pengelolaan operasional apotek mencakup manajemen stok obat, tanggal kedaluwarsa (expired date), transaksi kasir point-of-sale, serta laporan rekapitulasi harian.',
      problemStatement: 'Pencatatan stok obat manual sering menyebabkan terjadinya pencatatan ganda dan keterlambatan dalam mendeteksi obat yang mendekati masa expired.',
      keyFeatures: [
        'Pencatatan obat & alert otomatis untuk stok menipis dan obat mendekati kedaluwarsa',
        'Modul transaksi POS (Point of Sale) kasir cepat',
        'Manajemen data supplier dan riwayat pengadaan obat',
        'Laporan penjualan dan analisis keuntungan bulanan'
      ],
      technicalChallenges: [
        'Merancang algoritma alokasi obat (FIFO/FEFO) saat terjadi transaksi agar stok ter-update secara presisi'
      ],
      techStack: ['PHP', 'MySQL', 'CodeIgniter / Laravel', 'JavaScript', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
      demoUrl: 'https://github.com/paylays',
      githubUrl: 'https://github.com/paylays',
      featured: false
    }
  ] as Project[],

  // Ordered from newest (2024 -> 2022) as requested
  educationTimeline: [
    {
      id: 'cert-3',
      period: '2024',
      institution: 'Sertifikasi Profesi / Pelatihan Industri',
      degree: 'Sertifikasi UI/UX Design (2024)',
      description: 'Sertifikasi dan pelatihan profesional berfokus pada Design Thinking, User Research, Wireframing, Prototyping Figma, dan Usability Testing.',
      highlights: [
        'Merancang rekomendasi antarmuka dan pengalaman pengguna berbasis User-Centered Design',
        'Penyusunan Design System dan komponen antarmuka yang konsisten'
      ],
      type: 'certification'
    },
    {
      id: 'cert-2',
      period: '2023',
      institution: 'Sertifikasi Profesi / Pelatihan Kompetensi',
      degree: 'Sertifikasi Web Developer (2023)',
      description: 'Sertifikasi kompetensi pengembang web standar industri mencakup pemrograman frontend & backend, arsitektur REST API, serta basis data relasional.',
      highlights: [
        'Uji kompetensi pemrograman web fullstack dengan nilai memuaskan',
        'Penerapan metodologi pengembangan perangkat lunak terstruktur'
      ],
      type: 'certification'
    },
    {
      id: 'cert-1',
      period: '2023',
      institution: 'Dea x Google / Digital Talent Program',
      degree: 'Sertifikat Dea x Google (2023)',
      description: 'Program beasiswa & pelatihan teknologi kerja sama Dea x Google yang mencakup fondasi pengembangan teknologi web modern dan cloud computing.',
      highlights: [
        'Studi kasus pengolahan data & integrasi layanan web modern',
        'Pengembangan softskill kolaborasi dan pemecahan masalah teknis'
      ],
      type: 'certification'
    },
    {
      id: 'edu-1',
      period: '2022 - 2026',
      institution: 'Institut Teknologi Kalimantan (ITK)',
      degree: 'Sarjana Komputer (S.Kom) - Program Studi Sistem Informasi',
      description: 'Menempuh pendidikan Sarjana Komputer di ITK Balikpapan dengan fokus pada Rekayasa Perangkat Lunak, Backend Web Development, Analisis Sistem Informasi, dan Manajemen Basis Data.',
      highlights: [
        'Academic IPK: 3.70 / 4.00',
        'Aktif dalam berbagai proyek sistem informasi kampus dan instansi publik',
        'Berfokus pada arsitektur sistem backend, API engineering, dan pengelolaan database'
      ],
      type: 'education'
    }
  ] as EducationItem[]
};

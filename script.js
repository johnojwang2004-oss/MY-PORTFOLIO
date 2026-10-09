/* =========================================================================
   NEXUS TECHNOLOGIES — MAIN SCRIPT
   Owner: John Ojwang
   Email: johnojwang2004@gmail.com
   WhatsApp: 0104228530
   GitHub: johnojwang2004-oss
   ========================================================================= */

/* =========================================================
   ICONS
   ========================================================= */
const ICON = {
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
  terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m4 17 6-6-6-6"/><path d="M12 19h8"/></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>',
  network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="6" rx="1.5"/><rect x="2" y="16" width="6" height="6" rx="1.5"/><rect x="16" y="16" width="6" height="6" rx="1.5"/><path d="M12 8v4M5 16v-2h14v2"/></svg>',
  tools: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.1 2.1 0 0 1-3-3Z"/><path d="m16 8 3-3"/></svg>',
  support: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6a6 6 0 0 0-6 6"/><path d="M15 12h6v6"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.7 4.7 18.7 5 18.7 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.19-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.79 9.79 0 0 1-1.5-5.22c0-5.41 4.4-9.81 9.82-9.81 2.62 0 5.08 1.02 6.93 2.88a9.74 9.74 0 0 1 2.87 6.94c0 5.41-4.4 9.81-9.81 9.81ZM20.5 3.49A11.75 11.75 0 0 0 12.05 0C5.53 0 .22 5.31.22 11.83c0 2.08.55 4.12 1.58 5.91L.12 24l6.4-1.68a11.8 11.8 0 0 0 5.53 1.41h.01c6.51 0 11.82-5.31 11.83-11.83 0-3.16-1.23-6.13-3.46-8.36Z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 11h18"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6l-8-4Z"/><path d="m9 12 2 2 4-4"/></svg>',
  server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><path d="M6 6.5h.01M6 17.5h.01"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 3 14 9-14 9V3Z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 4v4h4"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M21 20v-4h-4"/></svg>',
  qr: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14h1M14 20h1M20 20h1M18 17h3v4h-3z"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="5"/><path d="m11.5 11.5 8-8"/><path d="m17 4 3 3"/><path d="m14 7 3 3"/></svg>',
  calc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 0 0 0-9h-1.3A7 7 0 1 0 5 17.7"/><path d="M12 13v9M9 19l3 3 3-3"/></svg>'
};

/* =========================================================
   DATA
   ========================================================= */
const DATA = {
  profile: {
    name: "John Ojwang",
    brand: "Nexus Technologies",
    initials: "NT",
    title: "ICT Student | Aspiring Web Developer | Technology Enthusiast",
    availability: "Currently Available for Work",
    learning: ["HTML", "CSS", "JavaScript", "Python", "SQL", "Networking", "Cyber Security"],
    email: "johnojwang2004@gmail.com",
    whatsapp: "254104228530",      // international format for wa.me links
    whatsappDisplay: "0104 228 530",
    facebook: "https://www.facebook.com/search/top?q=Crown%20Gee",
    facebookName: "Crown Gee",
    location: "Kenya",
    avatar: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=70"
  },

  socials: [
    { label: "Email",     value: "johnojwang2004@gmail.com",                 href: "mailto:johnojwang2004@gmail.com",              icon: "mail" },
    { label: "WhatsApp",  value: "0104 228 530 — tap to chat",               href: "https://wa.me/254104228530",                   icon: "whatsapp" },
    { label: "Facebook",  value: "Crown Gee",                                href: "https://www.facebook.com/search/top?q=Crown%20Gee", icon: "facebook" },
    { label: "GitHub",    value: "github.com/johnojwang",                    href: "https://github.com/johnojwang",                icon: "github" },
    { label: "LinkedIn",  value: "linkedin.com/in/johnojwang",               href: "https://linkedin.com/in/johnojwang",           icon: "linkedin" }
  ],

  skills: [
    { group: "Web Development", icon: "code", items: [
      { name: "HTML",       level: 75, label: "Intermediate" },
      { name: "CSS",        level: 68, label: "Intermediate" },
      { name: "JavaScript", level: 55, label: "Intermediate" }
    ]},
    { group: "Programming", icon: "terminal", items: [
      { name: "Python", level: 52, label: "Beginner → Intermediate" }
    ]},
    { group: "Database", icon: "database", items: [
      { name: "SQL",              level: 55, label: "Beginner → Intermediate" },
      { name: "Microsoft Access", level: 60, label: "Intermediate" }
    ]},
    { group: "Networking & Security", icon: "network", items: [
      { name: "Cisco Packet Tracer", level: 62, label: "Intermediate" },
      { name: "IP Addressing",       level: 64, label: "Intermediate" },
      { name: "Routing & VLANs",     level: 52, label: "Beginner → Intermediate" },
      { name: "Cyber Security Basics", level: 45, label: "Beginner" }
    ]},
    { group: "Tools", icon: "tools", items: [
      { name: "Git & GitHub",     level: 52, label: "Beginner → Intermediate" },
      { name: "VS Code",          level: 76, label: "Intermediate" },
      { name: "Microsoft Office", level: 80, label: "Intermediate" }
    ]}
  ],

  projects: [
    {
      id: "calculator",
      name: "Calculator App",
      tagline: "Full-function calculator",
      description: "A complete calculator with support for basic arithmetic, decimals, percentages, backspace, and keyboard input. Live demo below.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "tools",
      status: "Live",
      thumb: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=800&q=70",
      demo: "#demos",
      repo: "",
      details: "A working calculator built from scratch in vanilla JavaScript. Handles chained operations, decimal input, percentage, sign toggle, clear, and full keyboard support (numbers, operators, Enter, Backspace, Escape).",
      featured: true,
      demoKey: "calculator"
    },
    {
      id: "weather",
      name: "Weather API App",
      tagline: "Live weather for any city",
      description: "Search any city on earth and get current temperature, conditions, humidity and wind — pulled live from the Open-Meteo API.",
      tech: ["JavaScript", "Fetch API", "Open-Meteo"],
      category: "web",
      status: "Live",
      thumb: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=70",
      demo: "#demos",
      repo: "",
      details: "Uses the free Open-Meteo geocoding and forecast APIs to fetch real-time weather. Displays current temperature, feels-like, humidity, wind speed, and a matching weather icon — no API key required.",
      featured: true,
      demoKey: "weather"
    },
    {
      id: "adwino",
      name: "Adwino — Guest Manager",
      tagline: "Event guest list manager",
      description: "A simple event guest-list tool. Add attendees with name and contact, see them appear instantly, and remove them with one click. Data persists in your browser.",
      tech: ["HTML", "CSS", "JavaScript", "localStorage"],
      category: "web",
      status: "Live",
      thumb: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=70",
      demo: "#demos",
      repo: "",
      details: "Adwino is a lightweight guest manager for small events. Add a guest with their name and phone/email, and it appears in the list with an avatar initial. Removes with one click. Everything is saved to localStorage so the list survives page refreshes.",
      featured: true,
      demoKey: "adwino"
    },
    {
      id: "datacenter",
      name: "Data Center Monitor",
      tagline: "Live server rack dashboard",
      description: "A simulated data center dashboard showing CPU, temperature and bandwidth for four racks — updating live so you can watch load change in real time.",
      tech: ["JavaScript", "Canvas", "CSS"],
      category: "tools",
      status: "Live",
      thumb: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=70",
      demo: "#demos",
      repo: "",
      details: "A monitoring interface that simulates four server racks with live CPU, temperature and bandwidth readings. Values fluctuate realistically, and bars change colour when thresholds are crossed — giving a realistic feel of a data center NOC dashboard.",
      featured: true,
      demoKey: "datacenter"
    },
    {
      id: "cyber",
      name: "Cyber Security Dashboard",
      tagline: "Live threat monitoring feed",
      description: "A simulated security operations dashboard streaming live events — port scans, failed logins, blocked IPs and firewall updates — in real time.",
      tech: ["JavaScript", "CSS", "DOM"],
      category: "security",
      status: "Live",
      thumb: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=70",
      demo: "#demos",
      repo: "",
      details: "A SOC-style dashboard that streams realistic security events with severity levels (info, warn, critical, ok). Live counters track total events, blocked threats and active alerts. Events appear in a console-style log that auto-scrolls.",
      featured: true,
      demoKey: "cyber"
    },
    {
      id: "qr",
      name: "QR Code Generator",
      tagline: "Instant QR codes for any text",
      description: "Type any text or URL and get a downloadable QR code instantly. Works for links, contact details, Wi-Fi credentials — anything.",
      tech: ["JavaScript", "QR API", "Download API"],
      category: "tools",
      status: "Live",
      thumb: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=800&q=70",
      demo: "#demos",
      repo: "",
      details: "Generates QR codes from any input text using the free QR Server API. Includes a one-click download button that saves the generated code as a PNG file.",
      featured: false,
      demoKey: "qr"
    },
    {
      id: "password",
      name: "Password Generator",
      tagline: "Strong passwords with strength meter",
      description: "Generate secure passwords up to 40 characters. Choose length, toggle uppercase, numbers and symbols, and see a live strength rating.",
      tech: ["JavaScript", "Crypto API"],
      category: "security",
      status: "Live",
      thumb: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=70",
      demo: "#demos",
      repo: "",
      details: "Uses the browser's crypto.getRandomValues() for real randomness. The strength meter rates the password from Weak to Very Strong based on length and character variety. One-click copy to clipboard.",
      featured: false,
      demoKey: "password"
    },
    {
      id: "network",
      name: "Network Simulator",
      tagline: "Visualise packets moving",
      description: "An interactive canvas simulation showing network nodes and packets travelling between them — visualising how data moves across a network.",
      tech: ["Canvas", "JavaScript"],
      category: "networking",
      status: "Live",
      thumb: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=70",
      demo: "#demos",
      repo: "",
      details: "A canvas-based network visualisation. Multiple nodes are connected by links, and coloured packets travel between them in real time, simulating traffic flow. Click Send Packet to trigger a burst.",
      featured: false,
      demoKey: "network"
    },
    {
      id: "summit",
      name: "Tech Innovation Summit 2026",
      tagline: "Responsive event website",
      description: "A responsive event website with schedules, registration elements, dropdown sections, terms confirmation and full navigation.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "web",
      status: "In Progress",
      thumb: "",
      demo: "",
      repo: "",
      details: "A multi-section responsive event site focusing on semantic HTML, responsive CSS and interactive JavaScript. Includes a schedule layout, collapsible sections, and a registration flow.",
      placeholder: true,
      featured: false
    },
    {
      id: "cisco",
      name: "Cisco Network Design",
      tagline: "Organisational network topology",
      description: "A logical organisational network design built in Cisco Packet Tracer — IP addressing, VLANs, routing and infrastructure planning.",
      tech: ["Cisco Packet Tracer", "IP Addressing", "VLANs", "Routing"],
      category: "networking",
      status: "In Progress",
      thumb: "",
      demo: "",
      repo: "",
      details: "A structured network design exercise covering IP addressing, VLAN segmentation, inter-VLAN routing and device configuration inside Cisco Packet Tracer.",
      placeholder: true,
      featured: false
    }
  ],

  /* 10 tech photos for the gallery */
  gallery: [
    { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=70", caption: "Circuit board", span: true },
    { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=70", caption: "Cyber security" },
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=70", caption: "Data center" },
    { src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=70", caption: "Network cables" },
    { src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=900&q=70", caption: "Code editor" },
    { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=70", caption: "Matrix code" },
    { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=70", caption: "Laptop development" },
    { src: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=70", caption: "Tech workspace" },
    { src: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=900&q=70", caption: "Server room" },
    { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=70", caption: "Global network", span: true }
  ],

  services: [
    { icon: "code",     title: "Website Development",    desc: "Responsive, clean websites built with HTML, CSS and JavaScript." },
    { icon: "network",  title: "Basic Networking",       desc: "Small network design and configuration with Packet Tracer." },
    { icon: "database", title: "Database Development",   desc: "Simple relational databases using SQL and Microsoft Access." },
    { icon: "support",  title: "Technical Support",      desc: "Basic troubleshooting, setup and everyday ICT assistance." },
    { icon: "shield",   title: "Security Basics",        desc: "Password hygiene, basic hardening and safe-config advice." },
    { icon: "tools",    title: "Website Maintenance",    desc: "Content updates, small fixes and ongoing site upkeep." }
  ]
};

/* =========================================================
   HELPERS
   ========================================================= */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const esc = (str = "") => String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const statusClass = s => String(s || "").toLowerCase().replace(/\s+/g, "-");
const setText = (id, v) => { const el = document.getElementById(id); if (el && v) el.textContent = v; };

/* =========================================================
   PROJECT FILTER LABELS
   ========================================================= */
const CATEGORY_LABELS = {
  all: "All Projects",
  web: "Web Apps",
  tools: "Tools",
  security: "Security",
  networking: "Networking"
};

/* =========================================================
   APPLY PROFILE DATA TO STATIC ELEMENTS
   ========================================================= */
function applyProfile() {
  const p = DATA.profile;
  setText("year", new Date().getFullYear());

  // WhatsApp float + hero contact links
  const waFloat = $("#waFloat");
  if (waFloat) {
    waFloat.href = `https://wa.me/${p.whatsapp}?text=${encodeURIComponent("Hi John! I found your Nexus Technologies portfolio and would like to connect.")}`;
  }
}

/* =========================================================
   SKILLS
   ========================================================= */
function renderSkills() {
  const grid = $("#skillsGrid");
  if (!grid) return;

  grid.innerHTML = DATA.skills.map((g, gi) => `
    <article class="card skill-card reveal" style="--d:${gi * 70}ms">
      <div class="skill-head">
        <span class="skill-icon">${ICON[g.icon] || ICON.code}</span>
        <h3>${esc(g.group)}</h3>
      </div>
      <div class="skill-list">
        ${g.items.map(it => `
          <div class="skill-item">
            <div class="row">
              <span class="name">${esc(it.name)}</span>
              <span class="lvl">${esc(it.label)}</span>
            </div>
            <div class="bar" role="img" aria-label="${esc(it.name)}: ${esc(it.label)}">
              <span style="--w:${Math.max(0, Math.min(100, it.level))}%"></span>
            </div>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");

  observeReveals(grid);
}

/* =========================================================
   PROJECTS
   ========================================================= */
let activeFilter = "all";

function renderFilters() {
  const wrap = $("#projectFilters");
  if (!wrap) return;

  const cats = ["all", ...new Set(DATA.projects.map(p => p.category))];

  wrap.innerHTML = cats.map(c => `
    <button class="filter-btn ${c === activeFilter ? "active" : ""}"
            data-filter="${esc(c)}" role="tab"
            aria-selected="${c === activeFilter}">
      ${esc(CATEGORY_LABELS[c] || c)}
    </button>
  `).join("");

  wrap.onclick = e => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    $$(".filter-btn", wrap).forEach(b => {
      const on = b === btn;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on);
    });
    renderProjects();
  };
}

function projectCard(p, i) {
  const isDemo = Boolean(p.demoKey);
  return `
  <article class="card project-card reveal" style="--d:${i * 70}ms">
    <div class="project-thumb">
      ${p.placeholder ? '<span class="ribbon">Sample</span>' : ""}
      <span class="status ${statusClass(p.status)}">${esc(p.status)}</span>
      ${p.thumb
        ? `<img src="${esc(p.thumb)}" alt="${esc(p.name)} preview" loading="lazy" decoding="async">`
        : `<div class="thumb-placeholder">${ICON.image}<span>${esc(p.name)}</span></div>`}
    </div>
    <div class="project-body">
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.description)}</p>
      <ul class="tech">${p.tech.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      <div class="project-actions">
        <button class="link-btn primary" data-details="${esc(p.id)}">View Details</button>
        ${isDemo
          ? `<button class="link-btn" data-demo-jump="${esc(p.demoKey)}">Live Demo ${ICON.play}</button>`
          : p.demo
            ? `<a class="link-btn" href="${esc(p.demo)}" target="_blank" rel="noopener">Live Demo ${ICON.external}</a>`
            : `<span class="link-btn disabled" title="No live demo yet">Demo soon</span>`}
        ${p.repo
          ? `<a class="link-btn" href="${esc(p.repo)}" target="_blank" rel="noopener">Source ${ICON.external}</a>`
          : `<span class="link-btn disabled">Source soon</span>`}
      </div>
    </div>
  </article>`;
}

function renderProjects() {
  const grid = $("#projectsGrid");
  if (!grid) return;

  const list = DATA.projects
    .filter(p => activeFilter === "all" || p.category === activeFilter)
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  grid.innerHTML = list.length
    ? list.map(projectCard).join("")
    : `<div class="projects-empty"><p>No projects in this category yet.</p></div>`;

  observeReveals(grid);
}

/* =========================================================
   LIVE DEMOS — SHOWCASE
   ========================================================= */
let activeDemoIndex = 0;
let activeDemoCleanup = null;

function demoProjects() {
  return DATA.projects.filter(p => p.demoKey);
}

function renderShowcaseList() {
  const list = $("#showcaseList");
  if (!list) return;

  const demos = demoProjects();

  list.innerHTML = demos.map((p, i) => `
    <button class="showcase-item ${i === activeDemoIndex ? "active" : ""}"
            role="tab" aria-selected="${i === activeDemoIndex}"
            data-showcase="${i}">
      <strong>${esc(p.name)}</strong>
      <span>${esc(p.tagline)}</span>
    </button>
  `).join("");

  list.onclick = e => {
    const btn = e.target.closest(".showcase-item");
    if (!btn) return;
    activeDemoIndex = Number(btn.dataset.showcase);
    $$(".showcase-item", list).forEach(b => {
      const on = b === btn;
      b.classList.toggle("active", on);
      b.setAttribute("aria-selected", on);
    });
    renderShowcaseView();
  };
}

function renderShowcaseView() {
  const view = $("#showcaseView");
  if (!view) return;

  // Clean up any running demo
  if (typeof activeDemoCleanup === "function") {
    try { activeDemoCleanup(); } catch {}
    activeDemoCleanup = null;
  }

  const demos = demoProjects();
  const p = demos[activeDemoIndex];

  if (!p) {
    view.innerHTML = `<div class="browser-body"><div class="preview-empty">
      <h4>No demos yet</h4><p>Add projects with a demoKey to populate this section.</p>
    </div></div>`;
    return;
  }

  view.innerHTML = `
    <div class="browser-bar">
      <span class="dots" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="url">nexus-tech://demos/${esc(p.demoKey)}</span>
    </div>
    <div class="browser-body" id="demoMount"></div>
    <div class="showcase-meta">
      <div class="info">
        <h4>${esc(p.name)}</h4>
        <p>${esc(p.description)}</p>
      </div>
      <div class="actions">
        <button class="btn btn-ghost btn-sm" data-details="${esc(p.id)}">Project Details</button>
      </div>
    </div>
  `;

  const mount = $("#demoMount");
  const builder = DEMO_BUILDERS[p.demoKey];
  if (builder && mount) {
    activeDemoCleanup = builder(mount) || null;
  }
}

/* =========================================================
   DEMO BUILDERS
   ========================================================= */

/* ---------- 1. CALCULATOR ---------- */
function buildCalculator(mount) {
  mount.innerHTML = `
    <div class="demo-stage">
      <div class="demo-title">${ICON.calc} Calculator</div>
      <div class="calc">
        <div class="calc-display">
          <div class="calc-expr" id="calcExpr"></div>
          <div class="calc-value" id="calcValue">0</div>
        </div>
        <div class="calc-grid">
          <button class="calc-key clear" data-k="AC">AC</button>
          <button class="calc-key" data-k="DEL">⌫</button>
          <button class="calc-key" data-k="%">%</button>
          <button class="calc-key op" data-k="/">÷</button>

          <button class="calc-key" data-k="7">7</button>
          <button class="calc-key" data-k="8">8</button>
          <button class="calc-key" data-k="9">9</button>
          <button class="calc-key op" data-k="*">×</button>

          <button class="calc-key" data-k="4">4</button>
          <button class="calc-key" data-k="5">5</button>
          <button class="calc-key" data-k="6">6</button>
          <button class="calc-key op" data-k="-">−</button>

          <button class="calc-key" data-k="1">1</button>
          <button class="calc-key" data-k="2">2</button>
          <button class="calc-key" data-k="3">3</button>
          <button class="calc-key op" data-k="+">+</button>

          <button class="calc-key wide" data-k="0">0</button>
          <button class="calc-key" data-k=".">.</button>
          <button class="calc-key eq" data-k="=">=</button>
        </div>
      </div>
      <p class="demo-hint" style="text-align:center;">Tip: use your keyboard too — numbers, + − × ÷, Enter for equals, Esc to clear.</p>
    </div>
  `;

  const valueEl = $("#calcValue");
  const exprEl  = $("#calcExpr");
  let current = "0";
  let previous = "";
  let operator = null;
  let justEvaluated = false;

  function update() {
    valueEl.textContent = current.length > 14 ? Number(current).toExponential(6) : current;
    exprEl.textContent = previous ? `${previous} ${operator || ""}` : "";
  }

  function inputDigit(d) {
    if (justEvaluated) { current = "0"; justEvaluated = false; previous = ""; operator = null; }
    if (d === "." && current.includes(".")) return;
    if (current === "0" && d !== ".") current = d;
    else current += d;
    update();
  }

  function handleOp(op) {
    if (operator && !justEvaluated && current !== "") {
      // chain
      const result = compute();
      current = String(result);
    }
    previous = current;
    operator = op;
    current = "0";
    justEvaluated = false;
    update();
  }

  function compute() {
    const a = parseFloat(previous);
    const b = parseFloat(current);
    if (isNaN(a) || isNaN(b)) return b;
    switch (operator) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return b === 0 ? "Error" : a / b;
      default: return b;
    }
  }

  function equals() {
    if (!operator) return;
    const result = compute();
    exprEl.textContent = `${previous} ${operator} ${current} =`;
    current = String(result);
    previous = "";
    operator = null;
    justEvaluated = true;
    valueEl.textContent = current.length > 14 ? Number(current).toExponential(6) : current;
  }

  function clearAll() {
    current = "0"; previous = ""; operator = null; justEvaluated = false; update();
  }

  function del() {
    if (justEvaluated) return;
    current = current.length > 1 ? current.slice(0, -1) : "0";
    update();
  }

  function percent() {
    const n = parseFloat(current) || 0;
    current = String(n / 100);
    update();
  }

  function press(k) {
    if (/^[0-9.]$/.test(k)) return inputDigit(k);
    if (["+","-","*","/"].includes(k)) return handleOp(k);
    if (k === "=") return equals();
    if (k === "AC") return clearAll();
    if (k === "DEL") return del();
    if (k === "%") return percent();
  }

  const grid = mount.querySelector(".calc-grid");
  grid.addEventListener("click", e => {
    const btn = e.target.closest("[data-k]");
    if (!btn) return;
    press(btn.dataset.k);
  });

  function onKey(e) {
    if (!document.body.contains(mount)) { window.removeEventListener("keydown", onKey); return; }
    const k = e.key;
    if (/^[0-9.]$/.test(k)) { press(k); e.preventDefault(); }
    else if (["+","-","*","/"].includes(k)) { press(k); e.preventDefault(); }
    else if (k === "Enter" || k === "=") { press("="); e.preventDefault(); }
    else if (k === "Backspace") { press("DEL"); e.preventDefault(); }
    else if (k === "Escape") { press("AC"); e.preventDefault(); }
    else if (k === "%") { press("%"); e.preventDefault(); }
  }
  window.addEventListener("keydown", onKey);

  update();

  // cleanup
  return () => window.removeEventListener("keydown", onKey);
}

/* ---------- 2. WEATHER API ---------- */
function buildWeather(mount) {
  mount.innerHTML = `
    <div class="demo-stage">
      <div class="demo-title">${ICON.cloud} Live Weather — Open-Meteo API</div>
      <div class="weather-box">
        <div class="demo-row">
          <input class="demo-input" id="wCity" type="text" placeholder="Enter a city (e.g. Nairobi, London, Tokyo)" value="Nairobi" />
          <button class="demo-btn" id="wGo" style="flex:0 0 auto;">Get Weather</button>
        </div>
        <div id="wResult">
          <div class="weather-loading"><span class="spinner"></span> Loading weather…</div>
        </div>
      </div>
    </div>
  `;

  const cityEl = $("#wCity");
  const goBtn  = $("#wGo");
  const result = $("#wResult");

  const WMO = {
    0:["Clear sky","☀️"], 1:["Mainly clear","🌤"], 2:["Partly cloudy","⛅"], 3:["Overcast","☁️"],
    45:["Fog","🌫"], 48:["Rime fog","🌫"],
    51:["Light drizzle","🌦"], 53:["Drizzle","🌦"], 55:["Heavy drizzle","🌧"],
    56:["Freezing drizzle","🌧"], 57:["Freezing drizzle","🌧"],
    61:["Light rain","🌦"], 63:["Rain","🌧"], 65:["Heavy rain","🌧"],
    66:["Freezing rain","🌧"], 67:["Freezing rain","🌧"],
    71:["Light snow","🌨"], 73:["Snow","🌨"], 75:["Heavy snow","❄️"], 77:["Snow grains","🌨"],
    80:["Rain showers","🌦"], 81:["Rain showers","🌧"], 82:["Violent showers","⛈"],
    85:["Snow showers","🌨"], 86:["Snow showers","🌨"],
    95:["Thunderstorm","⛈"], 96:["Thunderstorm + hail","⛈"], 99:["Thunderstorm + hail","⛈"]
  };

  async function fetchWeather(city) {
    result.innerHTML = `<div class="weather-loading"><span class="spinner"></span> Loading weather for "${esc(city)}"…</div>`;
    try {
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
      const geo = await geoRes.json();
      if (!geo.results || !geo.results.length) {
        result.innerHTML = `<div class="preview-empty">${ICON.alert}<h4>City not found</h4><p>Try a different name or check your spelling.</p></div>`;
        return;
      }
      const { latitude, longitude, name, country } = geo.results[0];

      const wRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`);
      const w = await wRes.json();
      const c = w.current;
      const code = c.weather_code;
      const [desc, icon] = WMO[code] || ["Unknown", "🌡"];

      result.innerHTML = `
        <div class="weather-current">
          <div class="weather-icon">${icon}</div>
          <div>
            <div class="weather-temp">${c.temperature_2m.toFixed(1)}°C</div>
            <div class="weather-desc">${esc(desc)}</div>
            <div class="weather-place">${esc(name)}${country ? ", " + esc(country) : ""}</div>
          </div>
        </div>
        <div class="weather-stats">
          <div class="wstat"><span>Feels like</span><strong>${c.apparent_temperature.toFixed(1)}°C</strong></div>
          <div class="wstat"><span>Humidity</span><strong>${c.relative_humidity_2m}%</strong></div>
          <div class="wstat"><span>Wind</span><strong>${c.wind_speed_10m.toFixed(1)} km/h</strong></div>
        </div>
      `;
    } catch (err) {
      result.innerHTML = `<div class="preview-empty">${ICON.alert}<h4>Couldn't fetch weather</h4><p>Please check your connection and try again.</p></div>`;
    }
  }

  goBtn.addEventListener("click", () => {
    const c = cityEl.value.trim();
    if (c) fetchWeather(c);
  });
  cityEl.addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); goBtn.click(); }
  });

  // initial load
  fetchWeather(cityEl.value);

  return () => {};
}

/* ---------- 3. ADWINO (Guest list) ---------- */
function buildAdwino(mount) {
  const KEY = "nexus_adwino_guests_v1";
  let guests = [];
  try { guests = JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { guests = []; }

  mount.innerHTML = `
    <div class="demo-stage">
      <div class="demo-title">${ICON.users} Adwino — Guest Manager</div>
      <p class="demo-hint">Add guests for your next event. Data is saved in your browser.</p>

      <div class="adwino-form">
        <input class="demo-input" id="adName" type="text" placeholder="Guest full name" />
        <input class="demo-input" id="adContact" type="text" placeholder="Phone or email (optional)" />
        <button class="demo-btn" id="adAdd">Add Guest</button>
      </div>

      <div class="adwino-list" id="adList"></div>
    </div>
  `;

  const nameEl = $("#adName");
  const contactEl = $("#adContact");
  const addBtn = $("#adAdd");
  const listEl = $("#adList");

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(guests)); } catch {}
  }

  function render() {
    if (!guests.length) {
      listEl.innerHTML = `<div class="adwino-empty">No guests yet — add your first one above.</div>`;
      return;
    }
    listEl.innerHTML = guests.map((g, i) => `
      <div class="adwino-item">
        <span class="adwino-avatar">${esc((g.name[0] || "?").toUpperCase())}</span>
        <div class="adwino-info">
          <strong>${esc(g.name)}</strong>
          <span>${esc(g.contact || "—")}</span>
        </div>
        <button class="adwino-del" data-del="${i}" aria-label="Remove ${esc(g.name)}">${ICON.trash}</button>
      </div>
    `).join("");
  }

  function add() {
    const name = nameEl.value.trim();
    const contact = contactEl.value.trim();
    if (!name) { nameEl.focus(); return; }
    guests.push({ name, contact });
    save();
    nameEl.value = ""; contactEl.value = "";
    nameEl.focus();
    render();
  }

  addBtn.addEventListener("click", add);
  nameEl.addEventListener("keydown", e => { if (e.key === "Enter") add(); });
  contactEl.addEventListener("keydown", e => { if (e.key === "Enter") add(); });

  listEl.addEventListener("click", e => {
    const btn = e.target.closest("[data-del]");
    if (!btn) return;
    guests.splice(Number(btn.dataset.del), 1);
    save(); render();
  });

  render();
  return () => {};
}

/* ---------- 4. DATA CENTER MONITOR ---------- */
function buildDatacenter(mount) {
  const racks = [
    { name: "Rack A", cpu: 42, temp: 38, bw: 55 },
    { name: "Rack B", cpu: 67, temp: 44, bw: 72 },
    { name: "Rack C", cpu: 28, temp: 34, bw: 40 },
    { name: "Rack D", cpu: 81, temp: 51, bw: 88 }
  ];

  mount.innerHTML = `
    <div class="demo-stage">
      <div class="demo-title">${ICON.server} Data Center Monitor</div>
      <div class="cyber-head">
        <p class="demo-hint">Live readings across 4 racks — updating every 1.5 seconds.</p>
        <span class="cyber-live"><i></i> Live</span>
      </div>
      <div class="dc-grid" id="dcGrid"></div>
    </div>
  `;

  const grid = $("#dcGrid");

  function render() {
    grid.innerHTML = racks.map(r => {
      const cpuCls = r.cpu > 85 ? "crit" : r.cpu > 70 ? "warn" : "";
      const tempCls = r.temp > 55 ? "crit" : r.temp > 48 ? "warn" : "";
      const bwCls = r.bw > 85 ? "crit" : r.bw > 70 ? "warn" : "";
      const hot = r.temp > 55;
      return `
        <div class="dc-rack">
          <header><span>${r.name}</span><i class="${hot ? "hot" : ""}"></i></header>
          <div class="dc-bars">
            <div>
              <div class="dc-val">CPU ${Math.round(r.cpu)}%</div>
              <div class="dc-bar"><i class="${cpuCls}" style="width:${r.cpu}%"></i></div>
            </div>
            <div>
              <div class="dc-val">Temp ${Math.round(r.temp)}°C</div>
              <div class="dc-bar"><i class="${tempCls}" style="width:${Math.min(100, r.temp * 1.4)}%"></i></div>
            </div>
            <div>
              <div class="dc-val">BW ${Math.round(r.bw)}%</div>
              <div class="dc-bar"><i class="${bwCls}" style="width:${r.bw}%"></i></div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  render();

  const interval = setInterval(() => {
    if (!document.body.contains(mount)) { clearInterval(interval); return; }
    racks.forEach(r => {
      r.cpu  = Math.max(10, Math.min(98, r.cpu + (Math.random() - .5) * 14));
      r.temp = Math.max(28, Math.min(65, r.temp + (Math.random() - .5) * 4));
      r.bw   = Math.max(15, Math.min(98, r.bw + (Math.random() - .5) * 16));
    });
    render();
  }, 1500);

  return () => clearInterval(interval);
}

/* ---------- 5. CYBER SECURITY DASHBOARD ---------- */
function buildCyber(mount) {
  const EVENTS = [
    ["info", "Firewall rule updated successfully"],
    ["ok",   "SSL certificate renewed for nexus.local"],
    ["warn", "Failed login attempt — user 'admin' from 41.90.12.77"],
    ["crit", "Port scan detected from 185.220.101.4"],
    ["info", "Antivirus definitions updated to v2026.10"],
    ["warn", "Unusual outbound traffic on port 4444"],
    ["ok",   "Backup completed — 3.2 GB archived"],
    ["crit", "Brute force attack blocked on SSH"],
    ["info", "User 'j.ojwang' logged in from Nairobi"],
    ["warn", "Multiple 404s from 102.68.77.12 — rate limiting"],
    ["ok",   "Intrusion prevention signature matched & dropped"],
    ["info", "DNS query spike detected — investigating"],
    ["crit", "Malware signature matched in email attachment"],
    ["ok",   "Endpoint scan complete — no threats found"]
  ];

  let total = 0, blocked = 0, alerts = 0;

  mount.innerHTML = `
    <div class="demo-stage">
      <div class="demo-title">${ICON.shield} Cyber Security Dashboard</div>
      <div class="cyber-head">
        <p class="demo-hint">Simulated SOC feed — new events stream in automatically.</p>
        <span class="cyber-live"><i></i> Monitoring</span>
      </div>
      <div class="cyber-stats">
        <div class="cstat"><span>Events</span><strong id="cyTotal">0</strong></div>
        <div class="cstat"><span>Blocked</span><strong id="cyBlocked">0</strong></div>
        <div class="cstat"><span>Alerts</span><strong id="cyAlerts">0</strong></div>
      </div>
      <div class="cyber-log" id="cyLog"></div>
    </div>
  `;

  const logEl = $("#cyLog");
  const totalEl = $("#cyTotal");
  const blockedEl = $("#cyBlocked");
  const alertsEl = $("#cyAlerts");

  function stamp() {
    const d = new Date();
    return d.toTimeString().slice(0, 8);
  }

  function push(severity, msg) {
    total++;
    if (severity === "crit") { blocked++; alerts++; }
    if (severity === "warn") alerts++;

    totalEl.textContent = total;
    blockedEl.textContent = blocked;
    alertsEl.textContent = alerts;

    const row = document.createElement("div");
    row.innerHTML = `<span class="t">${stamp()}</span><span class="sev ${severity}">${severity.toUpperCase()}</span><span class="msg">${esc(msg)}</span>`;
    logEl.appendChild(row);
    logEl.scrollTop = logEl.scrollHeight;

    // keep log manageable
    while (logEl.children.length > 40) logEl.removeChild(logEl.firstChild);
  }

  // seed a few
  for (let i = 0; i < 5; i++) {
    const [sev, msg] = EVENTS[Math.floor(Math.random() * EVENTS.length)];
    push(sev, msg);
  }

  const interval = setInterval(() => {
    if (!document.body.contains(mount)) { clearInterval(interval); return; }
    const [sev, msg] = EVENTS[Math.floor(Math.random() * EVENTS.length)];
    push(sev, msg);
  }, 1800);

  return () => clearInterval(interval);
}

/* ---------- 6. QR CODE GENERATOR ---------- */
function buildQR(mount) {
  mount.innerHTML = `
    <div class="demo-stage">
      <div class="demo-title">${ICON.qr} QR Code Generator</div>
      <div class="qr-box">
        <div class="demo-row" style="width:100%;">
          <input class="demo-input" id="qrText" type="text" placeholder="Enter text or URL…" value="https://nexus-technologies.example" />
        </div>
        <div class="qr-canvas-wrap">
          <img id="qrCanvas" alt="Generated QR code" />
        </div>
        <div class="demo-row" style="width:100%;">
          <button class="demo-btn" id="qrGen">Generate</button>
          <a class="demo-btn secondary" id="qrDown" download="qr-code.png" style="text-align:center;">Download</a>
        </div>
      </div>
    </div>
  `;

  const input = $("#qrText");
  const img = $("#qrCanvas");
  const genBtn = $("#qrGen");
  const downBtn = $("#qrDown");

  function generate() {
    const text = input.value.trim() || "https://nexus-technologies.example";
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=440x440&margin=10&data=${encodeURIComponent(text)}`;
    img.src = url;
    downBtn.href = url;
  }

  genBtn.addEventListener("click", generate);
  input.addEventListener("keydown", e => { if (e.key === "Enter") generate(); });

  generate();
  return () => {};
}

/* ---------- 7. PASSWORD GENERATOR ---------- */
function buildPassword(mount) {
  mount.innerHTML = `
    <div class="demo-stage">
      <div class="demo-title">${ICON.key} Password Generator</div>
      <div class="demo-hint">Uses your browser's cryptographically secure random generator.</div>

      <div class="pw-output">
        <span id="pwOut">—</span>
        <button class="demo-btn secondary" id="pwCopy" style="padding:8px 12px;">${ICON.copy}</button>
      </div>
      <div class="pw-meter"><i id="pwBar"></i></div>
      <div class="pw-label" id="pwLabel">Strength: —</div>

      <div style="margin-top:6px;">
        <div class="pw-label" style="margin-bottom:6px;">Length: <span id="pwLenVal">16</span></div>
        <input type="range" id="pwLen" min="6" max="40" value="16" style="width:100%;accent-color:var(--brand);" />
      </div>

      <div class="pw-options">
        <label><input type="checkbox" id="pwUpper" checked> A-Z</label>
        <label><input type="checkbox" id="pwLower" checked> a-z</label>
        <label><input type="checkbox" id="pwNum"   checked> 0-9</label>
        <label><input type="checkbox" id="pwSym"   checked> !@#</label>
      </div>

      <button class="demo-btn" id="pwGen" style="margin-top:8px;">${ICON.refresh} Generate New</button>
    </div>
  `;

  const outEl   = $("#pwOut");
  const lenEl   = $("#pwLen");
  const lenVal  = $("#pwLenVal");
  const upEl    = $("#pwUpper");
  const lowEl   = $("#pwLower");
  const numEl   = $("#pwNum");
  const symEl   = $("#pwSym");
  const genBtn  = $("#pwGen");
  const copyBtn = $("#pwCopy");
  const barEl   = $("#pwBar");
  const labelEl = $("#pwLabel");

  function rand(n) {
    const arr = new Uint32Array(1);
    crypto.getRandomValues(arr);
    return arr[0] % n;
  }

  function generate() {
    const length = Number(lenEl.value);
    let pool = "";
    if (upEl.checked)  pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowEl.checked) pool += "abcdefghijklmnopqrstuvwxyz";
    if (numEl.checked) pool += "0123456789";
    if (symEl.checked) pool += "!@#$%^&*()-_=+[]{}<>?";
    if (!pool) pool = "abcdefghijklmnopqrstuvwxyz";

    let pw = "";
    for (let i = 0; i < length; i++) pw += pool[rand(pool.length)];
    outEl.textContent = pw;
    rate(pw, length);
  }

  function rate(pw, length) {
    let score = 0;
    if (length >= 8)  score++;
    if (length >= 12) score++;
    if (length >= 16) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[a-z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;

    const levels = [
      { max: 2, label: "Weak",        color: "#FF6B6B", w: 20 },
      { max: 4, label: "Fair",        color: "#FFC46B", w: 45 },
      { max: 5, label: "Good",        color: "#8FB4FF", w: 70 },
      { max: 6, label: "Strong",      color: "#4ADE9B", w: 88 },
      { max: 7, label: "Very Strong", color: "#28E0D8", w: 100 }
    ];
    const lv = levels.find(l => score <= l.max) || levels[levels.length - 1];
    barEl.style.width = lv.w + "%";
    barEl.style.background = lv.color;
    labelEl.textContent = `Strength: ${lv.label}`;
  }

  function copy() {
    const txt = outEl.textContent;
    if (!txt || txt === "—") return;
    navigator.clipboard.writeText(txt).then(() => {
      const old = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      setTimeout(() => { copyBtn.innerHTML = ICON.copy; }, 1200);
    });
  }

  lenEl.addEventListener("input", () => { lenVal.textContent = lenEl.value; generate(); });
  genBtn.addEventListener("click", generate);
  copyBtn.addEventListener("click", copy);
  [upEl, lowEl, numEl, symEl].forEach(el => el.addEventListener("change", generate));

  generate();
  return () => {};
}

/* ---------- 8. NETWORK SIMULATOR ---------- */
function buildNetwork(mount) {
  mount.innerHTML = `
    <div class="demo-stage">
      <div class="demo-title">${ICON.network} Network Simulator</div>
      <div class="net-sim">
        <div class="net-canvas-wrap">
          <canvas id="netCanvas"></canvas>
        </div>
        <div class="net-controls">
          <button class="demo-btn" id="netSend">${ICON.play} Send Packet Burst</button>
          <div class="net-status" id="netStatus">Packets in flight: 0</div>
        </div>
      </div>
    </div>
  `;

  const canvas = $("#netCanvas");
  const ctx = canvas.getContext("2d");
  const sendBtn = $("#netSend");
  const statusEl = $("#netStatus");

  let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  let nodes = [];
  let packets = [];
  let rafId = null;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    W = rect.width; H = rect.height;
    canvas.width = Math.floor(W * dpr);
    canvas.height = Math.floor(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    nodes = [
      { x: W * 0.15, y: H * 0.3,  label: "PC" },
      { x: W * 0.15, y: H * 0.75, label: "PC" },
      { x: W * 0.45, y: H * 0.5,  label: "SW" },
      { x: W * 0.72, y: H * 0.25, label: "RT" },
      { x: W * 0.72, y: H * 0.75, label: "FW" },
      { x: W * 0.92, y: H * 0.5,  label: "NET" }
    ];
  }

  const LINKS = [[0,2],[1,2],[2,3],[2,4],[3,5],[4,5],[3,4]];

  function getThemeColors() {
    const light = document.documentElement.getAttribute("data-theme") === "light";
    return light
      ? { node:"#4C5FE0", link:"rgba(76,95,224,.30)", text:"#0B1324", packet:"#0E9E9E" }
      : { node:"#6D8BFF", link:"rgba(109,139,255,.28)", text:"#EAEEF9", packet:"#28E0D8" };
  }

  function draw() {
    const c = getThemeColors();
    ctx.clearRect(0, 0, W, H);

    // links
    LINKS.forEach(([a, b]) => {
      ctx.strokeStyle = c.link;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(nodes[a].x, nodes[a].y);
      ctx.lineTo(nodes[b].x, nodes[b].y);
      ctx.stroke();
    });

    // nodes
    nodes.forEach(n => {
      // glow ring
      ctx.fillStyle = c.node + "22";
      ctx.beginPath();
      ctx.arc(n.x, n.y, 22, 0, Math.PI * 2);
      ctx.fill();

      // core
      ctx.fillStyle = c.node;
      ctx.beginPath();
      ctx.arc(n.x, n.y, 11, 0, Math.PI * 2);
      ctx.fill();

      // label
      ctx.fillStyle = c.text;
      ctx.font = "600 11px 'Space Grotesk', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(n.label, n.x, n.y + 28);
    });

    // packets
    packets = packets.filter(p => p.t < 1);
    packets.forEach(p => {
      const a = nodes[p.from], b = nodes[p.to];
      const x = a.x + (b.x - a.x) * p.t;
      const y = a.y + (b.y - a.y) * p.t;
      ctx.fillStyle = c.packet;
      ctx.shadowColor = c.packet;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      p.t += p.speed;
    });

    statusEl.textContent = `Packets in flight: ${packets.length}`;
    rafId = requestAnimationFrame(draw);
  }

  function sendOne() {
    const link = LINKS[Math.floor(Math.random() * LINKS.length)];
    const reverse = Math.random() < 0.5;
    const [a, b] = reverse ? [link[1], link[0]] : link;
    packets.push({ from: a, to: b, t: 0, speed: 0.008 + Math.random() * 0.012 });
  }

  function burst() {
    for (let i = 0; i < 6; i++) setTimeout(sendOne, i * 90);
  }

  sendBtn.addEventListener("click", burst);

  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  rafId = requestAnimationFrame(draw);
  // auto burst every 2.5s
  const auto = setInterval(() => {
    if (!document.body.contains(mount)) { clearInterval(auto); return; }
    if (Math.random() < 0.6) burst();
  }, 2500);

  // first burst
  setTimeout(burst, 400);

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    clearInterval(auto);
    ro.disconnect();
  };
}

/* ---------- DEMO REGISTRY ---------- */
const DEMO_BUILDERS = {
  calculator: buildCalculator,
  weather:    buildWeather,
  adwino:     buildAdwino,
  datacenter: buildDatacenter,
  cyber:      buildCyber,
  qr:         buildQR,
  password:   buildPassword,
  network:    buildNetwork
};

/* =========================================================
   GALLERY
   ========================================================= */
function renderGallery() {
  const grid = $("#galleryGrid");
  if (!grid) return;

  grid.innerHTML = DATA.gallery.map((g, i) => `
    <figure class="gallery-item reveal ${g.span ? "span-2" : ""}" style="--d:${i * 60}ms">
      <img src="${esc(g.src)}" alt="${esc(g.caption)}" loading="lazy" decoding="async">
      <figcaption>${esc(g.caption)}</figcaption>
    </figure>
  `).join("");

  observeReveals(grid);
}

/* =========================================================
   SERVICES
   ========================================================= */
function renderServices() {
  const grid = $("#servicesGrid");
  if (!grid) return;

  grid.innerHTML = DATA.services.map((s, i) => `
    <article class="service reveal" style="--d:${i * 60}ms">
      ${ICON[s.icon] || ICON.code}
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.desc)}</p>
    </article>
  `).join("");

  observeReveals(grid);
}

/* =========================================================
   CONTACT LINKS
   ========================================================= */
function renderContactLinks() {
  const wrap = $("#contactLinks");
  if (!wrap) return;

  wrap.innerHTML = DATA.socials.map(s => `
    <a class="contact-link" href="${esc(s.href)}" ${s.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
      <span class="ic">${ICON[s.icon] || ICON.globe}</span>
      <span class="tx">
        <strong>${esc(s.label)}</strong>
        <span>${esc(s.value)}</span>
      </span>
    </a>
  `).join("");
}

/* =========================================================
   MODAL
   ========================================================= */
const modal = $("#modal");
let lastFocused = null;

function openModal(id) {
  const p = DATA.projects.find(x => x.id === id);
  if (!p) return;

  const isDemo = Boolean(p.demoKey);

  $("#modalBody").innerHTML = `
    ${p.placeholder ? `<div class="notice">${ICON.alert}
      <span><strong>Sample entry.</strong> This project is a placeholder example. Replace it in the script with your real project details.</span>
    </div>` : ""}

    <h3 id="modalTitle">${esc(p.name)}</h3>
    <p class="modal-sub">${esc(p.tagline)} • ${esc(p.status)}</p>

    <p>${esc(p.description)}</p>

    ${p.details ? `<h5>Overview</h5><p>${esc(p.details)}</p>` : ""}

    <h5>Technologies</h5>
    <ul class="tech">${p.tech.map(t => `<li>${esc(t)}</li>`).join("")}</ul>

    <div class="modal-actions">
      ${isDemo
        ? `<button class="btn btn-primary btn-sm" data-demo-jump="${esc(p.demoKey)}">${ICON.play} Try Live Demo</button>`
        : p.demo
          ? `<a class="btn btn-primary btn-sm" href="${esc(p.demo)}" target="_blank" rel="noopener">Open Live Demo ${ICON.external}</a>`
          : `<span class="btn btn-ghost btn-sm" style="opacity:.55;cursor:not-allowed;">Demo Coming Soon</span>`}
      ${p.repo
        ? `<a class="btn btn-ghost btn-sm" href="${esc(p.repo)}" target="_blank" rel="noopener">${ICON.github} View Source</a>`
        : `<span class="btn btn-ghost btn-sm" style="opacity:.55;cursor:not-allowed;">Source Not Published</span>`}
    </div>
  `;

  lastFocused = document.activeElement;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  const closeBtn = $(".modal-close");
  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

/* Modal global handlers */
document.addEventListener("click", e => {
  if (e.target.closest("[data-close]")) { closeModal(); return; }

  const detailBtn = e.target.closest("[data-details]");
  if (detailBtn) { openModal(detailBtn.dataset.details); return; }

  const demoJump = e.target.closest("[data-demo-jump]");
  if (demoJump) {
    closeModal();
    const demos = demoProjects();
    const idx = demos.findIndex(p => p.demoKey === demoJump.dataset.demoJump);
    if (idx >= 0) {
      activeDemoIndex = idx;
      renderShowcaseList();
      renderShowcaseView();
    }
    const target = document.getElementById("demos");
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});

/* =========================================================
   SCROLL REVEALS
   ========================================================= */
let revealObserver;

function observeReveals(root = document) {
  if (!("IntersectionObserver" in window)) {
    $$(".reveal", root).forEach(el => el.classList.add("in"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  }
  $$(".reveal", root).forEach(el => {
    if (!el.classList.contains("in")) revealObserver.observe(el);
  });
}

/* =========================================================
   NAVIGATION
   ========================================================= */
function initNav() {
  const nav = $("#nav");
  const progress = $("#scrollProgress");
  const toTop = $("#toTop");
  const navLinks = $("#navLinks");
  const hamburger = $("#hamburger");

  let ticking = false;

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 20);
    toTop.classList.toggle("show", y > 600);

    const docH = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = docH > 0 ? `${(y / docH) * 100}%` : "0%";
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  // Mobile menu
  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    document.body.classList.toggle("nav-open", open);
    hamburger.setAttribute("aria-expanded", String(open));
    hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  navLinks.addEventListener("click", e => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
      document.body.classList.remove("nav-open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Active link tracking
  const sections = $$("main section[id]");
  const links = $$(".nav-links a");

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(s => spy.observe(s));
  }
}

/* =========================================================
   THEME
   ========================================================= */
function initTheme() {
  const root = document.documentElement;
  const toggle = $("#themeToggle");

  const stored = (() => { try { return localStorage.getItem("nexus-theme"); } catch { return null; } })();
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  root.setAttribute("data-theme", stored || (prefersLight ? "light" : "dark"));

  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("nexus-theme", next); } catch {}
    syncCanvasTheme();
  });
}

/* =========================================================
   HERO NETWORK CANVAS
   ========================================================= */
let canvasTheme = { line: "130,160,255", node: "160,190,255" };

function syncCanvasTheme() {
  const light = document.documentElement.getAttribute("data-theme") === "light";
  canvasTheme = light
    ? { line: "70,95,180", node: "70,95,180" }
    : { line: "130,160,255", node: "160,190,255" };
}

function initNetworkCanvas() {
  const canvas = $("#net");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w = 0, h = 0, dpr = 1;
  let nodes = [];
  let rafId = null;
  let visible = true;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const density = w < 640 ? 26000 : 20000;
    const count = Math.max(16, Math.min(64, Math.round((w * h) / density)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.24,
      vy: (Math.random() - 0.5) * 0.24,
      r: Math.random() * 1.5 + 0.7
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const maxDist = w < 640 ? 105 : 135;

    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      a.x += a.vx; a.y += a.vy;
      if (a.x < -20) a.x = w + 20;
      if (a.x > w + 20) a.x = -20;
      if (a.y < -20) a.y = h + 20;
      if (a.y > h + 20) a.y = -20;

      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.32;
          ctx.strokeStyle = `rgba(${canvasTheme.line},${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = `rgba(${canvasTheme.node},0.55)`;
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();
    }

    rafId = requestAnimationFrame(draw);
  }

  function start() {
    if (rafId === null && visible && !reduceMotion) rafId = requestAnimationFrame(draw);
  }
  function stop() {
    if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
  }

  resize();
  syncCanvasTheme();

  if (reduceMotion) { draw(); stop(); } else { start(); }

  let rt;
  window.addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(() => {
      resize();
      if (reduceMotion) { draw(); stop(); }
    }, 180);
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      visible ? start() : stop();
    }, { threshold: 0 }).observe(canvas);
  }

  document.addEventListener("visibilitychange", () => {
    document.hidden ? stop() : (visible && start());
  });
}

/* =========================================================
   CONTACT FORM — REACTIVE SEND PANEL
   ========================================================= */
function initContactForm() {
  const form = $("#contactForm");
  const status = $("#formStatus");
  const submitBtn = $("#submitBtn");
  const sendPanel = $("#sendPanel");
  const sendEmail = $("#sendEmailBtn");
  const sendWa = $("#sendWaBtn");

  if (!form) return;

  const p = DATA.profile;

  function showStatus(type, message) {
    status.className = `form-status show ${type}`;
    status.innerHTML = `${type === "success" ? ICON.check : ICON.alert}<span>${esc(message)}</span>`;
  }

  function clearStatus() {
    status.className = "form-status";
    status.innerHTML = "";
  }

  function fieldInvalid(input, bad) {
    const field = input.closest(".field");
    if (field) field.classList.toggle("invalid", bad);
  }

  // Live validation clears errors as user types
  ["cf-name", "cf-email", "cf-subject", "cf-message"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", () => fieldInvalid(el, false));
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    clearStatus();
    sendPanel.classList.remove("show");

    const nameEl = $("#cf-name");
    const emailEl = $("#cf-email");
    const subjectEl = $("#cf-subject");
    const messageEl = $("#cf-message");

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const subject = subjectEl.value.trim();
    const message = messageEl.value.trim();

    let valid = true;
    if (!name) { fieldInvalid(nameEl, true); valid = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { fieldInvalid(emailEl, true); valid = false; }
    if (!subject) { fieldInvalid(subjectEl, true); valid = false; }
    if (!message) { fieldInvalid(messageEl, true); valid = false; }

    if (!valid) {
      showStatus("error", "Please fill in every field correctly before sending.");
      return;
    }

    // Build message body
    const fullBody =
      `Hi John,\n\n${message}\n\n—\nSent from the Nexus Technologies portfolio\nName: ${name}\nEmail: ${email}`;

    // Email link
    const mailto = `mailto:${p.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
    sendEmail.href = mailto;

    // WhatsApp link
    const waText = `*${subject}*\n\n${message}\n\n— ${name} (${email})`;
    sendWa.href = `https://wa.me/${p.whatsapp}?text=${encodeURIComponent(waText)}`;

    // Show success + send panel
    showStatus("success", `Thanks, ${name}! Your message is ready — choose how you'd like to send it below.`);
    sendPanel.classList.add("show");

    // Animate the submit button briefly
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = `${ICON.check} Ready to Send`;
    submitBtn.disabled = true;
    setTimeout(() => {
      submitBtn.innerHTML = originalHTML;
      submitBtn.disabled = false;
    }, 1600);

    // Reset form fields but keep the send panel open
    form.reset();

    // Scroll panel into view on mobile
    if (window.innerWidth < 720) {
      setTimeout(() => sendPanel.scrollIntoView({ behavior: "smooth", block: "center" }), 200);
    }
  });

  // Also allow "Send" on the panel to close the panel after click
  [sendEmail, sendWa].forEach(el => {
    el.addEventListener("click", () => {
      setTimeout(() => {
        showStatus("success", "Message sent — thanks again! I'll reply as soon as I can.");
      }, 400);
    });
  });
}

/* =========================================================
   SMOOTH SCROLL (FALLBACK)
   ========================================================= */
function initSmoothScroll() {
  if ("scrollBehavior" in document.documentElement.style) return;

  document.addEventListener("click", e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute("href");
    if (id === "#" || id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: "smooth" });
  });
}

/* =========================================================
   INIT
   ========================================================= */
function init() {
  applyProfile();
  renderSkills();
  renderFilters();
  renderProjects();
  renderShowcaseList();
  renderShowcaseView();
  renderGallery();
  renderServices();
  renderContactLinks();

  initNav();
  initTheme();
  syncCanvasTheme();
  initNetworkCanvas();
  initContactForm();
  initSmoothScroll();

  observeReveals();

  console.log(
    "%c⚡ Nexus Technologies portfolio loaded — John Ojwang",
    "color:#6D8BFF;font-weight:700;font-size:13px;"
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
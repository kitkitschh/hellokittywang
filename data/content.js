export const nav = [
  { href: "/film-video", label: "Film / Video" },
  { href: "/marketing-campaigns", label: "Marketing Campaigns" },
  { href: "/events", label: "Events & Photography" },
  { href: "/contemporary-art", label: "Exhibitions" },
];

export const socials = [
  { href: "https://www.linkedin.com/in/kitty-wang-a2a97023b/", label: "LinkedIn" },
  { href: "https://www.instagram.com/kitkitschh/", label: "Instagram" },
  { href: "https://vimeo.com/user220394171", label: "Vimeo" },
];

export const bio = `Kitty Wang is a Chinese-American interdisciplinary artist based in Brooklyn, NY, working across video, drawing, sculpture, and installation. Her practice explores the intersections of kitsch, femininity, and cultural perception—mining the aesthetics of mass media and domestic iconography to question how womanhood is constructed, consumed, and transformed across time.

Born and raised in Queens, NY, Wang is deeply influenced by the layered realities of American and Chinese cultural narratives. Her work navigates the shifting stereotypes of women in both contexts, reflecting on how media evolution shapes—and is shaped by—societal norms. Nature often threads through these explorations, serving as both a metaphor and counterpoint to the artificial landscapes of femininity.

Wang is an alumna of the High School of Art and Design and The Cooper Union, where she was awarded the Robert Breer Film Award. Her solo exhibitions at Cooper Union, When Will You Play? and Superstar Superstar death, examined performance, persona, and the blurred boundaries between spectacle and self.

Through vibrant, satirical, and often uncanny juxtapositions, Kitty Wang invites viewers into spaces that are as disarming as they are familiar—spaces that ask us to reconsider what we see, what we believe, and why.`;

export const cv = {
  location: "Based in Brooklyn, NY",
  education: [{ school: "BFA at The Cooper Union", year: "2024", place: "New York, NY" }],
  awards: [{ title: "Robert Breer Film Award", year: "2024" }],
  exhibitions: [
    { title: "Bronze Show", date: "December 2024", venue: "41 Cooper Gallery (Group Show)" },
    { title: "Superstar Superstar death.", date: "May 2024", venue: "Great Hall Gallery (Solo Show)" },
    { title: "When Will You Play?", date: "November 2023", venue: "41 Cooper Gallery (Solo Show)" },
  ],
  experience: [
    {
      org: "Noreen Seabrook Marketing, Inc.",
      role: "Administrative and Design Assistant",
      date: "Jan 2025 (currently employed)",
      bullets: [
        "Coordinated production with 3 Nepalese mills, managing shipping logistics for 10-50 orders/month with an ~85% on-time delivery rate.",
        "Designed custom rug mockups and visual assets for 15+ client presentations using Adobe Illustrator and Photoshop.",
        "Managed invoicing via QuickBooks and monthly revenue reporting averaging $100,000/month over the past four months in Excel.",
      ],
    },
    {
      org: "Glo Studio Inc",
      role: "Sales Marketing Assistant",
      date: "May 2024 - Jan 2025",
      bullets: [
        "Designed mockups for 50+ neon, LED, and lighting installations across 20+ client campaigns.",
        "Photographed, filmed, and edited content for 15+ events and product shoots, producing assets used across Instagram, Twitter, YouTube, Pinterest, and the website.",
        "Contributed to marketing and advertising planning that grew social following to 24.6K with a 15% engagement increase, and secured features in 2 magazines/publications.",
      ],
    },
    {
      org: "Ludlow House NY (Soho House)",
      role: "Club Receptionist",
      date: "June 2023 - Feb 2024",
      bullets: [
        "Handled 30+ phone calls and emails daily from members.",
        "Coordinated event and party reservations for groups of up to 150 guests, supporting 20+ events total.",
        "Created spreadsheets of member-based information to better understand and accommodate member needs.",
      ],
    },
    {
      org: "Whitney Museum of American Art",
      role: "Digital Contents Intern",
      date: "Sep 2022 - Dec 2022",
      bullets: [
        "Built the internal database for the Jaune Quick-to-See Smith exhibition, cataloging 70+ objects/records.",
        'Produced and edited "Ask a Curator: In the Balance: Between Painting and Sculpture, 1965–1985" (1.7K views) and "Edward Hopper\'s New York" (10K views).',
        "Audited the Whitney website, identifying 5 usability issues later addressed by the team.",
      ],
    },
  ],
};

// Vimeo video IDs pulled from the existing hellokittywang.com site.
export const filmVideoWorks = [
  { id: "951786207", title: "Posh and Plush: The It Girl Diaries", year: "2024", medium: "Short Film" },
  { id: "951789171", title: "Movie Star Triptych", year: "2024", medium: "16mm" },
  { id: "951789355", title: "Continuance", year: "2023", medium: "16mm" },
  { id: "951793280", title: "Crawl", year: "2023", medium: "" },
  { id: "1088239565", title: "ShamPooPoo", year: "2023", medium: "" },
  { id: "951799544", title: "She'll Be Okay", year: "2022", medium: "Stop Motion Animation" },
  { id: "951801665", title: "Fuzz", year: "2022", medium: "Stop Motion Animation" },
];

export const marketingCampaigns = [
  {
    client: "EasyHerb",
    date: "2024",
    subCampaigns: [
      { title: "What is EasyHerb?", imageFolder: "marketing-campaigns/easyherb/what-is-easyherb" },
      { title: "Let's Get Connected", imageFolder: "marketing-campaigns/easyherb/lets-get-connected" },
      { title: "Meme Format", imageFolder: "marketing-campaigns/easyherb/meme-format" },
      { title: "Two Robbers", imageFolder: "marketing-campaigns/easyherb/two-robbers" },
      { title: "Assets", imageFolder: "marketing-campaigns/easyherb/assets" },
      {
        title: "Instagram Reels",
        videoAspect: "portrait",
        videos: [
          { id: "1212968344", hash: "d357a0f3ee" },
          { id: "1212968345", hash: "3b82019bf3" },
          { id: "1212968348", hash: "e39b84139e" },
          { id: "1212968343", hash: "408c8bab31" },
          { id: "1212968346", hash: "a79545fe2f" },
        ],
      },
    ],
  },
  {
    client: "GLO Studio",
    date: "2024",
    subCampaigns: [
      { title: "Uniqlo x GLO Studio Neons", imageFolder: "marketing-campaigns/glo-studio/uniqlo-x-glo-studio-neons" },
      {
        title: "Dark Matter Coffee x GLO Studio Install",
        imageFolder: "marketing-campaigns/glo-studio/dark-matter-coffee-x-glo-studio-install",
      },
      {
        title: "Cooper Union Tuition Free Announcement",
        imageFolder: "marketing-campaigns/glo-studio/cooper-union-tuition-free-announcement",
      },
      {
        title: "GLO Studio Sample Sale Announcement",
        imageFolder: "marketing-campaigns/glo-studio/glo-studio-sample-sale-announcement",
      },
      {
        title: "Instagram Reels",
        videoAspect: "portrait",
        videos: [
          { id: "1212968454", hash: "d667ecc380" },
          { id: "1212968457", hash: "c3582a7e0d" },
          { id: "1212968455", hash: "6b6322f292" },
        ],
      },
    ],
  },
];

// Event photography — client/social event coverage, separate from her own
// gallery shows (those live under Contemporary Art > Exhibitions instead).
export const eventPhotographyGalleries = [
  { title: "Essence Unleashed", date: "2025", imageFolder: "events/essence-unleashed-2025" },
  { title: "Boyscoutmarie: Elsewhere", date: "2026", imageFolder: "events/boyscoutmarie-elsewhere-2026" },
  { title: "Passport Mudhouse Event", date: "2024", imageFolder: "events/passport-mudhouse-2024" },
  { title: "Social Parties", date: "", imageFolder: "events/social-parties" },
];

export const eventPhotographyFolder = "events/event-photography";

// Documentation of her own exhibitions (installation shots, openings).
export const exhibitionDocumentation = [
  {
    title: "SUPERSTAR SUPERSTAR death.",
    date: "April 2024",
    venue: "Cooper Union Great Hall Gallery",
    vimeoId: "951806554",
    imageFolder: "contemporary-art/exhibitions/superstar-superstar-death",
  },
  {
    title: "Reflections of Home",
    date: "December 2026",
    venue: "Living Space Group Show",
    imageFolder: "contemporary-art/exhibitions/reflections-of-home",
  },
  {
    title: "When Will You Play?",
    date: "November 2022",
    venue: "Cooper Union 41 Cooper Square Gallery",
    imageFolder: "contemporary-art/exhibitions/when-will-you-play",
  },
];

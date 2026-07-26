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
        "Coordinate production with international mills and manage shipping logistics to ensure timely delivery and high-quality standards.",
        "Design custom rugs and prepare visual assets using Adobe Illustrator and Photoshop to support client presentations and product development.",
        "Handle administrative operations, including client communication, invoicing via QuickBooks, and monthly revenue reporting in Excel.",
      ],
    },
    {
      org: "Glo Studio Inc",
      role: "Sales Marketing Assistant",
      date: "May 2024 - Jan 2025",
      bullets: [
        "Designing mockups for glass, LED, and other neon and lighting installations.",
        "Photographing, filming, and editing products and events for sales assets and social media.",
        "Assisting in planning marketing and advertising tactics on socials and magazines.",
      ],
    },
    {
      org: "Ludlow House NY (Soho House)",
      role: "Club Receptionist",
      date: "June 2023 - Feb 2024",
      bullets: [
        "Answering high volumes of phone calls and emails from members.",
        "Assisting in organizing events and large party reservations for high profile clientele.",
        "Creating spreadsheets of member based information to better understand and accommodate member needs.",
      ],
    },
    {
      org: "Whitney Museum of American Art",
      role: "Digital Contents Intern",
      date: "Sep 2022 - Dec 2022",
      bullets: [
        'Responsible for creating the internal database on the Jaune Quick-to-See Smith Exhibition.',
        'Collaborated on production and editing of the "Ask a Curator" video for the Balance Exhibition and the Edward Hopper Exhibition.',
        "Auditing the Whitney website for better flow and user friendliness.",
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
    date: "2024-2025",
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

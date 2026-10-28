// Nishtha Pandya - Graphic Design Portfolio Data
// Complete collection of ALL user images, videos, exact resume & individual roles

const PORTFOLIO_DATA = {
  profile: {
    name: "Nishtha Pandya",
    role: "Graphic designer",
    tagline: "Turning ideas into clear, engaging, and meaningful visual experiences.",
    email: "pnishtha29@gmail.com",
    phone: "+91-8290448447",
    location: "Udaipur, Rajasthan, India",
    date: "October 2026",
    degree: "B.Tech in Computer Science & Engineering (CGPA: 8.47)",
    college: "Govt Women Engineering College Ajmer (2023 – 2027)",
    github: "https://github.com/nishpandya20-droid",
    linkedin: "https://www.linkedin.com/in/nishtha-pandya",
    photo: "assets/profile/nishtha.jpg",
    stats: [
      { label: "Design Disciplines", value: "8+" },
      { label: "Original Works", value: "61+" },
      { label: "Video & Motion Edits", value: "4" },
      { label: "Academic CGPA", value: "8.47" }
    ],
    aboutParagraphs: [
      "I'm a creative and detail-oriented Graphic Designer with a background in Computer Science & Engineering. I create posters, social media creatives, and promotional designs that communicate ideas clearly and engage their intended audience.",
      "I work with Canva, Figma, and Adobe Express, with a strong understanding of UI/UX principles and visual communication. I also have experience with video editing and creating digital content for events, campaigns, and community initiatives.",
      "I enjoy exploring typography, layouts, and visual styles to create purposeful designs. I'm continuously learning and refining my skills to turn ideas into clear, engaging visual experiences."
    ],
    skills: [
      "Brand Identity & Logo Design",
      "Social Media Creatives & Ads",
      "Event & Campaign Design",
      "Typography & Layout Hierarchy",
      "Packaging & Merchandise Design",
      "UI/UX Design & Wireframing",
      "Video Editing & Motion Graphics",
      "Print Media & Editorial Design"
    ]
  },

  // Design tools only (Web & Tech tools removed)
  tools: [
    {
      name: "Canva",
      category: "Brand & Visual Design",
      proficiency: "Advanced Expert",
      icon: "palette",
      description: "Brand kits, editorial layouts, social media collateral, typography, and promotional posters."
    },
    {
      name: "Figma",
      category: "UI/UX & Prototyping",
      proficiency: "Intermediate / Proficient",
      icon: "layout",
      description: "Interface design, user flow mapping, vector assets, and design systems."
    },
    {
      name: "Adobe Express",
      category: "Marketing & Graphics",
      proficiency: "Advanced",
      icon: "sparkles",
      description: "High-impact promotional graphics, event posters, marketing assets, and social media."
    },
    {
      name: "InShot",
      category: "Video Editing & Motion",
      proficiency: "Proficient",
      icon: "video",
      description: "Video editing, social reels, promotional teasers, and dynamic event highlights."
    },
    {
      name: "Microsoft PowerPoint",
      category: "Presentations & Decks",
      proficiency: "Advanced",
      icon: "presentation",
      description: "Editorial pitch decks, keynote presentations, and executive visual storytelling."
    }
  ],

  services: [
    {
      id: "brand-identity",
      number: "01",
      title: "Brand Identity & Branding",
      description: "Creating cohesive brand identities through logos, typography, color palettes, and visual elements, with a focus on consistency, clarity, and memorable design.",
      icon: "award"
    },
    {
      id: "logo-design",
      number: "02",
      title: "Logo Design & LogoFolio",
      description: "Crafting memorable emblems, wordmarks, and visual marks exploring creative concepts, geometry, typography, and timeless aesthetics.",
      icon: "compass"
    },
    {
      id: "social-media",
      number: "03",
      title: "Social Media Design",
      description: "Designing high-engagement social media posts, promotional creatives, and event visuals designed to capture attention and communicate clearly.",
      icon: "instagram"
    },
    {
      id: "community-design",
      number: "04",
      title: "Community & Event Design",
      description: "Creating posters, campaign creatives, result announcements, and certificates for tech communities, hackathons, and college festivals.",
      icon: "users"
    },
    {
      id: "ui-ux",
      number: "05",
      title: "UI / UX Design",
      description: "Designing clean, intuitive, and user-friendly digital interfaces with a focus on layout, typography, visual hierarchy, and seamless user flow.",
      icon: "monitor"
    },
    {
      id: "packaging-design",
      number: "06",
      title: "Packaging & Merchandise",
      description: "Creating packaging concepts, coffee cups, labels, T-shirts, and physical collateral with strong visual appeal and functional consistency.",
      icon: "package"
    },
    {
      id: "video-editing",
      number: "07",
      title: "Video Editing & Motion",
      description: "Creating dynamic reels, event teasers, bumpers, and promotional multimedia content with smooth pacing and high impact.",
      icon: "film"
    },
    {
      id: "presentation-design",
      number: "08",
      title: "Presentation Design",
      description: "Creating clear and engaging presentations with a focus on visual hierarchy, layout, typography, and storytelling to deliver compelling pitches.",
      icon: "presentation"
    }
  ],

  // WORK EXPERIENCE: EXACT DATES AND INDIVIDUAL ENTRIES FROM RESUME
  experience: [
    {
      role: "Graphic Designer",
      organization: "College Magazine Committee",
      period: "June 2026 - Present",
      type: "Editorial & Publication",
      description: "Conceptualizing editorial layouts, magazine spreads, feature illustrations, and cover typography under print publication deadlines with meticulous attention to detail."
    },
    {
      role: "Head of Design & Branding",
      organization: "Colab Nation",
      period: "June 2026 - Present",
      type: "Creative Direction & Community",
      description: "Leading the end-to-end visual direction for community initiatives, promotional campaigns, DoraDAO hackathon branding, result announcements, certificates, and social media."
    },
    {
      role: "Content Team Member",
      organization: "Elite Coders Summer of Code (ECSoC)",
      period: "June 2026 - Present",
      type: "Developer Program",
      description: "Designing official classroom announcements, program guidelines, participant recognition banners, and certificates of achievement across the summer program."
    },
    {
      role: "Content Team Member",
      organization: "Elite Her",
      period: "Mar 2026 - Apr 2026",
      type: "Initiative & Campaign",
      description: "Crafting creative social campaigns, video graphics, and promotional visuals empowering women in technology and engineering communities."
    },
    {
      role: "Content Team Member",
      organization: "Elite Coders Winter of Code (ECWoC)",
      period: "Nov 2025 - Mar 2026",
      type: "Developer Program",
      description: "Designed promotional workshop posters, speaker introductions, webinar graphics, team celebration posts, and announcement creatives for the winter coding initiative."
    },
    {
      role: "Content Team Member",
      organization: "Google Developer Groups (GDG) on Campus",
      period: "Sep 2025 - May 2026",
      type: "Tech Community",
      description: "Designed promotional posters, social media banners, and campaign creatives for developer workshops, tech sessions, and campus events at GDG GWECA."
    },
    {
      role: "Team Member",
      organization: "College Social Media Club",
      period: "2025 - June 2026",
      type: "Campus Media",
      description: "Created festival greetings, campus event teasers, student spotlights, and engaging digital creatives for institutional social channels."
    },
    {
      role: "Content Team Member",
      organization: "NEC E-Cell, IIT Bombay",
      period: "Jul 2025 - Aug 2025",
      type: "Entrepreneurship Cell",
      description: "Crafted compelling visual collateral, social post series, and promotional graphics for student entrepreneurship initiatives and flagship competitions."
    }
  ],

  categories: [
    { id: "all", name: "All Works" },
    { id: "videos", name: "Video & Motion" },
    { id: "community", name: "Community Design" },
    { id: "logos", name: "Logos & Marks" },
    { id: "campus", name: "Campus & Events" },
    { id: "branding", name: "Brand Identity" },
    { id: "uiux", name: "UI / UX Design" },
    { id: "print", name: "Print Media" }
  ],

  // ALL 61+ REAL IMAGES & VIDEOS INCLUDED
  projects: [
    // 1. VIDEOS & MOTION DESIGN (FEATURING ALL 4 VIDEOS)
    {
      id: "motion-reels",
      category: "videos",
      categoryLabel: "Motion & Video Reels",
      title: "Motion Design & Video Reels",
      subtitle: "Event teasers, bumper reels, and social motion graphics",
      description: "A showcase of dynamic video editing and motion graphics created for community initiatives and campus events, including mystery investigation bumpers, wedding floral animations, teaser trailers, and social TikTok/Reels.",
      coverImage: "assets/projects/ecwoc/2.png",
      coverThumb: "assets/projects/thumbs/ecwoc/2.webp",
      isVideoProject: true,
      images: [
        { 
          type: "video", 
          src: "assets/videos/campus-innovation-loading.mp4", 
          title: "Campus — Innovation is Loading... Teaser Video", 
          caption: "Dynamic campus event teaser created with crisp motion pacing." 
        },
        { 
          type: "video", 
          src: "assets/videos/ecwoc-mystery-investigation-bumper.mp4", 
          title: "ECWoC — Suspense Mystery Investigation Bumper", 
          caption: "Cinematic black & white suspense thriller bumper animation." 
        },
        { 
          type: "video", 
          src: "assets/videos/ecwoc-floral-wedding-invitation.mp4", 
          title: "ECWoC — Pink & Green Floral Motion Animation", 
          caption: "Botanical floral illustration motion video with gentle elegance." 
        },
        { 
          type: "video", 
          src: "assets/videos/elite-her-reel.mp4", 
          title: "Elite Her — This Year I Learned Video Reel", 
          caption: "Modern social reel designed for student empowerment and engagement." 
        }
      ],
      tags: ["Video Editing", "Motion Graphics", "Event Teaser", "Reels"],
      tools: ["InShot", "Canva"]
    },

    // 2. COLAB NATION (ALL 11 ASSETS)
    {
      id: "colab-nation",
      category: "community",
      categoryLabel: "Community Design",
      title: "Colab Nation — Brand & Community Direction",
      subtitle: "Head of Design & Branding for tech and builder community",
      description: "Complete visual direction for Colab Nation including the flagship DoraDAO Hackathon banner, promotional event posters, speaker announcements, certificates, and community celebration graphics.",
      coverImage: "assets/projects/colab-nation/DoraDAO.png",
      coverThumb: "assets/projects/thumbs/colab-nation/DoraDAO.webp",
      images: [
        { type: "image", src: "assets/projects/colab-nation/DoraDAO.png", title: "DoraDAO Hackathon Banner" },
        { type: "image", src: "assets/projects/colab-nation/1.png", title: "Colab Nation Flagship Poster" },
        { type: "image", src: "assets/projects/colab-nation/White_Minimalist_Certificate_Of_Achievement__1_.png", title: "Certificate of Achievement" },
        { type: "image", src: "assets/projects/colab-nation/ChatGPT_Image_Jul_13__2026__12_56_58_AM.png", title: "Community Promotional Creative" },
        { type: "image", src: "assets/projects/colab-nation/WhatsApp_Image_2026-08-11_at_9.55.47_PM.jpeg", title: "Speaker Announcement Poster" },
        { type: "image", src: "assets/projects/colab-nation/WhatsApp_Image_2026-08-11_at_9.55.55_PM.jpeg", title: "Event Campaign Creative" },
        { type: "image", src: "assets/projects/colab-nation/WhatsApp_Image_2026-08-11_at_9.55.57_PM.jpeg", title: "Webinar Announcement Banner" },
        { type: "image", src: "assets/projects/colab-nation/WhatsApp_Image_2026-05-14_at_12.14.11_PM.jpeg", title: "Builder Community Creative" },
        { type: "image", src: "assets/projects/colab-nation/WhatsApp_Image_2026-07-11_at_4.13.41_PM.jpeg", title: "Hackathon Timeline Post" },
        { type: "image", src: "assets/projects/colab-nation/WhatsApp_Image_2026-08-01_at_3.32.45_AM__11_.jpeg", title: "Workshop Promotion Post" },
        { type: "image", src: "assets/projects/colab-nation/WhatsApp_Image_2026-08-01_at_3.32.45_AM__12_.jpeg", title: "Community Spotlight Flyer" }
      ],
      tags: ["DoraDAO", "Colab Nation", "Hackathons", "Certificates", "Flyers"],
      tools: ["Canva", "Figma"]
    },

    // 3. LOGOFOLIO (ALL 12 ASSETS)
    {
      id: "logofolio",
      category: "logos",
      categoryLabel: "LogoFolio",
      title: "LogoFolio — Minimalist & Conceptual Marks",
      subtitle: "12 brand emblems exploring geometry, typography & identity",
      description: "A curated collection of 12 distinct logo marks and visual emblems designed with clean geometry, typographic harmony, and versatile application across digital screens and coffee mockups.",
      coverImage: "assets/projects/logos/Untitled_Design.png",
      coverThumb: "assets/projects/thumbs/logos/Untitled_Design.webp",
      images: [
        { type: "image", src: "assets/projects/logos/Untitled_Design.png", title: "LogoFolio Identity Grid" },
        { type: "image", src: "assets/projects/logos/1.png", title: "Geometric Monogram 1" },
        { type: "image", src: "assets/projects/logos/2.png", title: "Minimalist Brand Mark 2" },
        { type: "image", src: "assets/projects/logos/3.png", title: "Abstract Visual Emblem 3" },
        { type: "image", src: "assets/projects/logos/4.png", title: "Vector Wordmark 4" },
        { type: "image", src: "assets/projects/logos/White_Black_Minimalist_Mockup_Cup_Coffee_Instagram_Post.png", title: "Coffee Cup Brand Mockup" },
        { type: "image", src: "assets/projects/logos/ChatGPT_Image_Sep_26__2026__12_06_33_PM.png", title: "Conceptual Mark: Fluid Identity" },
        { type: "image", src: "assets/projects/logos/ChatGPT_Image_Sep_26__2026__12_06_39_PM.png", title: "Conceptual Mark: Geometric Symmetry" },
        { type: "image", src: "assets/projects/logos/ChatGPT_Image_Sep_26__2026__12_06_50_PM.png", title: "Conceptual Mark: Line Art Emblem" },
        { type: "image", src: "assets/projects/logos/ChatGPT_Image_Sep_26__2026__12_06_57_PM.png", title: "Conceptual Mark: Modern Monogram" },
        { type: "image", src: "assets/projects/logos/ChatGPT_Image_Sep_26__2026__12_07_03_PM.png", title: "Conceptual Mark: Organic Curve" },
        { type: "image", src: "assets/projects/logos/ChatGPT_Image_Sep_26__2026__12_07_09_PM.png", title: "Conceptual Mark: Tech Iconography" }
      ],
      tags: ["Logo Design", "Geometry", "Brand Marks", "Vector", "Mockups"],
      tools: ["Canva", "Figma", "Adobe Express"]
    },

    // 4. ECWOC — ELITE CODERS WINTER OF CODE (ALL 10 ASSETS: 8 IMAGES + 2 VIDEOS)
    {
      id: "ecwoc-campaigns",
      category: "community",
      categoryLabel: "Community Design",
      title: "Elite Coders Winter of Code (ECWoC)",
      subtitle: "Winter developer program — Posters, speaker promos & video reels",
      description: "Extensive campaign collateral for ECWoC including the Pink 3D Important Announcement poster, workshop speaker promos, digital marketing webinar creatives, mind mapping posters, meet our team spotlights, and 2 custom motion videos.",
      coverImage: "assets/projects/ecwoc/Pink_3D_Important_Announcement_Poster.png",
      coverThumb: "assets/projects/thumbs/ecwoc/Pink_3D_Important_Announcement_Poster.webp",
      images: [
        { type: "image", src: "assets/projects/ecwoc/Pink_3D_Important_Announcement_Poster.png", title: "Important Announcement Poster (Pink 3D)" },
        { type: "video", src: "assets/videos/ecwoc-mystery-investigation-bumper.mp4", title: "ECWoC — Mystery Investigation Bumper Video" },
        { type: "image", src: "assets/projects/ecwoc/Green_and_White_Modern_Workshop_Speakers_Promo_Instagram_Post__1_.png", title: "Workshop Speakers Promo Post" },
        { type: "image", src: "assets/projects/ecwoc/Green_White_Minimalis_Webinar_Digital_Marketing_Expert_Instagram_Post_.png", title: "Webinar Digital Marketing Post" },
        { type: "image", src: "assets/projects/ecwoc/Peach_Modern_Meet_Our_Team_Instagram_Post.png", title: "Meet Our Team Post" },
        { type: "image", src: "assets/projects/ecwoc/Yellow_and_White_Simple_Minimalist_Mind_Mapping_Chart_Presentation_Poster.png", title: "Mind Mapping Chart Poster" },
        { type: "image", src: "assets/projects/ecwoc/White_Pink_boho_Background_Instagram_Post__1_.png", title: "Boho Background Instagram Post" },
        { type: "video", src: "assets/videos/ecwoc-floral-wedding-invitation.mp4", title: "ECWoC — Floral Motion Video Animation" },
        { type: "image", src: "assets/projects/ecwoc/2.png", title: "ECWoC Social Banner 2" },
        { type: "image", src: "assets/projects/ecwoc/4.png", title: "ECWoC Certificate & Spotlight 4" }
      ],
      tags: ["ECWoC", "Speaker Promos", "Video Motion", "Developer Program"],
      tools: ["Canva", "InShot", "Adobe Express"]
    },

    // 5. CAMPUS FESTS & HACKATHONS (ALL 17 ASSETS: 16 IMAGES + 1 VIDEO)
    {
      id: "campus-events",
      category: "campus",
      categoryLabel: "Campus & Events",
      title: "Campus Fests, Hackathons & Cultural Branding",
      subtitle: "17 event banners, competition creatives, and teaser video",
      description: "Comprehensive festival and competition designs for campus events including Hackathon 2026, Abhinandan welcome fests, Basant Panchmi, Makar Sankranti, Bhai Dooj, Christmas celebrations, and the Innovation is Loading video teaser.",
      coverImage: "assets/projects/campus/Hackathon.png",
      coverThumb: "assets/projects/thumbs/campus/Hackathon.webp",
      images: [
        { type: "image", src: "assets/projects/campus/Hackathon.png", title: "Hackathon 2026 Flagship Poster" },
        { type: "video", src: "assets/videos/campus-innovation-loading.mp4", title: "Innovation is Loading... Teaser Reel" },
        { type: "image", src: "assets/projects/campus/abhinandan.png", title: "Abhinandan Welcome Event Poster" },
        { type: "image", src: "assets/projects/campus/Basant_Panchmi.png", title: "Basant Panchmi Celebration Poster" },
        { type: "image", src: "assets/projects/campus/Makar_Sankranti_.png", title: "Makar Sankranti Festive Post" },
        { type: "image", src: "assets/projects/campus/Bhai_Dooj_.png", title: "Bhai Dooj Festive Post" },
        { type: "image", src: "assets/projects/campus/White_Simple_Merry_Christmas_Poster__Portrait_.png", title: "Merry Christmas Event Poster" },
        { type: "image", src: "assets/projects/campus/Typographic_Geometric_Monogram_Professional_Modern_Logo.png", title: "Geometric Monogram Logo" },
        { type: "image", src: "assets/projects/campus/Untitled_design__2_.png", title: "Campus Leadership Creative" },
        { type: "image", src: "assets/projects/campus/2.png", title: "College Event Graphic 2" },
        { type: "image", src: "assets/projects/campus/WhatsApp_Image_2026-08-01_at_3.32.45_AM.jpeg", title: "Campus Social Greeting 1" },
        { type: "image", src: "assets/projects/campus/WhatsApp_Image_2026-08-01_at_3.32.45_AM__1_.jpeg", title: "Campus Social Greeting 2" },
        { type: "image", src: "assets/projects/campus/WhatsApp_Image_2026-08-01_at_3.32.45_AM__2_.jpeg", title: "Campus Social Greeting 3" },
        { type: "image", src: "assets/projects/campus/WhatsApp_Image_2026-08-01_at_3.32.45_AM__4_.jpeg", title: "Campus Social Greeting 4" },
        { type: "image", src: "assets/projects/campus/WhatsApp_Image_2026-08-01_at_3.32.45_AM__5_.jpeg", title: "Campus Social Greeting 5" },
        { type: "image", src: "assets/projects/campus/WhatsApp_Image_2026-08-01_at_3.32.45_AM__9_.jpeg", title: "Campus Social Greeting 6" },
        { type: "image", src: "assets/projects/campus/WhatsApp_Image_2026-08-01_at_3.32.45_AM__10_.jpeg", title: "Campus Social Greeting 7" }
      ],
      tags: ["Hackathons", "Campus Fests", "Posters", "Video Teaser"],
      tools: ["Canva", "Adobe Express", "InShot"]
    },

    // 6. ECSOC — ELITE CODERS SUMMER OF CODE (ALL 2 ASSETS)
    {
      id: "ecsoc-campaigns",
      category: "community",
      categoryLabel: "Community Design",
      title: "Elite Coders Summer of Code (ECSoC)",
      subtitle: "Official announcements and certificates for summer developers",
      description: "Official recruitment announcements, classroom guidelines, and minimalist certificates of achievement designed for the ECSoC open-source initiative.",
      coverImage: "assets/projects/ecsoc/Blue_Classic_Classroom_Announcement__1_.png",
      coverThumb: "assets/projects/thumbs/ecsoc/Blue_Classic_Classroom_Announcement__1_.webp",
      images: [
        { type: "image", src: "assets/projects/ecsoc/Blue_Classic_Classroom_Announcement__1_.png", title: "Classroom Announcement Poster" },
        { type: "image", src: "assets/projects/ecsoc/White_Minimalist_Certificate_Of_Achievement.png", title: "Certificate of Achievement" }
      ],
      tags: ["ECSoC", "Certificates", "Announcements"],
      tools: ["Canva"]
    },

    // 7. ELITE HER (ALL 2 ASSETS: 1 IMAGE + 1 VIDEO)
    {
      id: "elite-her",
      category: "community",
      categoryLabel: "Community Design",
      title: "Elite Her — Women in Tech & Design Campaign",
      subtitle: "Social campaign and TikTok/Reel motion video",
      description: "Visual identity campaign celebrating women engineers and coders, featuring clean social posters and dynamic video reels.",
      coverImage: "assets/projects/elite-her/Screenshot_2026-08-02_143454.png",
      coverThumb: "assets/projects/thumbs/elite-her/Screenshot_2026-08-02_143454.webp",
      images: [
        { type: "image", src: "assets/projects/elite-her/Screenshot_2026-08-02_143454.png", title: "Elite Her Social Campaign Poster" },
        { type: "video", src: "assets/videos/elite-her-reel.mp4", title: "Elite Her — This Year I Learned Video Reel" }
      ],
      tags: ["Elite Her", "Campaign", "Video Reel", "Women In Tech"],
      tools: ["Canva", "InShot"]
    },

    // 8. ECOSPHERE (ALL 2 ASSETS)
    {
      id: "ecosphere-uiux",
      category: "uiux",
      categoryLabel: "UI / UX Design",
      title: "EcoSphere — Sustainability Platform & UI/UX",
      subtitle: "Dashboard design, information architecture & interface flows",
      description: "UI/UX interface architecture and platform layout designed for climate sustainability and carbon tracking with clean data visualization.",
      coverImage: "assets/projects/ecosphere/Screenshot_2026-08-02_143653.png",
      coverThumb: "assets/projects/thumbs/ecosphere/Screenshot_2026-08-02_143653.webp",
      pdfLink: "assets/projects/ecosphere/EcoSphere_Development.pdf",
      images: [
        { type: "image", src: "assets/projects/ecosphere/Screenshot_2026-08-02_143653.png", title: "EcoSphere Dashboard Interface" }
      ],
      tags: ["UI/UX Design", "Figma", "Dashboard"],
      tools: ["Figma"]
    },

    // 9. UI/UX E-COMMERCE APP DESIGN
    {
      id: "ecommerce-uiux",
      category: "uiux",
      categoryLabel: "UI / UX Design",
      title: "E-commerce App Interface",
      subtitle: "Mobile shopping experience and interface design",
      description: "A mobile e-commerce interface concept designed around product discovery, clear navigation, and a streamlined shopping experience.",
      coverImage: "assets/projects/UI%20UX/28.png",
      images: [
        { type: "image", src: "assets/projects/UI%20UX/28.png", title: "E-commerce App Interface" }
      ],
      tags: ["UI/UX Design", "Mobile App", "E-commerce"],
      tools: ["Figma"]
    },

    // 10. PRINT MEDIA DESIGN
    {
      id: "print-media",
      category: "print",
      categoryLabel: "Print Media",
      title: "Print Media & Editorial Design",
      subtitle: "Merchandise, book covers, stationery, and promotional print",
      description: "A collection of print designs exploring merchandise, editorial covers, stationery, and promotional layouts.",
      coverImage: "assets/projects/Print%20Media/23.png",
      images: [
        { type: "image", src: "assets/projects/Print%20Media/23.png", title: "T-shirt & Merchandise Designs" },
        { type: "image", src: "assets/projects/Print%20Media/24.png", title: "Book Cover & Bookmark Designs" },
        { type: "image", src: "assets/projects/Print%20Media/25.png", title: "Notebook & Journal Cover Designs" },
        { type: "image", src: "assets/projects/Print%20Media/26.png", title: "Promotional Print Designs" }
      ],
      tags: ["Print Media", "Editorial Design", "Merchandise", "Typography"],
      tools: ["Canva"]
    },

    // 11. ASTER CAFÉ & COFFEE BRAND IDENTITY
    {
      id: "aster-branding",
      category: "branding",
      categoryLabel: "Brand Identity",
      title: "ASTER Café & Coffee — Brand Identity System",
      subtitle: "Warm, botanical café identity inspired by floral beauty and calm mornings",
      description: "ASTER is a warm, botanical café combining natural elements, elegant typography (Cormorant Garamond + Poppins), an earthy color palette (Deep Sage, Warm Ivory, Dusty Rose, Coffee Brown), and cohesive collateral across takeaway cups, stationery, signage, and packaging.",
      coverImage: "assets/slides/12.png",
      coverThumb: "assets/slides/thumbs/12.webp",
      images: [
        { type: "image", src: "assets/slides/10.png", title: "ASTER Brand Title & Overview" },
        { type: "image", src: "assets/slides/11.png", title: "Brand Guidelines, Palette & Typography" },
        { type: "image", src: "assets/slides/12.png", title: "Packaging, Takeaway Cups & Stationery" }
      ],
      tags: ["Brand Identity", "Packaging", "Typography", "Color Palette"],
      tools: ["Canva", "Figma", "Adobe Express"],
      caseStudy: true
    }
  ],

  // ASTER CASE STUDY DETAILS
  asterCaseStudy: {
    title: "ASTER Café & Coffee",
    tagline: "A little moment of calm — Bloom with every sip.",
    overview: "ASTER is a warm, botanical café inspired by the beauty of flowers and the comfort of slow coffee moments. The brand combines natural elements, elegant design, and a cozy atmosphere to create a space where every sip feels like a little moment of calm.",
    targetAudience: "Coffee Lovers, Students, Creative Freelancers, and Young Professionals looking for a serene lifestyle café.",
    brandAttributes: [
      "Botanical / Nature-Inspired Identity",
      "Elegant & Minimal Brand Language",
      "Warm & Cozy Atmosphere",
      "Premium yet Approachable",
      "Inspired by the Aster Blossom & Celestial Star"
    ],
    colorPalette: [
      { name: "Deep Sage", hex: "#3D5240", textColor: "#ffffff", note: "Natural botanicals & calm presence" },
      { name: "Warm Ivory", hex: "#FAF7F2", textColor: "#222222", note: "Cozy mornings & breathable canvas" },
      { name: "Dusty Rose", hex: "#BF9390", textColor: "#ffffff", note: "Delicate aster flower & signature tone" },
      { name: "Coffee Brown", hex: "#5C4033", textColor: "#ffffff", note: "Artisanal espresso & rich warmth" }
    ],
    typography: [
      {
        role: "Primary Serif",
        font: "Cormorant Garamond",
        usage: "Brand logotype, headlines & premium editorial accents",
        sample: "ASTER CAFÉ & COFFEE"
      },
      {
        role: "Supporting Sans-Serif",
        font: "Poppins",
        usage: "Clean and modern for descriptions, menus & communication",
        sample: "Bloom with every sip. Warm mornings & thoughtful coffee."
      },
      {
        role: "Accent Script",
        font: "Brittany Signature / Script",
        usage: "Subtle handwritten flair for taglines and packaging sign-offs",
        sample: "A little moment of calm"
      }
    ],
    slides: [10, 11, 12]
  },

  // TESTIMONIALS
  testimonials: [
    {
      name: "Jagruthi",
      role: "Co-Founder",
      organization: "CoLab Nation",
      email: "jagruthi315@gmail.com",
      quote: "It was really nice working with you! I love how you participate in the work enthusiastically and provide insightful ideas and feedback. Your passion for design truly shines through.",
      rating: 5
    },
    {
      name: "Keshav Jaiswal",
      role: "Project Manager",
      organization: "Elite Coders",
      email: "keshavjais1605@gmail.com",
      quote: "Nishtha has been a highly dedicated and reliable member across both the ECWoC and ECSoC teams. She consistently delivered high-quality content, took ownership of her work, and showed remarkable commitment throughout every phase. Her hard work, creativity, and professionalism have made her a valuable asset to the team.",
      rating: 5
    },
    {
      name: "Kartik Chilkoti",
      role: "Founder",
      organization: "CoLab Nation",
      email: "chilkotikartik@gmail.com",
      quote: "Working with you has been an excellent experience. You consistently demonstrate professionalism, strong technical expertise, and a genuine commitment to delivering high-quality results. Your communication is clear, you're proactive in solving problems, and you always go the extra mile.",
      rating: 5
    },
    {
      name: "Devanshi Parashar",
      role: "Lead Editor",
      organization: "College Magazine Committee",
      email: "devanshiparashar1@gmail.com",
      quote: "Working with her has been an absolute pleasure. As the Graphic Designer for our college magazine, she consistently delivered exceptional work, often completing tasks well before deadlines without compromising on quality. Her creativity, attention to detail, and strong design sense made a significant contribution. What truly sets her apart is her calm and composed nature.",
      rating: 5
    },
    {
      name: "Dewanshi Bakliwal",
      role: "Lead",
      organization: "Google Developer Groups (GDG) on Campus",
      email: "dewanshibakliwal@gmail.com",
      quote: "You were a reliable and dedicated member of the creative team. Your designs were creative, timely, and you were always open to feedback and improvements. It was a pleasure working with you and I appreciate your contribution to the team.",
      rating: 5
    },
    {
      name: "Dhruvi",
      role: "Coordinator",
      organization: "NEC E-Cell GWECA (IIT Bombay)",
      email: "dhruvikhandelwal99@gmail.com",
      quote: "My experience with Nishtha was a valuable experience. She was always hardworking and completed every task on time. You were dedicated, reliable and always took ownership of your responsibilities. Wishing you continued success!",
      rating: 5
    },
    {
      name: "Tushar",
      role: "Community Lead",
      organization: "Elite Coders",
      email: "tusharmalik606@gmail.com",
      quote: "It was a pleasure working together. The communication was excellent, deadlines were always met, and the final results exceeded expectations. I highly recommend her services for any design and visual communication needs.",
      rating: 5
    },
    {
      name: "Nishant",
      role: "Founder",
      organization: "Elite Coders",
      email: "nishantelite007@gmail.com",
      quote: "Your dedication to work is really helpful for the organizations. Nishtha brings focus, reliability, and clear visual communication to every creative task she undertakes.",
      rating: 5
    }
  ],

  // EXACT RESUME AS IN USER'S ATTACHED PDF
  resume: {
    name: "NISHTHA PANDYA",
    contact: {
      email: "pnishtha29@gmail.com",
      phone: "+91-8290448447",
      linkedin: "https://www.linkedin.com/in/nishtha-pandya",
      portfolio: "https://nishthapandya.my.canva.site/"
    },
    summary: "Creative Graphic Designer specializing in branding, visual communication, social media, and UI/UX design. Skilled in Canva, Figma, and Adobe Express, with a strong eye for typography, layout, and visual storytelling.",
    skills: {
      design: "Branding, Visual Communication, Typography, Layout Design, Social Media Design",
      tools: "Canva, Figma, Adobe Express, Microsoft PowerPoint, GitHub Desktop, VS Code",
      softSkills: "Creative Thinking, Communication, Collaboration",
      concepts: "UI/UX Design, User-Centered Design, Design Thinking",
      languages: "C, Python"
    },
    education: {
      degree: "Bachelor of Technology (B.Tech), Computer Science & Engineering",
      institution: "Govt Women Engineering College Ajmer",
      cgpa: "CGPA : 8.47",
      period: "2023 – 2027"
    },
    projects: [
      {
        name: "ASTER - Café Brand Identity",
        description: "Developed a cohesive visual identity including logo, typography, color palette, and packaging applications. Applied the brand across physical and promotional touchpoints such as T-shirts, cups, paper bags, business cards, letterheads, and merchandise."
      },
      {
        name: "Naivaidhya – AI Powered Food Redistribution Platform",
        description: "Designed a user-centered platform connecting donors, volunteers, and food stations through streamlined user flows and intuitive information architecture. Conducted user-flow planning, created wireframes and high-fidelity UI designs, and developed interfaces for food tracking, hygiene verification, donation management, and volunteer coordination."
      },
      {
        name: "ELITE CODERS — Community & Event Design",
        description: "Created promotional posters, event creatives, recruitment campaigns, certificates, result designs, and merchandise while maintaining a consistent community visual identity."
      }
    ],
    experience: [
      { role: "Graphic Designer", org: "College Magazine Committee", period: "June 2026 - Present" },
      { role: "Head of Design & Branding", org: "Colab Nation", period: "June 2026 - Present" },
      { role: "Content Team Member", org: "Elite Coders Summer of Code", period: "June 2026 - Present" },
      { role: "Content Team Member", org: "Elite Her", period: "Mar 2026 - Apr 2026" },
      { role: "Content Team Member", org: "Elite Coders Winter of Code", period: "Nov 2025 - Mar 2026" },
      { role: "Content Team Member", org: "Google Developer Groups (GDG) on Campus", period: "Sep 2025 - May 2026" },
      { role: "Team Member", org: "College Social Media Club", period: "2025 - June 2026" },
      { role: "Content Team Member", org: "NEC E-Cell, IIT Bombay", period: "Jul 2025 - Aug 2025" }
    ],
    leadership: [
      "GDG GWECA On Campus Member",
      "Class Representative",
      "Former Member, NEC E-Cell IIT Bombay",
      "Former Member, Social Media Club",
      "College Magazine Team Member"
    ],
    achievements: [
      "1st Place - IEEE In-House Brainwave Blitz 2026",
      "41st Rank among 1.54 lakh participants - Myntra × Naukri Campus Challenge",
      "2nd Place - Elite Coder X The Network Tech Hack",
      "4th Rank - UI/UX Design Competition at ELITE HACK"
    ],
    certifications: [
      "Canva Essentials - Canva Design School",
      "Design Thinking - HP LIFE",
      "Introduction to Figma - Simplilearn SkillUp",
      "Introduction to Adobe XD - Simplilearn SkillUp"
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_DATA;
}

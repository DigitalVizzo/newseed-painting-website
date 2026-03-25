// ============================================================
// DATA - New Seed Painting Group
// Edit this file to update content across the site
// Copy by Leo / Vizzo Digital - March 2026
// ============================================================


export const about = {
  title: 'Built on Craft. Backed by Purpose.',
  text: "My name is Philip, and I started New Seed Painting Group in 2019 with one belief: that great painting is about far more than colour on walls. It's about showing up on time, preparing surfaces properly, using materials that last, and leaving every home cleaner than I found it. I've worked across Sydney's Northern Beaches long enough to know that homeowners here have high standards, and I wouldn't have it any other way. Every project we take on gets my full attention, from the first quote to the final walkthrough. That's not a slogan. That's just how we work.",
  pillars: [
    {
      title: 'Fully Licensed & Insured',
      description:
        "We carry full public liability insurance and are a licensed painting contractor in NSW, so you're protected from day one.",
    },
    {
      title: 'Premium Materials, Always',
      description:
        'We work exclusively with Dulux and other top-tier brands. No shortcuts, no cheap substitutes. The finish is only as good as what goes into it.',
    },
    {
      title: 'Your Satisfaction, Guaranteed',
      description:
        "If something isn't right, we come back and fix it. No arguments, no excuses. That's our 5-year workmanship promise.",
    },
  ],
};

export const services = [
  {
    id: 'interior',
    title: 'Interior Painting',
    description:
      'From feature walls to full-home repaints, we handle every interior surface with precision. Proper prep, clean lines, and finishes that stand up to daily life beautifully.',
    icon: 'interior',
  },
  {
    id: 'exterior',
    title: 'Exterior Painting',
    description:
      "We use weather-resistant premium coatings designed for the Northern Beaches climate, applied over meticulous surface preparation that ensures lasting adhesion and kerb appeal that lasts.",
    icon: 'exterior',
  },
  {
    id: 'commercial',
    title: 'Commercial Painting',
    description:
      "From retail fitouts to office spaces and industrial facilities, we deliver professional-grade results with minimal disruption. On schedule, on budget, and on brand.",
    icon: 'commercial',
  },
  {
    id: 'strata',
    title: 'Strata Painting',
    description:
      "We understand the complexity of strata work: coordinating with building managers, working around residents, and delivering consistent results across every level. On time and within scope.",
    icon: 'strata',
  },
  {
    id: 'newbuild',
    title: 'New Build & Renovation',
    description:
      "Working with builders and renovators across Northern Beaches, we bring premium standards to new construction and gut renovations, so the paint job is never the thing that lets the project down.",
    icon: 'newbuild',
  },
];

export const processSteps = [
  {
    step: 1,
    title: 'Free On-Site Quote',
    description:
      'Philip or a senior team member visits your property, assesses the scope, and gives you a clear, written quote. No vague estimates, no surprise costs later.',
  },
  {
    step: 2,
    title: 'Colour & Material Consultation',
    description:
      "Not sure on colours or finishes? We guide you through options that suit your home, your style, and the Northern Beaches light. We bring samples and real expertise, not just a colour fan deck.",
  },
  {
    step: 3,
    title: 'Meticulous Preparation',
    description:
      "This is where great painting actually starts. We protect all surfaces, fill and sand where needed, and prime properly. A flawless finish begins before a drop of paint goes on.",
  },
  {
    step: 4,
    title: 'Premium Application & Clean Finish',
    description:
      "We paint with care, check every edge and corner, and leave your home spotless. The job isn't done until you've done a walkthrough and you're happy. Then we hand you our 5-year guarantee in writing.",
  },
];

export const guarantee = {
  title: 'Our Promise to You',
  intro:
    "We're a young company, and that means we have everything to prove. These aren't marketing lines. They're the commitments we make to every single client, in writing.",
  items: [
    {
      title: '5-Year Workmanship Guarantee',
      description:
        "If any of our work peels, cracks, or fails within 5 years due to workmanship, we return and fix it at no cost. No fine print. No loopholes. Just a team that stands behind what they do.",
    },
    {
      title: 'On Time, or We Compensate You',
      description:
        "We set a timeline before we start, and we stick to it. If we run over schedule for reasons within our control, we'll discount your final invoice. Your time matters as much as your walls.",
    },
    {
      title: 'Clean Site, Every Day',
      description:
        "We protect your furniture, floors, and landscaping before we start and leave your property in better condition than we found it. Full cleanup is part of every job, every time.",
    },
  ],
};

// Set inviteMode to false once real Google Reviews are available.
export const reviews = {
  inviteMode: true,
  inviteTitle: 'The First to Experience the New Seed Difference',
  inviteText:
    "We launched New Seed Painting Group in 2019 with a clear mission: to become the most trusted painting team on Sydney's Northern Beaches. We're just getting started, and if you've worked with us, your words mean everything right now.",
  inviteCta: 'Leave Us a Google Review →',
  inviteNote:
    'Once we have reviews, this section will showcase real client stories. Right now, we\'d love yours to be the first.',
  list: [] as { name: string; location: string; rating: number; text: string }[],
};

export const areas = {
  title: "Proudly Serving Sydney's Northern Beaches & Greater Sydney",
  intro:
    "Our home base is Manly Vale, and the Northern Beaches is our heartland. We know these streets, these homes, and what premium looks like in this part of the world. We also cover all of Greater Sydney, bringing the same standard wherever the job takes us.",
  northern: [
    'Manly', 'Manly Vale', 'Dee Why', 'Narrabeen', 'Collaroy',
    'Mona Vale', 'Newport', 'Avalon Beach', 'Palm Beach',
    'Brookvale', 'Balgowlah', 'Mosman', 'Freshwater',
    'Curl Curl', 'Warriewood',
  ],
  greater: [
    'Eastern Suburbs', 'North Shore', 'Lower North Shore',
    'Inner West', 'Hills District', 'Parramatta',
    'Western Sydney', 'Sutherland Shire', 'St George', 'CBD & Surrounds',
  ],
  note: 'Not sure if we cover your area? Call us, chances are we do.',
};


export const contact = {
  phone: '+61 426 745 547',
  phoneHref: 'tel:+61426745547',
  instagram: 'https://instagram.com/newseedpainting',
  email: 'info@newseedgroup.com.au',
  emailHref: 'mailto:info@newseedgroup.com.au',
  address: 'Manly Vale, NSW 2093 · Serving Sydney\'s Northern Beaches & Greater Sydney',
  license: 'NSW XXXXXXXXX', // TODO: Replace with real NSW painters license number
  abn: '65 679 342 673',
};

export const cta = {
  title: 'Ready to See What Premium Painting Actually Looks Like?',
  subtitle: 'Get a free, no-obligation quote from Philip and the team. Usually within 24 hours.',
  button: 'Request Your Free Quote',
  note: 'Free on-site assessment · No obligation · Response within 2 hours',
};

export const faq = [
  {
    question: 'How long does it take to paint a 3-bedroom house?',
    answer: 'An interior repaint for a 3-bedroom home typically takes 4 to 6 days, including preparation and drying time. Exteriors can take 5 to 10 days depending on weather and surface condition. We provide a clear timeline before starting.',
  },
  {
    question: 'Do I need to move furniture before painters arrive?',
    answer: 'No. We handle all furniture moving and protection as part of our service. We cover floors, furniture, and fixtures with drop sheets and plastic sheeting before any work begins.',
  },
  {
    question: 'What paint brands do you use?',
    answer: 'We work exclusively with Dulux and other premium Australian brands. We never use cheap substitutes because the finish and longevity are only as good as the materials that go into it.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. New Seed Painting Group is a fully licensed painting contractor in NSW and carries comprehensive public liability insurance. You are protected from day one.',
  },
  {
    question: 'What does your 5-year workmanship guarantee cover?',
    answer: 'If any of our work peels, cracks, or fails within 5 years due to workmanship, we return and fix it at no cost. No fine print, no loopholes. We provide the guarantee in writing at project completion.',
  },
  {
    question: 'Do you paint in the rain? What about weather delays?',
    answer: 'We do not paint exteriors in rain or high humidity, as it compromises adhesion and finish quality. If weather delays occur, we communicate promptly and adjust the schedule. Interior work can usually continue unaffected.',
  },
  {
    question: 'What areas of Sydney do you serve?',
    answer: "Our home base is Manly Vale and the Northern Beaches is our heartland. Manly, Dee Why, Narrabeen, Mona Vale, Newport, Avalon and everywhere in between. We also serve all of Greater Sydney.",
  },
];

// ============================================================
// DATA - New Seed Painting Group
// Edit this file to update content across the site
// Copy by Leo / Vizzo Digital - March 2026
// ============================================================

export const about = {
  title: "Built on Craft. Backed by Purpose.",
  text: "My name is Philip. I was born in Brazil and moved to Australia in search of better opportunities. Like many immigrants, I started from the ground up, learning the craft on the job. Over the years, I realised painting could be more than just a trade. It could transform spaces and experiences for people. I named the company New Seed because a seed carries potential. When you plant it and take care of it, something beautiful grows. That's how I see our work. When we paint a home, we plant the seed of transformation. It's not just paint on walls. It's creating a fresh start for a space and the people who live in it.",
  pillars: [
    {
      title: "Fully Licensed & Insured",
      description:
        "We carry full public liability insurance and are a licensed painting contractor in NSW, so you're protected from day one.",
    },
    {
      title: "Premium Materials, Always",
      description:
        "We work exclusively with premium brands like Dulux, Haymes, Porter's Paint, Murobond and more. No shortcuts, no cheap substitutes. The finish is only as good as what goes into it.",
    },
    {
      title: "Your Satisfaction, Guaranteed",
      description:
        "Some of our proudest moments come from clients who had bad past experiences with other trades. When they tell us, \"This was the best experience we've had with a contractor,\" we know the culture we're building is working.",
    },
  ],
};

export const services = [
  {
    id: "interior",
    title: "Interior Painting",
    description:
      "From feature walls to full-home repaints, we handle every interior surface with precision. Preparation can represent 60 to 70% of the work, and that time is what guarantees a smooth, long-lasting finish.",
    icon: "interior",
  },
  {
    id: "exterior",
    title: "Exterior Painting",
    description:
      "We use weather-resistant premium coatings designed for Sydney's climate, applied over meticulous surface preparation that ensures lasting adhesion and kerb appeal that lasts.",
    icon: "exterior",
  },
  {
    id: "commercial",
    title: "Commercial Painting",
    description:
      "From retail fitouts to office spaces and industrial facilities, we deliver professional-grade results with minimal disruption. On schedule, on budget, and on brand.",
    icon: "commercial",
  },
  {
    id: "strata",
    title: "Strata Painting",
    description:
      "We understand the complexity of strata work: coordinating with building managers, working around residents, and delivering consistent results across every level. On time and within scope.",
    icon: "strata",
  },
  {
    id: "newbuild",
    title: "New Build & Renovation",
    description:
      "Working with builders and renovators across Sydney, we bring premium standards to new construction and renovations. We regularly coordinate with other trades, fix unexpected issues, and adjust our schedule to help clients meet their deadlines.",
    icon: "newbuild",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Free On-Site Quote",
    description:
      "Philip or a senior team member visits your property, assesses the scope, and gives you a clear, written quote with a timeline. We know the first thing clients want is how long the project will take and how disruptive it will be. We answer that upfront.",
  },
  {
    step: 2,
    title: "Colour & Material Consultation",
    description:
      "Not sure on colours or finishes? We guide you through options that suit your home, your style, and Sydney's natural light. We bring samples and real expertise, not just a colour fan deck.",
  },
  {
    step: 3,
    title: "Meticulous Preparation",
    description:
      "Most people only notice the final coat, but the real quality comes from what happens before. Sanding, filling gaps, protecting surfaces, priming properly. In many projects, preparation represents 60 to 70% of the work. A great finish is built long before the final coat.",
  },
  {
    step: 4,
    title: "Premium Application & Clean Finish",
    description:
      "We paint with care, check every edge and corner, and leave your home spotless. The job isn't done until you've done a walkthrough and you're happy. Then we hand you our 5-year guarantee in writing.",
  },
];

export const guarantee = {
  title: "Our Promise to You",
  intro:
    "We believe clients deserve a professional experience from the first meeting to the final walkthrough. These aren't marketing lines. They're the commitments we make to every single client, in writing.",
  items: [
    {
      title: "5-Year Workmanship Guarantee",
      description:
        "If any of our work peels, cracks, or fails within 5 years due to workmanship, we return and fix it at no cost. No fine print. No loopholes. Just a team that stands behind what they do.",
    },
    {
      title: "On Time, or We Compensate You",
      description:
        "Clients always want to know how long a project will take and how disruptive it will be. We set a clear timeline before we start, and we stick to it. If we run over for reasons within our control, we discount your final invoice.",
    },
    {
      title: "Clean Site, Every Day",
      description:
        "We protect your furniture, floors, and landscaping before we start and leave your property in better condition than we found it. Full cleanup is part of every job, every time.",
    },
  ],
};

// Set inviteMode to false once real Google Reviews are available.
export const reviews = {
  inviteMode: true,
  inviteTitle: "The First to Experience the New Seed Difference",
  inviteText:
    "We started New Seed because we believe clients deserve more than a paint job. They deserve trust, clear communication, and a team that respects their home. If you've worked with us, your words mean everything right now.",
  inviteCta: "Leave Us a Google Review →",
  inviteNote:
    "Once we have reviews, this section will showcase real client stories. Right now, we'd love yours to be the first.",
  list: [] as {
    name: string;
    location: string;
    rating: number;
    text: string;
  }[],
};

export const areas = {
  title: "Proudly Serving All of Sydney",
  intro:
    "Based in Manly Vale, we serve homeowners, builders, and property managers across all of Sydney. From the Northern Beaches to the Inner West, Eastern Suburbs to Western Sydney, we bring the same premium standard wherever the job takes us.",
  northern: [
    "Manly",
    "Manly Vale",
    "Dee Why",
    "Narrabeen",
    "Collaroy",
    "Mona Vale",
    "Newport",
    "Avalon Beach",
    "Palm Beach",
    "Brookvale",
    "Balgowlah",
    "Mosman",
    "Freshwater",
    "Curl Curl",
    "Warriewood",
  ],
  greater: [
    "Eastern Suburbs",
    "North Shore",
    "Lower North Shore",
    "Inner West",
    "Hills District",
    "Parramatta",
    "Western Sydney",
    "Sutherland Shire",
    "St George",
    "CBD & Surrounds",
  ],
  note: "Not sure if we cover your area? Call us, chances are we do.",
};

export const contact = {
  phone: "+61 426 745 547",
  phoneHref: "tel:+61426745547",
  instagram: "https://instagram.com/newseedpainting",
  email: "info@newseedgroup.com.au",
  emailHref: "mailto:info@newseedgroup.com.au",
  address: "Manly Vale, NSW 2093 · Serving All of Sydney",
  license: "NSW",
  abn: "65 679 342 673",
};

export const cta = {
  title: "Don't Choose a Painter Based Only on Price.",
  subtitle:
    "Look at their process, their communication, and the way they treat your project. A good paint job should last for years, and the experience during the process matters just as much as the final result.",
  button: "Request Your Free Quote",
  note: "Free on-site assessment · No obligation · Response within 2 hours",
};

export const faq = [
  {
    question: "What makes New Seed different from other painters?",
    answer:
      "What frustrates us about the industry is the lack of professionalism that still exists. Many painters rush jobs, skip proper preparation, or fail to communicate clearly. Painting is often treated like a quick task, but quality work requires planning, preparation, and attention to detail. We built New Seed to give clients a professional experience from the first meeting to the final walkthrough.",
  },
  {
    question: "How long does it take to paint a 3-bedroom house?",
    answer:
      "An interior repaint for a 3-bedroom home typically takes 4 to 6 days, including preparation and drying time. Exteriors can take 5 to 10 days depending on weather and surface condition. We provide a clear timeline before starting, because we know that's the first thing clients want to know.",
  },
  {
    question: "Why does preparation take so long?",
    answer:
      "Most people only notice the final coat of paint, but the real quality of a job comes from the preparation. Sanding, filling gaps, protecting surfaces, and making sure everything is ready before the paint touches the wall. In many projects, preparation represents 60 to 70% of the work. The painting itself is often the quickest part. But that preparation time is what guarantees a smooth, long-lasting finish.",
  },
  {
    question: "Do I need to move furniture before painters arrive?",
    answer:
      "No. We handle all furniture moving and protection as part of our service. We cover floors, furniture, and fixtures with drop sheets and plastic sheeting before any work begins. Going beyond expectations is part of our service. If we can make your life easier, we will.",
  },
  {
    question: "What paint brands do you use?",
    answer:
      "We work exclusively with premium Australian brands like Dulux, Haymes, Porter's Paint, Murobond and more. We never use cheap substitutes because the finish and longevity are only as good as the materials that go into it.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. New Seed Painting Group is a fully licensed painting contractor in NSW and carries comprehensive public liability insurance. You are protected from day one.",
  },
  {
    question: "What does your 5-year workmanship guarantee cover?",
    answer:
      "If any of our work peels, cracks, or fails within 5 years due to workmanship, we return and fix it at no cost. No fine print, no loopholes. We provide the guarantee in writing at project completion.",
  },
  {
    question: "What areas of Sydney do you serve?",
    answer:
      "We're based in Manly Vale and serve all of Sydney. From the Northern Beaches to the Eastern Suburbs, North Shore to Western Sydney, and everywhere in between. If you're not sure whether we cover your area, just give us a call.",
  },
];

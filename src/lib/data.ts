// ============================================================
// DATA — New Seed Painting Group
// Edit this file to update content across the site
// Copy by Leo / Vizzo Digital — March 2026
// ============================================================

export const hero = {
  badge: "Sydney's Northern Beaches Painting Specialists",
  headline: 'Your Home Deserves More Than a Paint Job.',
  subheadline:
    "New Seed Painting Group delivers premium residential and commercial painting across Sydney's Northern Beaches — with meticulous preparation, Dulux-quality materials, and a 5-year workmanship guarantee that backs every job we touch.",
  ctaPrimary: 'Get Your Free Quote',
  ctaSecondary: 'See Our Services',
  stats: [
    { label: 'Licensed & Fully Insured', sub: 'Complete peace of mind on every project' },
    { label: 'Premium Dulux Materials', sub: 'Long-lasting finishes that look better for longer' },
    { label: '5-Year Workmanship Guarantee', sub: 'We stand behind every brushstroke' },
  ],
};

export const about = {
  title: 'Built on Craft. Backed by Purpose.',
  text: "My name is Philip, and I started New Seed Painting Group in 2024 with one belief: that great painting is about far more than colour on walls. It's about showing up on time, preparing surfaces properly, using materials that last, and leaving every home cleaner than I found it. I've worked across Sydney's Northern Beaches long enough to know that homeowners here have high standards — and I wouldn't have it any other way. Every project we take on gets my full attention, from the first quote to the final walkthrough. That's not a slogan. That's just how we work.",
  pillars: [
    {
      title: 'Fully Licensed & Insured',
      description:
        "We carry full public liability insurance and are a licensed painting contractor in NSW — so you're protected from day one.",
    },
    {
      title: 'Premium Materials, Always',
      description:
        'We work exclusively with Dulux and other top-tier brands. No shortcuts, no cheap substitutes — because the finish is only as good as what goes into it.',
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
      'From feature walls to full-home repaints, we handle every interior surface with precision — proper prep, clean lines, and finishes that stand up to daily life beautifully.',
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
      "From retail fitouts to office spaces and industrial facilities, we deliver professional-grade results with minimal disruption — on schedule, on budget, and on brand.",
    icon: 'commercial',
  },
  {
    id: 'strata',
    title: 'Strata Painting',
    description:
      "We understand the complexity of strata work: coordinating with building managers, working around residents, and delivering consistent results across every level — on time and within scope.",
    icon: 'strata',
  },
  {
    id: 'newbuild',
    title: 'New Build & Renovation',
    description:
      "Working with builders and renovators across Northern Beaches, we bring premium standards to new construction and gut renovations — so the paint job is never the thing that lets the project down.",
    icon: 'newbuild',
  },
];

export const processSteps = [
  {
    step: 1,
    title: 'Free On-Site Quote',
    description:
      'Philip or a senior team member visits your property, assesses the scope, and gives you a clear, written quote — no vague estimates, no surprise costs later.',
  },
  {
    step: 2,
    title: 'Colour & Material Consultation',
    description:
      "Not sure on colours or finishes? We guide you through options that suit your home, your style, and the Northern Beaches light. We bring samples and real expertise — not just a colour fan deck.",
  },
  {
    step: 3,
    title: 'Meticulous Preparation',
    description:
      "This is where great painting actually starts. We protect all surfaces, fill and sand where needed, and prime properly — because a flawless finish begins before a drop of paint goes on.",
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
    "We're a young company — and that means we have everything to prove. These aren't marketing lines. They're the commitments we make to every single client, in writing.",
  items: [
    {
      title: '5-Year Workmanship Guarantee',
      description:
        "If any of our work peels, cracks, or fails within 5 years due to workmanship, we return and fix it at no cost. No fine print. No loopholes. Just a team that stands behind what they do.",
    },
    {
      title: 'On Time — or We Compensate You',
      description:
        "We set a timeline before we start, and we stick to it. If we run over schedule for reasons within our control, we'll discount your final invoice. Your time matters as much as your walls.",
    },
    {
      title: 'Clean Site, Every Day',
      description:
        "We protect your furniture, floors, and landscaping before we start — and leave your property in better condition than we found it. Full cleanup is part of every job, every time.",
    },
  ],
};

// TODO: Replace with real Google Reviews once available.
// Use Formato A (reviews.inviteMode = true) while building reputation,
// then switch to Formato B once real reviews come in.
export const reviews = {
  inviteMode: true, // Set to false once real reviews are available
  inviteTitle: 'The First to Experience the New Seed Difference',
  inviteText:
    "We launched New Seed Painting Group in 2024 with a clear mission: to become the most trusted painting team on Sydney's Northern Beaches. We're just getting started — and if you've worked with us, your words mean everything right now.",
  inviteCta: 'Leave Us a Google Review →',
  inviteNote:
    'Once we have reviews, this section will showcase real client stories. Right now, we\'d love yours to be the first.',
  // TODO: Replace placeholders below with real Google reviews as they come in
  list: [
    {
      name: 'Sarah M.',
      location: 'Manly NSW',
      rating: 5,
      text: "Philip and the team transformed our Manly home completely. The preparation work alone was more thorough than any painter we'd used before — and the finish is absolutely perfect. Couldn't recommend them more highly.",
    },
    {
      name: 'James & Fiona K.',
      location: 'Dee Why NSW',
      rating: 5,
      text: "We had our exterior repainted ahead of selling and the result was stunning. Philip was on time, on budget, and the cleanup was immaculate. We got three offers over asking the following week.",
    },
    {
      name: 'Daniel T.',
      location: 'Newport NSW',
      rating: 5,
      text: "Finally found a painter who does what they say they'll do. Clear quote, showed up when they said, finished on schedule. The bathroom feature wall is exactly what I had in mind. Will definitely use again.",
    },
    {
      name: 'The Committee',
      location: 'Narrabeen Strata NSW',
      rating: 5,
      text: "Our strata building needed a full repaint and the whole process was seamless. New Seed coordinated everything with our building manager, worked around residents, and the result speaks for itself.",
    },
    {
      name: 'Catherine R.',
      location: 'Mona Vale NSW',
      rating: 5,
      text: "Philip gave us honest advice on colours and materials — he actually talked us out of a more expensive option because it wasn't right for our surface. That kind of integrity is rare. The job was flawless.",
    },
    {
      name: 'Mark & Priya S.',
      location: 'Collaroy NSW',
      rating: 5,
      text: "Best decision we made during our renovation. Professional, tidy, great communicators, and the finish is exceptional. Our builder was so impressed he's recommending New Seed to all his clients now.",
    },
  ],
};

export const areas = {
  title: "Proudly Serving Sydney's Northern Beaches & Greater Sydney",
  intro:
    "Our home base is Manly Vale, and the Northern Beaches is our heartland — we know these streets, these homes, and what premium looks like in this part of the world. We also cover all of Greater Sydney, bringing the same standard wherever the job takes us.",
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
  note: 'Not sure if we cover your area? Call us — chances are, we do.',
};

export const galleryItems = [
  { label: 'Interior', gradient: 'from-stone-700 to-stone-900' },
  { label: 'Exterior', gradient: 'from-zinc-700 to-zinc-900' },
  { label: 'Commercial', gradient: 'from-neutral-700 to-neutral-900' },
  { label: 'Roof', gradient: 'from-slate-700 to-slate-900' },
  { label: 'Strata', gradient: 'from-gray-700 to-gray-900' },
  { label: 'New Build', gradient: 'from-stone-600 to-stone-800' },
];

export const contact = {
  phone: '+61 400 524 541',
  phoneHref: 'tel:+61400524541',
  email: 'info@newseedgroup.com.au',
  emailHref: 'mailto:info@newseedgroup.com.au',
  address: 'Manly Vale, NSW 2093 · Serving Sydney\'s Northern Beaches & Greater Sydney',
  license: 'NSW XXXXXXXXX', // TODO: Replace with real NSW painters license number
  abn: '65 679 342 673',
};

export const cta = {
  title: 'Ready to See What Premium Painting Actually Looks Like?',
  subtitle: 'Get a free, no-obligation quote from Philip and the team — usually within 24 hours.',
  button: 'Request Your Free Quote',
  note: 'Free on-site assessment · No obligation · Response within 2 hours',
};

export const seo = {
  title: 'Painters Northern Beaches Sydney | New Seed Painting Group',
  description:
    'Premium residential & commercial painters Sydney. New Seed Painting Group serves the Northern Beaches and Greater Sydney — licensed, insured, 5-year guarantee. Free quote.',
};

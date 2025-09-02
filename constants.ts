
import type { Skill, Service, Project, Testimonial } from './types';
import { MidjourneyIcon, DalleIcon, RunwayIcon, StableDiffusionIcon, PromptEngineeringIcon, AiArtDirectionIcon, ContentStrategyIcon, UiUxIcon, VisualsIcon, AutomationIcon, BrandIcon, ConsultationIcon } from './components/IconComponents';

export const SKILLS: Skill[] = [
  { name: 'Midjourney', Icon: MidjourneyIcon },
  { name: 'DALL-E 3', Icon: DalleIcon },
  { name: 'RunwayML', Icon: RunwayIcon },
  { name: 'Stable Diffusion', Icon: StableDiffusionIcon },
  { name: 'Prompt Engineering', Icon: PromptEngineeringIcon },
  { name: 'AI Art Direction', Icon: AiArtDirectionIcon },
  { name: 'Content Strategy', Icon: ContentStrategyIcon },
  { name: 'UI/UX Design', Icon: UiUxIcon },
];

export const SERVICES: Service[] = [
  {
    title: 'AI-Generated Visuals',
    description: 'Crafting stunning, unique visuals for marketing campaigns, brand assets, and digital products using advanced generative AI tools.',
    Icon: VisualsIcon,
  },
  {
    title: 'Content Automation',
    description: 'Developing automated workflows for content creation, from social media updates to blog posts, saving you time and resources.',
    Icon: AutomationIcon,
  },
  {
    title: 'AI-Powered Brand Identity',
    description: 'Designing memorable logos, color palettes, and brand guidelines with the creative power of AI, ensuring a unique market presence.',
    Icon: BrandIcon,
  },
  {
    title: 'Creative Consultation',
    description: 'Providing expert guidance on integrating AI into your creative process, unlocking new possibilities for innovation and efficiency.',
    Icon: ConsultationIcon,
  },
];

export const PROJECTS: Project[] = [
  {
    title: '"Nova" Sci-Fi Movie Concepts',
    description: 'Developed a series of breathtaking concept art and character designs for a futuristic sci-fi film pitch. The visuals established a unique and compelling aesthetic.',
    imageUrl: 'https://picsum.photos/seed/nova/600/400',
    tools: ['Midjourney', 'Photoshop'],
  },
  {
    title: '"Etherea" Fashion Campaign',
    description: 'Generated a series of surreal and dreamlike visuals for a high-fashion brand\'s digital campaign, resulting in a 40% increase in online engagement.',
    imageUrl: 'https://picsum.photos/seed/etherea/600/400',
    tools: ['DALL-E 3', 'Figma'],
  },
  {
    title: 'AI-Generated Game Assets',
    description: 'Created a complete set of 2D assets, including characters, environments, and items for an indie mobile game, drastically reducing production time.',
    imageUrl: 'https://picsum.photos/seed/game/600/400',
    tools: ['Stable Diffusion', 'Aseprite'],
  },
   {
    title: 'Corporate Branding Overhaul',
    description: 'Led a complete rebranding for a tech startup using AI to explore hundreds of logo variations, culminating in a modern and impactful brand identity.',
    imageUrl: 'https://picsum.photos/seed/branding/600/400',
    tools: ['Midjourney', 'Illustrator', 'Figma'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "David's AI-driven approach to design is revolutionary. He delivered visuals that were not only stunning but also perfectly aligned with our brand's vision. A true innovator.",
        author: "Jane Doe",
        company: "CEO, Innovatech"
    },
    {
        quote: "Working with David was a game-changer. He automated our content pipeline, saving us countless hours while improving quality. His expertise is unparalleled.",
        author: "John Smith",
        company: "Marketing Director, Future Co."
    },
     {
        quote: "The brand identity David created for us is nothing short of brilliant. It's modern, unique, and captures our essence perfectly. The process was seamless and incredibly creative.",
        author: "Emily White",
        company: "Founder, Quantum Leap"
    }
];

export const BIO = "I'm David Okoye, an AI Content Creator and Designer at the intersection of technology and creativity. I specialize in leveraging cutting-edge AI tools to produce stunning visuals, automate creative workflows, and build unforgettable brand identities. My mission is to help businesses innovate and stand out in a crowded digital landscape by harnessing the power of artificial intelligence. Let's create something extraordinary together.";

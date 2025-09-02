
export interface Skill {
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Service {
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tools: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

import {
  SiJavascript, SiTypescript, SiNodedotjs, SiReact, SiVuedotjs,
  SiAngular, SiNextdotjs, SiVite, SiRedux, SiTailwindcss,
  SiStyledcomponents, SiSass, SiHtml5, SiCss3, SiBootstrap,
  SiMui, SiGit, SiGithub, SiGitlab, SiFigma,
  SiEslint, SiPrettier, SiStrapi, SiZod, SiPython
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Linguagens",
    description: "Base do desenvolvimento",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
    ]
  },
  {
    title: "Frameworks & Libraries",
    description: "Ferramentas para construção de aplicações",
    skills: [
      { name: "React", icon: SiReact },
      { name: "React Native", icon: TbBrandReactNative },
      { name: "Vue", icon: SiVuedotjs },
      { name: "Angular", icon: SiAngular },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vite", icon: SiVite },
      { name: "React Query", icon: SiReact },
      { name: "Zustand", icon: SiReact },
      { name: "Redux", icon: SiRedux },
      { name: "Zod", icon: SiZod },
      { name: "Context API", icon: SiReact },
    ]
  },
  {
    title: "Estilização",
    description: "Tecnologias para criar interfaces modernas",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "SCSS", icon: SiSass },
      { name: "Styled Components", icon: SiStyledcomponents },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Material UI", icon: SiMui },
      { name: "Shadcn/ui", icon: SiReact },
    ]
  },
  {
    title: "Ferramentas & DevOps",
    description: "Ferramentas para desenvolvimento e deploy",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "GitLab", icon: SiGitlab },
    ]
  },
  {
    title: "Qualidade & Design",
    description: "Ferramentas para qualidade de código e design",
    skills: [
      { name: "ESLint", icon: SiEslint },
      { name: "Prettier", icon: SiPrettier },
      { name: "Figma", icon: SiFigma },
    ]
  },
  {
    title: "Integração & APIs",
    description: "Ferramentas para integração de sistemas",
    skills: [
      { name: "RESTful APIs", icon: SiNodedotjs },
      { name: "Strapi", icon: SiStrapi },
    ]
  }
]; 
import { StaticImageData } from "next/image";
import React from "react";

export interface Tab {
  name: string;
  id: string;
}

export interface WhyChooseItem {
  title: string;
  icon: React.ReactElement;
  link: string;
}

export interface Service {
  name: string;
  icon: React.ReactElement;
  description: string;
  slug: string;
}

export interface SkillItem {
  skill: string;
  level: string;
}

export interface SkillCategory {
  title: string;
  data: SkillItem[];
}

export interface StackItem {
  name: string;
  icon: React.ReactElement;
  iconColor?: string;
}

export interface Project {
  id: number;
  title: string;
  image: string | StaticImageData;
  category: string;
  description: string;
  demoLink: string;
  stack: StackItem[];
}

export interface Client {
  image: StaticImageData;
  name: string;
  position: string;
  review: string;
}

export interface ContactOption {
  title: string;
  value: string;
  icon: React.ReactElement;
}

export interface SocialHandle {
  name: string;
  icon: React.ReactElement;
  link: string;
}

export interface FooterRoute {
  name: string;
  id?: string;
  route?: string;
}

export interface FooterSection {
  title: string;
  routes: FooterRoute[];
}

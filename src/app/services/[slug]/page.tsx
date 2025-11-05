"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { services } from "@/data/sources";
import { Link } from "react-scroll";
import NextLink from "next/link";
import "./service-detail.css";
import {
  FaMobileAlt,
  FaBolt,
  FaPalette,
  FaSync,
  FaGlobe,
  FaRocket,
  FaLaptopCode,
  FaChartLine,
  FaShieldAlt,
  FaUserShield,
  FaKey,
  FaEye,
  FaUsers,
  FaRulerCombined,
  FaMagic,
  FaVial,
  FaPenFancy,
  FaHashtag,
  FaBook,
  FaBullseye,
  FaDatabase,
  FaCog,
  FaExchangeAlt,
  FaSave,
  FaPlug,
  FaBroadcastTower,
  FaFileAlt,
  FaLock,
  FaCloud,
  FaBox,
  FaServer,
  FaTools,
  FaRobot,
  FaBrain,
  FaChartBar,
  FaRedoAlt,
} from "react-icons/fa";

const ServiceDetailPage: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="service-detail-page">
        <div className="wrapper">
          <div className="not-found">
            <h1>Service Not Found</h1>
            <p>The service you're looking for doesn't exist.</p>
            <NextLink href="/" className="btn primary">
              Back to Home
            </NextLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="wrapper">
        <NextLink href="/" className="back-link">
          ← Back to Home
        </NextLink>

        <div className="service-hero">
          <div className="icon-wrapper-large">{service.icon}</div>
          <h1 className="heading-1">
            <span className="gradient-text">{service.name}</span>
          </h1>
        </div>

        <div className="service-content">
          <section className="overview">
            <h2 className="gradient-text">Overview</h2>
            <p className="description">{service.description}</p>
          </section>

          <section className="what-i-offer">
            <h2 className="gradient-text">What I Offer</h2>
            <div className="features-grid">
              {getServiceFeatures(service.slug).map((feature, index) => (
                <div className="feature-card" key={index}>
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p className="muted">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="why-choose">
            <h2 className="gradient-text">Why Choose This Service?</h2>
            <ul className="benefits-list">
              {getServiceBenefits(service.slug).map((benefit, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="cta-section">
            <h2>Ready to Get Started?</h2>
            <p className="muted">
              Let's collaborate and bring your ideas to life with{" "}
              {service.name.toLowerCase()}.
            </p>
            <div className="cta-buttons">
              <NextLink href="/#contact" className="btn primary">
                Contact Me
              </NextLink>
              <NextLink href="/#services" className="btn">
                View All Services
              </NextLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// Helper function to get service-specific features
function getServiceFeatures(slug: string) {
  const features: Record<
    string,
    Array<{ icon: React.ReactElement; title: string; description: string }>
  > = {
    "mobile-app-development": [
      {
        icon: <FaMobileAlt />,
        title: "Cross-Platform Development",
        description: "Build once, deploy on both iOS and Android platforms",
      },
      {
        icon: <FaBolt />,
        title: "High Performance",
        description:
          "Optimized apps with smooth animations and fast load times",
      },
      {
        icon: <FaPalette />,
        title: "Native UI/UX",
        description: "Platform-specific designs that feel natural to users",
      },
      {
        icon: <FaSync />,
        title: "Seamless Updates",
        description: "Easy maintenance and feature additions",
      },
    ],
    "web-development": [
      {
        icon: <FaGlobe />,
        title: "Responsive Design",
        description:
          "Websites that work perfectly on all devices and screen sizes",
      },
      {
        icon: <FaRocket />,
        title: "Fast Loading",
        description: "Optimized performance for better user experience and SEO",
      },
      {
        icon: <FaLaptopCode />,
        title: "Full-Stack Solutions",
        description: "Complete end-to-end development from frontend to backend",
      },
      {
        icon: <FaChartLine />,
        title: "Scalable Architecture",
        description: "Built to grow with your business needs",
      },
    ],
    "cybersecurity-solutions": [
      {
        icon: <FaShieldAlt />,
        title: "Security Audits",
        description: "Comprehensive assessment of your security posture",
      },
      {
        icon: <FaUserShield />,
        title: "Penetration Testing",
        description: "Identify vulnerabilities before attackers do",
      },
      {
        icon: <FaKey />,
        title: "Data Encryption",
        description:
          "Protect sensitive information with industry-standard encryption",
      },
      {
        icon: <FaEye />,
        title: "Monitoring & Response",
        description: "Continuous monitoring and rapid incident response",
      },
    ],
    "ui-ux-design": [
      {
        icon: <FaUsers />,
        title: "User Research",
        description: "Understanding your users to create better experiences",
      },
      {
        icon: <FaRulerCombined />,
        title: "Wireframing & Prototyping",
        description: "Visualize ideas before development begins",
      },
      {
        icon: <FaMagic />,
        title: "Visual Design",
        description: "Beautiful interfaces that align with your brand",
      },
      {
        icon: <FaVial />,
        title: "Usability Testing",
        description: "Validate designs with real users",
      },
    ],
    "content-creation": [
      {
        icon: <FaPenFancy />,
        title: "Blog Writing",
        description: "Engaging articles that drive traffic and engagement",
      },
      {
        icon: <FaHashtag />,
        title: "Social Media Content",
        description:
          "Platform-specific content that resonates with your audience",
      },
      {
        icon: <FaBook />,
        title: "Technical Documentation",
        description: "Clear, comprehensive guides and documentation",
      },
      {
        icon: <FaBullseye />,
        title: "SEO Optimization",
        description: "Content optimized for search engines and readers",
      },
    ],
    "database-design-management": [
      {
        icon: <FaDatabase />,
        title: "Database Design",
        description: "Efficient schema design for optimal performance",
      },
      {
        icon: <FaCog />,
        title: "Query Optimization",
        description: "Fast, efficient data retrieval",
      },
      {
        icon: <FaExchangeAlt />,
        title: "Data Migration",
        description: "Seamless transition between database systems",
      },
      {
        icon: <FaSave />,
        title: "Backup & Recovery",
        description: "Ensure your data is always safe and recoverable",
      },
    ],
    "api-development": [
      {
        icon: <FaPlug />,
        title: "RESTful APIs",
        description: "Standard, easy-to-use API endpoints",
      },
      {
        icon: <FaBroadcastTower />,
        title: "GraphQL",
        description: "Flexible, efficient data querying",
      },
      {
        icon: <FaFileAlt />,
        title: "Documentation",
        description: "Comprehensive API documentation for developers",
      },
      {
        icon: <FaLock />,
        title: "Security",
        description: "Authentication, authorization, and rate limiting",
      },
    ],
    "cloud-solutions": [
      {
        icon: <FaCloud />,
        title: "Cloud Migration",
        description: "Move your infrastructure to the cloud seamlessly",
      },
      {
        icon: <FaBox />,
        title: "Containerization",
        description: "Docker and Kubernetes for scalable deployments",
      },
      {
        icon: <FaBolt />,
        title: "Serverless Architecture",
        description: "Cost-effective, auto-scaling solutions",
      },
      {
        icon: <FaTools />,
        title: "DevOps Integration",
        description: "CI/CD pipelines for automated deployments",
      },
    ],
    "ai-machine-learning-integration": [
      {
        icon: <FaRobot />,
        title: "AI Integration",
        description: "Integrate AI capabilities into your applications",
      },
      {
        icon: <FaChartBar />,
        title: "Data Analysis",
        description: "Extract insights from your data with ML models",
      },
      {
        icon: <FaBullseye />,
        title: "Predictive Models",
        description: "Forecast trends and make data-driven decisions",
      },
      {
        icon: <FaRedoAlt />,
        title: "Model Training",
        description: "Custom models trained on your specific data",
      },
    ],
  };

  return features[slug] || [];
}

// Helper function to get service-specific benefits
function getServiceBenefits(slug: string) {
  const benefits: Record<string, string[]> = {
    "mobile-app-development": [
      "Expertise in Flutter, React Native, Swift, and Kotlin",
      "Apps optimized for both performance and user experience",
      "Support for the latest mobile platform features",
      "Integration with device hardware and native APIs",
      "Comprehensive testing on multiple devices",
    ],
    "web-development": [
      "Modern frameworks like React, Next.js, and Node.js",
      "Responsive designs that work on all devices",
      "SEO-friendly architecture for better visibility",
      "Integration with third-party services and APIs",
      "Ongoing maintenance and support",
    ],
    "cybersecurity-solutions": [
      "Industry best practices and compliance standards",
      "Proactive threat detection and prevention",
      "Regular security updates and patches",
      "Employee training and security awareness",
      "Incident response and recovery planning",
    ],
    "ui-ux-design": [
      "User-centered design approach",
      "Consistent brand experience across platforms",
      "Accessibility compliance (WCAG guidelines)",
      "Data-driven design decisions",
      "Collaboration with development teams",
    ],
    "content-creation": [
      "Tailored content strategy for your brand",
      "Consistent voice and messaging",
      "SEO optimization for better reach",
      "Engaging visuals and multimedia",
      "Regular content updates and maintenance",
    ],
    "database-design-management": [
      "Experience with SQL and NoSQL databases",
      "Optimized queries for fast performance",
      "Scalable architecture for growth",
      "Data integrity and security",
      "Regular backups and disaster recovery",
    ],
    "api-development": [
      "RESTful and GraphQL expertise",
      "Comprehensive API documentation",
      "Version control and backward compatibility",
      "Rate limiting and caching strategies",
      "Monitoring and analytics integration",
    ],
    "cloud-solutions": [
      "Experience with AWS, Azure, and Google Cloud",
      "Cost optimization and resource management",
      "Auto-scaling for variable workloads",
      "High availability and disaster recovery",
      "Security and compliance in the cloud",
    ],
    "ai-machine-learning-integration": [
      "Custom ML models for your specific needs",
      "Integration with existing systems",
      "Continuous model improvement",
      "Ethical AI practices",
      "Scalable ML infrastructure",
    ],
  };

  return benefits[slug] || [];
}

export default ServiceDetailPage;

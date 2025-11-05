"use client";

import React, { useState } from "react";
import "./ProjectCard.css";
import { AiOutlineShareAlt } from "react-icons/ai";
import type { Project } from "@/data/types";
import Image from "next/image";
import ShareModal from "@/components/ShareModal";

interface ProjectCardProps extends Project {
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  demoLink,
  stack,
  className,
}) => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleShareClick = () => {
    setIsShareModalOpen(true);
  };

  const handleImageClick = () => {
    window.open(demoLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`project-card ${className ? className : ""}`}>
      <div className="picture" onClick={handleImageClick}>
        {typeof image === "string" ? (
          <img src={image} alt={title} />
        ) : (
          <Image src={image} alt={title} />
        )}
      </div>
      <div className="details">
        <div className="top">
          <h2 className="title">{title}</h2>
        </div>
        <div className="middle">
          <p className="muted description">{description}</p>
        </div>
        <div className="bottom">
          <div className="stack-container">
            <div className="stack-left">Stack</div>
            <div className="stack-right">
              <div className="stack-box-container">
                {stack.map((list, index) => (
                  <div className="stack-box" key={index}>
                    <div className="stack-icon-container">
                      <span
                        style={{ color: list.iconColor }}
                        className="flex-center stack-icon"
                      >
                        {list.icon}
                      </span>
                      <span className="stack-name">{list.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-center buttons-container">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn primary"
            >
              Demo
            </a>
            <button
              onClick={handleShareClick}
              className="flex-center btn btn-share"
            >
              <AiOutlineShareAlt />
            </button>
          </div>
        </div>
      </div>
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        projectTitle={title}
        projectUrl={demoLink}
      />
    </div>
  );
};

export default ProjectCard;

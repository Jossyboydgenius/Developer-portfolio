"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./ShareModal.css";
import { FaLink, FaWhatsapp, FaTwitter, FaFacebook } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { toast } from "sonner";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  projectUrl: string;
}

const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  projectTitle,
  projectUrl,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsClosing(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(projectUrl);
    toast.success("Link copied to clipboard!");
  };

  const handleWhatsAppShare = () => {
    const text = `Check out this project: ${projectTitle} - ${projectUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleTwitterShare = () => {
    const text = `Check out this project: ${projectTitle}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(projectUrl)}`,
      "_blank"
    );
  };

  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        projectUrl
      )}`,
      "_blank"
    );
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div
      className={`share-modal-overlay ${isClosing ? "closing" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`share-modal-content ${isClosing ? "closing" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="share-modal-close" onClick={handleClose}>
          <IoClose />
        </button>

        <h2 className="share-modal-title">Share this Project</h2>
        <p className="share-modal-subtitle">{projectTitle}</p>

        <div className="share-options">
          <button className="share-option copy-link" onClick={handleCopyLink}>
            <div className="share-icon-wrapper blue">
              <FaLink />
            </div>
            <span>Copy Link</span>
          </button>

          <button
            className="share-option whatsapp"
            onClick={handleWhatsAppShare}
          >
            <div className="share-icon-wrapper green">
              <FaWhatsapp />
            </div>
            <span>WhatsApp</span>
          </button>

          <button className="share-option twitter" onClick={handleTwitterShare}>
            <div className="share-icon-wrapper twitter-blue">
              <FaTwitter />
            </div>
            <span>Twitter</span>
          </button>

          <button
            className="share-option facebook"
            onClick={handleFacebookShare}
          >
            <div className="share-icon-wrapper facebook-blue">
              <FaFacebook />
            </div>
            <span>Facebook</span>
          </button>
        </div>

        <button className="share-modal-cancel" onClick={handleClose}>
          Cancel
        </button>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ShareModal;

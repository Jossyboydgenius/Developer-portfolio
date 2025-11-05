"use client";

import React from "react";
import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">
          <h1 className="gradient-text">404</h1>
        </div>
        <div className="error-illustration">
          <svg
            width="200"
            height="133"
            viewBox="0 0 300 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="150"
              cy="100"
              r="80"
              stroke="#52c234"
              strokeWidth="2"
              opacity="0.2"
            />
            <circle
              cx="150"
              cy="100"
              r="60"
              stroke="#52c234"
              strokeWidth="2"
              opacity="0.4"
            />
            <circle
              cx="150"
              cy="100"
              r="40"
              stroke="#52c234"
              strokeWidth="2"
              opacity="0.6"
            />
            <path
              d="M130 90 Q150 70 170 90"
              stroke="#52c234"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="135" cy="110" r="3" fill="#52c234" />
            <circle cx="165" cy="110" r="3" fill="#52c234" />
            <path
              d="M135 120 Q150 110 165 120"
              stroke="#52c234"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
        <div className="error-message">
          <h2>Page Not Found</h2>
          <p className="muted">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="error-actions">
          <Link href="/" className="btn primary">
            Back to Home
          </Link>
          <Link href="/#contact" className="btn">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

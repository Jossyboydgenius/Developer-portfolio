"use client";

import React, { useEffect, useRef, useState } from "react";
import "./ProjectNavigation.css";
import Aos from "aos";

interface ProjectNavigationProps {
  tabs: string[];
  onChange: (value: string) => void;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  tabs,
  onChange,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemsEls = useRef<(HTMLButtonElement | null)[]>([]);

  const sumArray = (arr: number[]) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  };

  useEffect(() => {
    Aos.refreshHard();
    const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
    setOffset(sumArray(prevEl.map((item) => item?.offsetWidth || 0)));
    setIndicatorWidth(itemsEls.current[activeIndex]?.offsetWidth || 0);
  }, [activeIndex]);

  return (
    <nav className="project-navigation">
      {tabs.map((tab, index) => (
        <button
          ref={(el) => {
            itemsEls.current[index] = el;
          }}
          onClick={() => {
            setActiveIndex(index);
            onChange(tab);
            Aos.refreshHard();
          }}
          className={activeIndex === index ? "active" : ""}
          key={index}
        >
          {tab}
        </button>
      ))}
      <span
        className="indicator"
        style={{
          left: `${offset}px`,
          width: `${indicatorWidth}px`,
        }}
      />
    </nav>
  );
};

export default ProjectNavigation;

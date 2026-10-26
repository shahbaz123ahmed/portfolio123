import React, { useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { ProjectList } from "../../data/ProjectData";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt,
  FaThLarge,
  FaGlobeAmericas,
} from "react-icons/fa";

// Keyframe animations
const floatSoft = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-8px) rotate(0.8deg);
  }
`;

const planeFloat = keyframes`
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(6px, -10px) rotate(3deg);
  }
`;

const pulseDot = keyframes`
  0%, 100% {
    opacity: 0.4;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const wheelBounce = keyframes`
  0%, 100% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.2;
    transform: translateY(5px);
  }
`;

// Container & Section
const ShowcaseSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 3.5rem 0 7rem;
  background: radial-gradient(
    circle at 75% 35%,
    #e3f0fe 0%,
    #f0f7ff 32%,
    #f8fafc 68%,
    #ffffff 100%
  );
  overflow: hidden;
  font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, sans-serif;
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 410px 1fr;
  gap: 2rem;
  align-items: center;
  min-height: 740px;

  @media (max-width: 1180px) {
    grid-template-columns: 360px 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

// Left Column Styles
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding-top: 1rem;
  padding-left: 2.5rem;

  @media (max-width: 992px) {
    text-align: center;
    align-items: center;
    padding-top: 0;
    padding-left: 0;
  }
`;

const Eyebrow = styled.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #3b82f6;
  margin-bottom: 1.25rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    width: 18px;
    height: 2px;
    background: #3b82f6;
    border-radius: 2px;
  }
`;

const HeroHeading = styled.h2`
  font-size: clamp(2.6rem, 4.2vw, 4.3rem);
  font-weight: 800;
  line-height: 1.08;
  color: #0f172a;
  letter-spacing: -0.035em;
  margin: 0 0 1.5rem 0;

  .highlight {
    color: #2563eb;
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.02rem;
  line-height: 1.7;
  color: #64748b;
  margin: 0 0 2rem 0;
  max-width: 420px;

  @media (max-width: 992px) {
    max-width: 580px;
  }
`;

const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.8rem;
  flex-wrap: wrap;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const ExploreBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #2563eb;
  color: #ffffff;
  border: none;
  padding: 13px 26px;
  border-radius: 9999px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 24px -4px rgba(37, 99, 235, 0.42);
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 14px 28px -4px rgba(37, 99, 235, 0.55);
  }

  .arrow-circle {
    width: 24px;
    height: 24px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    transition: transform 0.25s;
  }

  &:hover .arrow-circle {
    transform: translate(2px, -2px);
    background: rgba(255, 255, 255, 0.35);
  }
`;

const ViewToggleBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  color: #475569;
  border: 1px solid #cbd5e1;
  padding: 12px 20px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
  transition: all 0.2s;

  &:hover {
    color: #2563eb;
    border-color: #93c5fd;
    background: #f8fafc;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  padding-top: 2rem;
  max-width: 440px;

  @media (max-width: 992px) {
    max-width: 500px;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatNumber = styled.span`
  font-size: 2.2rem;
  font-weight: 800;
  color: #0f172a;
  line-height: 1;
  letter-spacing: -0.02em;
`;

const StatLabel = styled.span`
  font-size: 0.82rem;
  font-weight: 500;
  color: #64748b;
  margin-top: 6px;
  line-height: 1.3;
`;

// Bottom Left Decorative Elements
const BottomDecorativeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-top: 3rem;
  position: relative;

  @media (max-width: 992px) {
    justify-content: center;
    margin-top: 2rem;
  }
`;

const ScrollIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .mouse-icon {
    width: 18px;
    height: 28px;
    border: 2px solid #94a3b8;
    border-radius: 12px;
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 5px;

    .wheel {
      width: 3px;
      height: 5px;
      background: #3b82f6;
      border-radius: 2px;
      animation: ${wheelBounce} 1.6s ease-in-out infinite;
    }
  }

  .scroll-text {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #64748b;
    line-height: 1.2;
  }
`;

const PaperPlaneWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  animation: ${planeFloat} 5s ease-in-out infinite;

  svg.flight-trail {
    position: absolute;
    left: -40px;
    top: -20px;
    width: 90px;
    height: 60px;
    overflow: visible;
    pointer-events: none;
  }
`;

const HandwrittenImpact = styled.div`
  font-family: "Caveat", cursive;
  font-size: 23px;
  font-weight: 600;
  color: #3b82f6;
  position: absolute;
  left: 280px;
  bottom: 8px;
  white-space: nowrap;
  pointer-events: none;
  transform: rotate(-4deg);

  @media (max-width: 1250px) {
    display: none;
  }
`;

// Right Stage / 3D Globe Diorama Styles
const DioramaStage = styled.div`
  position: relative;
  width: 100%;
  min-height: 740px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1180px) {
    min-height: 680px;
  }

  @media (max-width: 992px) {
    min-height: 620px;
  }
`;

const DioramaCanvas = styled.div`
  position: relative;
  width: 100%;
  max-width: 960px;
  height: 700px;
  border-radius: 36px;
  background-image: url("/globe-projects-bg.jpg");
  background-size: cover;
  background-position: center 30%;
  box-shadow: 0 24px 60px -15px rgba(37, 99, 235, 0.16),
    0 4px 20px rgba(15, 23, 42, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.85);
  overflow: visible;

  @media (max-width: 1180px) {
    height: 640px;
  }

  @media (max-width: 992px) {
    height: 580px;
  }

  @media (max-width: 640px) {
    height: 520px;
    border-radius: 24px;
    background-position: center center;
  }
`;

// Decorative handwritten notes around the diorama
const TopRightNote = styled.div`
  position: absolute;
  top: 24px;
  right: 36px;
  font-family: "Caveat", cursive;
  font-size: 22px;
  font-weight: 600;
  color: #475569;
  transform: rotate(3deg);
  pointer-events: none;
  z-index: 15;
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const PostItNote = styled.div`
  position: absolute;
  bottom: 24px;
  right: 28px;
  background: #ffffff;
  padding: 14px 18px;
  border-radius: 6px 6px 20px 6px;
  box-shadow: 0 14px 28px -6px rgba(15, 23, 42, 0.14),
    0 3px 10px rgba(0, 0, 0, 0.05);
  transform: rotate(3.5deg);
  font-family: "Caveat", cursive;
  font-size: 19px;
  font-weight: 600;
  color: #334155;
  line-height: 1.25;
  z-index: 15;
  border-left: 3px solid #3b82f6;
  pointer-events: none;

  .emoji {
    font-size: 20px;
    vertical-align: middle;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// SVG Dotted Path connecting milestone pins
const DottedNavSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
`;

const SvgMilestoneCircle = styled.circle`
  animation: ${pulseDot} 2.5s ease-in-out infinite;
  transform-origin: center;
`;

// Floating Project Cards
const CardAnchor = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: translate(-50%, -50%) rotate(${(props) => props.rot || "0deg"});
  z-index: ${(props) => (props.isHovered ? 40 : props.baseZ || 10)};
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    z-index 0.2s ease;
  animation: ${floatSoft} ${(props) => props.duration || "5s"} ease-in-out infinite;
  animation-delay: ${(props) => props.delay || "0s"};

  &:hover {
    transform: translate(-50%, -58%) scale(1.06) rotate(0deg);
  }

  @media (max-width: 640px) {
    /* Scale down slightly on very small screens to fit cleanly */
    zoom: 0.85;
  }
`;

const ProjectCard = styled.div`
  width: 195px;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
  border-radius: 18px;
  padding: 9px;
  box-shadow: 0 16px 36px -8px rgba(15, 23, 42, 0.18),
    0 2px 10px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.8);
  position: relative;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    box-shadow: 0 24px 48px -10px rgba(37, 99, 235, 0.28),
      0 4px 14px rgba(15, 23, 42, 0.08), 0 0 0 2px #3b82f6;
  }

  &:hover .card-arrow-btn {
    background: #2563eb;
    color: #ffffff;
    transform: translate(2px, -2px);
  }
`;

const NumberBadge = styled.div`
  position: absolute;
  top: -11px;
  left: 12px;
  background: #2563eb;
  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 9999px;
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.45);
  letter-spacing: 0.04em;
  z-index: 5;
`;

const CardImage = styled.div`
  width: 100%;
  height: 105px;
  border-radius: 12px;
  background: #f1f5f9;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: top center;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 60%,
      rgba(15, 23, 42, 0.35) 100%
    );
  }
`;

const CardDetails = styled.div`
  padding: 8px 4px 4px 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CardTitle = styled.h4`
  font-size: 13.5px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
`;

const CardCategory = styled.span`
  font-size: 11px;
  color: #64748b;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
`;

const CardArrowBtn = styled.a`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #eff6ff;
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  flex-shrink: 0;
  text-decoration: none;
  transition: all 0.22s ease;
`;

// Bottom Milestone Pagination Controls
const PaginationStage = styled.div`
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 12px;
  background: #ffffff;
  padding: 6px 18px;
  border-radius: 9999px;
  box-shadow: 0 12px 28px -6px rgba(15, 23, 42, 0.14),
    0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(226, 232, 240, 0.9);
  z-index: 25;
`;

const PagBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: ${(props) => (props.active ? "#2563eb" : "#f1f5f9")};
  color: ${(props) => (props.active ? "#ffffff" : "#475569")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 13px;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: #2563eb;
    color: #ffffff;
    transform: scale(1.08);
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

const PageIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 6px;
`;

const PageDot = styled.button`
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;

  span.num {
    font-size: 12px;
    font-weight: ${(props) => (props.active ? "800" : "500")};
    color: ${(props) => (props.active ? "#2563eb" : "#94a3b8")};
    transition: color 0.2s;
  }

  span.dot {
    width: ${(props) => (props.active ? "14px" : "4px")};
    height: 4px;
    border-radius: 9999px;
    background: ${(props) => (props.active ? "#2563eb" : "#cbd5e1")};
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover span.num {
    color: #2563eb;
  }
`;

// Full Grid Mode (when user toggles "Grid View (3 Per Row)")
const GridWrapper = styled.div`
  margin-top: 3.5rem;
  padding-top: 2.5rem;
  border-top: 1px solid rgba(226, 232, 240, 0.8);
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const GridHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const GridTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.02em;
  margin: 0;

  span {
    color: #2563eb;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FullProjectCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.04);
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 35px -8px rgba(37, 99, 235, 0.18),
      0 0 0 2px #3b82f6;
  }
`;

const FullCardImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: top center;
  background-color: #f8fafc;
  position: relative;
`;

const FullCardBadge = styled.span`
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(15, 23, 42, 0.85);
  color: #ffffff;
  backdrop-filter: blur(8px);
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 700;
`;

const FullCardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FullCardCategory = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #2563eb;
  margin-bottom: 6px;
`;

const FullCardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 8px 0;
`;

const FullCardDesc = styled.p`
  font-size: 0.92rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 1.25rem 0;
  flex: 1;
`;

const TechStackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 1.5rem;
`;

const TechBadge = styled.span`
  background: #f1f5f9;
  color: #334155;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 9px;
  border-radius: 6px;
`;

const FullCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #f1f5f9;
  padding-top: 1rem;
`;

const LiveDemoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #2563eb;
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: #1d4ed8;
    transform: translateY(-1px);
  }
`;

const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #f8fafc;
  color: #334155;
  border: 1px solid #e2e8f0;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: #0f172a;
    border-color: #cbd5e1;
    background: #f1f5f9;
  }
`;

// Slot configuration for the 6 cards on the 3D globe diorama
const CARD_SLOTS = [
  {
    slot: 0,
    top: "10%",
    left: "44%",
    rot: "-2deg",
    duration: "5.4s",
    delay: "0s",
    baseZ: 14,
  },
  {
    slot: 1,
    top: "37%",
    left: "34%",
    rot: "1deg",
    duration: "4.8s",
    delay: "0.8s",
    baseZ: 16,
  },
  {
    slot: 2,
    top: "43%",
    left: "63%",
    rot: "-1.5deg",
    duration: "5.2s",
    delay: "1.6s",
    baseZ: 18,
  },
  {
    slot: 3,
    top: "26%",
    left: "81%",
    rot: "2deg",
    duration: "5.6s",
    delay: "2.4s",
    baseZ: 15,
  },
  {
    slot: 4,
    top: "68%",
    left: "41%",
    rot: "-2deg",
    duration: "5.0s",
    delay: "3.2s",
    baseZ: 19,
  },
  {
    slot: 5,
    top: "72%",
    left: "72%",
    rot: "1.5deg",
    duration: "5.3s",
    delay: "4.0s",
    baseZ: 20,
  },
];

export default function GlobeProjectShowcase() {
  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showFullGrid, setShowFullGrid] = useState(false);

  const CARDS_PER_PAGE = 6;
  const totalPages = Math.ceil(ProjectList.length / CARDS_PER_PAGE);

  // Get current 6 projects
  const startIndex = currentPage * CARDS_PER_PAGE;
  const currentProjects = ProjectList.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE
  );

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const toggleGridView = () => {
    setShowFullGrid((prev) => !prev);
    // Smooth scroll down to grid when opening
    if (!showFullGrid) {
      setTimeout(() => {
        const gridElem = document.getElementById("all-projects-grid");
        if (gridElem) {
          gridElem.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <ShowcaseSection id="projects">
      <ContentWrapper>
        <MainGrid>
          {/* Left Hero Column */}
          <LeftColumn>
            <Eyebrow>My Projects</Eyebrow>

            <HeroHeading>
              Ideas
              <br />
              Turned Into
              <br />
              <span className="highlight">Real Products.</span>
            </HeroHeading>

            <HeroDescription>
              A collection of real-world projects crafted with strategy,
              creativity, and technology to solve problems and create meaningful
              digital experiences.
            </HeroDescription>

            <ActionsRow>
              <ExploreBtn
                onClick={() => {
                  const target = showFullGrid
                    ? document.getElementById("all-projects-grid")
                    : toggleGridView();
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Explore Projects</span>
                <span className="arrow-circle">↗</span>
              </ExploreBtn>

              <ViewToggleBtn onClick={toggleGridView}>
                {showFullGrid ? (
                  <>
                    <FaGlobeAmericas />
                    <span>Focus 3D Globe</span>
                  </>
                ) : (
                  <>
                    <FaThLarge />
                    <span>Grid View (3 Per Row)</span>
                  </>
                )}
              </ViewToggleBtn>
            </ActionsRow>

            <StatsGrid>
              <StatItem>
                <StatNumber>20+</StatNumber>
                <StatLabel>Projects Completed</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>10+</StatNumber>
                <StatLabel>Happy Clients</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>5+</StatNumber>
                <StatLabel>Years Experience</StatLabel>
              </StatItem>
            </StatsGrid>

            <BottomDecorativeRow>
              {/* Paper airplane with dotted flight trail */}
              <PaperPlaneWrapper>
                <svg
                  className="flight-trail"
                  viewBox="0 0 100 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 5 50 Q 40 10, 85 25"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    opacity="0.75"
                  />
                </svg>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 12L21.5 2.5L12 21.5L9.5 14.5L2.5 12Z"
                    fill="#2563EB"
                  />
                  <path
                    d="M21.5 2.5L9.5 14.5"
                    stroke="#ffffff"
                    strokeWidth="1.2"
                  />
                </svg>
              </PaperPlaneWrapper>

              {/* Scroll to explore mouse */}
              <ScrollIndicator>
                <div className="mouse-icon">
                  <div className="wheel" />
                </div>
                <div className="scroll-text">
                  Scroll
                  <br />
                  to explore
                </div>
              </ScrollIndicator>

              <HandwrittenImpact>
                From Ideas to Impact ➔
              </HandwrittenImpact>
            </BottomDecorativeRow>
          </LeftColumn>

          {/* Right Stage: 3D Globe Diorama */}
          <DioramaStage>
            <DioramaCanvas>
              {/* Top right handwritten text */}
              <TopRightNote>
                Exploring Real-World Solutions ➔
              </TopRightNote>

              {/* Bottom right folded post-it note */}
              <PostItNote>
                Different Projects
                <br />
                Same Goal
                <br />– Real Impact. <span className="emoji">😊</span>
              </PostItNote>

              {/* Glowing SVG route linking cards across the diorama */}
              <DottedNavSvg viewBox="0 0 960 700">
                <path
                  d="M 420 120 Q 320 230, 330 280 T 390 490 Q 520 440, 600 320 T 780 220"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  opacity="0.65"
                />
                <SvgMilestoneCircle cx="420" cy="120" r="5" fill="#2563eb" />
                <SvgMilestoneCircle cx="330" cy="280" r="5" fill="#2563eb" />
                <SvgMilestoneCircle cx="390" cy="490" r="5" fill="#2563eb" />
                <SvgMilestoneCircle cx="600" cy="320" r="5" fill="#2563eb" />
                <SvgMilestoneCircle cx="780" cy="220" r="5" fill="#2563eb" />
              </DottedNavSvg>

              {/* 6 Milestone Project Cards */}
              {currentProjects.map((project, idx) => {
                const slot = CARD_SLOTS[idx % CARD_SLOTS.length];
                const globalIndex = startIndex + idx + 1;
                const formattedNum =
                  globalIndex < 10 ? `0${globalIndex}` : `${globalIndex}`;

                return (
                  <CardAnchor
                    key={project.title + idx}
                    top={slot.top}
                    left={slot.left}
                    rot={slot.rot}
                    duration={slot.duration}
                    delay={slot.delay}
                    baseZ={slot.baseZ}
                    isHovered={hoveredIndex === idx}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <ProjectCard
                      onClick={() => {
                        if (project.demo_url) {
                          window.open(
                            project.demo_url,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      }}
                    >
                      <NumberBadge>{formattedNum}</NumberBadge>

                      <CardImage src={project.img} />

                      <CardDetails>
                        <CardText>
                          <CardTitle title={project.title}>
                            {project.title}
                          </CardTitle>
                          <CardCategory>
                            {project.category || "Full-Stack Project"}
                          </CardCategory>
                        </CardText>

                        <CardArrowBtn
                          className="card-arrow-btn"
                          href={project.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          title="Open live project"
                        >
                          ↗
                        </CardArrowBtn>
                      </CardDetails>
                    </ProjectCard>
                  </CardAnchor>
                );
              })}

              {/* Bottom Pagination Controls */}
              <PaginationStage>
                <PagBtn onClick={handlePrev} aria-label="Previous Page">
                  <FaChevronLeft />
                </PagBtn>

                <PageIndicator>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <PageDot
                      key={i}
                      active={currentPage === i}
                      onClick={() => setCurrentPage(i)}
                      aria-label={`Go to page ${i + 1}`}
                    >
                      <span className="num">
                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                      </span>
                      <span className="dot" />
                    </PageDot>
                  ))}
                </PageIndicator>

                <PagBtn onClick={handleNext} aria-label="Next Page">
                  <FaChevronRight />
                </PagBtn>
              </PaginationStage>
            </DioramaCanvas>
          </DioramaStage>
        </MainGrid>

        {/* Optional 3-per-row Full Grid View (toggled or scrolled to) */}
        {showFullGrid && (
          <GridWrapper id="all-projects-grid">
            <GridHeader>
              <div>
                <GridTitle>
                  All <span>{ProjectList.length} Projects</span> Catalog
                </GridTitle>
                <p style={{ color: "#64748b", margin: "6px 0 0 0" }}>
                  Every project neatly aligned in a 3-per-row responsive grid
                  with complete tech stack and links.
                </p>
              </div>

              <ViewToggleBtn onClick={() => setShowFullGrid(false)}>
                <FaGlobeAmericas />
                <span>Back to 3D Globe View</span>
              </ViewToggleBtn>
            </GridHeader>

            <ProjectsGrid>
              {ProjectList.map((project, idx) => {
                const formattedNum =
                  idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
                return (
                  <FullProjectCard key={project.title}>
                    <FullCardImage src={project.img}>
                      <FullCardBadge>
                        {formattedNum} / {ProjectList.length}
                      </FullCardBadge>
                    </FullCardImage>

                    <FullCardBody>
                      <FullCardCategory>
                        {project.category || "Full Stack Application"}
                      </FullCardCategory>
                      <FullCardTitle>{project.title}</FullCardTitle>
                      <FullCardDesc>{project.description}</FullCardDesc>

                      <TechStackList>
                        {project.tech_stack.slice(0, 4).map((tech, i) => (
                          <TechBadge key={i}>{tech}</TechBadge>
                        ))}
                        {project.tech_stack.length > 4 && (
                          <TechBadge>
                            +{project.tech_stack.length - 4}
                          </TechBadge>
                        )}
                      </TechStackList>

                      <FullCardFooter>
                        <LiveDemoLink
                          href={project.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Live Demo</span>
                          <FaExternalLinkAlt style={{ fontSize: "11px" }} />
                        </LiveDemoLink>

                        <GithubLink
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                          <span>Code</span>
                        </GithubLink>
                      </FullCardFooter>
                    </FullCardBody>
                  </FullProjectCard>
                );
              })}
            </ProjectsGrid>
          </GridWrapper>
        )}
      </ContentWrapper>
    </ShowcaseSection>
  );
}

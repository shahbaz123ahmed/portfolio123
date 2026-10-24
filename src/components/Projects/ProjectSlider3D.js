import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "@emotion/styled";
import { ProjectList } from "../../data/ProjectData";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt,
  FaThLarge,
  FaCube,
} from "react-icons/fa";

const SliderSection = styled.div`
  width: 100%;
  position: relative;
  user-select: none;
  touch-action: pan-y;
  padding: 0.5rem 0 2.5rem;
`;

const PerspectiveStage = styled.div`
  perspective: 1300px;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;

  @media (max-width: 768px) {
    height: 400px;
    perspective: 900px;
  }
`;

const AmbientGlow = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -35%);
  width: min(440px, 70vw);
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(70, 116, 233, 0.25) 0%,
    rgba(99, 102, 241, 0.12) 40%,
    rgba(246, 249, 255, 0) 70%
  );
  filter: blur(60px);
  pointer-events: none;
  z-index: 1;
`;

const CardTrack = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  z-index: 2;
`;

const SlideCard = styled.div`
  position: absolute;
  width: clamp(280px, 29vw, 385px);
  height: 360px;
  border-radius: 20px;
  padding: 10px 10px 12px;
  cursor: ${(props) => (props.isActive ? "default" : "pointer")};
  transform-style: preserve-3d;
  background: #ffffff;
  border: 1px solid
    ${(props) =>
      props.isActive
        ? "rgba(70, 116, 233, 0.45)"
        : "rgba(219, 228, 244, 0.65)"};
  box-shadow: ${(props) =>
    props.isActive
      ? "0 22px 45px -10px rgba(70, 116, 233, 0.22), 0 8px 18px -4px rgba(8, 14, 43, 0.05)"
      : "0 8px 20px -8px rgba(70, 116, 233, 0.08)"};
  display: flex;
  flex-direction: column;
  transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.65s ease,
    filter 0.65s ease,
    box-shadow 0.65s ease,
    border-color 0.65s ease;

  ${(props) =>
    props.isActive &&
    `
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 15%;
      right: 15%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #4674e9, #60a5fa, transparent);
      border-radius: 2px;
      z-index: 5;
    }
  `}

  &:hover img {
    transform: scale(1.04);
  }

  @media (max-width: 768px) {
    width: 84vw;
    height: 365px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 185px;
  border-radius: 14px;
  overflow: hidden;
  background: #f1f5f9;
  border: 1px solid rgba(174, 191, 223, 0.22);
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

const TopBadges = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
`;

const IndexBadge = styled.span`
  background: rgba(8, 14, 43, 0.72);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #ffffff;
  padding: 3px 8px;
  border-radius: 8px;
  font-size: 10.5px;
  font-weight: 600;
  font-family: monospace;
  letter-spacing: 0.06em;
`;

const LivePill = styled.span`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: #059669;
  padding: 3px 9px;
  border-radius: 12px;
  font-size: 10.5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.25);
  }
`;

const CardContent = styled.div`
  padding: 10px 4px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity 0.35s ease;
  pointer-events: ${(props) => (props.isActive ? "auto" : "none")};
`;

const TitleAndDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CategoryTag = styled.span`
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #4674e9;
`;

const ProjectTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #080e2b;
  margin: 0;
  letter-spacing: -0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProjectDesc = styled.p`
  font-size: 11.5px;
  color: #52607e;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 32px;
`;

const TechRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
  margin: 4px 0 8px;
`;

const TechTag = styled.span`
  background: #eff4fe;
  border: 1px solid rgba(70, 116, 233, 0.14);
  color: #3b66d4;
  padding: 2px 7px;
  border-radius: 8px;
  font-size: 10.5px;
  font-weight: 500;
  white-space: nowrap;
`;

const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
`;

const DemoBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: linear-gradient(135deg, #4674e9 0%, #3058c4 100%);
  color: #ffffff !important;
  padding: 7px 16px;
  border-radius: 18px;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(70, 116, 233, 0.28);
  transition: all 0.25s ease;
  flex: 1;

  &:hover {
    background: linear-gradient(135deg, #3765dc 0%, #254db6 100%);
    transform: translateY(-1.5px);
    box-shadow: 0 6px 16px rgba(70, 116, 233, 0.38);
  }
`;

const GithubBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: #f8fafc;
  border: 1px solid rgba(174, 191, 223, 0.45);
  color: #334155 !important;
  padding: 6.5px 12px;
  border-radius: 18px;
  font-size: 11.5px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: #eef3ff;
    border-color: #4674e9;
    color: #4674e9 !important;
    transform: translateY(-1.5px);
  }
`;

const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 1rem;
`;

const NavArrow = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid rgba(174, 191, 223, 0.45);
  color: #080e2b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(70, 116, 233, 0.08);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  font-size: 12px;

  &:hover {
    background: #4773ec;
    color: #ffffff;
    border-color: #4773ec;
    transform: scale(1.08);
    box-shadow: 0 6px 16px rgba(70, 116, 233, 0.22);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const DotIndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const DotIndicator = styled.button`
  width: ${(props) => (props.isActive ? "22px" : "7px")};
  height: 7px;
  border-radius: 7px;
  background: ${(props) => (props.isActive ? "#4674e9" : "#cbd5e1")};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background: #4674e9;
  }
`;

const HintText = styled.p`
  text-align: center;
  color: #7a87aa;
  font-size: 12px;
  letter-spacing: 0.03em;
  margin-top: 0.6rem;
  margin-bottom: 0;
`;

const ViewSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  z-index: 50;
  position: relative;
  pointer-events: auto;
`;

const ViewSwitchTrack = styled.div`
  display: inline-flex;
  align-items: center;
  background: #ffffff;
  padding: 5px;
  border-radius: 9999px;
  border: 1px solid rgba(70, 116, 233, 0.25);
  box-shadow: 0 6px 20px rgba(70, 116, 233, 0.12);
  gap: 6px;
  pointer-events: auto;
  max-width: 92vw;
`;

const ViewSwitchBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 9px 20px;
  border-radius: 9999px;
  border: none;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  pointer-events: auto;
  user-select: none;
  white-space: nowrap;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  color: ${(props) => (props.isActive ? "#ffffff" : "#52607e")};
  background: ${(props) =>
    props.isActive
      ? "linear-gradient(135deg, #4674e9 0%, #3058c4 100%)"
      : "transparent"};
  box-shadow: ${(props) =>
    props.isActive
      ? "0 4px 14px rgba(70, 116, 233, 0.35)"
      : "none"};

  &:hover {
    color: ${(props) => (props.isActive ? "#ffffff" : "#4674e9")};
    background: ${(props) =>
      props.isActive
        ? "linear-gradient(135deg, #4674e9 0%, #3058c4 100%)"
        : "rgba(70, 116, 233, 0.08)"};
  }

  @media (max-width: 640px) {
    padding: 7px 14px;
    font-size: 11.5px;
    gap: 5px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.5rem 0 2rem;
  animation: fadeInGrid 0.45s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes fadeInGrid {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

const GridCard = styled.div`
  width: 100%;
  min-height: 380px;
  border-radius: 20px;
  padding: 10px 10px 14px;
  background: #ffffff;
  border: 1px solid rgba(219, 228, 244, 0.75);
  box-shadow: 0 6px 20px -6px rgba(70, 116, 233, 0.08), 0 2px 6px rgba(8, 14, 43, 0.03);
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 15%;
    right: 15%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #4674e9, #60a5fa, transparent);
    border-radius: 2px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(70, 116, 233, 0.45);
    box-shadow: 0 20px 40px -10px rgba(70, 116, 233, 0.22), 0 8px 16px rgba(8, 14, 43, 0.04);

    &::before {
      opacity: 1;
    }

    img {
      transform: scale(1.05);
    }
  }
`;

const GridCardContent = styled.div`
  padding: 10px 4px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const getProjectCategory = (title) => {
  const map = {
    "Lumen Library": "Library Management",
    "Chachiji": "E-Commerce Store",
    "LOVOSIS": "Enterprise Security",
    "Easy Converter": "File Utility Suite",
    "PrimoTech": "Security Solutions",
    "Imou": "Smart Home & IoT",
    "Genova-AI": "AI Creative Suite",
    "Bond-Metal": "Commercial Architecture",
    "To-Do App": "Productivity Suite",
    "WEATHER App": "Weather Forecasting",
    "BLOB-GENERATOR": "Creative SVG Tool",
    "E-COMMERCE": "Online Shopping Store",
    "BLOG-GENERATOR": "Content Platform",
  };
  return map[title] || "Web Application";
};

export default function ProjectSlider3D() {
  const [viewMode, setViewMode] = useState("slider"); // "slider" | "grid"
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const total = ProjectList.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-movement right to left
  useEffect(() => {
    if (isPaused || viewMode !== "slider") return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3200);
    return () => clearInterval(timer);
  }, [isPaused, viewMode, nextSlide]);

  // Scroller wheel support
  const wheelLockRef = useRef(false);
  const handleWheel = (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 20 && !wheelLockRef.current) {
      wheelLockRef.current = true;
      if (delta > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 400);
    }
  };

  // Pointer drag support
  const dragStartRef = useRef(null);
  const handlePointerDown = (e) => {
    dragStartRef.current = e.clientX;
    setIsPaused(true);
  };

  const handlePointerMove = (e) => {
    if (dragStartRef.current === null) return;
    const diff = e.clientX - dragStartRef.current;
    if (Math.abs(diff) > 55) {
      if (diff < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      dragStartRef.current = null;
    }
  };

  const handlePointerUp = () => {
    dragStartRef.current = null;
    setTimeout(() => setIsPaused(false), 2000);
  };

  // Interactive 3D tilt on mousemove
  const handleCardMouseMove = (e, isActive) => {
    if (!isActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseTilt({ x: x * 7, y: -y * 7 });
  };

  const handleCardMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  return (
    <SliderSection
      onMouseEnter={() => viewMode === "slider" && setIsPaused(true)}
      onMouseLeave={() => viewMode === "slider" && setIsPaused(false)}
      onWheel={viewMode === "slider" ? handleWheel : undefined}
      onPointerDown={viewMode === "slider" ? handlePointerDown : undefined}
      onPointerMove={viewMode === "slider" ? handlePointerMove : undefined}
      onPointerUp={viewMode === "slider" ? handlePointerUp : undefined}
      onPointerCancel={viewMode === "slider" ? handlePointerUp : undefined}
    >
      <ViewSwitchContainer
        onPointerDown={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <ViewSwitchTrack>
          <ViewSwitchBtn
            type="button"
            id="btn-3d-carousel"
            isActive={viewMode === "slider"}
            onClick={(e) => {
              e.stopPropagation();
              setViewMode("slider");
            }}
          >
            <FaCube size={12} /> 3D Carousel
          </ViewSwitchBtn>
          <ViewSwitchBtn
            type="button"
            id="btn-grid-view"
            isActive={viewMode === "grid"}
            onClick={(e) => {
              e.stopPropagation();
              setViewMode("grid");
            }}
          >
            <FaThLarge size={12} /> Grid View (3 Per Row)
          </ViewSwitchBtn>
        </ViewSwitchTrack>
      </ViewSwitchContainer>

      {viewMode === "slider" ? (
        <>
          <PerspectiveStage>
            <AmbientGlow />
            <CardTrack>
              {ProjectList.map((project, index) => {
                let diff = (index - activeIndex) % total;
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;

                const isActive = diff === 0;

                // Spacing tuned for sleek, compact card proportions
                let translateX = diff * 88;
                let translateZ = -Math.abs(diff) * 135;
                let rotateY = diff * -24;
                let scale = 1 - Math.abs(diff) * 0.12;
                let opacity = 1;
                let blur = 0;

                if (Math.abs(diff) === 0) {
                  opacity = 1;
                  blur = 0;
                } else if (Math.abs(diff) === 1) {
                  opacity = 0.55;
                  blur = 1.2;
                } else if (Math.abs(diff) === 2) {
                  opacity = 0.22;
                  blur = 3;
                } else {
                  opacity = 0;
                  blur = 5;
                }

                const zIndex = 20 - Math.abs(diff) * 5;
                const isClickable = Math.abs(diff) <= 1;

                const finalRotateX = isActive ? mouseTilt.y : 0;
                const finalRotateY = isActive ? rotateY + mouseTilt.x : rotateY;

                return (
                  <SlideCard
                    key={index}
                    isActive={isActive}
                    style={{
                      transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${finalRotateY}deg) rotateX(${finalRotateX}deg) scale(${scale})`,
                      opacity,
                      filter: blur > 0 ? `blur(${blur}px)` : "none",
                      zIndex,
                      pointerEvents: isClickable ? "auto" : "none",
                    }}
                    onMouseMove={(e) => handleCardMouseMove(e, isActive)}
                    onMouseLeave={handleCardMouseLeave}
                    onClick={() => {
                      if (!isActive) {
                        setActiveIndex(index);
                      }
                    }}
                  >
                    <ImageContainer>
                      <TopBadges>
                        <IndexBadge>
                          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                        </IndexBadge>
                        <LivePill>Active</LivePill>
                      </TopBadges>
                      <img src={project.img} alt={project.title} loading="lazy" />
                    </ImageContainer>

                    <CardContent isActive={isActive}>
                      <TitleAndDesc>
                        <CategoryTag>{getProjectCategory(project.title)}</CategoryTag>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectDesc title={project.description}>
                          {project.description}
                        </ProjectDesc>
                      </TitleAndDesc>

                      <TechRow>
                        {project.tech_stack.slice(0, 3).map((tech, i) => (
                          <TechTag key={i}>{tech}</TechTag>
                        ))}
                        {project.tech_stack.length > 3 && (
                          <TechTag>+{project.tech_stack.length - 3}</TechTag>
                        )}
                      </TechRow>

                      <ActionsRow>
                        {project.demo_url && (
                          <DemoBtn
                            href={project.demo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Live Demo <FaExternalLinkAlt size={9} />
                          </DemoBtn>
                        )}
                        {project.github_url && (
                          <GithubBtn
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub size={12} /> Code
                          </GithubBtn>
                        )}
                      </ActionsRow>
                    </CardContent>
                  </SlideCard>
                );
              })}
            </CardTrack>
          </PerspectiveStage>

          <ControlsRow>
            <NavArrow onClick={prevSlide} aria-label="Previous Project">
              <FaChevronLeft />
            </NavArrow>
            <DotIndicatorContainer>
              {ProjectList.map((_, idx) => (
                <DotIndicator
                  key={idx}
                  isActive={idx === activeIndex}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </DotIndicatorContainer>
            <NavArrow onClick={nextSlide} aria-label="Next Project">
              <FaChevronRight />
            </NavArrow>
          </ControlsRow>

          <HintText>Auto-moving Right → Left · Drag or Scroll wheel to navigate</HintText>
        </>
      ) : (
        <GridContainer>
          {ProjectList.map((project, index) => (
            <GridCard key={index}>
              <ImageContainer>
                <TopBadges>
                  <IndexBadge>
                    {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </IndexBadge>
                  <LivePill>Active</LivePill>
                </TopBadges>
                <img src={project.img} alt={project.title} loading="lazy" />
              </ImageContainer>

              <GridCardContent>
                <TitleAndDesc>
                  <CategoryTag>{getProjectCategory(project.title)}</CategoryTag>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDesc title={project.description}>
                    {project.description}
                  </ProjectDesc>
                </TitleAndDesc>

                <TechRow>
                  {project.tech_stack.slice(0, 3).map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                  {project.tech_stack.length > 3 && (
                    <TechTag>+{project.tech_stack.length - 3}</TechTag>
                  )}
                </TechRow>

                <ActionsRow>
                  {project.demo_url && (
                    <DemoBtn
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo <FaExternalLinkAlt size={9} />
                    </DemoBtn>
                  )}
                  {project.github_url && (
                    <GithubBtn
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={12} /> Code
                    </GithubBtn>
                  )}
                </ActionsRow>
              </GridCardContent>
            </GridCard>
          ))}
        </GridContainer>
      )}
    </SliderSection>
  );
}

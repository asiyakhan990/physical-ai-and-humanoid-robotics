import clsx from "clsx";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import styles from './index.module.css';

// --- 1. DATA STRUCTURES ---

interface CardData {
  id: number;
  frontTitle: string;
  frontDescription: string;
  frontClassName: "one" | "two" | "three" | "four";
  backHeadline: string;
  backFeatures: string[];
  ctaPrimaryText: string;
  ctaPrimaryLink: string;
}

// --- 2. STYLED COMPONENTS (CSS) ---

// Define Keyframes
const pulse = keyframes`
0% {
box-shadow: 0 0 12px rgba(0, 255, 255, 0.25),
0 0 25px rgba(0, 255, 255, 0.15) inset;
}
50% {
box-shadow: 0 0 22px rgba(0, 255, 255, 0.4),
0 0 35px rgba(0, 255, 255, 0.25) inset;
}
100% {
box-shadow: 0 0 12px rgba(0, 255, 255, 0.25),
0 0 25px rgba(0, 255, 255, 0.15) inset;
}
`;

// Global Styles (Theme variables)
const GlobalStyles = createGlobalStyle`
:root {
--bg: #0a0c10;
--card-bg: rgba(20, 25, 35, 0.9);
--accent: #00f5ff;
--text: #fafbfd;
--text-dim: #c6c7cc;
--radius: 20px;
--shadow: 0 10px 30px rgba(0, 255, 255, 0.2);
}
`;

// Section Title Style
const SectionTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--docusaurus-text-color);
  text-align: center;
  margin-top: 60px;
  margin-bottom: 60px;
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
`;
// Inline styles for cards
const cardStyle: React.CSSProperties = {
  backgroundColor: "var(--card-bg)",
  borderRadius: "var(--radius)",
  padding: "24px",
  minHeight: "360px",
  width: "300px",
  margin: "20px",
  boxShadow: "var(--shadow)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "transform 0.3s, box-shadow 0.3s",
};

const cardTitle: React.CSSProperties = {
  color: "var(--accent)",
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "16px",
};

const cardText: React.CSSProperties = {
  color: "var(--text-dim)",
  fontSize: "1rem",
  marginBottom: "24px",
  lineHeight: 1.5,
};
const cardBtn: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "var(--accent)",
  color: "#000",
  fontWeight: 700,
  textDecoration: "none",
  borderRadius: "8px",
  textAlign: "center",
  transition: "background 0.3s, transform 0.2s",
};

// Main Grid Container (Reused for both sections)
const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// Card Wrapper (Needed for hover effects)
const CardWrapper = styled.div`
  cursor: pointer;
  position: relative;
  /* Simple scale effect on hover */
  &:hover > div {
    transform: scale(1.02);
  }
`;

// Single Card component (Dark Theme Modules)
const Card = styled.div<{ $frontClassName: "one" | "two" | "three" | "four" }>`
  position: relative;
  width: 100%;
  min-height: 360px;
  border-radius: var(--radius);
  background: var(--card-bg);
  box-shadow: var(--shadow);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: box-shadow 0.3s, filter 0.3s, transform 0.3s;

  /* Dynamic Background Images - ensure background is properly layered */
  ${(props) =>
    props.$frontClassName === "one" &&
    `background: linear-gradient(rgba(20, 25, 35, 0.7), rgba(20, 25, 35, 0.7));`}
  ${(props) =>
    props.$frontClassName === "two" &&
    `background: linear-gradient(rgba(20, 25, 35, 0.7), rgba(20, 25, 35, 0.7));`}
${(props) =>
    props.$frontClassName === "three" &&
    `background: linear-gradient(rgba(20, 25, 35, 0.7), rgba(20, 25, 35, 0.7));`}
${(props) =>
    props.$frontClassName === "four" &&
    `background: linear-gradient(rgba(20, 25, 35, 0.7), rgba(20, 25, 35, 0.7));`}

background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* Inner Glow Effect */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: var(--radius);
    /* Initial box shadow setup */
    box-shadow: 0 0 12px rgba(0, 255, 255, 0.25),
      0 0 25px rgba(0, 255, 255, 0.15) inset;
    opacity: 0;
    transition: opacity 0.4s;
  }

  ${CardWrapper}:hover &::before {
    opacity: 1;
    animation: ${pulse} 2s infinite alternate;
  }

  h2 {
    font-size: 1.6rem;
    color: var(--accent);
    font-weight: bold;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  p.description {
    font-size: 1rem;
    color: var(--text-dim);
    line-height: 1.5;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 18px;
  }
`;

// CTA Button Style
const CtaButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: var(--accent);
  color: #000;
  font-weight: 700;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s, transform 0.2s;
  text-align: center;
  max-width: 180px;

  &:hover {
    background: #00ffff;
    transform: translateY(-2px);
  }
`;

// --- START OF NEW SECTION STYLES ---

// New container for the second section to add vertical space
const PillarsSectionWrapper = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  padding: 0 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: var(--docusaurus-text-color);
`;

// Style for the main headline 'What Makes This Book Different'
const PillarsHeadline = styled.h2`
  font-size: 3.2rem;
  color: var(--docusaurus-text-color);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Style for the descriptive subtitle
const PillarsSubtitle = styled.p`
  font-size: 1.1rem;
  color: var(--docusaurus-secondary-text-color);
  max-width: 700px;
  margin: 0 auto 50px auto;
  line-height: 1.6;
`;

// Style for the mode-switching Pillar Cards
const PillarCard = styled.div`
  background: var(--card-bg);
  border: 5px solid var(--docusaurus-border-color);
  border-radius: var(--radius);
  padding: 30px;
  min-height: 300px;
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;

  &:hover {
    background: #5bacacff;
    color: #ffffffff
    transform: translateY(-5px);
    box-shadow: var(--shadow);
    border: 3px solid #00ffff;
    border-color: var(--accent); 
  }

  .icon-wrapper {
    font-size: 2.5rem;
    margin-bottom: 15px;
    display: block;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
    font-weight: 700;
    color: var(--accent);
  }

  p {
    font-size: 1rem;
    color: var(--text-dim);
  }

  .most-popular {
    background: var(--accent);
    /* IMPORTANT FIX: Force black color for text inside the accent background */
    color: #0a0c10 !important;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 4px;
    position: absolute;
    top: -10px;
    right: 15px;
    z-index: 10;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

// --- END OF NEW SECTION STYLES ---

// --- 3. REACT COMPONENT LOGIC (TSX) ---

const SimpleCard: FC<CardData> = (props) => {
  return (
    <CardWrapper>
      <Card $frontClassName={props.frontClassName}>
        <div>
          <h2>{props.frontTitle}</h2>
          <p className="description">{props.frontDescription}</p>
        </div>
        <CtaButton
          href={props.ctaPrimaryLink}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {props.ctaPrimaryText} &rarr;
        </CtaButton>
      </Card>
    </CardWrapper>
  );
};

// --- Explore All Modules Data and Component ---

// Hover effect for cards container
const CardsContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
    }}
  >
    {children}
  </div>
);

// --- MODULE CARDS COMPONENT ---
export const ExploreModules: FC = () => {
  return (
    <>
      <GlobalStyles />
      <SectionTitle>Explore All Modules</SectionTitle>
      <CardsContainer>
        {/* MODULE 1 */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Module 1: ROS 2 Foundations</h3>
          <p style={cardText}>
            Explore ROS 2, the foundational middleware for robotics. Learn how
            nodes, topics, and actions allow seamless communication between
            sensors, actuators, and controllers, enabling modular, scalable, and
            intelligent robot systems.
          </p>
          <Link
            style={cardBtn}
            to="/docs/the-robotic-nervous-system-ros2/module-1-ros"
          >
            Open Module →
          </Link>
        </div>

        {/* MODULE 2 */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Module 2: The Digital Twin (Gazebo & Unity)</h3>
          <p style={cardText}>
            Learn to create digital twins using Gazebo and Unity. Simulate and
            visualize robotic systems in realistic virtual environments, test
            behaviors safely, and bridge the gap between virtual simulation and
            real-world deployment.
          </p>
          <Link
            style={cardBtn}
            to="/docs/the-digital-twin-gazebo-unity/module 2-gazebo-and-unity"
          >
            Open Module →
          </Link>
        </div>

        {/* MODULE 3 */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>
            Module 3: The AI-Robot Brain (NVIDIA Isaac™)
          </h3>
          <p style={cardText}>
            Discover NVIDIA Isaac™ to build AI-powered robot brains. Integrate
            perception, control, and decision-making algorithms to create
            intelligent robots capable of real-time sensing, planning, and
            adaptive autonomous behavior.
          </p>
          <Link
            style={cardBtn}
            to="/docs/the-ai-robot-brain-nvidia-isaac/the-ai-robot Brain"
          >
            Open Module →
          </Link>
        </div>

        {/* MODULE 4 */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Module 4: Vision-Language-Action (VLA)</h3>
          <p style={cardText}>
            Combine vision, language, and action to create autonomous robots.
            Understand how robots perceive environments, interpret natural
            language commands, and execute complex tasks using AI-driven
            cognitive planning and motion control.
          </p>
          <Link
            style={cardBtn}
            to="/docs/vision-language-action-vla/vision-language-action -vla"
          >
            Open Module →
          </Link>
        </div>

        {/* GLOSSARY */}
        <div style={cardStyle}>
          <h3 style={cardTitle}>Glossary</h3>
          <p style={cardText}>
            A comprehensive reference of key terms used throughout the textbook.
            Understand specialized robotics, AI, and simulation terminology,
            including ROS 2, VLA, digital twins, cognitive planning, and
            autonomous robot concepts..
          </p>
          <Link style={cardBtn} to="/docs/glossary/glossary11">
            Open Appendix →
          </Link>
        </div>
      </CardsContainer>
    </>
  );
};

export const InteractiveCardGrid: FC = () => {
  return <ExploreModules />; // The component we just created with all hardcoded cards
};

// --- NEW KEY PILLARS SECTION LOGIC ---

interface PillarData {
  icon: string;
  title: string;
  description: string;
  isPopular?: boolean;
}

const PILLAR_DATA: PillarData[] = [
  {
    icon: "🧠",
    title: "Embodied AI Agents",
    description:
      "This book was written by and is powered by AI Agents using Claude Code. Learn Physical AI by collaborating with the same reusable intelligence (Subagents and Skills) that built the course itself.",
  },
  {
    icon: "💬",
    title: "Integrated RAG Chatbot",
    description:
      "An embedded Retrieval-Augmented Generation (RAG) chatbot uses your selection as context. Get precise, instant answers specific to the text you're reading without leaving the page.",
  },
  {
    icon: "📜",
    title: "Spec-Kit Foundation",
    description:
      "Built using Spec-Kit Plus, all concepts are defined as executable specifications. This ensures maximum clarity, consistency, and a seamless path from theory to deployable code.",
  },
];

const PillarCardComponent: FC<PillarData> = ({
  icon,
  title,
  description,
  isPopular,
}) => (
  <PillarCard>
    {isPopular && <div className="most-popular">MOST POPULAR</div>}
    <span className="icon-wrapper">{icon}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </PillarCard>
);

export const KeyPillarsGrid: FC = () => {
  return (
    <PillarsSectionWrapper>
      <PillarsHeadline>
        Physical Humanoid AI Book: Building the Book with Bots
      </PillarsHeadline>
      <PillarsSubtitle>
        This course is not just about AI; it was built by AI. We use an
        intelligent, specification-driven pipeline to ensure clarity,
        consistency, and a direct path to deployment.
      </PillarsSubtitle>

      {/* Using a custom grid setting for this section to match the 3-column layout */}
      <GridContainer
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {PILLAR_DATA.map((pillar, index) => (
          <PillarCardComponent key={index} {...pillar} />
        ))}
      </GridContainer>
    </PillarsSectionWrapper>
  );
};

// --- 6. FINAL MAIN EXPORT COMPONENT ---

export const MainContent: FC = () => {
  return (
    <>
      <GlobalStyles />
      {/* 1. Explore All Modules Section (Dark Theme) */}
      <InteractiveCardGrid />

      {/* 2. What Makes This Book Different Section (Light Theme) */}
      <KeyPillarsGrid />

      {/* CTA Section */}
      <CtaSection />
    </>
  );
};

{
  /* CTA SECTION */
}
export const CtaSection: FC = () => {
  return (
    <section
      style={{
        padding: "90px 20px",
        background: "#0b0f19",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Ready to build the future?
      </h2>
      <p
        style={{ fontSize: "20px", marginBottom: "40px", color: "hero__title" }}
      >
        Start your journey into Physical AI and humanoid robotics today.
      </p>

      <Link
        className="button button--secondary button--lg"
        to="/docs/introduction/intro"
      >
        Start Reading →
      </Link>
    </section>
  );
};

export default MainContent;

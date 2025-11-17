import profileIcon from "../assets/profileIcon.png";
import { TypingText } from "./TypingText";
import { useState } from "react";

interface CardHeaderProps {
  name: string;
  role: string;
  avatarUrl?: string;
}

export function CardHeader({ name, role, avatarUrl }: CardHeaderProps) {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <div className="card-header">
      <div className="avatar">
        {avatarUrl ? (
          <img src={profileIcon} alt={name} />
        ) : (
          <div className="avatar-placeholder">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <h1>
        <TypingText
          duration={1.5}
          delay={0.3}
          fontSize=""
          fontWeight=""
          color=""
          className="inline-block"
          onComplete={() => setShowCursor(true)}
        >
          {name}
        </TypingText>
        {showCursor && <span className="cursor-blink">|</span>}
      </h1>
      <p className="role">{role}</p>
    </div>
  );
}

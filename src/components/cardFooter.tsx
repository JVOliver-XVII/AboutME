interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface CardFooterProps {
  socialLinks: SocialLink[];
}

export function CardFooter({ socialLinks }: CardFooterProps) {
  return (
    <div className="card-footer">
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

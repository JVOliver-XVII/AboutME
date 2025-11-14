import { CardHeader } from "./cardHeader";
import { CardBody } from "./cardBody";
import { CardFooter } from "./cardFooter";
import { motion } from "framer-motion";

interface CardProps {
  name: string;
  role: string;
  description: string;
  avatarUrl?: string;
  skills?: string[];
  socialLinks: Array<{
    name: string;
    url: string;
    icon: React.ReactNode;
  }>;
}

export function Card({
  name,
  role,
  description,
  avatarUrl,
  skills,
  socialLinks,
}: CardProps) {
  return (
    <motion.div
      className="card-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="card-container">
        <CardHeader name={name} role={role} avatarUrl={avatarUrl} />
        <CardBody description={description} skills={skills} />
        <CardFooter socialLinks={socialLinks} />
      </div>
    </motion.div>
  );
}

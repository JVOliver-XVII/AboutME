import profileIcon from '../assets/profileIcon.png'

interface CardHeaderProps {
  name: string;
  role: string;
  avatarUrl?: string;
}

export function CardHeader({ name, role, avatarUrl }: CardHeaderProps) {
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
      <h1>{name}</h1>
      <p className="role">{role}</p>
    </div>
  );
}
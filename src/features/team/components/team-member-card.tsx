import type { TeamMember } from '@/types';

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="text-center p-6 bg-background rounded-lg">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
        {member.avatar ? (
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-2xl font-bold text-primary">
            {member.name.charAt(0)}
          </span>
        )}
      </div>
      <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
      <p className="text-secondary text-sm">{member.position}</p>
      {member.bio && (
        <p className="text-xs text-secondary/80 mt-2 line-clamp-2">
          {member.bio}
        </p>
      )}
    </div>
  );
}

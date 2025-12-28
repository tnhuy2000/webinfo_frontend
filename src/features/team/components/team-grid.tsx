'use client';

import { useTeamMembers } from '../hooks/use-team';
import { TeamMemberCard } from './team-member-card';

interface TeamGridProps {
  limit?: number;
  isActive?: boolean;
}

export function TeamGrid({ limit, isActive = true }: TeamGridProps) {
  const { data, loading, error } = useTeamMembers(isActive);

  if (loading) {
    return (
      <div className="text-center text-secondary">
        Loading team...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error loading team: {error.message}
      </div>
    );
  }

  const members = limit
    ? data?.teamMembers?.slice(0, limit)
    : data?.teamMembers;

  if (!members || members.length === 0) {
    return (
      <div className="text-center text-secondary">
        No team members available
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-4 gap-8">
      {members.map((member) => (
        <TeamMemberCard key={member._id} member={member} />
      ))}
    </div>
  );
}

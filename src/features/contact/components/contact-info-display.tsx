'use client';

import { useContactInfo } from '../hooks/use-contact';

export function ContactInfoDisplay() {
  const { data, loading, error } = useContactInfo();

  if (loading) {
    return (
      <div className="text-center text-secondary">
        Loading contact info...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error loading contact info: {error.message}
      </div>
    );
  }

  const contactInfo = data?.contactInfo;

  if (!contactInfo) {
    return (
      <div className="text-center text-secondary">
        No contact information available
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-xl text-secondary">
        {contactInfo.email}
      </p>
      <p className="text-xl text-secondary">
        {contactInfo.phone}
      </p>
      <p className="text-xl text-secondary">
        {contactInfo.address}
      </p>
      {contactInfo.workingHours && (
        <p className="text-sm text-secondary/80">
          {contactInfo.workingHours}
        </p>
      )}
    </div>
  );
}

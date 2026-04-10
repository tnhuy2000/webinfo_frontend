'use client';

import { useServices } from '../hooks/use-services';
import { ServiceCard } from './service-card';
import type { Service } from '@/types';

interface ServiceListProps {
  limit?: number;
  isActive?: boolean;
}

export function ServiceList({ limit, isActive = true }: ServiceListProps) {
  const { data, loading, error } = useServices(isActive);

  if (loading) {
    return (
      <div className="text-center text-secondary">
        Loading services...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error loading services: {error.message}
      </div>
    );
  }

  const services = limit
    ? data?.services?.slice(0, limit)
    : data?.services;

  if (!services || services.length === 0) {
    return (
      <div className="text-center text-secondary">
        No services available
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {services.filter(Boolean).map((service) => (
        <ServiceCard key={service!._id} service={service as Service} />
      ))}
    </div>
  );
}

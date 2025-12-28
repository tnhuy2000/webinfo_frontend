import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="p-6 border border-secondary/20 rounded-lg hover:shadow-lg transition">
      <h3 className="text-2xl font-bold mb-4 text-foreground">
        {service.title}
      </h3>
      <p className="text-secondary mb-4">{service.description}</p>
      {service.features && service.features.length > 0 && (
        <ul className="space-y-2">
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="text-sm text-secondary">
              ✓ {feature}
            </li>
          ))}
        </ul>
      )}
      {service.price && (
        <p className="mt-4 text-lg font-bold text-primary">{service.price}</p>
      )}
    </div>
  );
}

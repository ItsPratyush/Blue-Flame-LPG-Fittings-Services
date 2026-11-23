import { useState } from 'react';
import * as LucideIcons from 'lucide-react';

export default function ApplicationCard({ app }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const Icon = LucideIcons[app.icon] || LucideIcons.Boxes;

  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md shadow-navy/5 hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 transition-all duration-300 h-64 md:h-72">
      {/* Background Image */}
      {!imgLoaded && <div className="absolute inset-0 img-loading" />}
      <img
        src={app.image}
        alt={app.title}
        className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${
          imgLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        onLoad={() => setImgLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-navy/10 group-hover:from-navy/95 group-hover:via-navy/50 transition-all duration-300" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-5 md:p-6">
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-5 h-5 text-flame" />
        </div>
        <h3 className="text-base md:text-lg font-bold text-white leading-tight">
          {app.title}
        </h3>
        <p className="mt-1.5 text-sm text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
          {app.description}
        </p>
      </div>
    </div>
  );
}

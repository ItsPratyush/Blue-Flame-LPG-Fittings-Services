export default function SectionHeading({ title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center' : ''}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight tracking-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg md:text-xl max-w-3xl leading-relaxed ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-gray-300' : 'text-text-muted'}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-1 w-16 rounded-full ${center ? 'mx-auto' : ''} ${
          light ? 'bg-flame' : 'bg-gradient-to-r from-industrial to-flame'
        }`}
      />
    </div>
  );
}

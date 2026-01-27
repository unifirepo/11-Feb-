import Image from 'next/image';

type PlaceholderImageProps = {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
};

export default function PlaceholderImage({
  src = '/placeholders/hero-abstract.svg',
  alt = '',
  className = '',
  priority = false,
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 ${className}`.trim()}
      aria-hidden={alt === ''}
    >
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        priority={priority}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

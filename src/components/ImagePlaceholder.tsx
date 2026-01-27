type ImagePlaceholderProps = {
  label?: string;
  className?: string;
};

export default function ImagePlaceholder({ label = 'Image placeholder', className = '' }: ImagePlaceholderProps) {
  return (
    <div
      className={
        `w-full rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center text-sm text-gray-500 ${className}`.trim()
      }
    >
      {label}
    </div>
  );
}

import { useState, type ReactNode } from "react";
import { assetUrl } from "../../lib/assets";
export function ContentImage({
  src,
  alt,
  className = "",
  children,
}: {
  src: string | null;
  alt: string;
  className?: string;
  children: ReactNode;
}) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  return src && failedSource !== src ? (
    <img
      src={assetUrl(src)}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailedSource(src)}
    />
  ) : (
    <>{children}</>
  );
}

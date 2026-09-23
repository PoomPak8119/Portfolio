"use client";

import Image from "next/image";
import { useState } from "react";
import type { PortfolioImage } from "@/content/profile";
import { assetPath } from "@/lib/paths";

export function ResilientImage({
  image,
  priority,
}: {
  image: PortfolioImage;
  priority: boolean;
}) {
  const [failed, setFailed] = useState(false);
  if (!image.src || failed)
    return (
      <span className="image-placeholder">
        <span aria-hidden="true" className="placeholder-mark">
          ＋
        </span>
        <span>{image.placeholderLabel}</span>
      </span>
    );
  return (
    <Image
      src={assetPath(image.src)}
      alt={image.alt}
      fill
      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 800px"
      preload={priority}
      className="object-contain"
      onError={() => setFailed(true)}
    />
  );
}

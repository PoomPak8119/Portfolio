"use client";

import Image from "next/image";
import { useState } from "react";
import { assetPath } from "@/lib/paths";

export function InstitutionLogoImage({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <span className="institution-logo" aria-hidden="true">
      <Image
        src={assetPath(src)}
        alt=""
        fill
        sizes="(max-width: 767px) 48px, 56px"
        onError={() => setFailed(true)}
      />
    </span>
  );
}

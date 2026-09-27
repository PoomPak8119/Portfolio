import { existsSync } from "node:fs";
import { join } from "node:path";
import { InstitutionLogoImage } from "./institution-logo-image";

export function InstitutionLogo({ src }: { src: string }) {
  const stem = src.replace(/\.(png|jpe?g)$/i, "");
  const logo = ["png", "jpg", "jpeg"]
    .map((extension) => `${stem}.${extension}`)
    .find((path) => existsSync(join(process.cwd(), "public", path)));

  if (!logo) return null;

  return <InstitutionLogoImage src={logo} />;
}

import Image from "next/image";
import Link from "next/link";

type BrandLogoVariant = "horizontal-light" | "horizontal-dark" | "stacked" | "icon-only";

interface BrandLogoProps {
  href?: string;
  variant?: BrandLogoVariant;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  showText?: boolean;
}

const logoByVariant: Record<BrandLogoVariant, { src: string; width: number; height: number }> = {
  "horizontal-light": { src: "/aevomed-horizontal.svg", width: 170, height: 35 },
  "horizontal-dark": { src: "/aevomed-dark.svg", width: 170, height: 35 },
  stacked: { src: "/aevomed-stacked.svg", width: 100, height: 107 },
  "icon-only": { src: "/aevomed-icon.svg", width: 32, height: 32 },
};

export function BrandLogo({
  href = "/",
  variant = "horizontal-light",
  className = "",
  imageClassName = "",
  priority = false,
  showText = false,
}: BrandLogoProps) {
  const logo = logoByVariant[variant];

  const image = (
    <Image
      src={logo.src}
      alt="Aevomed"
      width={logo.width}
      height={logo.height}
      priority={priority}
      className={imageClassName}
    />
  );

  const content = showText && variant === "icon-only" ? (
    <div className="flex items-center gap-2.5">
      {image}
      <span className="font-bold tracking-wider text-zinc-900">AEVOMED</span>
    </div>
  ) : (
    image
  );

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link href={href} className={className} aria-label="Aevomed home">
      {content}
    </Link>
  );
}
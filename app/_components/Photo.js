import Image from "next/image";
import { PICTURES } from "../_libs/pictures";

// Real photo when one is registered, else a soft gradient placeholder.
export default function Photo({
  id,
  label,
  swatch = ["var(--color-tint)", "var(--color-accent)"],
  sizes = "(min-width:1024px) 33vw, 100vw",
  className = "",
  priority = false,
  imgClassName = "",
}) {
  const src = PICTURES[id];
  return (
    <div
      className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(155deg, ${swatch[0]} 0%, ${swatch[1]} 100%)`,
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={label || ""}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imgClassName}`}
        />
      ) : null}
    </div>
  );
}

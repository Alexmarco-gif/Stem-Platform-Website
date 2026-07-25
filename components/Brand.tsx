import Image from "next/image";
import Link from "next/link";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label="Stem-Cogent home">
      <span className="brand-mark">
        <Image src="/v4.png" alt="" width={42} height={42} priority />
      </span>
      {!compact && <span className="brand-name">Stem-Cogent</span>}
    </Link>
  );
}

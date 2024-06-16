import Image from "next/image";
import Link from "next/link";
import qcGenLogo from "../../../../public/qcgenlogo.png";
import "@/app/componentsstyles/herostyles/QCHeader.css";

export const QCHeader = () => {
  return (
    <div className="qc-header-container">
      <div className="qclogo-container">
        <Image
          className="qcgen-generated-qr-code-image"
          src={qcGenLogo}
          width={96}
          height={96}
          alt="QC Gen Header Logo"
          placeholder="blur"
        />
      </div>

      <div className="qcheader-menu-container">
        <nav>
          <Link href="/">Home</Link>
          <Link href="/">Source</Link>
          <Link href="https://ivanthedev.guru">ivanthedev</Link>
        </nav>
      </div>
    </div>
  );
};

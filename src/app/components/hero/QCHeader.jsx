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
          alt="QC Gen Header Logo"
          placeholder="blur"
        />
      </div>

      <div className="qcheader-menu-container">
        <nav className="qcheader-menu-navigation">
          <Link className="qc-source-link" href="https://github.com/chengivan2/qcgen">Source</Link>
          <Link className="qc-ivanthedev-link" href="https://ivanthedev.pro">ivanthedev</Link>
        </nav>
      </div>
    </div>
  );
};

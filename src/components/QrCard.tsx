import { useEffect, useState } from "react";
import QRCode from "qrcode";

export function QrCard({ size = 160, target }: { size?: number; target?: string }) {
  const [dataUrl, setDataUrl] = useState<string>("");

  useEffect(() => {
    const href = target ?? (typeof window !== "undefined" ? `${window.location.origin}/scan-to-book` : "https://www.zhomeservice.co.uk/scan-to-book");
    QRCode.toDataURL(href, {
      width: size * 2,
      margin: 1,
      color: { dark: "#0f172e", light: "#ffffff" },
    }).then(setDataUrl).catch(() => {});
  }, [size, target]);

  return (
    <div className="inline-flex flex-col items-center gap-3 rounded-2xl bg-white p-4 text-[var(--navy-deep)] shadow-[var(--shadow-card)]">
      {dataUrl ? (
        <img src={dataUrl} width={size} height={size} alt="Scan QR code to book Z Home Service" className="rounded-md" />
      ) : (
        <div style={{ width: size, height: size }} className="rounded-md bg-muted" />
      )}
      <span className="text-[10px] font-semibold tracking-[0.32em] uppercase">Scan to Book</span>
    </div>
  );
}
import { useState, type JSX } from "react";

// ── Links data ────────────────────────────────────────────
const FOOTER_LINKS = [
  { label: "Câu hỏi thường gặp", href: "https://help.netflix.com/support/412" },
  { label: "Trung tâm trợ giúp", href: "https://help.netflix.com" },
  { label: "Tài khoản", href: "/youraccount" },
  { label: "Trung tâm đa phương tiện", href: "https://media.netflix.com/" },
  { label: "Quan hệ với nhà đầu tư", href: "http://ir.netflix.com/" },
  { label: "Việc làm", href: "https://jobs.netflix.com/jobs" },
  { label: "Các cách xem", href: "/watch" },
  {
    label: "Điều khoản sử dụng",
    href: "https://help.netflix.com/legal/termsofuse",
  },
  { label: "Quyền riêng tư", href: "https://help.netflix.com/legal/privacy" },
  { label: "Tùy chọn cookie", href: "#" },
  {
    label: "Thông tin doanh nghiệp",
    href: "https://help.netflix.com/legal/corpinfo",
  },
  {
    label: "Liên hệ với chúng tôi",
    href: "https://help.netflix.com/contactus",
  },
  { label: "Kiểm tra tốc độ", href: "https://fast.com" },
  {
    label: "Thông báo pháp lý",
    href: "https://help.netflix.com/legal/notices",
  },
  {
    label: "Chỉ có trên Netflix",
    href: "https://www.netflix.com/vn/browse/genre/839338",
  },
];

const linkStyle: React.CSSProperties = {
  color: "#737373",
  fontSize: "0.85rem",
  textDecoration: "underline",
  cursor: "pointer",
  lineHeight: 1.5,
};

export default function Footer(): JSX.Element {
  const [lang, setLang] = useState("vi-VN");
  const [showRecaptcha, setShowRecaptcha] = useState(false);

  return (
    <footer className="w-full bg-black" style={{ padding: "3rem 6% 2rem" }}>
      {/* Contact link */}
      <p style={{ marginBottom: "2rem" }}>
        <a
          href="https://help.netflix.com/contactus"
          style={{ ...linkStyle, fontSize: "1rem" }}
        >
          Bạn có câu hỏi? Liên hệ với chúng tôi.
        </a>
      </p>

      {/* Links grid — 4 cols on lg, 3 on md, 2 on sm, 1 on xs */}
      <ul
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 2.5rem 0",
          gap: "0.75rem",
        }}
      >
        {FOOTER_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_self"
              style={linkStyle}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.textDecoration =
                  "underline";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#737373";
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Language selector */}
      <div style={{ marginBottom: "1.5rem" }}>
        <label
          htmlFor="footer-lang"
          style={{
            display: "block",
            color: "#737373",
            fontSize: "0.8rem",
            marginBottom: "4px",
          }}
        >
          Chọn ngôn ngữ
        </label>
        <div
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            border: "1px solid #737373",
            borderRadius: "4px",
            overflow: "hidden",
            backgroundColor: "transparent",
          }}
        >
          {/* Globe icon */}
          <span
            style={{
              pointerEvents: "none",
              position: "absolute",
              left: "10px",
              display: "flex",
              color: "#fff",
            }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.77 5.33 10.5 6 9.34 8.94l-.57 1.44L7.33 14h1.78l.73-1.97h3.58l.74 1.97H16l-3.43-8.67zm-.15 4.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11 11 0 0 1 0 10.43c.33.28.81.8 1.05 1.16 1.5-.91 2.85-2.36 3.88-4.02v5.1h1.49V7.52q.6.95 1.33 1.8l.57-1.43a12 12 0 0 1-1.34-1.9h2.09z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <select
            id="footer-lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            style={{
              appearance: "none",
              backgroundColor: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "0.9rem",
              padding: "6px 36px 6px 34px",
              cursor: "pointer",
              outline: "none",
            }}
          >
            <option value="vi-VN" lang="vi" style={{ backgroundColor: "#000" }}>
              Tiếng Việt
            </option>
            <option value="en-VN" lang="en" style={{ backgroundColor: "#000" }}>
              English
            </option>
          </select>

          {/* Caret icon */}
          <span
            style={{
              pointerEvents: "none",
              position: "absolute",
              right: "8px",
              display: "flex",
              color: "#fff",
            }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 16 16" width="16" height="16" fill="none">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.6 6.5c.15 0 .22.18.12.28l-3.48 3.48a.33.33 0 0 1-.48 0L4.28 6.78a.17.17 0 0 1 .12-.28z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Netflix Việt Nam */}
      <p
        style={{ color: "#737373", fontSize: "0.85rem", marginBottom: "1rem" }}
      >
        Netflix Việt Nam
      </p>

      {/* reCAPTCHA notice */}
      <div>
        <p style={{ color: "#737373", fontSize: "0.8rem", lineHeight: 1.6 }}>
          Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn không phải là
          robot.{" "}
          <button
            type="button"
            onClick={() => setShowRecaptcha((v) => !v)}
            style={{
              background: "none",
              border: "none",
              color: "#0071eb",
              fontSize: "0.8rem",
              cursor: "pointer",
              padding: 0,
              textDecoration: "underline",
            }}
          >
            Tìm hiểu thêm.
          </button>
        </p>

        {/* Expanded reCAPTCHA disclosure */}
        {showRecaptcha && (
          <p
            style={{
              color: "#737373",
              fontSize: "0.8rem",
              lineHeight: 1.6,
              marginTop: "0.5rem",
              maxWidth: "700px",
            }}
          >
            Thông tin do Google reCAPTCHA thu thập sẽ tuân theo{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#0071eb" }}
            >
              Chính sách Quyền riêng tư
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#0071eb" }}
            >
              Điều khoản dịch vụ
            </a>{" "}
            của Google, và được dùng để cung cấp, duy trì và cải thiện dịch vụ
            reCAPTCHA cũng như các mục đích bảo mật nói chung (thông tin này
            không được dùng để cá nhân hóa quảng cáo của Google).
          </p>
        )}
      </div>
    </footer>
  );
}

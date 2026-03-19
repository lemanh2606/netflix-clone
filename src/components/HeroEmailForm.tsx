import { useState, type JSX } from "react";

export default function HeroEmailForm(): JSX.Element {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  const isFloating = focused || email.length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Đăng ký: ${email}`);
  };

  return (
    <form
      aria-label="Đăng ký hoặc kích hoạt lại tư cách thành viên của bạn."
      onSubmit={handleSubmit}
      style={{ width: "100%", maxWidth: "600px" }}
    >
      {/* Subtitle */}
      <h3
        style={{
          color: "#fff",
          fontSize: "1rem",
          fontWeight: 400,
          textAlign: "center",
          marginBottom: "1rem",
          lineHeight: 1.5,
        }}
      >
        Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách
        thành viên của bạn.
      </h3>

      {/* ── Input + Button: 2 phần tử riêng, gap 2px ── */}
      <div
        style={{
          display: "flex",
          gap: "8px", // ← đúng 2px như Netflix gốc
          height: "60px",
        }}
      >
        {/* ── Floating label input ── */}
        <div
          style={{
            position: "relative",
            flex: 1,
            backgroundColor: "rgba(22,22,22,0.85)",
            border: `1px solid ${focused ? "#fff" : "#8c8c8c"}`,
            borderRadius: "4px", // ← bo 4 góc riêng
            transition: "border-color 0.15s",
          }}
        >
          {/* Floating label */}
          <label
            htmlFor="hero-email"
            style={{
              position: "absolute",
              left: "16px",
              top: isFloating ? "8px" : "50%",
              transform: isFloating ? "translateY(0)" : "translateY(-50%)",
              fontSize: isFloating ? "0.7rem" : "1rem",
              color: focused ? "#a0a0a0" : "#8c8c8c",
              pointerEvents: "none",
              transition: "all 0.15s ease",
              whiteSpace: "nowrap",
              userSelect: "none",
            }}
          >
            Địa chỉ email
          </label>

          <input
            id="hero-email"
            name="email"
            type="email"
            autoComplete="email"
            minLength={5}
            maxLength={50}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              paddingTop: isFloating ? "22px" : "0",
              paddingLeft: "16px",
              paddingRight: "16px",
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#fff",
              fontSize: "1rem",
              transition: "padding-top 0.15s ease",
              borderRadius: "4px",
            }}
          />

          {/* Bottom chrome line khi focus */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2px",
              backgroundColor: focused ? "#fff" : "transparent",
              borderRadius: "0 0 4px 4px",
              transition: "background-color 0.15s",
            }}
          />
        </div>

        {/* ── Submit button — bo 4 góc riêng ── */}
        <button
          type="submit"
          style={{
            flexShrink: 0,
            backgroundColor: "#E50914",
            color: "#fff",
            border: "none",
            borderRadius: "4px", // ← bo 4 góc riêng
            padding: "0 1.5rem",
            fontSize: "1.4rem",
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            whiteSpace: "nowrap",
            transition: "background-color 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#f6121d";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#E50914";
          }}
        >
          Bắt đầu
          <div
            aria-hidden="true"
            style={{ display: "flex", alignItems: "center" }}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m15.586 12-7.293 7.293 1.414 1.414 8-8a1 1 0 0 0 0-1.414l-8-8-1.414 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </form>
  );
}

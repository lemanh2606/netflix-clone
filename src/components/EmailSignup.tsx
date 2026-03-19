import { useState, type JSX } from "react";

export default function EmailSignup(): JSX.Element {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Đăng ký: ${email}`);
  };

  const hasValue = email.length > 0;

  return (
    <section className="w-full bg-black" style={{ padding: "3rem 1rem" }}>
      <div className="flex flex-col items-center text-center">
        {/* Subtitle */}
        <h3
          className="text-white mb-4"
          style={{ fontSize: "1.1rem", fontWeight: 400, maxWidth: "800px" }}
        >
          Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách
          thành viên của bạn.
        </h3>

        {/* Form */}
        <form
          aria-label="Đăng ký hoặc kích hoạt lại tư cách thành viên của bạn."
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "8px", // ✅ cách 8px
            width: "100%",
            maxWidth: "800px",
          }}
        >
          {/* Floating label input */}
          <div
            style={{
              position: "relative",
              flex: 1,
              border: `1px solid ${focused ? "#aaa" : "#555"}`,
              borderRadius: "4px", // ✅ bo 4 góc
              backgroundColor: "#000",
              transition: "border-color 0.15s",
            }}
          >
            {/* Floating label */}
            <label
              htmlFor="footer-email"
              style={{
                position: "absolute",
                left: "16px",
                top: focused || hasValue ? "8px" : "50%",
                transform:
                  focused || hasValue
                    ? "translateY(0) scale(0.85)"
                    : "translateY(-50%)",
                transformOrigin: "left",
                color: focused ? "#aaa" : "#8c8c8c",
                fontSize: "1rem",
                pointerEvents: "none",
                transition: "all 0.15s ease",
                whiteSpace: "nowrap",
              }}
            >
              Địa chỉ email
            </label>

            <input
              id="footer-email"
              type="email"
              autoComplete="email"
              minLength={5}
              maxLength={50}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              style={{
                width: "100%",
                height: "60px",
                paddingTop: "20px",
                paddingLeft: "16px",
                paddingRight: "16px",
                paddingBottom: "4px",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#fff",
                fontSize: "1rem",
                borderRadius: "4px", // ✅ bo 4 góc input
              }}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            style={{
              backgroundColor: "#E50914",
              color: "#fff",
              border: "none",
              borderRadius: "4px", // ✅ bo 4 góc
              padding: "0 1.5rem",
              fontSize: "1.3rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
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
            <span
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
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

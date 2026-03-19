import { useState, useRef, useEffect, type JSX } from "react";

// ── Data ──────────────────────────────────────────────────
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 0,
    question: "Netflix là gì?",
    answer:
      "Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại series, phim, anime, phim tài liệu đoạt giải thưởng và nhiều nội dung khác trên hàng nghìn thiết bị có kết nối Internet.\n\nBạn có thể xem bao nhiêu tùy thích, bất cứ lúc nào bạn muốn mà không gặp phải một quảng cáo nào – tất cả chỉ với một mức giá thấp hàng tháng. Luôn có những nội dung mới để bạn khám phá và những series, phim mới được bổ sung mỗi tuần!",
  },
  {
    id: 1,
    question: "Tôi phải trả bao nhiêu tiền để xem Netflix?",
    answer:
      "Xem Netflix trên điện thoại thông minh, máy tính bảng, TV thông minh, máy tính xách tay hoặc thiết bị phát trực tuyến, chỉ với một khoản phí cố định hàng tháng. Các gói dịch vụ với mức giá từ 74.000 ₫ đến 273.000 ₫/tháng.",
  },
  {
    id: 2,
    question: "Tôi có thể xem ở đâu?",
    answer:
      "Xem mọi lúc, mọi nơi. Đăng nhập bằng tài khoản Netflix của bạn để xem ngay trên trang web netflix.com từ máy tính cá nhân, hoặc trên bất kỳ thiết bị nào có kết nối Internet và có cài đặt ứng dụng Netflix, bao gồm TV thông minh, điện thoại thông minh, máy tính bảng, thiết bị phát đa phương tiện trực tuyến và máy chơi game.\n\nBạn cũng có thể tải xuống các chương trình yêu thích bằng ứng dụng trên iOS hoặc Android. Vào phần nội dung đã tải xuống để xem trong khi di chuyển và khi không có kết nối Internet. Mang Netflix theo bạn đến mọi nơi.",
  },
  {
    id: 3,
    question: "Làm thế nào để hủy?",
    answer:
      "Netflix rất linh hoạt. Bạn có thể dễ dàng hủy tài khoản trực tuyến chỉ trong hai cú nhấp chuột. Không mất phí hủy – bạn có thể bắt đầu hoặc ngừng tài khoản bất cứ lúc nào.",
  },
  {
    id: 4,
    question: "Tôi có thể xem gì trên Netflix?",
    answer:
      "Netflix có một thư viện phong phú gồm các phim truyện, phim tài liệu, series, anime, tác phẩm giành giải thưởng của Netflix và nhiều nội dung khác. Xem không giới hạn bất cứ lúc nào bạn muốn.",
  },
  {
    id: 5,
    question: "Netflix có phù hợp cho trẻ em không?",
    answer:
      "Trải nghiệm Netflix Trẻ em có sẵn trong gói dịch vụ của bạn, trao cho phụ huynh quyền kiểm soát trong khi các em có thể thưởng thức các bộ phim và chương trình phù hợp cho gia đình tại không gian riêng.\n\nHồ sơ Trẻ em đi kèm tính năng kiểm soát của cha mẹ (được bảo vệ bằng mã PIN), cho phép bạn giới hạn độ tuổi cho nội dung con mình được phép xem, cũng như chặn những phim hoặc chương trình mà bạn không muốn các em nhìn thấy.",
  },
];

// ── Plus Icon (36px — dùng đúng path từ Netflix HTML) ────
function PlusIcon({ expanded }: { expanded: boolean }): JSX.Element {
  return (
    <svg
      viewBox="0 0 36 36"
      width="36"
      height="36"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        flexShrink: 0,
        transition: "transform 0.3s ease",
        transform: expanded ? "rotate(45deg)" : "rotate(0deg)",
      }}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 17V3h2v14h14v2H19v14h-2V19H3v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// ── Accordion Item ────────────────────────────────────────
function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  // Đo chiều cao thực của content để animate mượt
  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [item.answer]);

  return (
    <li
      style={{
        backgroundColor: "#2d2d2d",
        marginBottom: "0.5rem",
        borderRadius: "0",
        listStyle: "none",
      }}
    >
      {/* Question button */}
      <h3 style={{ margin: 0 }}>
        <button
          aria-expanded={isOpen}
          aria-controls={`content--faq--${item.id}`}
          id={`button--faq--${item.id}`}
          onClick={onToggle}
          type="button"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "1.25rem 1.5rem",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#fff",
            fontSize: "1.2rem",
            fontWeight: 400,
            textAlign: "left",
            lineHeight: 1.4,
          }}
          // hover effect
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#3d3d3d";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "transparent";
          }}
        >
          <span>{item.question}</span>
          <PlusIcon expanded={isOpen} />
        </button>
      </h3>

      {/* Answer — animate height */}
      <div
        id={`content--faq--${item.id}`}
        aria-labelledby={`button--faq--${item.id}`}
        role="region"
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? `${height}px` : "0px",
          transition: "max-height 0.35s ease",
        }}
      >
        <div ref={contentRef}>
          {/* Separator */}
          <div
            style={{
              height: "1px",
              backgroundColor: "#555",
              margin: "0 1.5rem",
            }}
          />
          <div
            style={{
              padding: "1.5rem",
              color: "#fff",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              whiteSpace: "pre-line", // ← render \n\n thành xuống dòng
            }}
          >
            {item.answer}
          </div>
        </div>
      </div>
    </li>
  );
}

// ── Main ──────────────────────────────────────────────────
export default function FAQ(): JSX.Element {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-black px-6 md:px-14 py-10">
      {/* Title */}
      <h2 className="text-white font-bold mb-4" style={{ fontSize: "1.4rem" }}>
        Câu hỏi thường gặp
      </h2>

      {/* Accordion list */}
      <ul
        style={{
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        {FAQ_ITEMS.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}
      </ul>
    </section>
  );
}

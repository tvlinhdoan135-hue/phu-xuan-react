interface CategorySidebarProps {
  danhMuc: string[];
  danhMucHienTai: string;
  onChange: (danhMuc: string) => void;
}

const categoryIcons: Record<string, string> = {
  "Tất cả": "⌂",
  "Món nước": "🍜",
  "Cơm": "🍚",
  "Bánh Huế": "🥮",
  "Món nướng": "🍢",
  "Tráng miệng": "🍧",
};

function CategorySidebar({
  danhMuc,
  danhMucHienTai,
  onChange,
}: CategorySidebarProps) {
  return (
    <aside className="category-sidebar">

      <div className="sidebar-title">
        <span>THỰC ĐƠN</span>
        <small>MENU</small>
      </div>

      <div className="category-list">

        {danhMuc.map((item) => (
          <button
            key={item}
            type="button"
            className={
              item === danhMucHienTai
                ? "category-item active"
                : "category-item"
            }
            onClick={() => onChange(item)}
          >
            <span className="category-icon">
              {categoryIcons[item] ?? "🍽️"}
            </span>

            <span className="category-name">
              {item === "Tất cả"
                ? "Tất cả món ăn"
                : item}
            </span>

            <span className="category-arrow">
              ›
            </span>
          </button>
        ))}

      </div>

      <div className="sidebar-decoration">
        <span>“Huế”</span>
        <small>một thoáng để nhớ</small>
      </div>

    </aside>
  );
}

export default CategorySidebar;
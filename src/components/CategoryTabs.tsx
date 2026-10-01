interface CategoryTabsProps {
    danhMuc: string[];
    danhMucHienTai: string;
    onChange: (danhMuc: string) => void;
}

function CategoryTabs({
    danhMuc,
    danhMucHienTai,
    onChange
}: CategoryTabsProps) {
    return (
        <div className="categories">
            {danhMuc.map((item) => (
                <button
                    key={item}
                    className={
                        item === danhMucHienTai
                            ? "active"
                            : ""
                    }
                    onClick={() =>
                        onChange(item)
                    }
                >
                    {item}
                </button>
            ))}
        </div>
    );
}

export default CategoryTabs;
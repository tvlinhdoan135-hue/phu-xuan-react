interface SortTabsProps {
  sapXep: string;
  onChange: (value: string) => void;
}

function SortTabs({
  sapXep,
  onChange,
}: SortTabsProps) {
  const tabs = [
    {
      id: "pho-bien",
      label: "🔥 Phổ biến",
    },
    {
      id: "moi-nhat",
      label: "☆ Mới nhất",
    },
    {
      id: "gia-thap",
      label: "↑ Giá thấp → cao",
    },
    {
      id: "gia-cao",
      label: "↓ Giá cao → thấp",
    },
  ];

  return (
    <div className="sort-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={
            sapXep === tab.id
              ? "sort-tab active"
              : "sort-tab"
          }
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default SortTabs;
import type { MonAn } from "../data/monAn";

interface MonAnCardProps {
    mon: MonAn;
    onAdd: (mon: MonAn) => void;
}

function MonAnCard({
    mon,
    onAdd
}: MonAnCardProps) {
    return (
        <div className="mon-card">
            <div className="mon-icon">
                🍜
            </div>

            <div className="mon-content">
                <span className="category">
                    {mon.danhMuc}
                </span>

                <h3>{mon.ten}</h3>

                <p>{mon.moTa}</p>

                <div className="mon-bottom">
                    <strong>
                        {mon.gia.toLocaleString(
                            "vi-VN"
                        )}
                        đ
                    </strong>

                    <button
                        onClick={() =>
                            onAdd(mon)
                        }
                    >
                        + Thêm món
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MonAnCard;
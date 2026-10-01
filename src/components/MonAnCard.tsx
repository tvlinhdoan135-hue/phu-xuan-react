import { memo } from "react";
import type { MonAn } from "../data/monAn";

interface MonAnCardProps {
  mon: MonAn;
  onAdd: (mon: MonAn) => void;
}

function MonAnCard({
  mon,
  onAdd,
}: MonAnCardProps) {
  return (
    <article className="food-card">

      <div className="food-image">

        <img
          src={mon.hinhAnh}
          alt={mon.ten}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <span className="food-tag">
          {mon.danhMuc === "Bánh Huế"
            ? "Đặc sản"
            : "Món truyền thống"}
        </span>

        <button
          type="button"
          className="favorite-button"
          title="Yêu thích"
        >
          ♡
        </button>

      </div>

      <div className="food-info">

        <h3>{mon.ten}</h3>

        <p>
          {mon.moTa}
        </p>

        <div className="food-price">
          {mon.gia.toLocaleString("vi-VN")}đ
        </div>

        <div className="food-actions">

          <button
            type="button"
            className="add-cart-button"
            onClick={() => onAdd(mon)}
          >
            🛒
            <span>Thêm vào giỏ</span>
          </button>

          <button
            type="button"
            className="small-heart"
            title="Yêu thích"
          >
            ♡
          </button>

        </div>

      </div>

    </article>
  );
}

export default memo(MonAnCard);
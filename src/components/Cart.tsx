import type { MonAnTrongGio } from "../data/monAn";

interface CartProps {
  gioHang: MonAnTrongGio[];

  tongTien: number;

  onIncrease: (id: number) => void;

  onDecrease: (id: number) => void;

  onRemove: (id: number) => void;

  onClose: () => void;

  onCheckout: () => void;
}

function Cart({
  gioHang,
  tongTien,
  onIncrease,
  onDecrease,
  onRemove,
  onClose,
  onCheckout,
}: CartProps) {
  return (
    <aside
      className="cart-drawer"
      onClick={(e) =>
        e.stopPropagation()
      }
    >

      {/* =================================================
          HEADER
          ================================================= */}

      <div className="cart-header">

        <div className="cart-header-title">

          <span className="cart-header-icon">
            🛒
          </span>

          <div>

            <h2>
              Giỏ hàng
            </h2>

            <p>
              {gioHang.reduce(
                (tong, mon) =>
                  tong + mon.soLuong,
                0
              )}{" "}
              món
            </p>

          </div>

        </div>

        <button
          type="button"
          className="cart-close"
          onClick={onClose}
          aria-label="Đóng giỏ hàng"
        >
          ✕
        </button>

      </div>

      {/* =================================================
          BODY
          ================================================= */}

      <div className="cart-body">

        {gioHang.length === 0 ? (

          /* =================================================
             EMPTY CART
             ================================================= */

          <div className="cart-empty">

            <div className="cart-empty-icon">
              🛒
            </div>

            <h3>
              Giỏ hàng đang trống
            </h3>

            <p>
              Hãy chọn những món ăn
              Huế mà bạn yêu thích.
            </p>

            <button
              type="button"
              className="cart-continue"
              onClick={onClose}
            >
              Tiếp tục chọn món
            </button>

          </div>

        ) : (

          <>

            {/* =================================================
                ITEMS
                ================================================= */}

            <div className="cart-items">

              {gioHang.map((mon) => (

                <div
                  className="cart-item"
                  key={mon.id}
                >

                  {/* IMAGE */}

                  <div className="cart-item-image">

                    <img
                      src={mon.hinhAnh}
                      alt={mon.ten}
                    />

                  </div>

                  {/* INFO */}

                  <div className="cart-item-info">

                    <div className="cart-item-top">

                      <div>

                        <h3>
                          {mon.ten}
                        </h3>

                        <p>
                          {mon.gia.toLocaleString(
                            "vi-VN"
                          )}
                          đ / món
                        </p>

                      </div>

                      <button
                        type="button"
                        className="cart-item-remove"
                        onClick={() =>
                          onRemove(mon.id)
                        }
                        aria-label={`Xóa ${mon.ten}`}
                      >
                        ✕
                      </button>

                    </div>

                    {/* QUANTITY */}

                    <div className="cart-item-bottom">

                      <div className="quantity">

                        <button
                          type="button"
                          onClick={() =>
                            onDecrease(mon.id)
                          }
                          aria-label="Giảm số lượng"
                        >
                          −
                        </button>

                        <span>
                          {mon.soLuong}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            onIncrease(mon.id)
                          }
                          aria-label="Tăng số lượng"
                        >
                          +
                        </button>

                      </div>

                      <strong>
                        {(
                          mon.gia *
                          mon.soLuong
                        ).toLocaleString(
                          "vi-VN"
                        )}
                        đ
                      </strong>

                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* =================================================
                SUMMARY
                ================================================= */}

            <div className="cart-summary-box">

              <div className="cart-summary-row">

                <span>
                  Tạm tính
                </span>

                <strong>
                  {tongTien.toLocaleString(
                    "vi-VN"
                  )}
                  đ
                </strong>

              </div>

              <div className="cart-summary-row">

                <span>
                  Phí giao hàng
                </span>

                <strong>
                  Miễn phí
                </strong>

              </div>

              <div className="cart-summary-total">

                <span>
                  Tổng cộng
                </span>

                <strong>
                  {tongTien.toLocaleString(
                    "vi-VN"
                  )}
                  đ
                </strong>

              </div>

              <button
                type="button"
                className="cart-checkout"
                onClick={onCheckout}
              >
                Tiến hành đặt món

                <span>
                  →
                </span>

              </button>

            </div>

          </>

        )}

      </div>

    </aside>
  );
}

export default Cart;
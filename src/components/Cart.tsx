import type { MonAnTrongGio } from "../data/monAn";

interface CartProps {
    gioHang: MonAnTrongGio[];
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onRemove: (id: number) => void;
}

function Cart({
    gioHang,
    onIncrease,
    onDecrease,
    onRemove
}: CartProps) {
    const tongTien = gioHang.reduce(
        (tong, mon) =>
            tong + mon.gia * mon.soLuong,
        0
    );

    return (
        <aside className="cart">
            <h2>🛒 Giỏ hàng</h2>

            {gioHang.length === 0 ? (
                <p className="empty">
                    Chưa có món nào.
                </p>
            ) : (
                <>
                    {gioHang.map((mon) => (
                        <div
                            className="cart-item"
                            key={mon.id}
                        >
                            <strong>
                                {mon.ten}
                            </strong>

                            <p>
                                {mon.gia.toLocaleString(
                                    "vi-VN"
                                )}
                                đ
                            </p>

                            <div className="quantity">
                                <button
                                    onClick={() =>
                                        onDecrease(
                                            mon.id
                                        )
                                    }
                                >
                                    −
                                </button>

                                <span>
                                    {mon.soLuong}
                                </span>

                                <button
                                    onClick={() =>
                                        onIncrease(
                                            mon.id
                                        )
                                    }
                                >
                                    +
                                </button>
                            </div>

                            <button
                                className="remove"
                                onClick={() =>
                                    onRemove(mon.id)
                                }
                            >
                                Xóa
                            </button>
                        </div>
                    ))}

                    <div className="total">
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
                </>
            )}
        </aside>
    );
}

export default Cart;
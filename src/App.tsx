import {
    useMemo,
    useState
} from "react";

import Header from "./components/Header";
import MonAnList from "./components/MonAnList";
import CategoryTabs from "./components/CategoryTabs";
import Cart from "./components/Cart";
import OrderForm from "./components/OrderForm";

import {
    MON_AN,
    DANH_MUC,
    type MonAnTrongGio
} from "./data/monAn";

import "./App.css";

function App() {
    // =========================
    // STATE TÌM KIẾM
    // =========================

    const [tuKhoa, setTuKhoa] =
        useState("");

    // =========================
    // STATE DANH MỤC
    // =========================

    const [
        danhMucHienTai,
        setDanhMucHienTai
    ] = useState("Tất cả");

    // =========================
    // STATE GIỎ HÀNG
    // =========================

    const [gioHang, setGioHang] =
        useState<MonAnTrongGio[]>(
            []
        );

    // =========================
    // LỌC MÓN ĂN
    // =========================

    const monAnLoc = useMemo(() => {
        return MON_AN.filter(
            (mon) => {
                const dungDanhMuc =
                    danhMucHienTai ===
                        "Tất cả" ||
                    mon.danhMuc ===
                        danhMucHienTai;

                const dungTuKhoa =
                    mon.ten
                        .toLowerCase()
                        .includes(
                            tuKhoa
                                .toLowerCase()
                        );

                return (
                    dungDanhMuc &&
                    dungTuKhoa
                );
            }
        );
    }, [
        tuKhoa,
        danhMucHienTai
    ]);

    // =========================
    // THÊM MÓN
    // =========================

    function themVaoGio(
        mon: {
            id: number;
            ten: string;
            danhMuc: string;
            gia: number;
            moTa: string;
        }
    ) {
        setGioHang((cu) => {
            const daCo =
                cu.find(
                    (item) =>
                        item.id ===
                        mon.id
                );

            if (daCo) {
                return cu.map(
                    (item) =>
                        item.id ===
                        mon.id
                            ? {
                                  ...item,
                                  soLuong:
                                      item.soLuong +
                                      1
                              }
                            : item
                );
            }

            return [
                ...cu,
                {
                    ...mon,
                    soLuong: 1
                }
            ];
        });
    }

    // =========================
    // TĂNG SỐ LƯỢNG
    // =========================

    function tangSoLuong(
        id: number
    ) {
        setGioHang((cu) =>
            cu.map((mon) =>
                mon.id === id
                    ? {
                          ...mon,
                          soLuong:
                              mon.soLuong +
                              1
                      }
                    : mon
            )
        );
    }

    // =========================
    // GIẢM SỐ LƯỢNG
    // =========================

    function giamSoLuong(
        id: number
    ) {
        setGioHang((cu) =>
            cu
                .map((mon) =>
                    mon.id === id
                        ? {
                              ...mon,
                              soLuong:
                                  mon.soLuong -
                                  1
                          }
                        : mon
                )
                .filter(
                    (mon) =>
                        mon.soLuong >
                        0
                )
        );
    }

    // =========================
    // XÓA MÓN
    // =========================

    function xoaMon(
        id: number
    ) {
        setGioHang((cu) =>
            cu.filter(
                (mon) =>
                    mon.id !== id
            )
        );
    }

    // =========================
    // TỔNG SỐ LƯỢNG
    // =========================

    const tongSoLuong =
        gioHang.reduce(
            (tong, mon) =>
                tong + mon.soLuong,
            0
        );

    // =========================
    // TỔNG TIỀN
    // =========================

    const tongTien =
        gioHang.reduce(
            (tong, mon) =>
                tong +
                mon.gia *
                    mon.soLuong,
            0
        );

    return (
        <div className="app">
            <Header
                soLuong={
                    tongSoLuong
                }
            />

            <main className="container">
                <section className="hero">
                    <h2>
                        Hương vị Huế xưa
                    </h2>

                    <p>
                        Thưởng thức những
                        món ăn truyền thống
                        đậm đà hương vị cố đô.
                    </p>
                </section>

                <section className="search-section">
                    <input
                        value={tuKhoa}
                        onChange={(e) =>
                            setTuKhoa(
                                e.target
                                    .value
                            )
                        }
                        placeholder="🔎 Tìm món ăn..."
                    />
                </section>

                <CategoryTabs
                    danhMuc={
                        DANH_MUC
                    }
                    danhMucHienTai={
                        danhMucHienTai
                    }
                    onChange={
                        setDanhMucHienTai
                    }
                />

                <div className="content">
                    <section className="menu">
                        <h2>
                            Thực đơn
                        </h2>

                        {monAnLoc.length ===
                        0 ? (
                            <p>
                                Không tìm thấy
                                món ăn.
                            </p>
                        ) : (
                            <MonAnList
                                monAn={
                                    monAnLoc
                                }
                                onAdd={
                                    themVaoGio
                                }
                            />
                        )}
                    </section>

                    <Cart
                        gioHang={
                            gioHang
                        }
                        onIncrease={
                            tangSoLuong
                        }
                        onDecrease={
                            giamSoLuong
                        }
                        onRemove={
                            xoaMon
                        }
                    />
                </div>

                <OrderForm
                    gioHang={
                        gioHang
                    }
                    tongTien={
                        tongTien
                    }
                />
            </main>

            <footer>
                © 2026 Quán Huế Xưa
            </footer>
        </div>
    );
}

export default App;
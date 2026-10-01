import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Header from "./components/Header";
import MonAnList from "./components/MonAnList";
import CategorySidebar from "./components/CategorySidebar";
import SortTabs from "./components/SortTabs";
import Cart from "./components/Cart";
import OrderForm from "./components/OrderForm";

import {
  DANH_MUC,
  MON_AN,
} from "./data/monAn";

import { useDebounce } from "./hooks/useDebounce";
import { useGioHang } from "./hooks/useGioHang";

import "./App.css";

function App() {
  /* =====================================================
     SEARCH
     ===================================================== */

  const [tuKhoa, setTuKhoa] = useState("");

  const [danhMucHienTai, setDanhMucHienTai] =
    useState("Tất cả");

  /* =====================================================
     SORT
     ===================================================== */

  const [sapXep, setSapXep] =
    useState("pho-bien");

  /* =====================================================
     CART OPEN / CLOSE
     ===================================================== */

  const [hienThiGioHang, setHienThiGioHang] =
    useState(false);

  const oTimKiemRef =
    useRef<HTMLInputElement>(null);

  /* =====================================================
     CART HOOK
     ===================================================== */

  const {
    gioHang,
    themVaoGio,
    tangSoLuong,
    giamSoLuong,
    xoaMon,
    tongSoLuong,
    tongTien,
  } = useGioHang();

  /* =====================================================
     DEBOUNCE SEARCH
     ===================================================== */

  const tuKhoaDebounce =
    useDebounce(tuKhoa, 300);

  /* =====================================================
     FILTER + SORT
     ===================================================== */

  const monAnLoc = useMemo(() => {
    const keyword =
      tuKhoaDebounce
        .trim()
        .toLowerCase();

    let result = MON_AN.filter((mon) => {
      const dungDanhMuc =
        danhMucHienTai === "Tất cả" ||
        mon.danhMuc === danhMucHienTai;

      const dungTuKhoa =
        mon.ten
          .toLowerCase()
          .includes(keyword);

      return (
        dungDanhMuc &&
        dungTuKhoa
      );
    });

    /* Giá thấp → cao */
    if (sapXep === "gia-thap") {
      result = [...result].sort(
        (a, b) => a.gia - b.gia
      );
    }

    /* Giá cao → thấp */
    if (sapXep === "gia-cao") {
      result = [...result].sort(
        (a, b) => b.gia - a.gia
      );
    }

    /* Mới nhất */
    if (sapXep === "moi-nhat") {
      result = [...result].reverse();
    }

    return result;
  }, [
    tuKhoaDebounce,
    danhMucHienTai,
    sapXep,
  ]);

  /* =====================================================
     SEARCH FOCUS
     ===================================================== */

  function focusTimKiem() {
    oTimKiemRef.current?.focus();
  }

  /* =====================================================
     ADD TO CART
     ===================================================== */

  function xuLyThemMon(mon: (typeof MON_AN)[number]) {
    themVaoGio(mon);

    /*
     * Sau khi thêm món:
     * - mở giỏ hàng
     * - người dùng nhìn thấy món vừa thêm
     */
    setHienThiGioHang(true);
  }

  /* =====================================================
     CLOSE CART
     ===================================================== */

  function dongGioHang() {
    setHienThiGioHang(false);
  }

  /* =====================================================
     ESC ĐỂ ĐÓNG GIỎ HÀNG
     ===================================================== */

  useEffect(() => {
    function xuLyPhim(e: KeyboardEvent) {
      if (
        e.key === "Escape" &&
        hienThiGioHang
      ) {
        setHienThiGioHang(false);
      }
    }

    window.addEventListener(
      "keydown",
      xuLyPhim
    );

    return () => {
      window.removeEventListener(
        "keydown",
        xuLyPhim
      );
    };
  }, [hienThiGioHang]);

  /* =====================================================
     KHÓA SCROLL TRANG KHI GIỎ HÀNG ĐANG MỞ
     ===================================================== */

  useEffect(() => {
    if (hienThiGioHang) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [hienThiGioHang]);

  /* =====================================================
     ĐẾN FORM ĐẶT MÓN
     ===================================================== */

  function denFormDatMon() {
    setHienThiGioHang(false);

    setTimeout(() => {
      document
        .querySelector(".order-container")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 150);
  }

  /* =====================================================
     RENDER
     ===================================================== */

  return (
    <div className="restaurant-app">

      {/* =================================================
          HEADER
          ================================================= */}

      <Header
        soLuong={tongSoLuong}
      />

      {/* =================================================
          HERO
          ================================================= */}

      <section
        id="trang-chu"
        className="hero-section"
      >
        <div className="hero-overlay">

          <div className="hero-content">

            <span className="hero-small-title">
              ẨM THỰC HUẾ
            </span>

            <h2>
              Tinh hoa
              <br />
              từ cốđô
            </h2>

            <div className="hero-line" />

            <p>
              Món ngon xứ Huế –
              Hương vị truyền thống,
              đậm đà khó quên!
            </p>

          </div>

          {/* SEARCH */}

          <div className="hero-search">

            <span>
              ⌕
            </span>

            <input
              ref={oTimKiemRef}
              value={tuKhoa}
              onChange={(e) =>
                setTuKhoa(e.target.value)
              }
              placeholder="Tìm món ăn (VD: Bún bò, Cơm hến...)"
            />

            <button
              type="button"
              onClick={focusTimKiem}
            >
              Tìm kiếm →
            </button>

          </div>

          <div className="hero-food-decoration">
            🍜
          </div>

        </div>
      </section>

      {/* =================================================
          MENU
          ================================================= */}

      <main
        id="thuc-don"
        className="menu-section"
      >

        <div className="menu-container">

          {/* CATEGORY SIDEBAR */}

          <CategorySidebar
            danhMuc={DANH_MUC}
            danhMucHienTai={
              danhMucHienTai
            }
            onChange={
              setDanhMucHienTai
            }
          />

          {/* MENU CONTENT */}

          <section className="menu-content">

            <div className="menu-toolbar">

              <SortTabs
                sapXep={sapXep}
                onChange={setSapXep}
              />

              <span className="food-count">
                Hiển thị{" "}
                <strong>
                  {monAnLoc.length}
                </strong>
                {" / "}
                {MON_AN.length} món
              </span>

            </div>

            {/* EMPTY */}

            {monAnLoc.length === 0 ? (

              <div className="empty-menu">

                <div>
                  🍜
                </div>

                <h3>
                  Không tìm thấy món ăn
                </h3>

                <p>
                  Hãy thử từ khóa hoặc
                  danh mục khác.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setTuKhoa("");
                    setDanhMucHienTai("Tất cả");
                  }}
                >
                  Xem tất cả món
                </button>

              </div>

            ) : (

              <MonAnList
                monAn={monAnLoc}
                onAdd={xuLyThemMon}
              />

            )}

          </section>

        </div>

        {/* =================================================
            CART OVERLAY
            ================================================= */}

        {hienThiGioHang && (
          <div
            className="cart-overlay"
            onClick={dongGioHang}
            aria-hidden="true"
          />
        )}

        {/* =================================================
            CART DRAWER
            ================================================= */}

        {hienThiGioHang && (
          <div className="floating-cart">
            <Cart
              gioHang={gioHang}
              tongTien={tongTien}
              onIncrease={tangSoLuong}
              onDecrease={giamSoLuong}
              onRemove={xoaMon}
              onClose={dongGioHang}
              onCheckout={denFormDatMon}
            />
          </div>
        )}

        {/* =================================================
            ORDER FORM
            ================================================= */}

        <div
          className="order-container"
          id="dat-mon"
        >
          <OrderForm
            gioHang={gioHang}
            tongTien={tongTien}
          />
        </div>

      </main>

      {/* =================================================
          FLOATING CART BUTTON
          ================================================= */}

      <button
        type="button"
        className="floating-cart-button"
        onClick={() =>
          setHienThiGioHang(true)
        }
        aria-label="Mở giỏ hàng"
      >

        <span className="floating-cart-icon">
          🛒
        </span>

        <span className="floating-cart-text">

          <small>
            Giỏ hàng
          </small>

          <strong>
            {tongTien.toLocaleString("vi-VN")}đ
          </strong>

        </span>

        {tongSoLuong > 0 && (
          <span className="floating-cart-count">
            {tongSoLuong}
          </span>
        )}

      </button>

      {/* =================================================
          FLOATING ACTIONS
          ================================================= */}

      <div className="floating-actions">

        <button
          type="button"
          title="Lên đầu trang"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ↑
        </button>

        <button
          type="button"
          title="Tư vấn"
        >
          💬
        </button>

      </div>

      {/* =================================================
          FOOTER
          ================================================= */}

      <footer
        id="lien-he"
        className="site-footer"
      >

        <div className="footer-inner">

          <div>

            <h3>
              Quán Huế Xưa
            </h3>

            <p>
              Hương vị cố đô -
              Đậm đà ký ức.
            </p>

          </div>

          <div>

            <strong>
              Liên hệ
            </strong>

            <p>
              📍 Thành phố Huế
            </p>

            <p>
              ☎ 0900 123 456
            </p>

          </div>

          <div>

            <strong>
              Giờ mở cửa
            </strong>

            <p>
              07:00 - 22:00
            </p>

          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Quán Huế Xưa
        </div>

      </footer>

    </div>
  );
}

export default App;
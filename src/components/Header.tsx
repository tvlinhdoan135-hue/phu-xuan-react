interface HeaderProps {
  soLuong: number;
}

function Header({ soLuong }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-inner">

        <div className="brand">
          <div className="brand-logo">
            🍜
          </div>

          <div className="brand-text">
            <h1>Quán Huế Xưa</h1>
            <span>Hương vị cố đô • Đậm đà ký ức</span>
          </div>
        </div>

        <nav className="main-nav">
          <a href="#trang-chu" className="active">
            Trang chủ
          </a>

          <a href="#thuc-don">
            Thực đơn
          </a>

          <a href="#ve-chung-toi">
            Về chúng tôi
          </a>

          <a href="#lien-he">
            Liên hệ
          </a>
        </nav>

        <div className="header-actions">

          <button
            type="button"
            className="header-icon"
            title="Tìm kiếm"
          >
            🔍
          </button>

          <button
            type="button"
            className="header-icon cart-icon"
            title="Giỏ hàng"
          >
            🛒

            {soLuong > 0 && (
              <span className="cart-badge">
                {soLuong}
              </span>
            )}
          </button>

          <button
            type="button"
            className="login-button"
          >
            👤
            <span>Đăng nhập</span>
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;
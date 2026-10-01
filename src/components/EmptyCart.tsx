function EmptyCart() {
  function quayLaiMenu() {
    document
      .getElementById("thuc-don")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="empty-cart-page">
      <div className="empty-cart-decoration decoration-top" />
      <div className="empty-cart-decoration decoration-bottom" />

      <div className="empty-cart-content">
        <div className="empty-cart-image">
          <div className="cart-circle">
            <div className="shopping-cart">
              <div className="cart-handle" />
              <div className="cart-body">
                <div className="cart-line" />
                <div className="cart-line" />
                <div className="cart-line" />
              </div>

              <div className="cart-wheel wheel-left" />
              <div className="cart-wheel wheel-right" />

              <div className="cart-x">
                ×
              </div>
            </div>

            <span className="decoration-dot dot-1" />
            <span className="decoration-dot dot-2" />
            <span className="decoration-dot dot-3" />

            <span className="decoration-line line-1" />
            <span className="decoration-line line-2" />
          </div>
        </div>

        <h1>Giỏ hàng</h1>

        <div className="empty-cart-count">
          🛒 <strong>0 món</strong>
        </div>

        <div className="empty-cart-divider">
          <span />
          🛒
          <span />
        </div>

        <h2>Giỏ hàng đang trống</h2>

        <p>
          Hãy chọn những món ăn Huế mà bạn yêu thích.
        </p>

        <button
          type="button"
          className="continue-menu-button"
          onClick={quayLaiMenu}
        >
          <span className="button-icon">🍽</span>
          <span>Tiếp tục chọn món</span>
          <span className="button-arrow">→</span>
        </button>
      </div>
    </section>
  );
}

export default EmptyCart;
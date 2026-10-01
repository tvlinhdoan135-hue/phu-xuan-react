interface HeaderProps {
    soLuong: number;
}

function Header({ soLuong }: HeaderProps) {
    return (
        <header className="header">
            <div>
                <h1>Quán Huế Xưa</h1>
                <p>Ẩm thực truyền thống xứ Huế</p>
            </div>

            <div className="cart-summary">
                🛒 Giỏ hàng: {soLuong}
            </div>
        </header>
    );
}

export default Header;
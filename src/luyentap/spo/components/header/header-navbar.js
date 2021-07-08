import React from 'react'
import './style.css'

const HeaderNavbar = () => {
    return (
        <>
            <nav className="header__navbar hide-on-mobile-tablet">
                <ul className="header__navbar-list">
                    <li className="header__navbar-item header__navbar-item--has-qr header__navbar-item--separate">
                        Vào cửa hàng ứng dụng Shoppe
                        <div className="header-qr">
                            <img src="./img/img_header/qr.jpg" alt="QR code" className="header-qr__img"></img>
                            <div className="header__qr-apps">
                                <a href="" className="header__qr-link">
                                    <img src="./img/img_header/ggplay.png" alt="Google Play" className="header-qr-download-img"></img>
                                </a>
                                <a href="" className="header__qr-link">
                                    <img src="./img/img_header/appstore.png" alt="App Store" className="header-qr-download-img"></img>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="header__navbar-item">
                        <span className="header__navbar-title--no-pointer">Kết nối</span>
                        <a href="" className="header__navbar-icon-link">
                            <i className="header__navbar-icon fab fa-facebook"></i>
                        </a>
                        <a href="" className="header__navbar-icon-link">
                            <i className="header__navbar-icon fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>

                <ul className="header__navbar-list">
                    <li className="header__navbar-item header__navbar-item-has-notify">
                        <a href="" className="header__navbar-item-link"><i className="header__navbar-icon far fa-bell"></i>
                            Thông báo
                        </a>
                        <div className="header__notify">
                            <header className="header__notify-header">
                                <h3>Thông báo mới nhận</h3>
                            </header>
                            <ul className="header__notify-list">
                                <li className="header__notify-item header__notify-item--viewed">
                                    <a href="" className="header__notify-link">
                                        <span><img src="./img/anh/4.jpg" alt="" className="header__notify-img"></img></span>
                                        <div className="header__notify-info">
                                            <span className="header__notify-name">Xác thực chính hãng nguồn gốc các sản phẩm Ohui</span>
                                            <span className="header__notify-description">HiddenTag là giải pháp xác thực hàng chính hãng bằng công nghệ tiên tiến nhất hiện nay</span>
                                        </div>
                                    </a>
                                </li>

                                <li className="header__notify-item header__notify-item--viewed">
                                    <a href="" className="header__notify-link">
                                        <span><img src="./img/anh/2.jpg" alt="" className="header__notify-img"></img></span>
                                        <div className="header__notify-info">
                                            <span className="header__notify-name">Sale sốc bộ dưỡng Ohui The First Tái tạo trẻ hoá da SALE OFF 70%</span>
                                            <span className="header__notify-description">Giá chỉ còn 375.000 (giá gốc : 1.200.000 vnđ)</span>
                                        </div>
                                    </a>
                                </li>

                                <li className="header__notify-item header__notify-item--viewed">
                                    <a href="" className="header__notify-link">
                                        <span><img src="./img/anh/3.jpg" alt="" className="header__notify-img"></img></span>
                                        <div className="header__notify-info">
                                            <span className="header__notify-name">Ohui chính thức ra mắt dòng son lì mới The First GENITURE LIPSTICK</span>
                                            <span className="header__notify-description">Một lần môi căng mềm quyến rũ với sắc màu nổi bật luôn là điều mà các quý cô ao ước</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <footer className="header__notify-footer">
                                <a href="" className="header__notify-footer-btn">Xem tất cả</a>
                            </footer>
                        </div>
                    </li>
                    <li className="header__navbar-item">
                        <a href="" className="header__navbar-item-link"><i className="header__navbar-icon far fa-question-circle"></i>Trợ giúp</a>
                    </li>
                    <li className="header__navbar-item header__navbar-item--strong header__navbar-item--separate header__navbar-item-register">
                        {/* <button className="header__navbar-item-register"></button> */}
                        Đăng ký
                    </li>
                    <li className="header__navbar-item header__navbar-item--strong header__navbar-item-login">
                        {/* <button className="header__navbar-item-login">Đăng nhập</button> */}
                        Đăng nhập
                    </li>
                    <li className="header__navbar-item header__navbar-user">
                        <img src="./img/anh/6.jpg" alt="" className="header__navbar-user-img"></img>
                        <span className="header__navbar-user-name">Đăng Phong</span>
                        <ul className="header__navbar-user-menu">
                            <li className="header__navbar-user-menu-item">
                                <a href="../shopee2/index.html">Shop của tôi</a>
                            </li>
                            <li className="header__navbar-user-menu-item">
                                <a href="">Tài khoản của tôi</a>
                            </li>
                            <li className="header__navbar-user-menu-item">
                                <a href="">Địa chỉ của tôi</a>
                            </li>
                            <li className="header__navbar-user-menu-item">
                                <a href="">Đơn mua</a>
                            </li>
                            <li className="header__navbar-user-menu-item header__navbar-user-menu-item--separate">
                                <a href="">Đăng xuất</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default HeaderNavbar;
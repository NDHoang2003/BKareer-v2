function Navbar() {
  return (
    <header>
      <nav className="nav">
        <a className="appName">BKareer</a>
        <ul>
          <li><a href="#">Trang chủ</a></li>          
          <li><a href="#">Trắc nghiệm MBTI</a></li>
          <li><a href="#">Nhóm ngành yêu thích</a></li>
          <li><a href="#">Tin tức</a></li>
          <button className="white-outline-btn" type="button" onClick={{}}>Đăng nhập</button>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

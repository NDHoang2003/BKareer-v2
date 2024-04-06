function Navbar() {
  return (
    <header>
      <nav className="nav">
        <a className="appName" href="#">BKareer</a>
        <ul>
          <li className="font-18"><a href="#">Trang chủ</a></li>          
          <li className="font-18"><a href="#">Trắc nghiệm MBTI</a></li>
          <li className="font-18"><a href="#">Nhóm ngành yêu thích</a></li>
          <li className="font-18"><a href="#">Tin tức</a></li>
          <button className="white-outline-btn font-18" type="button" onClick={{}}>Đăng nhập</button>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

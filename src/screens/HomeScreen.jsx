import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import image1 from "../assets/images/graduationOrCareerChoice.jpg"
import image2 from "../assets/images/ikigai.jpg"

function HomeScreen() {
  return (
    <>
      <body className="body">
        {/* Row 1 */}
        <div className="card flex-row flex-space-between">
          <img src={image1} className="img-home-1"/>
          <div>
            <div className="card-title">Bài kiểm tra định hướng ngành nghề</div>
            <div className="card-content">Fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem sed euismod placerat. Vivamus porttitor et magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper lorem ipsum.</div>
            <Link className="secondary-outline-btn" to="/majorTest">Kiểm tra ngay</Link>
          </div>
        </div>

        {/* Divide Cols*/}
        <div className="card-margin-top flex-row">
          {/* Left Col */}
          <div className="card-left card-margin-right flex-col">
            {/* Ikigai Card */}
            <div className="card flex-row flex-space-between flex-items-center">
              <div className="width-45">
                <div className="card-title">Ikigai</div>
                <div className="card-content">Fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem sed euismod placerat. Vivamus porttitor et magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper lorem ipsum.</div>
                <Link className="secondary-outline-btn" to="/ikigai">Tìm hiểu thêm</Link>
              </div>
              <img src={image2} className="img-home-2"/>
            </div>

            {/* 4 Cards */}
            <div className="card-margin-top flex-row flex-space-between flex-items-center">
              <div className="card card-margin-right flex-1">
                <div className="card-title">Trắc nghiệm MBTI</div>
                <div className="card-content">Fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem sed euismod placerat. Vivamus porttitor et magna enim, ac accumsan tortor cursus at.</div>
              </div>

              <div className="card flex-1">
                <div className="card-title">Nhóm ngành gợi ý</div>
                <div className="card-content">Fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem sed euismod placerat. Vivamus porttitor et magna enim, ac accumsan tortor cursus at.</div>
              </div>
            </div>

            <div className="card-margin-top flex-row flex-space-between flex-items-center">
              <div className="card card-margin-right flex-1">
                <div className="card-title">Trắc nghiệm IQ</div>
                <div className="card-content">Fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem sed euismod placerat. Vivamus porttitor et magna enim, ac accumsan tortor cursus at.</div>
              </div>

              <div className="card flex-1">
                <div className="card-title">Block title 4</div>
                <div className="card-content">Fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem sed euismod placerat. Vivamus porttitor et magna enim, ac accumsan tortor cursus at.</div>
              </div>
            </div>
          </div>

          {/* Right Col */}
          <div className="card-right flex-col">
            <div className="card">
              <div className="card-title">Block title 2</div>
              <div className="card-content">Fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem sed euismod placerat. Vivamus porttitor et magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper lorem ipsum.</div>
              <button className="secondary-outline-btn" type="button" onClick={{}}>Tìm hiểu thêm</button>
            </div>

            <div className="card card-margin-top">
              <div className="card-title">Block title 3</div>
              <div className="card-content">Fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem sed euismod placerat. Vivamus porttitor et magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper lorem ipsum.</div>
              <button className="secondary-outline-btn" type="button" onClick={{}}>Tìm hiểu thêm</button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default HomeScreen;

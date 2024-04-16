import { Link } from "react-router-dom";
import Dropdown from 'react-dropdown';
import React, { useState } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';


function MajorResult() {
  const mbtiOptions = [
    "ESTP - Người thực thi", "ESFP - Người nghệ sĩ", "ENFP - Người truyền cảm hứng", "ENTP - Người nhìn xa",
    "ESTJ - Người giám hộ", "ESFJ - Người quan tâm", "ENFJ - Người cho đi", "ENTJ - Người lãnh đạo",
    "ISTJ - Người trách nhiệm", "ISFJ - Người nuôi dưỡng", "INFJ - Nhà tư vấn", "INTJ - Nhà khoa học",
    "ISTP - Nhà kỹ thuật", "ISFP - Người nghệ sĩ", "INFP - Người lý tưởng hóa", "INTP - Nhà triết học",
  ];

  // const mbtiDefault = "Chọn nhóm tính cách MBTI của bạn";

  const careerOptions = [
    "Nông nghiệp, Thực phẩm và Tài nguyên thiên nhiên",
    "Kiến trúc và xây dựng",
    "Nghệ thuật, Công nghệ A/V và Truyền thông",
    "Kinh doanh, quản lí và quản trị",
    "Giáo dục và đào tạo",
    "Tài chính",
    "Chính phủ và hành chính công",
    "Y tế",
    "Du lịch",
    "Dịch vụ con người",
    "Công nghệ",
    "Luật, An toàn công cộng, Sửa chữa và bảo mật",
    "Kỹ thuật",
    "Thương mại",
    "Khoa học",
    "Phân phối và hậu cần",
  ];

  // const careerDefault = "Chọn nhóm ngành yêu thích của bạn";

  const calcOptions = [
    {
      id: "1",
      title: "Weighted Sum"
    },
    {
      id: "2",
      title: "VIKOR"
    }
  ];

  const onSelected = (answerId) => {
    var radioInput = document.getElementById(answerId);
    radioInput.checked = true;
    
  };

  const [mbtiValue, setMbtiValue] = useState('');
  const [careerValue, setCareerValue] = useState('');
  const [calcMethod, setCalcMethod] = useState('');
  // const [tableData, setTableData] = useState([]);
  const [result, setResult] = useState([]);
  const [recom, setRecom] = useState([]);

  const handleMbtiChange = (selectedOption) => {
    // Lấy 4 chữ cái đầu tiên từ giá trị option
    const mbti = selectedOption.value.substring(0, 4);
    setMbtiValue(mbti);
  };

  const handleCareerChange = (selectedOption) => {
    setCareerValue(selectedOption.value);
  };

  const resultColumns = [
    { name: 'Jobs', selector: 'Jobs', sortable: true },
    { name: 'Salary_AVG_VND', selector: 'Salary_AVG_VND', sortable: true },
    { name: 'Number (thousands)', selector: 'Number(thoundsand)', sortable: true },
    { name: 'MBTI Score', selector: 'mbti_score', sortable: true },
    { name: 'Major Score', selector: 'major_score', sortable: true },
    { name: 'Salary Score', selector: 's_salary', sortable: true },
    { name: 'Job Score', selector: 's_job', sortable: true },
    { name: 'Total Score', selector: 's_total', sortable: true },
    { name: 'Relative Total', selector: 'r_total', sortable: true },
    { name: 'Q Total', selector: 'q_total', sortable: true }
  ];

  const recomColumns = [
    { name: 'Jobs', selector: 'Jobs', sortable: true },
    { name: 'Description', selector: 'Description', sortable: true },
    { name: 'Major', selector: 'Major', sortable: true },
  ];

  const handleCalcMethodChange = (method) => {
    setCalcMethod(method);
  };

  const handleViewResult = () => {
    if (calcMethod === 'Weighted Sum') {
      axios.get(`https://ikigaihcmutv2-332ubqslia-as.a.run.app/cal_weight_sum?MBTI=${mbtiValue}&CC=${careerValue}`)
        .then((response) => {
          const data = response.data;
          setResult(data.result);
          setRecom(data.recom);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else if (calcMethod === 'VIKOR') {
      axios.get(`https://ikigaihcmutv2-332ubqslia-as.a.run.app/cal_vikor?MBTI=${mbtiValue}&CC=${careerValue}`)
        .then((response) => {
          const data = response.data;
          setResult(data.result);
          setRecom(data.recom);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };
  

  return (
    <body className="body screen-block">
      <div className="screen-title">Kết quả MBTI và Nhóm ngành yêu thích</div>
      <div className="flex-row flex-items-start">
        <div className="font-18 semi-bold-txt left-res-block">Nhóm tính cách MBTI:</div>
        <div className="flex-row flex-space-between right-res-block">
          <Dropdown className="dropdown dropdown-block" options={mbtiOptions} value={mbtiValue} onChange={handleMbtiChange} placeholder="Chọn nhóm tính tách MBTI" />
          <Link className="primary-outline-btn font-18 margin-left-20 flex-self-start" to="/mbti">Kiểm tra ngay</Link>
        </div>
        
      </div>

      <div className="margin-top-1rem flex-row flex-items-start">
        <div className="font-18 semi-bold-txt left-res-block">Nhóm ngành yêu thích:</div>
        <div className="flex-row flex-space-between right-res-block">
          <Dropdown className="dropdown dropdown-block" options={careerOptions} value={careerValue} onChange={handleCareerChange} placeholder="Chọn nhóm ngành phù hợp" />
          <Link className="primary-outline-btn font-18 margin-left-20 flex-self-start" to="/career">Kiểm tra ngay</Link>
        </div>
        
      </div>

      <div className="margin-top-1rem flex-row flex-items-center">
        <div className="font-18 semi-bold-txt left-res-block">Chọn cách tính:</div>
        <div className="right-res-block">
          <input
            type="radio"
            name="calcMethod"
            id={calcOptions[0].id}
            className="input"
            onClick={() => {
              handleCalcMethodChange(calcOptions[0].title);
              onSelected(calcOptions[0].id);
            }}
          />
          <label htmlFor="Weighted Sum" className="font-18">{calcOptions[0].title}</label>

          <input
            type="radio"
            name="calcMethod"
            id={calcOptions[1].id}
            className="input margin-left-20"
            onClick={() => {
              handleCalcMethodChange(calcOptions[1].title);
              onSelected(calcOptions[1].id);
            }}
          />
          <label htmlFor="VIKOR" className="font-18">{calcOptions[1].title}</label>

        </div>
      </div>

      <div className="margin-top-2rem">
        <button className="primary-btn font-18 align-center" onClick={handleViewResult}>Gửi kết quả</button>

        {result.length > 0 && (
          <>
            <h1>Result Table</h1>
            <DataTable
              title="Result Table"
              columns={resultColumns}
              data={result}
              pagination
            />
          </>
        )}

        {recom.length > 0 && (
          <>
            <h1>Recommendation Table</h1>
            <DataTable
              title="Recommendation Table"
              columns={recomColumns}
              data={recom}
              pagination
            />
          </>
        )}
      </div>

      <div className="res-block"></div>
    </body>
  );
}

export default MajorResult;

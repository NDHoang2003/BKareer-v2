function CareerClusterDetail() {
  return (
    <body className="body screen-block">
      <div className="screen-title">Trắc nghiệm khám phá năng lực nghề nghiệp</div>
      
      <div className="detail-txt font-20 margin-top-2rem">
        Career Clusters Interest Survey là một công cụ giúp học sinh và người lao động khám phá sở thích nghề nghiệp và kết nối chúng với các lĩnh vực cụ thể. Bộ công cụ này dựa trên 16 Career Clusters, đại diện cho các nhóm nghề nghiệp có kỹ năng và kiến thức chung.
      </div>

      {/* Bảng hiển thị các Career Clusters */}
      <div className="career-clusters-table margin-top-2rem">
        <div className="row">
          <div className="cluster-card">Nông nghiệp, Thực phẩm & Tài nguyên</div>
          <div className="cluster-card">Kiến trúc & Xây dựng</div>
          <div className="cluster-card">Nghệ thuật, Công nghệ A/V & Truyền thông</div>
          <div className="cluster-card">Kinh doanh, Quản lý & Quản trị</div>
        </div>
        <div className="row">
          <div className="cluster-card">Giáo dục & Đào tạo</div>
          <div className="cluster-card">Tài chính</div>
          <div className="cluster-card">Chính phủ & Hành chính công</div>
          <div className="cluster-card">Y tế</div>
        </div>
        <div className="row">
          <div className="cluster-card">Khách sạn – Nhà hàng – Du lịch</div>
          <div className="cluster-card">Dịch vụ con người</div>
          <div className="cluster-card">Công nghệ thông tin</div>
          <div className="cluster-card">Luật, An toàn công cộng & Sửa chữa</div>
        </div>
        <div className="row">
          <div className="cluster-card">Sản xuất</div>
          <div className="cluster-card">Marketing</div>
          <div className="cluster-card">STEM (Khoa học, Công nghệ, Kỹ thuật & Toán học)</div>
          <div className="cluster-card">Phân phối & Hậu cần</div>
        </div>
      </div>

      <div className="detail-txt font-20 margin-top-2rem">
        Người dùng sẽ trả lời một loạt câu hỏi để xác định Career Clusters phù hợp dựa trên sở thích cá nhân và xu hướng nghề nghiệp.
      </div>
    </body>
  );
}

export default CareerClusterDetail;

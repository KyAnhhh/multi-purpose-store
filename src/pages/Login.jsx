import React from "react";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "#e9f2ff" }}>
      <div className="card shadow p-4" style={{ minWidth: 350, borderRadius: 16 }}>
        <h3 className="text-center mb-4 text-primary fw-bold">Đăng nhập</h3>
        <form>
          <div className="mb-3">
            <label className="form-label text-primary">Email</label>
            <input type="email" className="form-control rounded-pill" placeholder="Nhập email" required />
          </div>
          <div className="mb-3">
            <label className="form-label text-primary">Mật khẩu</label>
            <input type="password" className="form-control rounded-pill" placeholder="Nhập mật khẩu" required />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-pill fw-bold">
            Đăng nhập
          </button>
        </form>
        <div className="text-center mt-3">
          <a href="/register" className="text-primary text-decoration-none">Chưa có tài khoản? Đăng ký</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
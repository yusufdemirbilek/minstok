import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const ChangePassword = () => {
  const [username, setUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (newPassword === confirmPassword) {
      // Burada parola değiştirme isteğini sunucuya gönderebilirsiniz
      // Örneğin:
      // changePassword(oldPassword, newPassword);
      setMessage("Parola başarıyla değiştirildi.");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      setMessage("Yeni parolalar eşleşmiyor. Lütfen kontrol edin.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center mb-4">
            <h2>Parola Değiştir</h2>
          </div>
          {message && <p>{message}</p>}
          <form onSubmit={handlePasswordChange}>
            <div className="form-group">
              <label>Kullanıcı Adı</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Eski Parola</label>
              <input
                type="password"
                className="form-control"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Yeni Parola</label>
              <input
                type="password"
                className="form-control"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Yeni Parolayı Onayla</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-center mb-4">
              <button type="submit" className="btn btn-primary">
                Değiştir
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;

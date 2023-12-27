import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function StokArama() {
  const [selectedMarka, setSelectedMarka] = useState("");
  const [selectedDepo, setSelectedDepo] = useState("");
  const [filteredStoklar, setFilteredStoklar] = useState([]);

  const handleMarkaChange = (event) => {
    const selectedMarkaValue = event.target.value;
    setSelectedMarka(selectedMarkaValue);
    // Stokları getirme işlemini burada yapabilirsiniz
  };

  const handleDepoChange = (event) => {
    const selectedDepoValue = event.target.value;
    setSelectedDepo(selectedDepoValue);
    // Stokları getirme işlemini burada yapabilirsiniz
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
          <h2>Stok Ara</h2>
        </div>
      <div className="row">
        <div className="col-sm-6 mb-3">
          <label htmlFor="ex4" className="form-label">
            Marka
          </label>
          <select
            className="form-select"
            id="ex4"
            value={selectedMarka}
            onChange={handleMarkaChange}
          >
            <option defaultValue>Seçiniz...</option>
            <option value="1">Marka 1</option>
            <option value="2">Marka 2</option>
            <option value="3">Marka 3</option>
            {/* İsteğe bağlı olarak diğer markaları ekleyebilirsiniz */}
          </select>
        </div>
        <div className="col-sm-6 mb-3">
          <label htmlFor="ex5" className="form-label">
            Depo
          </label>
          <select
            className="form-select"
            id="ex5"
            value={selectedDepo}
            onChange={handleDepoChange}
          >
            <option defaultValue>Seçiniz...</option>
            <option value="1">Depo 1</option>
            <option value="2">Depo 2</option>
            <option value="3">Depo 3</option>
            {/* İsteğe bağlı olarak diğer depoları ekleyebilirsiniz */}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <h3>Stoklar</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün Adı</th>
              <th>Fiyat</th>
              {/* Diğer tablo başlıkları */}
            </tr>
          </thead>
          <tbody>
            {filteredStoklar.map((stok, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{stok.urunAdi}</td>
                <td>{stok.fiyat}</td>
                {/* Diğer stok özellikleri */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StokArama;

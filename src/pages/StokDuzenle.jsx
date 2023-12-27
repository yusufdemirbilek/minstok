import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/StokDuzenle.css"; // Özel CSS dosyası
import { useState } from "react";
import Modal from "react-modal";

function StokDuzenle() {
  const [stokNumarasi, setStokNumarasi] = useState("");
  const [stokAdeti, setStokAdeti] = useState("");
  const [gelisFiyati, setGelisFiyati] = useState("");
  const [selectedMarka, setSelectedMarka] = useState("");
  const [selectedDepo, setSelectedDepo] = useState("");
  const [tableRows, setTableRows] = useState([]);
  const [markaModalIsOpen, setMarkaModalIsOpen] = useState(false);
  const [depoModalIsOpen, setDepoModalIsOpen] = useState(false);
  const [newMarkaAdi, setNewMarkaAdi] = useState("");
  const [newDepoAdi, setNewDepoAdi] = useState("");

  const handleCreate = () => {
    const newRow = {
      stokNumarasi: stokNumarasi,
      stokAdeti: stokAdeti,
      marka: selectedMarka,
      gelisFiyati: gelisFiyati,
      depo: selectedDepo,
      tarih: new Date().toLocaleDateString(),
    };

    setTableRows([...tableRows, newRow]);
  };
  const openMarkaModal = () => {
    setMarkaModalIsOpen(true);
  };

  const closeMarkaModal = () => {
    setMarkaModalIsOpen(false);
  };

  const openDepoModal = () => {
    setDepoModalIsOpen(true);
  };

  const closeDepoModal = () => {
    setDepoModalIsOpen(false);
  };

  const handleAddMarka = () => {
    // Yeni marka ekleme işlemi burada yapılabilir
    console.log("Yeni marka eklendi:", newMarkaAdi);
    setNewMarkaAdi(""); // Modal kapatıldığında input'u sıfırla
    closeMarkaModal(); // Modalı kapat
  };

  const handleAddDepo = () => {
    // Yeni depo ekleme işlemi burada yapılabilir
    console.log("Yeni depo eklendi:", newDepoAdi);
    setNewDepoAdi(""); // Modal kapatıldığında input'u sıfırla
    closeDepoModal(); // Modalı kapat
  };

  return (
    <div className="container d-flex justify-content-center align-items-start vh-100">
      <div>
        <div className="text-center mb-4">
          <h2>Stok Düzenle/Ekle</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-6 mb-3">
            <label htmlFor="ex1" className="form-label">
              Stok Numarası
            </label>
            <input
              className="form-control"
              id="ex1"
              type="text"
              value={stokNumarasi}
              onChange={(e) => setStokNumarasi(e.target.value)}
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="ex2" className="form-label">
              Stok Adeti
            </label>
            <input
              className="form-control"
              id="ex2"
              type="text"
              value={stokAdeti}
              onChange={(e) => setStokAdeti(e.target.value)}
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="ex3" className="form-label">
              Geliş Fiyatı
            </label>
            <input
              className="form-control"
              id="ex3"
              type="text"
              value={gelisFiyati}
              onChange={(e) => setGelisFiyati(e.target.value)}
            />
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="ex4" className="form-label">
              Marka
            </label>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}> 
            <select
              className="form-select"
              id="ex4"
              value={selectedMarka}
              onChange={(e) => setSelectedMarka(e.target.value)}
            >
              <option defaultValue>Seçiniz...</option>
              <option value="1">Marka 1</option>
              <option value="2">Marka 2</option>
              <option value="3">Marka 3</option>
            </select>
            <button className="btn btn-link btn-sm" onClick={openMarkaModal}>
              +
            </button>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="ex5" className="form-label">
              Depo
            </label>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}> 
            <select
              className="form-select"
              id="ex5"
              value={selectedDepo}
              onChange={(e) => setSelectedDepo(e.target.value)}
            >
              <option defaultValue>Seçiniz...</option>
              <option value="1">Depo 1</option>
              <option value="2">Depo 2</option>
              <option value="3">Depo 3</option>
            </select>
            <button className="btn btn-link btn-sm" onClick={openDepoModal}>
              +
            </button>
            </div>
          </div>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Stok Numarası</th>
              <th scope="col">Stok Adeti</th>
              <th scope="col">Marka</th>
              <th scope="col">Geliş Fiyatı</th>
              <th scope="col">Depo</th>
              <th scope="col">Tarih</th>
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.stokNumarasi}</td>
                <td>{row.stokAdeti}</td>
                <td>{row.marka}</td>
                <td>{row.gelisFiyati}</td>
                <td>{row.depo}</td>
                <td>{row.tarih}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" onClick={handleCreate}>
            Oluştur
          </button>
        </div>
        {/* Marka Modalı */}
        <Modal
          isOpen={markaModalIsOpen}
          onRequestClose={closeMarkaModal}
          contentLabel="Marka Modalı"
          className="custom-modal-style"
        >
          <style>
            {`
      .custom-modal-style {
        width: 300px; /* Modal genişliği */
        height: 200px; /* Modal yüksekliği */
        background-color: #f5f5f5; /* Modal arka plan rengi */
        padding: 20px; /* İçerik kenar boşluğu */
        border-radius: 10px;
        position: fixed;
  top: 35%;
  left: 40%;
   /* Modal köşe yuvarlama */
        /* Diğer istenen stillemeler */
      }
      .custom-modal-style input[type="text"] {
        width: calc(100% - 40px); /* Input genişliği */
        margin-bottom: 10px; /* Inputlar arası boşluk */
        padding: 8px; /* Input içerik içi boşluk */
        border-radius: 5px; /* Input köşe yuvarlama */
        border: 1px solid #ccc; /* Input kenarlık */
      }
      .custom-modal-style button {
        padding: 8px 15px; /* Buton içerik içi boşluk */
        margin-right: 10px; /* Butonlar arası boşluk */
        border: none; /* Buton kenarlık */
        border-radius: 5px; /* Buton köşe yuvarlama */
        background-color: #007bff; /* Buton arka plan rengi */
        color: #fff; /* Buton metin rengi */
        cursor: pointer; /* Buton imleç türü */
      }
      .custom-modal-style button:last-child {
        margin-right: 0; /* Son butonun sağ boşluğu */
      }
    `}
          </style>
          <h5>Yeni Marka Ekle</h5>
          {/* Marka ekleme formu */}
          <input
            className="form-control"
            type="text"
            value={newMarkaAdi}
            onChange={(e) => setNewMarkaAdi(e.target.value)}
            placeholder="Yeni Marka Adı"
          />
          <button
            style={{ margin: "15px" }}
            className="btn btn-primary"
            onClick={handleAddMarka}
          >
            Marka Ekle
          </button>
          <button className="btn btn-primary" onClick={closeMarkaModal}>
            Kapat
          </button>
        </Modal>

        {/* Depo Modalı */}
        <Modal
          isOpen={depoModalIsOpen}
          onRequestClose={closeDepoModal}
          contentLabel="Depo Modalı"
          className="custom-modal-style"
        >
          <style>
            {`
      .custom-modal-style {
        width: 300px; /* Modal genişliği */
        height: 200px; /* Modal yüksekliği */
        background-color: #f5f5f5; /* Modal arka plan rengi */
        padding: 20px; /* İçerik kenar boşluğu */
        border-radius: 10px;
        position: fixed;
  top: 35%;
  left: 40%;
   /* Modal köşe yuvarlama */
        /* Diğer istenen stillemeler */
      }
      .custom-modal-style input[type="text"] {
        width: calc(100% - 40px); /* Input genişliği */
        margin-bottom: 10px; /* Inputlar arası boşluk */
        padding: 8px; /* Input içerik içi boşluk */
        border-radius: 5px; /* Input köşe yuvarlama */
        border: 1px solid #ccc; /* Input kenarlık */
      }
      .custom-modal-style button {
        padding: 8px 15px; /* Buton içerik içi boşluk */
        margin-right: 10px; /* Butonlar arası boşluk */
        border: none; /* Buton kenarlık */
        border-radius: 5px; /* Buton köşe yuvarlama */
        background-color: #007bff; /* Buton arka plan rengi */
        color: #fff; /* Buton metin rengi */
        cursor: pointer; /* Buton imleç türü */
      }
      .custom-modal-style button:last-child {
        margin-right: 0; /* Son butonun sağ boşluğu */
      }
    `}
          </style>
          <h5>Yeni Depo Ekle</h5>
          {/* Depo ekleme formu */}
          <input
            className="form-control"
            type="text"
            value={newDepoAdi}
            onChange={(e) => setNewDepoAdi(e.target.value)}
            placeholder="Yeni Depo Adı"
          />
          <button
            style={{ margin: "15px" }}
            className="btn btn-primary"
            onClick={handleAddDepo}
          >
            Depo Ekle
          </button>
          <button className="btn btn-primary" onClick={closeDepoModal}>
            Kapat
          </button>
        </Modal>
      </div>
    </div>
  );
}

export default StokDuzenle;

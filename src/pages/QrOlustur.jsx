import React, { useState } from "react";
import QRCode from "qrcode.react";

function QrOlustur() {
  const [selectedMarka, setSelectedMarka] = useState("");
  const [selectedDepo, setSelectedDepo] = useState("");
  const [qrText, setQRText] = useState("");

  const handleMarkaChange = (event) => {
    const selectedMarkaValue = event.target.value;
    setSelectedMarka(selectedMarkaValue);
  };

  const handleDepoChange = (event) => {
    const selectedDepoValue = event.target.value;
    setSelectedDepo(selectedDepoValue);
  };

  const handleQRGenerate = () => {
    const text = `Marka: ${selectedMarka}, Depo: ${selectedDepo}`;
    setQRText(text);
    console.log("qrtext",text);
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
          <h2>QR Kod Oluştur</h2>
        </div>
      <div className="row">
        <div className="col-sm-6 mb-3">
          <label htmlFor="marka" className="form-label">
            Marka
          </label>
          <select
            className="form-select"
            id="marka"
            value={selectedMarka}
            onChange={handleMarkaChange}
          >
            <option defaultValue>Seçiniz...</option>
            <option value="Marka 1">Marka 1</option>
            <option value="Marka 2">Marka 2</option>
            <option value="Marka 3">Marka 3</option>
          </select>
        </div>
        <div className="col-sm-6 mb-3">
          <label htmlFor="depo" className="form-label">
            Depo
          </label>
          <select
            className="form-select"
            id="depo"
            value={selectedDepo}
            onChange={handleDepoChange}
          >
            <option defaultValue>Seçiniz...</option>
            <option value="Depo 1">Depo 1</option>
            <option value="Depo 2">Depo 2</option>
            <option value="Depo 3">Depo 3</option>
          </select>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleQRGenerate}>
        QR Kodu Oluştur
      </button>
      {qrText && (
        <div className="mt-4">
          <h3>QR Kod</h3>
          <QRCode value={qrText} />
        </div>
      )}
    </div>
  );
}

export default QrOlustur;

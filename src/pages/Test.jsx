import React, { useState } from 'react';
import axios from 'axios';

const Test = ({ onMintComplete }) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  };

  const handleMintNFT = async () => {
    const issuerSecret = 'SDBWDEU6LZY4WNEF6WAORXEJ7Z6L3IKBGLSKWWJGA2VKOVXOII54EY5E';
    const receiverSecret = 'SBEAY5MVLNCQQZY33ENRBJPEE2HIVU7I3YLHZ5STZQADKAL7GOECA6V5';
    const receiverPublicKey = 'GCKMH4PIORG24WIEXYUGALFFQZ7CZRKCALBZOLDTCDD5MBZ4AIQTQSL3';
    const nftName = 'SampleNFT';
    const nftMetadata = 'Sample Metadata';

    if (!file) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3000/uploadFile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const filePath = response.data.filePath;

      const nftResponse = await axios.post('http://localhost:3000/createNFT', {
        issuerSecret,
        receiverSecret,
        receiverPublicKey,
        nftName,
        nftMetadata,
        filePath
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('NFT minted successfully:', nftResponse.data);
      onMintComplete();
    } catch (error) {
      console.error('Error minting NFT:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <input 
        type="file" 
        onChange={handleFileChange} 
        style={{ 
          display: 'block', 
          margin: '20px auto', 
          padding: '10px', 
          border: '1px solid #ccc', 
          borderRadius: '4px' 
        }} 
      />
      {previewUrl && (
        <img 
          src={previewUrl} 
          alt="Preview" 
          style={{ 
            display: 'block', 
            margin: '20px auto', 
            maxHeight: '200px', 
            borderRadius: '4px' 
          }} 
        />
      )}
      <button 
        onClick={handleMintNFT}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#4CAF50', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer', 
          fontSize: '16px' 
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
      >
        MINT NFT
      </button>
    </div>
  );
};

export default Test;

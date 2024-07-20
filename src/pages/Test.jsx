import React, { useState } from 'react';
import axios from 'axios';

const Test = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleMintNFT = async () => {
    // Sample data
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
    } catch (error) {
      console.error('Error minting NFT:', error);
    }
  };

  const handleGetNFT = async () => {
    try {
      const response = await axios.get("https://tokentoolsbackend.diamcircle.com/get-nfts/GCKMH4PIORG24WIEXYUGALFFQZ7CZRKCALBZOLDTCDD5MBZ4AIQTQSL3");
        console.log('NFTs:', response);
      } catch (error) {
        console.error('Error getting NFTs:', error);
      }
    };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleMintNFT}>MINT NFT</button>
      <button onClick={handleGetNFT}>GET NFT</button>
    </div>
  );
};

export default Test;

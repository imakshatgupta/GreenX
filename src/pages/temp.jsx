// import React from 'react';
// import * as DiamSdk from 'diamante-sdk-js';

// const Test = () => {
//   const handleSendTransaction = () => {
    // const server = new DiamSdk.Horizon.Server("https://diamtestnet.diamcircle.io");
//     const sourceKeys = DiamSdk.Keypair.fromSecret(
//       "SDIWH24FMNXB2RJTVOFLPVYJKJYHGGOTYDJYNU5DPJH7KF7URZ7XHTBH"
//     );

//     let transaction;

//     server
//       .loadAccount(sourceKeys.publicKey())
//       .then(function (sourceAccount) {
//         transaction = new DiamSdk.TransactionBuilder(sourceAccount, {
//           fee: DiamSdk.BASE_FEE,
//           networkPassphrase: "Diamante Testnet",
//         })
//           .addOperation(
//             DiamSdk.Operation.manageData({
//               name: "MyDataEntry", 
//               value: "Hello!",
//             })
//           )
//           .setTimeout(0)
//           .build();
//         transaction.sign(sourceKeys);
//         return server.submitTransaction(transaction);
//       })
//       .then(function (result) {
//         console.log("Success! Results:", result);
//       })
//       .catch(function (error) {
//         console.error("Something went wrong!", error);
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <h1 className="text-2xl font-bold mb-4">Diamante SDK Send Transaction</h1>
//       <button
//         onClick={handleSendTransaction}
//         className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
//       >
//         Send Transaction
//       </button>
//       <div className="mt-4">
//         <p>Click the button above to send the transaction to the Diamante network.</p>
//       </div>
//     </div>
//   );
// }

// export default Test;


// import React, { useState } from 'react';
// import * as DiamSdk from 'diamante-sdk-js';

// const Homepage = () => {
//     const [result, setResult] = useState(null);
//     const [error, setError] = useState(null);
//     const [balances, setBalances] = useState(null);
//     const server = new DiamSdk.Horizon.Server("https://diamtestnet.diamcircle.io");

//     const sourceKeys = DiamSdk.Keypair.fromSecret(
//         "SDOE74TFKVYDQBXE3H5HR7NVRF7F5JEJBGHGQRXQXKN7RR5SHGDLQSEU"
//     );
//     const destinationId = "GDYX4QV56MXJEQ42XXVEXODRIFXA5XZQS5JVERX6LQUS3ILKML6GUVXE";

//     const issuingKeys = DiamSdk.Keypair.fromSecret(
//         "SDOE74TFKVYDQBXE3H5HR7NVRF7F5JEJBGHGQRXQXKN7RR5SHGDLQSEU"
//     );
//     // const receivingKeys = DiamSdk.Keypair.fromSecret(
//     //     "SDIWH24FMNXB2RJTVOFLPVYJKJYHGGOTYDJYNU5DPJH7KF7URZ7XHTBH"
//     // );
//     const astroDollar = new DiamSdk.Asset("AstroDollar", issuingKeys.publicKey());

    // const handleTransaction = async () => {
    //     try {
    //         await server.loadAccount(destinationId);
    //         const sourceAccount = await server.loadAccount(sourceKeys.publicKey());
    //         const transaction = new DiamSdk.TransactionBuilder(sourceAccount, {
    //             fee: DiamSdk.BASE_FEE,
    //             networkPassphrase: DiamSdk.Networks.TESTNET,
    //         })
    //             .addOperation(DiamSdk.Operation.payment({
    //                 destination: destinationId,
    //                 asset: DiamSdk.Asset.native(),
    //                 amount: "10",
    //             }))
    //             .addMemo(DiamSdk.Memo.text("Test Transaction"))
    //             .setTimeout(180)
    //             .build();

    //         transaction.sign(sourceKeys);
    //         const result = await server.submitTransaction(transaction);
    //         setResult(result);
    //         setError(null);
    //     } catch (error) {
    //         if (error instanceof DiamSdk.NotFoundError) {
    //             setError("The destination account does not exist!");
    //         } else {
    //             setError("Something went wrong!");
    //         }
    //         setResult(null);
    //     }
    // };

//     const fetchBalances = async () => {
//         try {
//             const account = await server.loadAccount(sourceKeys.publicKey());
//             setBalances(account.balances);
//             setError(null);
//         } catch (error) {
//             setError("Failed to fetch balances!");
//             setBalances(null);
//         }
//     };

//     const createAndSendAsset = async () => {
//         try {
//             await server.loadAccount("GDYX4QV56MXJEQ42XXVEXODRIFXA5XZQS5JVERX6LQUS3ILKML6GUVXE")
//                 .then(function (receiver) {
//                     const transaction = new DiamSdk.TransactionBuilder(receiver, {
//                         fee: 100,
//                         networkPassphrase: DiamSdk.Networks.TESTNET,
//                     })
//                         .addOperation(DiamSdk.Operation.changeTrust({
//                             asset: astroDollar,
//                             limit: "1000",
//                         }))
//                         .setTimeout(100)
//                         .build();
//                     transaction.sign("GDYX4QV56MXJEQ42XXVEXODRIFXA5XZQS5JVERX6LQUS3ILKML6GUVXE");
//                     return server.submitTransaction(transaction);
//                 })
//                 .then(() => server.loadAccount(issuingKeys.publicKey()))
//                 .then(function (issuer) {
//                     const transaction = new DiamSdk.TransactionBuilder(issuer, {
//                         fee: 100,
//                         networkPassphrase: DiamSdk.Networks.TESTNET,
//                     })
//                         .addOperation(DiamSdk.Operation.payment({
//                             destination: "GDYX4QV56MXJEQ42XXVEXODRIFXA5XZQS5JVERX6LQUS3ILKML6GUVXE",
//                             asset: astroDollar,
//                             amount: "10",
//                         }))
//                         .setTimeout(100)
//                         .build();
//                     transaction.sign(issuingKeys);
//                     return server.submitTransaction(transaction);
//                 })
//                 .then(result => {
//                     setResult(result);
//                     setError(null);
//                 });
//         } catch (error) {
//             setError("Error creating or sending asset!");
//             console.error("Error!", error);
//             setResult(null);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//             <h1 className="text-2xl font-bold mb-4">Diamante SDK Payment and Asset Management</h1>
//             <button
//                 onClick={handleTransaction}
//                 className="bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-700"
//             >
//                 Send Payment
//             </button>
//             <button
//                 onClick={fetchBalances}
//                 className="bg-green-500 text-white py-2 px-4 rounded mb-4 hover:bg-green-700"
//             >
//                 Fetch Account Balances
//             </button>
//             <button
//                 onClick={createAndSendAsset}
//                 className="bg-purple-500 text-white py-2 px-4 rounded mb-4 hover:bg-purple-700"
//             >
//                 Create and Send AstroDollar
//             </button>
//             {result && (
//                 <div className="bg-white p-4 rounded shadow-md mt-4 w-full max-w-md">
//                     <h2 className="text-lg font-semibold">Transaction Result</h2>
//                     <pre className="whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
//                 </div>
//             )}
//             {balances && (
//                 <div className="bg-white p-4 rounded shadow-md mt-4 w-full max-w-md">
//                     <h2 className="text-lg font-semibold">Account Balances</h2>
//                     {balances.map((balance, index) => (
//                         <div key={index} className="border-b py-2">
//                             <p>Type: {balance.asset_type}</p>
//                             <p>Balance: {balance.balance}</p>
//                         </div>
//                     ))}
//                 </div>
//             )}
//             {error && (
//                 <div className="bg-red-100 text-red-700 p-4 rounded mt-4 w-full max-w-md">
//                     <p>Error: {error}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// import React from 'react';
// import axios from 'axios';
// import {
//   Horizon,
//   Asset,
//   Keypair,
//   TransactionBuilder,
//   BASE_FEE,
//   Operation,
// } from 'diamante-sdk-js';

// // Initialize Horizon server and network passphrase for testnet
// console.log('Initializing Horizon server and network passphrase for testnet');
// const server = new Horizon.Server('https://diamtestnet.diamcircle.io/');
// const networkPassphrase = 'Diamante Testnet';

// // Generate key pairs for issuer, distributor, and external accounts
// console.log('Generating key pairs for issuer, distributor, and external accounts');
// const issuerKP = Keypair.fromSecret('SADYYXR4RUQJE2FHY7V2X6CJE5QEYX5MT7K5BILSC3MGV4QQ6OMY2ONU');
// const distributorKP = Keypair.fromSecret('SDYALJIXODH7RGWAH44BB3HDJ5Q36XXZXGJPBD7X2JUZ4L2SOXZRNJLE');
// const externalKP = Keypair.fromSecret('SAZIROVNXDGWY4FAMJ66DYZ5SYLU5V4MDFMWKBM3CDKRQ4YHAUNC4NDW');

// console.log('Creating asset instances');
// const asset1 = new Asset('ASSET4', issuerKP.publicKey());
// const asset2 = new Asset('ASSET5', issuerKP.publicKey());
// const asset3 = new Asset('ASSET6', issuerKP.publicKey());

// async function createAndDistributeAssets() {
//   try {
//     console.log('Loading issuer and distributor account details');
//     const issuerAccount = await server.loadAccount(issuerKP.publicKey());
//     const distributorAccount = await server.loadAccount(distributorKP.publicKey());

//     console.log('Creating trustline transaction for distributor');
//     const transaction = new TransactionBuilder(distributorAccount, {
//       fee: BASE_FEE,
//       networkPassphrase,
//     })
//       .addOperation(Operation.changeTrust({ asset: asset1 }))
//       .addOperation(Operation.changeTrust({ asset: asset2 }))
//       .addOperation(Operation.changeTrust({ asset: asset3 }))
//       .setTimeout(30)
//       .build();

//     console.log('Signing trustline transaction');
//     transaction.sign(distributorKP);
//     console.log('Submitting trustline transaction');
//     await server.submitTransaction(transaction);

//     console.log('Creating asset transfer transaction from issuer to distributor');
//     const transaction1 = new TransactionBuilder(issuerAccount, {
//       fee: BASE_FEE,
//       networkPassphrase,
//     })
//       .addOperation(
//         Operation.payment({
//           destination: distributorKP.publicKey(),
//           asset: asset1,
//           amount: '10',
//         })
//       )
//       .addOperation(
//         Operation.payment({
//           destination: distributorKP.publicKey(),
//           asset: asset2,
//           amount: '10',
//         })
//       )
//       .addOperation(
//         Operation.payment({
//           destination: distributorKP.publicKey(),
//           asset: asset3,
//           amount: '10',
//         })
//       )
//       .setTimeout(30)
//       .build();

//     console.log('Signing asset transfer transaction');
//     transaction1.sign(issuerKP);
//     console.log('Submitting asset transfer transaction');
//     await server.submitTransaction(transaction1);

//     console.log('Transferred assets to Distributor account:', distributorKP.publicKey());

//     return 1;
//   } catch (e) {
//     console.error('Error during createAndDistributeAssets transaction:', e);
//     return 0;
//   }
// }

// async function createLiquidity() {
//   try {
//     console.log('Loading distributor account details');
//     const distributorAccount = await server.loadAccount(distributorKP.publicKey());

//     console.log('Creating liquidity transaction');
//     const transaction = new TransactionBuilder(distributorAccount, {
//       fee: BASE_FEE,
//       networkPassphrase,
//     })
//       .addOperation(
//         Operation.manageSellOffer({
//           selling: Asset.native(),
//           buying: asset1,
//           amount: '4',
//           price: '1',
//         })
//       )
//       .addOperation(
//         Operation.manageSellOffer({
//           selling: asset1,
//           buying: asset2,
//           amount: '5',
//           price: '1',
//         })
//       )
//       .addOperation(
//         Operation.manageSellOffer({
//           selling: asset2,
//           buying: asset3,
//           amount: '6',
//           price: '1',
//         })
//       )
//       .addOperation(
//         Operation.manageSellOffer({
//           selling: asset3,
//           buying: Asset.native(),
//           amount: '7',
//           price: '1',
//         })
//       )
//       .setTimeout(30)
//       .build();

//     console.log('Signing liquidity transaction');
//     transaction.sign(distributorKP);
//     console.log('Submitting liquidity transaction');
//     await server.submitTransaction(transaction);

//     console.log('Liquidity added successfully!');
//     return 1;
//   } catch (e) {
//     console.error('Error during createLiquidity transaction:', e.response?.data?.extras?.result_codes || e);
//     return 0;
//   }
// }

// async function swapDiamToAsset() {
//   try {
//     console.log('Loading external account details');
//     const externalAccount = await server.loadAccount(externalKP.publicKey());

//     console.log('Creating trustline and swap transaction for external account');
//     const transaction = new TransactionBuilder(externalAccount, {
//       fee: BASE_FEE,
//       networkPassphrase,
//     })
//       .addOperation(Operation.changeTrust({ asset: asset3 }))
//       .addOperation(
//         Operation.manageBuyOffer({
//           selling: Asset.native(),
//           buying: asset3,
//           buyAmount: '20',
//           price: '1',
//         })
//       )
//       .setTimeout(100)
//       .build();

//     console.log('Signing trustline and swap transaction');
//     transaction.sign(externalKP);
//     console.log('Submitting trustline and swap transaction');
//     await server.submitTransaction(transaction);

//     console.log('Diams swapped to Asset3 successfully!');
//     return 1;
//   } catch (error) {
//     console.error('Error during swapDiamToAsset transaction:', error);
//     return 0;
//   }
// }


// async function swapAssets() {
//   try {
//     console.log('Loading external account details');
//     const account = await server.loadAccount(externalKP.publicKey());

//     console.log('Finding best path from asset3 to asset1');
//     const pathCallBuilder = server.strictSendPaths(asset3, '2', [asset1]);
//     const paths = await pathCallBuilder.call();

//     if (paths.records.length === 0) {
//       console.log('No paths found. Checking offers...');
//       return;
//     }

//     console.log('Best path found:', paths.records[0]);
//     const bestPath = paths.records[0];

//     const pathArray = bestPath.path.map((pathAsset) => {
//       return new Asset(pathAsset.asset_code, pathAsset.asset_issuer);
//     });

//     console.log('Creating path payment transaction');
//     const transaction = new TransactionBuilder(account, {
//       fee: BASE_FEE,
//       networkPassphrase,
//     })
//       .addOperation(Operation.changeTrust({ asset: asset1 }))
//       .addOperation(
//         Operation.pathPaymentStrictSend({
//           sendAsset: asset3,
//           sendAmount: '1',
//           destination: externalKP.publicKey(),
//           destAsset: asset1,
//           path: pathArray,
//           destMin: '1',
//         })
//       )
//       .setTimeout(100)
//       .build();

//     console.log('Signing path payment transaction');
//     transaction.sign(externalKP);
//     console.log('Submitting path payment transaction');
//     await server.submitTransaction(transaction);

//     console.log('Asset3 -> Asset1 swap completed');
//     return 1;
//   } catch (error) {
//     console.error('Error during swapAssets transaction:', error.response?.data?.extras?.result_codes || error);
//     return 0;
//   }
// }


// // Call this one by one in a main function
// async function main() {
//   try {
//     console.log('Starting main function');
//     const createAssetsResult = await createAndDistributeAssets();

//     if (createAssetsResult === 1) {
//       console.log('Assets created and distributed successfully');
//       const createLiquidityResult = await createLiquidity();

//       if (createLiquidityResult === 1) {
//         console.log('Liquidity created successfully');
//         const swapDiamToAssetResult = await swapDiamToAsset();

//         if (swapDiamToAssetResult === 1) {
//           console.log('Diam swapped to Asset3 successfully');
//           await swapAssets();
//           console.log('All transactions completed successfully!');
//         } else {
//           console.error('Error during swapDiamToAsset transaction.');
//         }
//       } else {
//         console.error('Error during createLiquidity transaction.');
//       }
//     } else {
//       console.error('Error during createAndDistributeAssets transaction.');
//     }
//   } catch (e) {
//     console.error('Error during main function:', e);
//   }
// }

// const Temp = () => {
//   const callMain = async () => {
//     try {
//       console.log('Calling main function from button click');
//       const response = await swapAssets();
//     console.log(issuerKP.publicKey() , distributorKP.publicKey(), externalKP.publicKey());
//     console.log('Main function executed successfully:', response);
//     } catch (error) {
//       console.error('Error during callMain:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={callMain}>Call Main</button>
//     </div>
//   );
// };

// export default Temp;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Horizon,
  Asset,
  Keypair,
  TransactionBuilder,
  BASE_FEE,
  Operation,
} from 'diamante-sdk-js';

const server = new Horizon.Server('https://diamtestnet.diamcircle.io/');
const networkPassphrase = 'Diamante Testnet';

const issuerKP = Keypair.fromSecret('SADYYXR4RUQJE2FHY7V2X6CJE5QEYX5MT7K5BILSC3MGV4QQ6OMY2ONU');
const distributorKP = Keypair.fromSecret('SDYALJIXODH7RGWAH44BB3HDJ5Q36XXZXGJPBD7X2JUZ4L2SOXZRNJLE');
const externalKP = Keypair.fromSecret('SAZIROVNXDGWY4FAMJ66DYZ5SYLU5V4MDFMWKBM3CDKRQ4YHAUNC4NDW');

const Temp = () => {
  const [issuerData, setIssuerData] = useState(null);
  const [distributorData, setDistributorData] = useState(null);
  const [externalData, setExternalData] = useState(null);

  const [assetName, setAssetName] = useState('');
  const [createAmount, setCreateAmount] = useState('');
  const [selectedAssetForLiquidity, setSelectedAssetForLiquidity] = useState('');
  const [liquidityAmount, setLiquidityAmount] = useState('');
  const [selectedAssetForSwap, setSelectedAssetForSwap] = useState('');
  const [swapAmount, setSwapAmount] = useState('');
  const [selectedAssetForExternalSwap, setSelectedAssetForExternalSwap] = useState('');
  const [externalSwapAmount, setExternalSwapAmount] = useState('');

  const fetchAccountDetails = async (publicKey, setData) => {
    try {
      const response = await axios.get(`https://diamtestnet.diamcircle.io/accounts/${publicKey}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching account details:', error);
    }
  };

  useEffect(() => {
    fetchAccountDetails(issuerKP.publicKey(), setIssuerData);
    fetchAccountDetails(distributorKP.publicKey(), setDistributorData);
    fetchAccountDetails(externalKP.publicKey(), setExternalData);
  }, []);

  const createAndDistributeAsset = async () => {
    try {
      const issuerAccount = await server.loadAccount(issuerKP.publicKey());
      const distributorAccount = await server.loadAccount(distributorKP.publicKey());

      const asset = new Asset(assetName, issuerKP.publicKey());

      const transaction = new TransactionBuilder(distributorAccount, {
        fee: BASE_FEE,
        networkPassphrase,
      })
        .addOperation(Operation.changeTrust({ asset }))
        .setTimeout(30)
        .build();

      transaction.sign(distributorKP);
      await server.submitTransaction(transaction);

      const transaction1 = new TransactionBuilder(issuerAccount, {
        fee: BASE_FEE,
        networkPassphrase,
      })
        .addOperation(Operation.payment({ destination: distributorKP.publicKey(), asset, amount: createAmount }))
        .setTimeout(30)
        .build();

      transaction1.sign(issuerKP);
      await server.submitTransaction(transaction1);

      fetchAccountDetails(issuerKP.publicKey(), setIssuerData);
      fetchAccountDetails(distributorKP.publicKey(), setDistributorData);

      console.log(`Asset ${assetName} created and distributed to distributor.`);
    } catch (e) {
      console.error('Error in createAndDistributeAsset:', e);
    }
  };

  const createLiquidity = async () => {
    try {
      const distributorAccount = await server.loadAccount(distributorKP.publicKey());

      const selectedAssetInstance = distributorData.balances.find(
        balance => balance.asset_code === selectedAssetForLiquidity
      );

      if (!selectedAssetInstance) {
        console.error('Selected asset for liquidity not found in distributor account.');
        return;
      }

      const asset = new Asset(selectedAssetInstance.asset_code, selectedAssetInstance.asset_issuer);

      const transaction = new TransactionBuilder(distributorAccount, {
        fee: BASE_FEE,
        networkPassphrase,
      })
        .addOperation(Operation.manageSellOffer({
          selling: Asset.native(),
          buying: asset,
          amount: liquidityAmount,
          price: '1',
        }))
        .setTimeout(30)
        .build();

      transaction.sign(distributorKP);
      await server.submitTransaction(transaction);

      fetchAccountDetails(distributorKP.publicKey(), setDistributorData);

      console.log('Liquidity created.');
    } catch (e) {
      console.error('Error in createLiquidity:', e);
    }
  };

  const swapDiamToAsset = async () => {
    try {
      const externalAccount = await server.loadAccount(externalKP.publicKey());

      const selectedAssetInstance = distributorData.balances.find(
        balance => balance.asset_code === selectedAssetForSwap
      );

      if (!selectedAssetInstance) {
        console.error('Selected asset for swap not found in distributor account.');
        return;
      }

      const asset = new Asset(selectedAssetInstance.asset_code, selectedAssetInstance.asset_issuer);

      const transaction = new TransactionBuilder(externalAccount, {
        fee: BASE_FEE,
        networkPassphrase,
      })
        .addOperation(Operation.changeTrust({ asset }))
        .addOperation(Operation.manageBuyOffer({
          selling: Asset.native(),
          buying: asset,
          buyAmount: swapAmount,
          price: '1',
        }))
        .setTimeout(100)
        .build();

      transaction.sign(externalKP);
      await server.submitTransaction(transaction);

      fetchAccountDetails(externalKP.publicKey(), setExternalData);

      console.log('Swapped Diams to Asset.');
    } catch (error) {
      console.error('Error in swapDiamToAsset:', error);
    }
  };

  const swapAssets = async () => {
    try {
      const externalAccount = await server.loadAccount(externalKP.publicKey());

      const asset1 = new Asset(selectedAssetForExternalSwap, issuerKP.publicKey());
      const asset2 = new Asset('ASSET1', issuerKP.publicKey()); // Assuming ASSET1 as destination asset

      const pathCallBuilder = server.strictSendPaths(asset1, externalSwapAmount, [asset2]);
      const paths = await pathCallBuilder.call();

      if (paths.records.length === 0) {
        console.log('No paths found.');
        return;
      }

      const bestPath = paths.records[0];
      const pathArray = bestPath.path.map((pathAsset) => new Asset(pathAsset.asset_code, pathAsset.asset_issuer));

      const transaction = new TransactionBuilder(externalAccount, {
        fee: BASE_FEE,
        networkPassphrase,
      })
        .addOperation(Operation.changeTrust({ asset: asset2 }))
        .addOperation(Operation.pathPaymentStrictSend({
          sendAsset: asset1,
          sendAmount: externalSwapAmount,
          destination: externalKP.publicKey(),
          destAsset: asset2,
          path: pathArray,
          destMin: '1',
        }))
        .setTimeout(100)
        .build();

      transaction.sign(externalKP);
      await server.submitTransaction(transaction);

      fetchAccountDetails(externalKP.publicKey(), setExternalData);

      console.log('Swapped assets.');
    } catch (error) {
      console.error('Error in swapAssets:', error);
    }
  };

  const renderAccountData = (data) => (
    data ? (
      <div>
        <p>Account ID: {data.account_id}</p>
        <p>Native Balance: {data.balances.find(balance => balance.asset_type === 'native')?.balance}</p>
        <ul>
          {data.balances.filter(balance => balance.asset_type !== 'native').map((balance, index) => (
            <li key={index}>
              {balance.asset_code}: {balance.balance}
            </li>
          ))}
        </ul>
      </div>
    ) : <p>Loading...</p>
  );

  return (
    <div className="p-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold">Issuer Account</h2>
        {renderAccountData(issuerData)}
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Distributor Account</h2>
        {renderAccountData(distributorData)}
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold">External Account</h2>
        {renderAccountData(externalData)}
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Create and Distribute Asset</h3>
        <label className="block mb-2">Asset Name:</label>
        <input
          type="text"
          value={assetName}
          onChange={(e) => setAssetName(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        />
        <label className="block mb-2">Amount:</label>
        <input
          type="text"
          value={createAmount}
          onChange={(e) => setCreateAmount(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        />
        <button onClick={createAndDistributeAsset} className="bg-blue-500 text-white p-2 rounded">
          Create and Distribute Asset
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Create Liquidity</h3>
        <label className="block mb-2">Select Asset:</label>
        <select
          value={selectedAssetForLiquidity}
          onChange={(e) => setSelectedAssetForLiquidity(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        >
          {distributorData?.balances.filter(balance => balance.asset_type !== 'native').map((balance, index) => (
            <option key={index} value={balance.asset_code}>{balance.asset_code}</option>
          ))}
        </select>
        <label className="block mb-2">Amount:</label>
        <input
          type="text"
          value={liquidityAmount}
          onChange={(e) => setLiquidityAmount(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        />
        <button onClick={createLiquidity} className="bg-blue-500 text-white p-2 rounded">
          Create Liquidity
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Swap Diams to Asset</h3>
        <label className="block mb-2">Select Asset:</label>
        <select
          value={selectedAssetForSwap}
          onChange={(e) => setSelectedAssetForSwap(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        >
          {distributorData?.balances.filter(balance => balance.asset_type !== 'native').map((balance, index) => (
            <option key={index} value={balance.asset_code}>{balance.asset_code}</option>
          ))}
        </select>
        <label className="block mb-2">Buy Amount:</label>
        <input
          type="text"
          value={swapAmount}
          onChange={(e) => setSwapAmount(e.target.value)}
          className="p-2 border rounded w-full mb-4"
        />
        <button onClick={swapDiamToAsset} className="bg-blue-500 text-white p-2 rounded">
          Swap Diams to Asset
        </button>
      </div>
    </div>
  );
};

export default Temp;

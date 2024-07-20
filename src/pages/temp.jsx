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

// export default Homepage;

// Temp.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as DiamSdk from 'diamante-sdk-js';

const Temp = () => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();

    const getQueryParams = (search) => {
        return new URLSearchParams(search);
    };

    const params = getQueryParams(location.search);
    const amount = params.get('amount');
    const privateKey = params.get('privateKey');

    const destinationId = "GDYX4QV56MXJEQ42XXVEXODRIFXA5XZQS5JVERX6LQUS3ILKML6GUVXE";
    const server = new DiamSdk.Horizon.Server("https://diamtestnet.diamcircle.io");
    const sourceKeys = DiamSdk.Keypair.fromSecret(privateKey);

    console.log(amount, privateKey);

    const handleTransaction = async () => {
        try {
            await server.loadAccount(destinationId);
            const sourceAccount = await server.loadAccount(sourceKeys.publicKey());
            const transaction = new DiamSdk.TransactionBuilder(sourceAccount, {
                fee: DiamSdk.BASE_FEE,
                networkPassphrase: DiamSdk.Networks.TESTNET,
            })
                .addOperation(DiamSdk.Operation.payment({
                    destination: destinationId,
                    asset: DiamSdk.Asset.native(),
                    amount: amount,
                }))
                .addMemo(DiamSdk.Memo.text("Test Transaction"))
                .setTimeout(180)
                .build();

            transaction.sign(sourceKeys);
            const result = await server.submitTransaction(transaction);
            setResult(result);
            setError(null);
        } catch (error) {
            if (error instanceof DiamSdk.NotFoundError) {
                setError("The destination account does not exist!");
            } else {
                setError("Something went wrong!");
            }
            setResult(null);
        }
    };

    useEffect(() => {
        if (amount && privateKey) {
            handleTransaction();
        } else {
            setError("Amount and private key are required!");
        }
    }, [amount, privateKey]);

    return (
        <div>
            <h1>Transaction Result</h1>
            {error ? <p style={{ color: 'red' }}>{error}</p> : <pre>{JSON.stringify(result, null, 2)}</pre>}
        </div>
    );
};

export default Temp;

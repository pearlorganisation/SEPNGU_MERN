// import React from "react";
// import axios from "axios";

// const Landing = () => {
//   const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
//   console.log("key---- ", razorpayKey);
//   const handleSubscription = async (planId) => {
//     try {
//       // Step 1: Create Subscription via API
//       const response = await axios.post(
//         "http://localhost:3005/api/v1/subscriptions",
//         {
//           planId,
//         }
//       );
//       console.log("REsponse", response); //{config, data, headers, request, status, statusText}
//       console.log("REsponse data : ", response.data); // Extract data, response.data = { data, message, success }
//       const { id: subscription_id } = response.data.data; //

//       // Step 2: Razorpay Landing Options for Subscription
//       const options = {
//         key: razorpayKey,
//         subscription_id: subscription_id,
//         name: "1X",
//         description: "Subscription Landing",
//         handler: async (response) => {
//           console.log("Razorpay Response:", response);
//           try {
//             await axios.post("http://localhost:3005/api/verify-payment", {
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_subscription_id: response.razorpay_subscription_id,
//               razorpay_signature: response.razorpay_signature,
//             });
//             alert("Subscription successful!");
//           } catch (error) {
//             setError("Payment verification failed");
//           }
//         },
//         prefill: {
//           name: "John Doe",
//           email: "johndoe@example.com",
//           contact: "9999999999",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       // Step 3: Open Razorpay Landing
//       const rzp = new window.Razorpay(options);
//       rzp.open();

//       rzp.on("payment.failed", function (response) {
//         console.error("Payment Failed:", response.error);
//         alert("Payment Failed");
//       });
//     } catch (error) {
//       console.error("Error initiating subscription:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-full max-w-md">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">Landing Page</h1>
//         <h2 className="text-xl text-gray-600 mb-6">Subscribe to a Plan</h2>
//         <button
//           onClick={() => handleSubscription("plan_Pzu6iL7xV3DG57")}
//           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
//         >
//           Subscribe
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Landing;

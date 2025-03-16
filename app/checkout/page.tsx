"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function Checkout() {
  const [selectedPaymentType, setSelectedPaymentType] = useState<string | null>(null);
  const [selectedGateway, setSelectedGateway] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-800 to-white flex items-center justify-center p-4">
    {/* <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8"> */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Checkout Form */}
        <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Shipping Details</h2>
          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Address</label>
                <textarea 
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  rows={4}
                  placeholder="Enter your full address"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">City</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="Your City"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    placeholder="+977 "
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Right Side - Payment Options */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Payment Method</h2>

            {/* Cash on Delivery */}
            <div
              onClick={() => {
                setSelectedPaymentType('cod');
                setSelectedGateway(null);
              }}
              className={`group p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${
                selectedPaymentType === 'cod' 
                  ? 'border-green-500 bg-green-50/50' 
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${selectedPaymentType === 'cod' ? 'bg-green-100' : 'bg-gray-100'} group-hover:bg-green-100 transition-colors`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">Cash on Delivery</h3>
                  <p className="text-sm text-gray-500">Pay when you receive the item</p>
                </div>
                {selectedPaymentType === 'cod' && (
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Online Payment */}
            <div
              onClick={() => setSelectedPaymentType('online')}
              className={`group p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 ${
                selectedPaymentType === 'online' 
                  ? 'border-blue-500 bg-blue-50/50' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${selectedPaymentType === 'online' ? 'bg-blue-100' : 'bg-gray-100'} group-hover:bg-blue-100 transition-colors`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">Online Payment</h3>
                  <p className="text-sm text-gray-500">Secure instant payment</p>
                </div>
                {selectedPaymentType === 'online' && (
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Online Payment Gateways */}
              {selectedPaymentType === 'online' && (
                <div className="space-y-4 mt-6 ml-14">
                  {/* Esewa */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedGateway('esewa');
                    }}
                    className={`p-4 border-2 rounded-xl flex items-center gap-4 cursor-pointer transition-all ${
                      selectedGateway === 'esewa' ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-400'
                    }`}
                  >
                    
                      <Image
                      src="/images/esewa icon image.png " // Replace with your image path
                      alt="Esewa"
                        className="w-10 h-10 rounded-lg"
                      />
                    <span className="font-medium text-gray-800">Esewa</span>
                    {selectedGateway === 'esewa' && (
                      <div className="ml-auto w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Khalti */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedGateway('khalti');
                      }}
                      className={`p-4 border-2 rounded-xl flex items-center gap-4 cursor-pointer transition-all ${
                        selectedGateway === 'khalti'
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-500'
                      }`}
                    >
                      <Image
                        src="/images/khalti.png" // Replace with your actual image filename
                        alt="Khalti"
                        className="w-12 h-12 rounded-lg"
                      />
                      <span className="font-medium text-gray-800">Khalti</span>
                      {selectedGateway === 'khalti' && (
                        <div className="ml-auto w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      )}
                    </div>


                  {/* Himalaya Bank */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedGateway('himalaya');
                    }}
                    className={`p-4 border-2 rounded-xl flex items-center gap-4 cursor-pointer transition-all ${
                      selectedGateway === 'himalaya' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-400'
                    }`}
                  >
                    <Image
                        src="/images/Himlayanicon.png" // Replace with your actual image filename
                        alt="Himalaya Bank"
                        className="w-10 h-10 rounded-lg"
                        />
                    <span className="font-medium text-gray-800">Himalaya Bank</span>
                    {selectedGateway === 'himalaya' && (
                      <div className="ml-auto w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Submit Order
            </button>
          </div>
        </div>
      </div>
    {/* </div> */}
    </section>
  );
}
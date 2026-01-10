const OTPVerify = () => {
    return (
        <>
            <h2 className="text-2xl font-semibold">Verify OTP</h2>
            <p className="text-sm text-neutral-500 mt-1">Enter the 6-digit code sent to you</p>
            <input placeholder="Enter OTP" className="auth-input mt-6" />
            <button className="auth-primary-btn mt-4">Verify </button>
        </>
    );
};

export default OTPVerify;
const ForgotPassword = ({ setView }) => {
    return (
        <>
            <h2 className="text-2xl font-semibold">Reset password</h2>
            <p className="text-sm text-neutral-500 mt-1">
                We’ll send you a verification code
            </p>
            <input placeholder="Email address" className="auth-input mt-6" />
            <button onClick={() => setView("otp")} className="auth-primary-btn mt-4">
                Send OTP
            </button>
        </>
    );
};

export default ForgotPassword;

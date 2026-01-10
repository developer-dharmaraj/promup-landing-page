const SignUp = ({ setView }) => {
    return (
        <>
            <h2 className="text-3xl font-semibold">Create account</h2>
            <p className="text-sm text-neutral-500 mt-1">
                Access exclusive properties & insights
            </p>

            <form className="space-y-4 mt-6">
                <input
                    placeholder="Phone number"
                    className="auth-input"
                />
                <input
                    placeholder="Email address"
                    className="auth-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="auth-input"
                />

                <button className="auth-primary-btn">
                    Continue
                </button>
            </form>

            <div className="auth-divider">OR</div>

            <div className="flex flex-col gap-4">
                <button className="auth-social-btn">Continue with Google</button>
            <button className="auth-social-btn">Continue with Apple</button>
            </div>

            <p className="text-xs text-center mt-6">
                Already have an account?{" "}
                <span
                    onClick={() => setView("login")}
                    className="font-medium underline cursor-pointer"
                >
                    Log in
                </span>
            </p>
        </>
    );
};

export default SignUp;

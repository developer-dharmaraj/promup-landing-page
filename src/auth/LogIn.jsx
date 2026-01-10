const Login = ({ setView }) => {
    return (
        <>
            <h2 className="text-3xl font-semibold">Welcome back</h2>
            <p className="text-sm text-neutral-500 mt-1">
                Login to your account
            </p>

            <form className="space-y-4 mt-6">
                <input placeholder="Email address" className="auth-input" />
                <input type="password" placeholder="Password" className="auth-input" />
                <button className="auth-primary-btn">Log in</button>
            </form>

            <p onClick={() => setView("forgot")} className="text-xs mt-4 text-right underline cursor-pointer">
                Forgot password?
            </p>
        </>
    );
};

export default Login;
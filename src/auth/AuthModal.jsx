import { useState } from "react";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import OTPVerify from "./OTPVerify";
import Login from "./LogIn";
import { X } from "lucide-react";

const AuthModal = () => {
    const [open, setOpen] = useState(false);
    const [view, setView] = useState("signup");

    return (
        <>
            <button onClick={() => { setOpen(true); setView("signup"); }}
                className="px-6 py-2 bg-emerald-700 text-white">
                Sign up
            </button>

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
                    <div className="relative w-full max-w-lg bg-white p-8 shadow-2xl">
                        <button onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-black">
                            <X />
                        </button>

                        {view === "signup" && <SignUp setView={setView} />}
                        {view === "login" && <Login setView={setView} />}
                        {view === "forgot" && <ForgotPassword setView={setView} />}
                        {view === "otp" && <OTPVerify />}
                    </div>
                </div>
            )}
        </>
    );
};

export default AuthModal;
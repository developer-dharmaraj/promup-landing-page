import { useState } from "react";
import { X } from "lucide-react";

const signupFields = [
    { type: "tel", placeholder: "Enter phone number", name: "phone" },
    { type: "email", placeholder: "Email address", name: "email" },
    { type: "password", placeholder: "Password", name: "password" },
];

const socialProviders = [
    { label: "Continue with Google", provider: "google" },
    { label: "Continue with Apple", provider: "apple" },
];

const SignUp = () => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        phone: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup Data:", formData);
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="px-6 py-2 text-sm font-medium bg-emerald-700 text-white hover:bg-emerald-900 transition">
                Sign up
            </button>

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
                    <div className="relative w-full h-[95vh] max-w-lg bg-white shadow-[0_40px_120px_rgba(0,0,0,0.25)] p-8">
                        <button onClick={() => setOpen(false)}
                            className="absolute top-5 right-5 text-gray-400 hover:text-black transition">
                            <X size={20} />
                        </button>

                        <div className="mb-6">
                            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
                                Welcome to PromUP
                            </h2>
                            <p className="text-sm text-neutral-500 mt-2">
                                Access exclusive properties & premium insights
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {signupFields.map((field) => (
                                <Input
                                    key={field.name}
                                    {...field}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                />
                            ))}

                            <button type="submit"
                                className="w-full mt-2 bg-emerald-700 text-white py-2.5 font-medium hover:bg-neutral-800 transition active:scale-[0.98]">
                                Continue
                            </button>
                        </form>

                        <div className="flex items-center gap-4 my-6">
                            <div className="h-px bg-neutral-200 flex-1" />
                            <span className="text-xs text-neutral-400">OR</span>
                            <div className="h-px bg-neutral-200 flex-1" />
                        </div>

                        <div className="space-y-3">
                            {socialProviders.map((item) => (
                                <SocialButton
                                    key={item.provider}
                                    label={item.label}
                                    onClick={() => console.log(item.provider)}
                                />
                            ))}
                        </div>

                        <p className="text-xs text-neutral-500 mt-6 text-center">
                            Already have an account?{" "}
                            <span className="text-neutral-900 font-medium cursor-pointer hover:underline">
                                Log in
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default SignUp;


const Input = ({ type, placeholder, name, value, onChange }) => (
    <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 text-[13px] bg-neutral-50 border border-neutral-200 outline-none focus:bg-white focus:border-emerald-700 transition"
    />
);

const SocialButton = ({ label, onClick }) => (
    <button type="button"
        onClick={onClick}
        className="w-full py-2.5 border border-neutral-200 text-sm font-medium text-neutral-900 hover:bg-neutral-100 transition active:scale-[0.98]">
        {label}
    </button>
);

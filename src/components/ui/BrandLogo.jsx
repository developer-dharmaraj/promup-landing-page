import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Companylogo } from "../../config/navdata";

const BrandLogo = () => {
    const [logo, setLogo] = useState(Companylogo)

    useEffect(() => {
        fetch("/api/brandLogo")
            .then(res => res.json())
            .then(data => setLogo(data))
            .catch(() => setLogo(Companylogo));
    }, []);
    return (
        <div>
            <div className="flex items-center gap-2">
                <Link to={logo.Clogo.redirectTo}>
                    <img
                        src={logo.Clogo.light}
                        alt={logo.Clogo.alt}
                        className="h-7 object-contain"
                    />
                </Link>
            </div>
        </div>
    )
}

export default BrandLogo;
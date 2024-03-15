import { useState } from "react";
const Navbar = () => {

    const [theme, setTheme] = useState(false);

    const handleTheme = () => {
        setTheme(!theme);
    }

    return (
        <>
            <div className="flex mt-5 mx-5 justify-between">
                <div>
                    <p className="tracking-tighter text-2xl font-semibold">
                        Md. Emran Hossain
                    </p>
                </div>
                <div>
                    <span onClick={handleTheme} className="w-32">{theme ? <i className="fa-regular fa-sun"></i> : <i className="fa-regular fa-moon"></i>}</span>
                </div>
            </div>
        </>
    );
};

export default Navbar;
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Sun from "../../public/sun.svg"
import Moon from "../../public/moon.svg"

export default function Toggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <label className="toggle-button">
            <input
                type="checkbox"
                className="toggle-checkbox"
                checked={theme === "dark"}
                onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            />
            <div className="toggle-slider">
                <div className="toggle-icon">
                    {theme === "dark" ? (
                        <Image src={Moon} alt="Moon Icon" width={20} height={20} />
                    ) : (
                        <Image src={Sun} alt="Sun Icon" width={20} height={20} />
                    )}
                </div>
            </div>
            {/* <span className="slider"></span>
            <span className="label label-dark">🌙</span>
            <span className="label label-light">☀️</span> */}

            <style jsx>{`
                .toggle-button {
                    position: relative;
                    display: flex;
                    width: 80px;
                    height: 40px;
                    align-items: center;
                    justify-content: center;
                }

                .toggle-checkbox {
                    display: none;
                }

                .slider {
                    position: absolute;
                    top: 0;
                    left: 5px;
                    width: 70px;
                    height: 40px;
                    background-color: #ec6838;
                    border-radius: 40px;
                    transition: background-color 0.6s, transform 0.8s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .slider:before {
                    content: "";
                    position: absolute;
                    top: 4px;
                    left: 4px;
                    width: 32px;
                    height: 32px;
                    background-color: white;
                    border-radius: 50%;
                    transition: transform 0.2s;
                }

                .toggle-checkbox:checked + .slider {
                    background-color: #333;
                }

                .toggle-checkbox:checked + .slider:before {
                    transform: translateX(32px);
                }

                .label {
                    position: absolute;
                    font-size: 16px;
                    font-weight: bold;
                    color: white;
                    width: 50%;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .label-light {
                    right: 0;
                    color: white;
                }

                .label-dark {
                    left: 0;
                    color: white;
                }
            `}</style>

        </label>
    );
}

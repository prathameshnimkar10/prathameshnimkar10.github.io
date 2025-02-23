"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Sun from "../../public/sun.svg";
import Moon from "../../public/moon.svg";

export default function Toggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const currentTheme = theme === 'system' ? resolvedTheme : theme;

    return (
        <label className="toggle-button">
            <input
                type="checkbox"
                className="toggle-checkbox"
                checked={currentTheme === "dark"}
                onChange={() => setTheme(currentTheme === "light" ? "dark" : "light")}
            />
            <div className="slider">
                <div className="toggle-icon">
                    {currentTheme === "dark" ? (
                        <Image src={Moon} alt="Moon Icon" width={24} height={24} />
                    ) : (
                        <Image src={Sun} alt="Sun Icon" width={24} height={24} />
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
                    width: 60px;
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
                    left: 0;
                    width: 78px;
                    height: 38px;
                    background-color: #ec6838;
                    border-radius: 40px;
                    transition: background-color 0.6s, transform 0.8s;
                    display: flex;
                    align-items: center;
                }

                .slider:before {
                    content: "";
                    position: absolute;
                    width: 34px;
                    height: 34px;
                    background-color: white;
                    border-radius: 50%;
                    transition: transform 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                toggle-checkbox:checked + .slider:before,
                .toggle-checkbox:checked + .slider .toggle-icon {
                    transform: translateX(40px);
                }

                .toggle-checkbox:checked + .slider {
                    background-color: #333;
                }

                .toggle-checkbox:checked + .slider:before {
                    transform: translateX(40px);
                }

                .toggle-icon {
                    position: absolute;
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </label>
    );
}

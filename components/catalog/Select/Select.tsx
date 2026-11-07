"use client";

import { useEffect, useRef, useState } from "react";
import css from "./Select.module.css";

export type Option = { value: string; label: string };

type Props = {
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    placeholder?: string;
    labelledBy?: string;
};

export default function Select({
    value,
    onChange,
    options,
    placeholder = "Choose an option",
    labelledBy,
}: Props) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (!open) return;

        const onClick = (e: MouseEvent) => {
            if (!ref.current?.contains(e.target as Node)) setOpen(false);
        };
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        
        document.addEventListener("mousedown", onClick);
        document.addEventListener("keydown", onKey);
        
        return () => {
            document.removeEventListener("mousedown", onClick);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    const selected = options.find((o) => o.value === value);

    return (
        <div className={css.select} ref={ref}>
            <button
                type="button"
                className={css.trigger}
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-labelledby={labelledBy}
                onClick={() => setOpen((o) => !o)}
            >
                <span className={selected ? css.value : css.placeholder}>
                    {selected ? selected.label : placeholder}
                </span>
                <svg
                    className={`${css.arrow} ${open ? css.arrowOpen : ""}`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                >
                    <path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            </button>
            
            {open && (
                <ul className={css.list} role="listbox" aria-labelledby={labelledBy}>
                    {options.map((o) => (
                        <li
                            key={o.value}
                            role="option"
                            aria-selected={o.value === value}
                            className={`${css.option} ${o.value === value ? css.selected : ""}`}
                            onClick={() => {
                                onChange(o.value);
                                setOpen(false);
                            }}
                        >
                            {o.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
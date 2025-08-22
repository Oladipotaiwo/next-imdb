'use client';
import { MoonIcon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
export default function DarkMode() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;
    useEffect(() => setMounted(true), []);
    return (
        <div>
            {mounted &&
                (currentTheme === 'dark' ? (
                    <Sun
                        onClick={() => setTheme('light')}
                        className='text-xl cursor-pointer hover:text-amber-500'
                    />
                ) : (
                    <MoonIcon
                        onClick={() => setTheme('dark')}
                        className='text-xl cursor-pointer hover:text-amber-500'
                    />
                ))}
        </div>
    );
}
'use client';

import { ThemeProvider as NextThemesProvider } from "next-themes";
'next-themes';

export function ThemeProvider({children,...props}) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export default ThemeProvider
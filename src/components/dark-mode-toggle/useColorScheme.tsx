import { useMemo, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export function useColorScheme() {
	const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

	const [colorScheme, setColorScheme] = useLocalStorage("color-scheme", systemPrefersDark ? "dark" : "light");
	const value = useMemo(() => colorScheme, [colorScheme]);

	useEffect(() => {
		if (value === "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [value]);

	return [value, setColorScheme] as const;
}

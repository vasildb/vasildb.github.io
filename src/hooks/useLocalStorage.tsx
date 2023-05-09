import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: string) {
	// getting stored value
	return localStorage.getItem(key) || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: string) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		// storing input name
		localStorage.setItem(key, value);
	}, [key, value]);

	return [value, setValue] as const;
};

import { createContext, useContext, useState } from "react";

const NavSwitchContext = createContext();

export const NavSwitchProvider = ({ children }) => {
	const [isNavSwitchActive, setIsActive] = useState(false);

	const navSwitchToggle = () => {
		setIsActive(!isNavSwitchActive);
	}

	return <NavSwitchContext.Provider value={{
		isNavSwitchActive,
		navSwitchToggle,
	}}>{children}</NavSwitchContext.Provider>
};

export const useNavSwitch = () => useContext(NavSwitchContext);

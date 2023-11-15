import { create } from "zustand";

interface HeaderProps {
	activeTab: string;

	setActiveTab: (tab: string) => void;
}

const useHeaderStore = create<HeaderProps>((set) => ({
	activeTab: "profile",

	setActiveTab: (tab) => set({ activeTab: tab }),
}));

export default useHeaderStore;

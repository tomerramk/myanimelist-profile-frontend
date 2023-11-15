import React from "react";
import { TextField } from "@radix-ui/themes";
import { AnimatePresence, motion } from "framer-motion";

import useAnimeListStore from "@features/anime-list/useAnimeListStore";

type FilterAnimeProps = {
	isOpen: boolean;
};

const FilterAnime = ({ isOpen }: FilterAnimeProps) => {
	const { listFilter, setListFilter } = useAnimeListStore();

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value;
		setListFilter(query);
	};
	return (
		<AnimatePresence>
			{isOpen && (
				<TextField.Root>
					<TextField.Slot>
						<motion.div
							initial={{ width: 0, opacity: 0 }}
							animate={{ width: 160, opacity: 1 }}
							exit={{ width: 0, opacity: 0 }}
							transition={{ duration: 0.25 }}
						>
							<TextField.Input
								placeholder="Search Anime..."
								value={listFilter}
								onChange={handleSearch}
							/>
						</motion.div>
					</TextField.Slot>
				</TextField.Root>
			)}
		</AnimatePresence>
	);
};

export default FilterAnime;

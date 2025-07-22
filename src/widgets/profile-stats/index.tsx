import { FC } from "react";

type Props = {
	games: number;
	rumers: number;
};

export const ProfileStats: FC<Props> = ({ games, rumers }) => {
	return (
		<div className="flex gap-6 mt-4 text-sm">
			<div>
				<div className="font-semibold">1 месяц</div>
				<div className="text-gray-500">в игре</div>
			</div>
			<div>
				<div className="font-semibold">{games}</div>
				<div className="text-gray-500">встреч</div>
			</div>
			<div>
				<div className="font-semibold">{rumers}</div>
				<div className="text-gray-500">румеров</div>
			</div>
		</div>
	);
};

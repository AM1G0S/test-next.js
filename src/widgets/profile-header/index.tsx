import { FC } from "react";

type Props = {
	name: string;
	nickname: string;
	city: string | null;
};

export const ProfileHeader: FC<Props> = ({ name, nickname, city }) => {
	return (
		<>
		<div className={"flex justify-between items-center mb-2"}>
			<span>Профиль</span>
			
			<div className="w-6 h-5 flex flex-col justify-between items-center cursor-pointer">
				<span className="block w-full h-1 bg-black rounded-sm"></span>
				<span className="block w-full h-1 bg-black rounded-sm"></span>
				<span className="block w-full h-1 bg-black rounded-sm"></span>
			</div>
		</div>
			<div className="flex items-center gap-4">
				<div className="w-20 h-20 rounded-full bg-yellow-200 flex items-center justify-center text-4xl">
					🐱
				</div>
				<div className="flex flex-col">
					<span className="text-lg font-semibold">{name}</span>
					<span className="text-gray-500 text-sm">@{nickname}</span>
				<span className="text-gray-700 text-sm">{city}</span>
			</div>
		</div>
		</>
		
	);
};

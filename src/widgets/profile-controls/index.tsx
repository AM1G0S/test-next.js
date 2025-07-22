"use client";

import { FC, useState } from "react";
import clsx from "clsx";

export const ProfileControls: FC = () => {
	const [activeTab, setActiveTab] = useState<"calls" | "going">("calls");
	
	return (
		<div className="mt-6 flex flex-col gap-4">
			<div className="bg-white shadow rounded-xl p-4">
				<div className="flex justify-between items-center">
					<button
						className={clsx(
							"flex-1 py-2 rounded-lg text-sm font-medium",
							activeTab === "calls"
								? "bg-purple-600 text-white"
								: "text-gray-500"
						)}
						onClick={() => setActiveTab("calls")}
					>
						ЗОВЫ <span className="ml-1 text-xs">2</span>
					</button>
					<button
						className={clsx(
							"flex-1 py-2 rounded-lg text-sm font-medium",
							activeTab === "going"
								? "bg-purple-600 text-white"
								: "text-gray-500"
						)}
						onClick={() => setActiveTab("going")}
					>
						ИДУ <span className="ml-1 text-xs">3</span>
					</button>
				</div>
			</div>
			
			<div className="flex flex-col gap-2">
				<button className="bg-purple-600 text-white text-sm py-2 rounded-xl font-semibold">
					СОЗДАТЬ ИГРУМ
				</button>
				<button className="bg-white text-purple-600 border border-purple-600 text-sm py-2 rounded-xl font-semibold">
					МОИ ИГРУМЫ
				</button>
			</div>
			
			<div className="bg-white shadow rounded-xl p-4">
				<div className="flex flex-col gap-3">
					<label className="flex items-center justify-between">
						<span className="text-sm text-gray-700">Публичный аккаунт</span>
					</label>
					<label className="flex items-center justify-between">
						<span className="text-sm text-gray-700">Взрослый</span>
					</label>
				</div>
			</div>
		</div>
	);
};

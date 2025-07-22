// src/app/profile/page.tsx
import {getProfile} from "@/shared/api/profile";
import {ProfileHeader} from "@/widgets/profile-header";
import {ProfileStats} from "@/widgets/profile-stats";
import {ProfileBio} from "@/widgets/profile-bio";
import {ProfileControls} from "@/widgets/profile-controls";
import {ProfileFooter} from "@/widgets/profile-footer";

export default async function ProfilePage() {
	const initialData = await getProfile();
	
	return (
		<main className="max-w-sm mx-auto p-4 text-sm">
			<ProfileHeader
				name={initialData.username}
				nickname="nickname"
				city={initialData.city}
			/>
			<ProfileStats
				games={initialData.gamesCount}
				rumers={initialData.rumersCount}
			/>
			<ProfileBio
				description={initialData.description}
				telegram={initialData.telegram ?? undefined}
			/>
			<ProfileControls/>
			<ProfileFooter/>
		</main>
	);
}

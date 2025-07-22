import { GetServerSideProps } from "next";
import { getProfile } from "@/shared/api/profile";
import { Profile } from "@/entities/profile/model/types";
import { ProfileHeader } from "@/widgets/profile-header";
import { ProfileStats } from "@/widgets/profile-stats";
import { ProfileBio } from "@/widgets/profile-bio";
import { ProfileControls } from "@/widgets/profile-controls";
import { ProfileFooter } from "@/widgets/profile-footer";

type Props = { initialData: Profile };

export default function ProfilePage({ initialData }: Props) {
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
      <ProfileControls />
      <ProfileFooter />
    </main>
  );
}

const mockedProfile: Profile = {
  id: "mock-id",
  username: "Ваня Петькин",
  city: "Краснодар",
  gamesCount: 15,
  rumersCount: 350,
  joinedAt: "2024-06-20T12:00:00Z",
  avatar: null,
  description: "Я профессиональный скуф, обожаю сидеть дома...",
  telegram: "@ribakit3",
  tags: ["tag1", "tag2"]
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getProfile();
  return { props: { initialData: data } };
};

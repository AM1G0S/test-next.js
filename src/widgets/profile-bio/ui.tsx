import { FC } from "react";

type Props = {
  description?: string | null;
  telegram?: string | null;
};

export const ProfileBio: FC<Props> = ({ description, telegram }) => {
  return (
    <div className="mt-6 text-sm leading-relaxed">
      {description && <p>{description}</p>}
      {telegram && (
        <p className="text-blue-500 mt-2 break-words">{telegram}</p>
      )}
    </div>
  );
};
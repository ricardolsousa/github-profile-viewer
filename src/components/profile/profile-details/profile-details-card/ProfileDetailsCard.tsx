type ProfileDetailsCardProps = {
  label: string;
  value: number | string;
};

const ProfileDetailsCard = ({ label, value }: ProfileDetailsCardProps) => {
  return (
    <div className="bg-gray-200 rounded px-8 py-1 flex flex-col items-center justify-center">
      <strong>{value}</strong>
      <div className="text-sm">{label}</div>
    </div>
  );
};

export default ProfileDetailsCard;

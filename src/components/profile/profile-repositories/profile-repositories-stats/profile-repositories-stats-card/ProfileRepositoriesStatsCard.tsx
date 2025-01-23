type ProfileRepositoriesStatsCardProps = {
  label: string;
  value: string | number;
  icon: React.ReactNode;
};

const ProfileRepositoriesStatsCard = ({
  label,
  value,
  icon,
}: ProfileRepositoriesStatsCardProps) => {
  return (
    <li className="flex items-center text-sm">
      {icon}
      <strong className="mr-1">{value}</strong>
      <span>{label}</span>
    </li>
  );
};

export default ProfileRepositoriesStatsCard;

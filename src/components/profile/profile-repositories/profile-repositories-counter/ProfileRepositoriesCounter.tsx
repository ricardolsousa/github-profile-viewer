type ProfileRepositoriesCounterProps = {
  repositoriesCounter: number;
};

const ProfileRepositoriesCounter = ({
  repositoriesCounter,
}: ProfileRepositoriesCounterProps) => {
  return (
    <div className="flex items-center">
      <span className="text-gray-500">Public Repositories</span>
      <div className="rounded-full py-0.5 px-3 bg-gray-200 ml-4 text-gray-500 text-sm">
        {repositoriesCounter}
      </div>
    </div>
  );
};

export default ProfileRepositoriesCounter;

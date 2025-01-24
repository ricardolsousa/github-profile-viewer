import { useEffect, useState } from "react";
import { getIconForLanguage } from "../../../../utils/icons/iconsUtils";

type ProfileRepositoriesLanguageProps = {
  language: string;
};

const ProfileRepositoriesLanguage = ({
  language,
}: ProfileRepositoriesLanguageProps) => {
  const [languageData, setLanguageData] = useState<{
    icon: any;
    color: string;
  } | null>(null);

  useEffect(() => {
    if (language) {
      const currLanguageData = getIconForLanguage(language);
      setLanguageData(currLanguageData);
    }
  }, [language]);

  return (
    <li className="mr-4 flex items-center">
      {languageData && (
        <languageData.icon
          className="mr-1"
          style={{ height: "14px", width: "14px" }}
          color={languageData.color}
        />
      )}
      <strong>{language}</strong>
    </li>
  );
};

export default ProfileRepositoriesLanguage;

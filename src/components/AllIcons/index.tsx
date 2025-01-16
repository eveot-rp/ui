import { Text } from "@components/Text";
import * as evicons from "../Icon/icons";
import "./style.scss";
import { Icon } from "@components/Icon";

type EveotIconName = keyof typeof evicons;

export const AllIcons = () => {
  return (
    <div className="ev-icons">
      {Object.keys(evicons)
        .sort((a, b) => a.localeCompare(b))
        .map((ic) => {
          return (
            <div className="ev-icons-element">
              <Icon size="2rem" color="#fff" name={ic as EveotIconName} />
              <Text color="#fff" size="subheading">
                {ic}
              </Text>
            </div>
          );
        })}
    </div>
  );
};

import React from "react";
import { getFormatedData } from "../../assets/js/data-convertor";
import { IUserInfo } from "../../types/users";
import { Tile } from "../Tile/Tile";
import { TileListContainer } from "./TilesListStyle";

export interface TileListProps {
  data: IUserInfo[];
}

const TilesList: React.FC<TileListProps> = ({ data }) => {
  return (
    <TileListContainer>
      {data.map((user: IUserInfo) => {
        const {
          birthday,
          email,
          fullName,
          location,
          phone,
          national,
          nationalColor,
        } = getFormatedData(user);

        return (
          <Tile
            key={phone}
            birthday={birthday}
            email={email}
            fullName={fullName}
            location={location}
            phone={phone}
            national={national}
            nationalColor={nationalColor}
            picture={user.picture.large}
          />
        );
      })}
    </TileListContainer>
  );
};

export { TilesList };

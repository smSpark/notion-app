import React from "react";
import { GetFormateDataReturn } from "../../assets/js/data-convertor";
import { TileTextGroup } from "../../componentsHelpers/TileTextGroup/TileTextGroup";
import { ClipCopy } from "../ClipCopy/ClipCopy";
import { TileContainer, TileImage, TileImageWrapper, TileInfoWrapper, UserNationTile } from "./TileStyle";

export interface TileProps extends GetFormateDataReturn {
  picture: string;
}

const Tile: React.FC<TileProps> = ({
  birthday,
  email,
  fullName,
  location,
  national,
  nationalColor,
  phone,
  picture,
}) => {
  return (
    <TileContainer>
      <TileImageWrapper>
        <TileImage src={picture} alt={fullName} />
      </TileImageWrapper>
      <TileInfoWrapper>
        <TileTextGroup title="Full name">{fullName}</TileTextGroup>
        <TileTextGroup title="Birthday">{birthday}</TileTextGroup>
        <TileTextGroup title="Email">
          <ClipCopy alignCenter href={`mailto:${email}`}>
            {email}
          </ClipCopy>
        </TileTextGroup>
        <TileTextGroup title="Phone">
          <ClipCopy alignCenter href={`tel:${phone}`}>
            {phone}
          </ClipCopy>
        </TileTextGroup>
        <TileTextGroup title="Location">
          <ClipCopy alignCenter>{location}</ClipCopy>
        </TileTextGroup>
        <UserNationTile color={nationalColor.color} inverted={nationalColor.inverted}>
          {national}
        </UserNationTile>
      </TileInfoWrapper>
    </TileContainer>
  );
};

export { Tile };

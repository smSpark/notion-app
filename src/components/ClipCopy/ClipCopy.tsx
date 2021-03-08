import copy from "copy-to-clipboard";
import React, { useState } from "react";
import { SHOW_POPUP_TIME } from "../../assets/js/constants";
import {
  ClipButton,
  ClipCopyContentLink,
  ClipCopyContentText,
  ClipImage,
  ClipWrapper,
  SuccessMessage,
} from "./ClipCopyStyle";

export interface ClipCopyProp {
  href?: string;
  alignCenter?: boolean;
}

const ClipCopy: React.FC<ClipCopyProp> = ({ children, href, alignCenter }) => {
  const [successCopy, setSuccessCopy] = useState(false);

  const copyToClip = () => {
    if (typeof children === "string") {
      const status = copy(children);
      setSuccessCopy(status);
      setTimeout(() => {
        setSuccessCopy(false);
      }, SHOW_POPUP_TIME);
    }
  };

  return (
    <ClipWrapper alignCenter={alignCenter}>
      <ClipButton alignCenter={alignCenter} type="button" onClick={copyToClip}>
        <ClipImage />
        {successCopy && <SuccessMessage>Скопировано!</SuccessMessage>}
      </ClipButton>
      {href ? (
        <ClipCopyContentLink href={href}>{children}</ClipCopyContentLink>
      ) : (
        <ClipCopyContentText>{children}</ClipCopyContentText>
      )}
    </ClipWrapper>
  );
};

export { ClipCopy };

import React from "react";
import styled from "styled-components";
import { connect, useSelector } from "react-redux";
import { getTypographyByKey, Text, TextType } from "design-system-old";
import { Icon } from "design-system";
import { setGlobalSearchCategory } from "actions/globalSearchActions";
import { HELPBAR_PLACEHOLDER } from "@appsmith/constants/messages";
import AnalyticsUtil from "@appsmith/utils/AnalyticsUtil";
import { modText } from "utils/helpers";
import { filterCategories, SEARCH_CATEGORY_ID } from "./utils";
import { protectedModeSelector } from "selectors/gitSyncSelectors";
import type { AppState } from "@appsmith/reducers";
import { getIsSideBySideEnabled } from "selectors/ideSelectors";

const StyledHelpBar = styled.button<{ isSideBySideFlagEnabled?: boolean }>`
  padding: 0 var(--ads-v2-spaces-3);
  margin: var(--ads-v2-spaces-2);
  .placeholder-text {
    ${getTypographyByKey("p2")}
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  flex: 1;
  max-width: 210px;
  border: 1px solid var(--ads-v2-color-border);
  border-radius: var(--ads-v2-border-radius);
  background-color: var(--ads-v2-color-bg);
  font-family: var(--ads-v2-font-family);
  font-size: var(--ads-v2-font-size-4);
  color: var(--ads-v2-color-fg);
  &:hover {
    border: 1px solid var(--ads-v2-color-border-emphasis-plus);
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
  }
  ${({ isSideBySideFlagEnabled }) =>
    isSideBySideFlagEnabled &&
    `
      flex-grow: 0;
      gap: 8px;
      min-width: fit-content;
  `}
`;

interface Props {
  toggleShowModal: () => void;
  isProtectedMode: boolean;
}

function HelpBar({ isProtectedMode, toggleShowModal }: Props) {
  const isSideBySideFlagEnabled = useSelector(getIsSideBySideEnabled);

  return (
    <StyledHelpBar
      className="t--global-search-modal-trigger"
      data-testid="global-search-modal-trigger"
      disabled={isProtectedMode}
      isSideBySideFlagEnabled={isSideBySideFlagEnabled}
      onClick={toggleShowModal}
    >
      {!isSideBySideFlagEnabled && (
        <Text type={TextType.P2}>{HELPBAR_PLACEHOLDER()}</Text>
      )}
      {isSideBySideFlagEnabled && <Icon name={"search-line"} size={"md"} />}
      <Text italic type={TextType.P3}>
        {modText()} K
      </Text>
    </StyledHelpBar>
  );
}

const mapStateToProps = (state: AppState) => ({
  isProtectedMode: protectedModeSelector(state),
});

// TODO: Fix this the next time the file is edited
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: any) => ({
  toggleShowModal: () => {
    AnalyticsUtil.logEvent("OPEN_OMNIBAR", { source: "NAVBAR_CLICK" });
    dispatch(
      setGlobalSearchCategory(filterCategories[SEARCH_CATEGORY_ID.INIT]),
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HelpBar);

import React from "react";
import AddLibraryPopover from "./AddLibraryPopover";
import PaneHeader from "./PaneHeader";
import { useSelector } from "react-redux";
import { selectLibrariesForExplorer } from "@appsmith/selectors/entitiesSelector";
import { animated, useTransition } from "react-spring";
import { LibraryEntity } from "pages/Editor/Explorer/Libraries";
import { Flex } from "design-system";
import { DEFAULT_EXPLORER_PANE_WIDTH } from "constants/AppConstants";

const LibrarySidePane = () => {
  const libraries = useSelector(selectLibrariesForExplorer);
  const transitions = useTransition(libraries, {
    keys: (lib) => lib.name,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  });
  return (
    <Flex
      borderRight="1px solid var(--ads-v2-color-border)"
      flexDirection="column"
      height="100%"
      width={DEFAULT_EXPLORER_PANE_WIDTH + "px"}
    >
      <PaneHeader
        rightIcon={<AddLibraryPopover />}
        title="Installed Libraries"
      />
      {transitions((style, lib) => (
        <animated.div style={style}>
          <LibraryEntity lib={lib} />
        </animated.div>
      ))}
    </Flex>
  );
};

export default LibrarySidePane;

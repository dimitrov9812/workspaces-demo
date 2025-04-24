import { useState } from "react";
import { WorkspaceIconButton, WorkspaceSaveButton, WorkspaceTitle } from "@interopio/workspaces-ui-react";
import CustomCloseButton from "./CustomCloseButton";
import { WorkspaceTabComponentProps, WorkspaceWindowTabComponentProps } from "@interopio/workspaces-ui-react/dist/cjs/types/api";

const CustomWorkspaceTab: React.FC<WorkspaceTabComponentProps> = ({ isPinned, title, onCloseClick, onSaveClick, icon, showSaveButton, showCloseButton }) => {
    return (
        <div className="my-custom-workspace-tab">
            {/* {isPinned ? <WorkspaceIconButton icon={icon} /> : showSaveButton && <SaveButton showSavePopup={onSaveClick} />} */}
            <WorkspaceTitle title="Custom Workspace Title 2"/>
            {(!isPinned && showCloseButton) && <CustomCloseButton close={onCloseClick} />}
        </div>
    );
};

export default CustomWorkspaceTab;
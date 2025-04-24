import CustomCloseButton from "./CustomCloseButton";
import { WorkspaceWindowTabComponentProps } from "@interopio/workspaces-ui-react/dist/cjs/types/api";


const CustomWorkspaceComponent: React.FC = (props) => {
    // console.log("CustomWorkspaceComponent", props);
    return (
        <>
            {/* <h6 style={{ color: "red", fontSize: "16px", margin: "0" }} onClick={() => close()}>
                Custom Workspace
            </h6> */}
            {/* {<CustomCloseButton {...close} />} */}
        </>
    );
}


export default CustomWorkspaceComponent;
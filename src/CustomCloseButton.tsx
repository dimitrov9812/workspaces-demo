import { useEffect, useRef } from "react";

interface CustomCloseButtonProps {
    close: () => void;
}

const CustomCloseButton: React.FC<CustomCloseButtonProps> = ({ close }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) { return };

        // Stop the propagation of the `"mousedown"` event,
        // in order to prevent the Workspaces framework from processing it.
        ref.current.onmousedown = e => e.stopPropagation();
    }, [ref]);

    return <button ref={ref} onClick={() => close()}>xxxx</button>
};

export default CustomCloseButton;
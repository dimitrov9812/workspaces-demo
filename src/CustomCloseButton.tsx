import { useEffect, useRef } from "react";

interface CustomCloseButtonProps {
    close: () => void;
}

const CustomCloseButton = ({ close }: CustomCloseButtonProps) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) { return };

        // Stop the propagation of the `"mousedown"` event,
        // in order to prevent the Workspaces framework from processing it.
        (ref.current as any).onmousedown = (e: any) => e.stopPropagation();
    }, [ref]);

    return <button ref={ref} onClick={() => close()}>x</button>
};

export default CustomCloseButton;
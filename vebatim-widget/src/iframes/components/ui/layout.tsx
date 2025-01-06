import { useAppContext } from "../../lib/contexts/app";

export const Layout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    useAppContext();
    return <div>
        {children}
    </div>;
};
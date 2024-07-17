import { Header } from "../components/header-input";

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({
    children,
}: Props) => {
    return (
        <>
            <div>
                {children}
            </div>
        </>
    )
}

export default MainLayout;
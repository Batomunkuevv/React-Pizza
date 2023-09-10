import { FC } from "react";
import { Outlet } from "react-router";
import { AppHeader } from "../app-header";

export const Layout: FC = () => {
    return (
        <div className="wrapper">
            <div className="wrapper__body">
                <AppHeader />
                <main className="page">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

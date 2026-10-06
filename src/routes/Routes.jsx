import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../components/Home";
import StudyRoom from "../components/StudyRoom";
import Notes from "../components/Notes";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path:"StudyRoom",
                Component: StudyRoom,
            },
            {
                path:"Notes",
                Component: Notes
            }
           
        ],
    },
]);
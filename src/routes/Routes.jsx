import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../components/Home";
import StudyRoom from "../components/StudyRoom";
import Notes from "../components/Notes";
import QuickNotes from "../components/QuickNotes";
import ShareNotes from "../components/ShareNotes";
import CampusConnect from "../components/CampusConnect";
import ProjectRoom from "../components/ProjectRoom";

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
                path:"ProjectRoom",
                Component: ProjectRoom,
            },
            {
                path:"Notes",
                Component: Notes
            },
       
            {
                path:"QuickNotes",
                Component: QuickNotes
            },
            {
                path:"ShareNotes",
                Component: ShareNotes
            },
            
             {
                    path:"CampusConnect",
                    Component: CampusConnect
                
            }
           
        ],
    },
]);
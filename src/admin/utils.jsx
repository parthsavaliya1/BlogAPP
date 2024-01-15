import { RiDashboard2Line } from "react-icons/ri";
import { MdOutlinePostAdd } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoAnalytics } from "react-icons/io5";
export const headerTab = [
    {
        name: "Dashboard",
        icon:<RiDashboard2Line color="white"/>
    },
    {
        name: "Post",
        icon:<MdOutlinePostAdd/>
    },
    {
        name: "Tags",
        icon:<IoPricetagsOutline/>
    },
    {
        name: "Comments",
        icon:<FaRegComments/>
    },
    {
        name: "Users",
        icon:<LuUsers2/>
    },
    {
        name: "Settings",
        icon:<IoSettingsOutline/>
    },
    {
        name: "Analytics",
        icon:<IoAnalytics/>
    }
]
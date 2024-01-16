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
        icon: <RiDashboard2Line color="white" />,
        link: '/admin/dashboard'
    },
    {
        name: "Post",
        icon: <MdOutlinePostAdd />,
        link: '/admin/post'
    },
    {
        name: "Tags",
        icon: <IoPricetagsOutline />,
        link: '/admin/tags'

    },
    {
        name: "Comments",
        icon: <FaRegComments />,
        link: '/admin/comments'

    },
    {
        name: "Users",
        icon: <LuUsers2 />,
        link: '/admin/users'

    },
    {
        name: "Settings",
        icon: <IoSettingsOutline />,
        link: '/admin/settings'

    },
    {
        name: "Analytics",
        icon: <IoAnalytics />,
        link: '/admin/analytics'

    }
]

export const dashboardData = [
    {
        title:'Users',
        count:100,
    },
    {
        title:"Posts",
        count:400
    },
    {
        title:'Comments',
        count:100,
    },
    {
        title:"Tags",
        count:400
    },
    {
        title:"Likes",
        count:1000
    }

]
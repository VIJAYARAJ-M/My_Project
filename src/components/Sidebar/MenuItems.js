import React from "react"
import { FaTh, FaUserAlt, FaRegChartBar,
    FaCommentAlt, FaShoppingBag, FaThList } from "react-icons/fa"
import {FiChevronUp, FiChevronDown} from "react-icons/fi"

export const menuItem =[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>,
            iconClosed: <FiChevronDown/>,
            iconOpened: <FiChevronUp />,
    
            subNav: [
                {
                  title: 'Users',
                  path: '/overview/users',
                  icon: <FaTh />
                },
                {
                  title: 'Revenue',
                  path: '/overview/revenue',
                  icon: <FaTh />
                }
              ]
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>,
            iconClosed: <FiChevronDown/>,
            iconOpened: <FiChevronUp />,
    
            subNav: [
                {
                  title: 'Users',
                  path: '/overview/users',
                  icon: <FaTh />
                },
                {
                  title: 'Revenue',
                  path: '/overview/revenue',
                  icon: <FaTh />
                }
              ]
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<FaThList/>
        }
    ]
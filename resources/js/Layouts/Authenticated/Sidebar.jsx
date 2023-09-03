import { Link } from "@inertiajs/react";
import SubscriptionDetail from "./SubscriptionDetail";
import MenuItem from "./MenuItem";
import { userMenu, menuOthers } from "./MenuList";

export default function Sidebar({auth}) {
    return (
        <>
            <aside className="fixed z-50 w-[300px] h-full">
                <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                    <a href="/">
                        <img src="/images/moonton.svg" alt="" />
                    </a>
                    <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                        {/* Menu */}
                        <div>
                            <div className="text-gray-1 text-sm mb-4">Menu</div>
                            {userMenu.map((menu, index) => (
                                <MenuItem
                                    key={`${index}` - `${menu.text}`}
                                    link={menu.link}
                                    text={menu.text}
                                    icon={menu.icon}
                                    isActive={menu.link && route().current(menu.link)}
                                 />
                            ))}
                        </div>
                        {/* ./Menu */}
                        {/* Others */}
                        <div>
                            <div className="text-gray-1 side-link mb-4">Others</div>
                            {menuOthers.map((other, index) => (
                                <MenuItem key={`${index} - ${other.text}`}  text={other.text} icon={other.icon} link={other.link} isActive={other.link && route().current(other.link)} method={other.method} />
                            ))}
                        </div>
                        {/* ./Others */}

                        {/* Subscription details */}
                        {auth.activePlan &&
                            <SubscriptionDetail name={auth.activePlan.name}  isPremium={auth.activePlan.name === "Premium"} remainingActiveDays={auth.activePlan.remainingActiveDays} activeDays={auth.activePlan.activeDays} />
                        }
                    </div>
                </div>
            </aside>
        </>
    )
}

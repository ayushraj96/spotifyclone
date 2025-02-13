import { Icon } from "@iconify/react";

const IconText = ({ iconName, displayText, active }) => {
    return (
        <div className="flex item-center justify-start cursor-pointer">
            <div className="px-5 py-2">
                <Icon icon={iconName} color={active ? "white" : "gray"} fontSize={25} />

            </div>
            <div className={`${active ? "text-white" : "text-gray-400"}
              text-sm font-semibold py-2 hover:text-white`}>
                {displayText}
            </div>
        </div>

    );
}
export default IconText;
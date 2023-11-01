import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
    name?: string | null;
    image?: string | null;
    clasName?: string;
}

function UserAvatar({ name, image, clasName }: Props) {
    return (
        <Avatar className={cn("bg-white text-black", clasName)}>
            {image && (
                <Image
                    src={image}
                    alt={name || "User name"}
                    height={40}
                    width={40}
                    className="rounded-full"
                />
            )}
            <AvatarFallback delayMs={1000} className="dark:bg-white dark:text-black text-lg">
                {name?.split(" ").map((n) => n[0]).join("")}
            </AvatarFallback>
        </Avatar>
    )
}

export default UserAvatar
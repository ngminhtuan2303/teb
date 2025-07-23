import { Button, ButtonProps } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { HEADER_LINKS } from "./constants";
import Link from "next/link";
import { LoginButton } from "./LoginButton";
import { cn } from "@/lib/utils";

export function MobileHamburger({
  className,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          site="home"
          variant="ghost"
          {...props}
          className={cn(
            "[&_svg]:size-5 text-muted-foreground md:hidden",
            className,
          )}
        >
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col gap-2 px-4">
          {HEADER_LINKS.map(({ path, label }) => (
            <Link href={path} key={path}>
              <Button className="w-full" site="home" variant="ghost">
                {label}
              </Button>
            </Link>
          ))}
        </div>

        <DrawerFooter>
          <LoginButton className="w-full" showName />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

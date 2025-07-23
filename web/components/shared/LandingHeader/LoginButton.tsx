import { cn } from "@/lib/utils";
import { getSession } from "@/server/actions/session";
import { UserAvatar } from "../UserAvatar";
import { AvatarDropdown } from "../AvatarDropdown";
import { Button, ButtonProps } from "@/components/ui/button";
import Link from "next/link";
import { cva } from "class-variance-authority";

export async function LoginButton({
  className,
  shadow = true,
  site = "home",
  children = "Sign In",
  showName,
  ...props
}: Readonly<ButtonProps> & { showName?: boolean }) {
  const auth = await getSession();
  if (!auth)
    return (
      <Link href="/auth/login">
        <Button
          className={cn("font-kumbh-sans", className)}
          shadow={shadow}
          site={site}
          {...props}
        >
          {children}
        </Button>
      </Link>
    );

  const triggerStyle = cva("", {
    variants: {
      showName: {
        true: "flex items-center justify-center gap-4",
        false: "rounded-full",
      },
    },
  });
  return (
    <AvatarDropdown
      className={triggerStyle({ showName, className })}
      ctx="home"
      showName={showName}
      user={auth.user}
    >
      <UserAvatar user={auth.user} />
      {showName ? auth.user?.name : null}
    </AvatarDropdown>
  );
}

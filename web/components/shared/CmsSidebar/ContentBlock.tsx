"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ROUTE } from "@/lib/constants";
import { UserRole } from "@/lib/schemas/user";
import {
  Boxes,
  Calendar,
  Home,
  LucideIcon,
  Minus,
  Plus,
  Tag,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithRef, useState } from "react";
import { AuthGuardClient } from "../AuthGuardClient";

type NavItem = {
  title: string;
  icon: LucideIcon;
  items: { title: string; url: string; guard?: UserRole[] }[];
};

// Menu items.
const navMain: NavItem[] = [
  {
    title: "Products",
    icon: Calendar,
    items: [
      {
        title: "Product",
        url: ROUTE.CMS.product.root,
      },
    ],
  },
  {
    title: "Tags",
    icon: Tag,
    items: [
      {
        title: "Tag",
        url: ROUTE.CMS.tag.root,
      },
      {
        title: "New Tag",
        url: ROUTE.CMS.tag.create,
        guard: ["ADMIN"],
      },
    ],
  },
  {
    title: "Industries",
    icon: Boxes,
    items: [
      {
        title: "Industry",
        url: ROUTE.CMS.industry.root,
      },
      {
        title: "New Industry",
        url: ROUTE.CMS.industry.create,
        guard: ["ADMIN"],
      },
    ],
  },
  {
    title: "User Management",
    icon: UserRound,
    items: [
      {
        title: "Users",
        url: ROUTE.CMS.userManagement.root,
      },
      {
        title: "Sale Requests",
        url: `${ROUTE.CMS.userManagement.root}?tab=sales`,
      },
      {
        title: "Sale Settings",
        url: ROUTE.CMS.sale.root,
      },
    ],
  },
];

export function ContentBlock() {
  const [activeItem, setActiveItem] = useState<string>("");

  const handleSubItemClick = (title: string) => {
    setActiveItem(title);
  };
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem key={"Home"}>
              <SidebarMenuButton asChild>
                <Link href={"/admin"}>
                  <Home />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            {navMain.map((item) => (
              <Collapsible className="group/collapsible" key={item.title}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.icon ? <item.icon /> : null}
                      {item.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) =>
                          !item.guard ? (
                            <SubmenuItem
                              isActive={activeItem === item.title}
                              item={item}
                              key={item.title}
                              onClick={() => handleSubItemClick(item.title)}
                            />
                          ) : (
                            <AuthGuardClient
                              key={item.title}
                              viewableFor={item.guard}
                            >
                              <SubmenuItem
                                isActive={activeItem === item.title}
                                item={item}
                                onClick={() => handleSubItemClick(item.title)}
                              />
                            </AuthGuardClient>
                          ),
                        )}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup />
    </SidebarContent>
  );
}
function SubmenuItem({
  item,
  ...props
}: { item: NavItem["items"][number] } & ComponentPropsWithRef<
  typeof SidebarMenuSubButton
>) {
  return (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton asChild {...props}>
        <Link href={item.url}>{item.title}</Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
}

"use client"

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toTitleCase } from "@/lib/utils";

interface BreadcrumbItemProps {
  text: string;
  href: string;
}

export default function BreadcrumbBar() {
  const paths = usePathname();
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItemProps[]>([]);

  useEffect(() => {
    const pathArray = paths.split("/");
    pathArray.shift();

    const BreadcrumbItems = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/');
      const text = toTitleCase(encodeURIComponent(path.replace(/-/g, ' ')));
      return { text, href };
    });

    setBreadcrumbs(BreadcrumbItems);
  }, [paths]);

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
          {breadcrumbs.map((breadcrumb, index) => (
            <>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink asChild>
                  <Link href={breadcrumb.href} passHref>{breadcrumb.text}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
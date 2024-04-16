import type { ReactNode } from "react";
import type { IndexRouteObject, NonIndexRouteObject } from "react-router-dom";

interface BaseMenuItem {
  name?: string;
  indexPath?: string;
  icon?: ReactNode;
  activeIcon?: ReactNode;
  key?: string;
}

interface IndexRoute extends IndexRouteObject, BaseMenuItem {}
interface NonIndexRoute extends NonIndexRouteObject, BaseMenuItem {
  children?: Array<NonIndexRoute | IndexRoute>;
}
export type MenuType = Omit<IndexRoute, "element"> | Omit<NonIndexRoute, "element">;

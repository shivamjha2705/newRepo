// @flow
import {
  CHANGE_LAYOUT,
  CHANGE_SIDEBAR_THEME,
  CHANGE_SIDEBAR_TYPE,
  CHANGE_TOPBAR_THEME,
  SHOW_RIGHT_SIDEBAR,
  TOGGLE_LEFTMENU,
  SHOW_SIDEBAR,
} from "./actionTypes";

import { layoutTypes, leftSideBarTheme, leftSideBarType, topbarTheme } from "constants/layout";

const INIT_STATE = {
  layoutType: layoutTypes.VERTICAL,
  leftSideBarTheme: leftSideBarTheme.DARK,
  leftSideBarType: leftSideBarType.DEFAULT,
  topbarTheme: topbarTheme.LIGHT,
  showRightSidebar: false,
  isMobile: false,
  showSidebar: true,
  leftMenu: false,
};

const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_LAYOUT:
      return {
        ...state,
        layoutType: action.payload,
      };
   
    case CHANGE_SIDEBAR_THEME:
      return {
        ...state,
        leftSideBarTheme: action.payload,
      };
    case CHANGE_SIDEBAR_TYPE:
      return {
        ...state,
        leftSideBarType: action.payload.sidebarType,
      };
    case CHANGE_TOPBAR_THEME:
      return {
        ...state,
        topbarTheme: action.payload,
      };
    case SHOW_RIGHT_SIDEBAR:
      return {
        ...state,
        showRightSidebar: action.payload,
      };
    case SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: action.payload,
      };
    case TOGGLE_LEFTMENU:
      return {
        ...state,
        leftMenu: action.payload,
      };

    default:
      return state;
  }
};

export default Layout;

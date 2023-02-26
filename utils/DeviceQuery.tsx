import { isMobile } from "react-device-detect";

export enum DeviceType {
	desktop = "Desktop",
	mobile = "Mobile",
}

export function DeviceQuery() {
	if (isMobile) {
		return DeviceType.mobile;
	}
	return DeviceType.desktop;
}

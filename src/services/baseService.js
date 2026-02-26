import API from "./api";

export const getMarketingSolutions = () => API.get("marketing-solutions/");
export const getPortfolio = () => API.get("portfolio/");
export const getTeamMembers = () => API.get("team-members/");
export const getCoreServices = () => API.get("core-service/");
export const getServices = () => API.get("we-provide/");
export const getFeaturedWorks = () => API.get("featured-works/");

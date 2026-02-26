import API from "./api";

export const getMarketingSolutions = () => API.get("/api/marketing-solutions/");
export const getPortfolio = () => API.get("/api/portfolio/");
export const getTeamMembers = () => API.get("/api/team-members/");
export const getCoreServices = () => API.get("/api/core-service/");
export const getServices = () => API.get("/api/we-provide/");
export const getFeaturedWorks = () => API.get("/api/featured-works/");
export const getReviews = () => API.get("/api/review/");

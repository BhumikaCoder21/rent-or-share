import API from "./axios";

export const getDashboardStats = async () => {
   return API.get("/admin/stats");
};
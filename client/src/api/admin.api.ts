import API from "./axios";

export const getDashboardStats = async () => {
   const token = localStorage.getItem("token");
   return API.get("/admin/stats", {
      headers: {
         Authorization : `Bearer ${token}`,
      }
   });
};

export const getAllProfiles = async () => {
   const token = localStorage.getItem("token");
   return API.get("/user/all-profiles", {
      headers: {
         Authorization : `Bearer ${token}`,
      }
   });
};    


export const deleteUser = async (id : string) => {
   const token = localStorage.getItem("token");
   return API.delete(`/user/profile/${id}`, {
      headers: {
         Authorization : `Bearer ${token}`,
      }
   });
};    
export const authService = {
    login: async (email, password) => {
      const adminEmail = "iamadmin@gmail.com"; 
      const adminPassword = "SuperSecret123";
  
      if (email === adminEmail && password === adminPassword) {
        localStorage.setItem("adminLoggedIn", "true"); 
        return { success: true };
      } else {
        throw new Error("Invalid admin credentials");
      }
    },
  
    logout: async () => {
      localStorage.removeItem("adminLoggedIn");
    },
  
    getCurrentUser: async () => {
      return localStorage.getItem("adminLoggedIn") === "true" ? { email: "admin@example.com" } : null;
    },
  };
  
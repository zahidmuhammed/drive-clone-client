// import NextAuth, { NextAuthOptions } from "next-auth"; // Updated import
// import { getSession } from "next-auth/react"; // Add this import

// export const authConfig: NextAuthOptions = {
//     // Specify the type here
//     pages: {
//         signIn: "/login",
//     },
//     callbacks: {
//         async redirect({ url, baseUrl }) {
//             const session = await getSession(); // Get the session
//             const isLoggedIn = !!session?.user; // Check if user is logged in
//             const isOnDashboard = url.startsWith("/dashboard");
//             if (isOnDashboard) {
//                 if (isLoggedIn) return url; // Allow access to dashboard
//                 return baseUrl; // Redirect unauthenticated users to login page
//             } else if (isLoggedIn) {
//                 return new URL("/dashboard", baseUrl).toString(); // Redirect logged-in users to dashboard
//             }
//             return baseUrl; // Default redirect
//         },
//     },
//     providers: [
//         // Add this line
//         // Add your authentication providers here
//     ],
// } satisfies NextAuthOptions; // Use NextAuthOptions instead

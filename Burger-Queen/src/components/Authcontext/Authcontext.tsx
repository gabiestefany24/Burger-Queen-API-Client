// import React, { createContext, useState, ReactNode } from 'react';

// type AuthContextType = {
//   token: string;
//   setToken: (newToken: string) => void;
// };

// export const AuthContext = createContext<AuthContextType | null>(null);
// // export const AuthContext = createContext<AuthContextType>({ token: '', setToken: () => {} });


// type AuthProviderProps = {
//   children: ReactNode;
// };

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [token, setToken] = useState<string>('');

//   const updateToken = (newToken: string) => {
//     setToken(newToken);
//   };

//   const authContextValue: AuthContextType = {
//     token,
//     setToken: updateToken,
//   };

//   return (
//     <AuthContext.Provider value={authContextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// }; 
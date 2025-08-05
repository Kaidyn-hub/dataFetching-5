import React, { createContext, ReactNode, useState } from "react";
import { Post, User } from "../types/types";

interface DataContextType {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  return (
    <DataContext.Provider value={{ posts, setPosts, users, setUsers }}>
      {children}
    </DataContext.Provider>
  );
};

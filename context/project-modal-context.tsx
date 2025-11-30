"use client";

import React, { useState, createContext, useContext } from "react";

type ProjectModalContextProviderProps = {
  children: React.ReactNode;
};

type ProjectModalContextType = {
  isProjectModalOpen: boolean;
  setIsProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProjectModalContext =
  createContext<ProjectModalContextType | null>(null);

export default function ProjectModalContextProvider({
  children,
}: ProjectModalContextProviderProps) {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <ProjectModalContext.Provider
      value={{
        isProjectModalOpen,
        setIsProjectModalOpen,
      }}
    >
      {children}
    </ProjectModalContext.Provider>
  );
}

export function useProjectModalContext() {
  const context = useContext(ProjectModalContext);

  if (context === null) {
    throw new Error(
      "useProjectModalContext must be used within a ProjectModalContextProvider"
    );
  }

  return context;
}

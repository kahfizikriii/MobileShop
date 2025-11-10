import React, { createContext, useContext, useState } from 'react';

type DrawerLockContextType = {
  gestureEnabled: boolean;
  setGestureEnabled: (v: boolean) => void;
};

const DrawerLockContext = createContext<DrawerLockContextType | undefined>(undefined);

export const DrawerLockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gestureEnabled, setGestureEnabled] = useState<boolean>(false); // locked by default
  return (
    <DrawerLockContext.Provider value={{ gestureEnabled, setGestureEnabled }}>
      {children}
    </DrawerLockContext.Provider>
  );
};

export const useDrawerLock = () => {
  const ctx = useContext(DrawerLockContext);
  if (!ctx) throw new Error('useDrawerLock must be used within DrawerLockProvider');
  return ctx;
};

import { useState } from "react";

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return { isOpen, setIsOpen };
};
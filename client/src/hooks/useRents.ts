"use client";

import { useEffect, useState } from "react";
import { getAllScooties, createScootyRent } from "@/api/rentApi";
import { ScootyRent } from "@/types/rent.types";

export const useScooty = () => {
  const [scooties, setScooties] = useState<ScootyRent[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchScooties = async () => {
    try {
      setLoading(true);
      const data = await getAllScooties();
      setScooties(data);
    } finally {
      setLoading(false);
    }
  };

  const addScooty = async (data: ScootyRent) => {
    const newScooty = await createScootyRent(data);
    setScooties((prev) => [...prev, newScooty]);
  };

  useEffect(() => {
    fetchScooties();
  }, []);

  return { scooties, loading, addScooty, fetchScooties };
};

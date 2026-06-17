"use client";

import { useEffect, useState } from "react";
import StatsCard from "../components/StatsCard";

export default function Home() {
  const [stats, setStats] = useState({
    pipelines: 0,
    containers: 0,
    deployments: 0,
  });

  useEffect(() => {
    fetch("http://localhost:8000/api/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
      });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">

      <div className="border-b border-zinc-800 p-6">

        <h1 className="text-4xl font-bold">
          AI DevOps Command Center
        </h1>

        <p className="text-gray-400 mt-2">
          Jenkins • Docker • AI Monitoring
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-6 p-8">

        <StatsCard
          title="Pipelines"
          value={stats.pipelines.toString()}
        />

        <StatsCard
          title="Containers"
          value={stats.containers.toString()}
        />

        <StatsCard
          title="Deployments"
          value={stats.deployments.toString()}
        />

      </div>

    </main>
  );
}
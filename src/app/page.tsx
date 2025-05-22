"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import { useEffect, useState } from "react";

export default function Home() {
  // const [users, setUsers] = useState<unknown[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   fetch("/api/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setError("Błąd pobierania użytkowników");
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <>
      <Header />
      <Hero />
      {/* <div className="mt-8">
        {loading && <p>Ładowanie użytkowników...</p>}
        {error && <p>{error}</p>}
        {users && users.length > 0 && (
          <div>
            <p>Użytkownicy z Supabase:</p>
            <ul className="mt-2">
              {users.map((user, idx) => (
                <li key={user.id || idx}>{JSON.stringify(user)}</li>
              ))}
            </ul>
          </div>
        )}
        {users && users.length === 0 && !loading && <p>Brak użytkowników.</p>}
      </div> */}
    </>
  );
}

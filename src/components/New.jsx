"use client";
import React, { useState } from "react";
import Loading from "./Loading";
import { useRouter } from "next/navigation";

const New = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name: name, designation: designation };
    setLoading(true);
    const res = await fetch("/api/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (!res.ok) {
      alert("Something Error");
    } else {
      alert("Employee Added");
      setName("");
      setDesignation("");
      router.refresh();
    }
  };

  return (
    <div>
      {loading && <Loading />}
      <div className="new-emp">
        <form>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter Name"
            required
          />
          <input
            type="designation"
            onChange={(e) => setDesignation(e.target.value)}
            value={designation}
            placeholder="Enter Designation"
            required
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default New;

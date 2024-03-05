"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Loading from "./Loading";

const Employee = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Aye you sure to Delete?");
    if (confirmed) {
      try {
        setLoading(true);
        const res = await fetch(`/api/delete?id=${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        setLoading(false);
        if (res.ok) {
          alert("User Deleted");
          router.refresh();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      {loading && <Loading />}
      <article>
        <h2>{data.name}</h2>
        <p>{data.designation}</p>

        <div style={{ marginTop: "15px", display: "flex", gap: "5px" }}>
          <button onClick={() => handleDelete(data.id)}>Delete</button>
          <button>Edit</button>
        </div>
      </article>
    </div>
  );
};

export default Employee;

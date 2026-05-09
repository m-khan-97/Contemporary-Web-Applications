"use client";

export default function Error({ error }) {
  return <h3 style={{ color: "red" }}>Error: {error.message}</h3>;
}
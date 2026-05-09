async function Page() {
  function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  await pause(3000);

  return <p>Slow content loaded!</p>;
}

export default Page;
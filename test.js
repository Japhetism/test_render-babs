async function test() {
  const res = await fetch(
    "https://kommas500-6bmmgnaq.b4a.run/api/user/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fullName: "abundance ken-dickson",
        emailAddress: "abundiko111@gmail.com",
        password: "111111Aa"
      })
    }
  );
  // const response = await fetch(url, {
  //   method: "POST",
  //   body: _hasFile ? formData : JSON.stringify(jsonData),
  //   headers: _hasFile
  //     ? { ...headers }
  //     : {
  //         // "Content-Type": "application/json",
  //         // "Access-Control-Allow-Origin": "http://localhost:3000",
  //         // "Access-Control-Allow-Methods": "POST",
  //         // "Access-Control-Allow-Headers": "Content-Type, Authorization",
  //         ...headers
  //       }
  // });

  const data = await res.json();

  console.log(data, 10);
}

test();

const res = await fetch('http://localhost:8800/therapists/');
  const data = await res.json();
  console.log(data);
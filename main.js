function go() {
  if (!document.getElementById("link").value.includes("https://") || !document.getElementById("link").value.includes("http://") {
    document.getElementById("link").value = "http://" + document.getElementById("link").value;    
  };
  document.getElementById("iframe").src=document.getElementById("link").value;
}

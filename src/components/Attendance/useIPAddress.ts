import React from "react";

export const useIPAddress = () => {
  const [ip, setIP] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchIP = async () => {
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        setIP(data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
        setIP(null);
      }
    };

    fetchIP();
  }, []);

  return { ip };
}

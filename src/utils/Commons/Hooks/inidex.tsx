export  const formatDate = (isoString:any) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("en-US", {
    month: "long",
      day: "2-digit",
      year: "numeric",
    }).format(date)
    // .replace(" ", ", ",);

  };


  export const formatTime = (isoString:any) => {
    const date = new Date(isoString);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
  
    // Convert 24-hour time to 12-hour time
    hours = hours % 12 || 12; // Convert 0 to 12 for midnight
  
    return `${hours}:${minutes} ${ampm}`;
  }
  
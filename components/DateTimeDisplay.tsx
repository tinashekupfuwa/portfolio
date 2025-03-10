import * as React from "react";
import { useEffect, useState } from "react";

interface DateTimeDisplayProps {
  className?: string;
}

export const DateTimeDisplay: React.FC<DateTimeDisplayProps> = ({
  className,
}) => {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setDateTime(now.toLocaleDateString("en-US", options));
    };

    // Update immediately
    updateDateTime();

    // Update every second
    const interval = setInterval(updateDateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`text-[#4A4A4A] dark:text-white text-xl font-medium font-mono ${
        className || ""
      }`}
    >
      {dateTime}
    </div>
  );
};

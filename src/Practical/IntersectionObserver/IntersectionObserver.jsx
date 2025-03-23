import { useEffect, useRef, useState } from "react";

const IntersectionObserverComp = () => {
  const [data] = useState([...new Array(60)]);
  const arrayListRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.backgroundColor = "lightblue";
          } else {
            entry.target.style.backgroundColor = "red";
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "200px",
        root: document.querySelector("container"),
      }
    );

    arrayListRef.current.forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      {data?.map((_, index) => {
        return (
          <div
            style={{ padding: "10px" }}
            ref={(el) => {
              arrayListRef.current[index] = el;
            }}
            key={index}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};

export default IntersectionObserverComp;

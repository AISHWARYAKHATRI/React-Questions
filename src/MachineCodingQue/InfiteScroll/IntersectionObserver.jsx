import { useEffect, useRef, useState } from "react";

const IntersectionObserverDemo = () => {
  const [data, setData] = useState([...new Array(35)]);
  const lastEleRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        loadMore();
      }
    });

    observer.observe(lastEleRef.current);
  }, [data.length]);

  function loadMore() {
    setLoading(true);
    setTimeout(() => {
      setData((prev) => [...prev, ...new Array(20)]);
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="container">
      {data?.map((_, index) => {
        return (
          <div key={index} ref={data?.length - 1 === index ? lastEleRef : null}>
            {index + 1}
          </div>
        );
      })}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default IntersectionObserverDemo;

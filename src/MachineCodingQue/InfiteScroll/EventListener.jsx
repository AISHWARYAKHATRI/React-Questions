import { useEffect, useRef, useState } from 'react'

function EventListener() {
const containerRef = useRef(useRef);
const [currentIndex, setCurrentIndex]  = useState(10)
const [comments, setComments] = useState([]);
const [allComments, setAllComments] = useState([])

useEffect(() => {
  fetchComments()
}, [])

const handleScroll =
 debounce(() => {
  const container = containerRef.current;
  console.log(container.scrollTop + container.clientHeight >= container.scrollHeight - 10);
  
  if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10) {
    if (currentIndex >= allComments.length) return
    setComments(prev => [...prev, ...allComments.slice(currentIndex, currentIndex + 20)])
    setCurrentIndex(currentIndex + 20)
  }
})

useEffect(() => {
  containerRef.current.addEventListener('scroll', handleScroll)
  return () => {
    containerRef.current.removeEventListener('scroll', handleScroll)
  }
},[handleScroll])


function debounce (fun) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fun.call(this, ...args) 
    }, 200)
  }
}


async function fetchComments()  {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'GET'
  })
  const commentsData = await response.json()
  setAllComments(commentsData)
  setComments(commentsData?.slice(0, currentIndex));
}

  return (
    <div id="container" ref={containerRef}>
      {
        comments?.map((comment) => {
         return ( 
         <div key={comment?.id} style={{border: '1px solid #ddd', marginBottom: '10px', padding: '5px'}}>
            <h3>{comment?.name}</h3>
            <p>{comment?.body}</p>
          </div>)
        })
      }
    </div>
  )
}

export default EventListener

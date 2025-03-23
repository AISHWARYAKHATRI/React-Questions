import { useState } from 'react'

const EventListenerVariant = () => {
    const [data, setData]  = useState([...new Array(40)])
    const [loading, setLoading] = useState(false)

    const handleScroll = (event) => {
        const scrollTop = event.target.scrollTop;
        const clientHeight = event.target.clientHeight;
        const scrollHeight = event.target.scrollHeight;

        if (scrollTop  + clientHeight >= scrollHeight && !loading){
            loadMore()
        }
    }

    function loadMore () {
        setLoading(true)
        setTimeout(() => {
            setData(prev=> [...prev, ...new Array(10) ])
            setLoading(false)
        }, 1000)
    }

  return (
    <div onScroll={handleScroll} style={{height: '500px', overflowY: 'scroll'}}>
      {
        data.map((_, index) => {
            return <div key={index}>{index + 1}</div>
        })
      }
      {loading && <div>Loading...</div>}
    </div>
  )
}

export default EventListenerVariant

import { useEffect, useState } from "react";
import New from "../components/New.jsx";
import ReactPaginate from "react-paginate";

function Items({ currentItems, loading }) {
  return (
    <div className="screen-content">
      {loading ? (
        currentItems.map((item, index) => (
          <New
            key={index}
            title={item.title}
            link={item.link}
            img={
              item.enclosure?.url ||
              "https://cdn.britannica.com/25/93825-050-D1300547/collection-newspapers.jpg"
            }
            content={item.contentSnippet}
            day={item.pubDate}
          />
        ))
      ) : (
        <div className="text-center">Đang tải...</div>
      )}
    </div>
  );
}

function PaginatedItems({ rssItems, loading }) {
  const itemsPerPage = 9;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = rssItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(rssItems.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % rssItems.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} loading={loading} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="paging mt-6"
      />
    </>
  );
}

function News() {
  const [rssItems, setRssItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://103.15.51.131:3000/api/news/", {
          credentials: "include", // This allows credentials to be sent with the request
        });
        const data = await response.json();
        if (data.length > 0) {
          setLoading(true);
          console.log(data[0].enclosure.url);
          setRssItems(data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchdata();
  }, []);
  return (
    <body className="body screen-block ">
      <div className="">
        <div className="screen-title">Tin tức</div>
        <PaginatedItems rssItems={rssItems} loading={loading} />
      </div>
    </body>
  );
}

export default News;

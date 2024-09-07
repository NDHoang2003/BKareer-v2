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
            img={item.enclosure.url || item.link}
            content={item.contentSnippet}
            day={item.pubDate}
          />
        ))
      ) : (
        <div className="text-center">Loading...</div>
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
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} loading={loading} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="paging"
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
        const response = await fetch(
          "https://backend-datn-v2.vercel.app/api/news/"
        );
        const data = await response.json();
        if (data.length > 0) {
          console.log(data);
          setLoading(true);
          setRssItems(data);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchdata();
  }, []);
  return (
    <body className="body background ">
      <div className="">
        <div className="screen-title">Tin tức</div>
        <PaginatedItems rssItems={rssItems} loading={loading} />
      </div>
    </body>
  );
}
export default News;

import { useEffect, useState } from "react"
import axios from "axios";

const Search = () => {
  const [searchResult, setSearchResult ] = useState([]);
  const [key, setKey] = useState("");
  useEffect (() => {
    const search = async () => {
      try {
        if (!key.trim()){
          setSearchResult([])
          return
        }
        const res = await axios.get("http://localhost:5173/api/jobs" , {params : {key: key, limits : 5}})
        console.log(res)
    }catch (err) {
        console.log(err)
    }
    search()
    };
  }, [key])
  return (
    <form action="">
      <div className="search-wrapper">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Searching ..."
            value={key}
            onChange={e => setKey(e.target.value)} />
        </div>
      </div>
    </form>
  )
};

export default Search
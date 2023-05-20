import React,{useState,useEffect} from 'react'

const useDashboard = () => {
    const [setList, SetDataList] = useState([]);
    const [paginator, setPaginator] = useState({});
    const [Open, setOpen] = useState(false);
    const [searchValue,setSearchValue]=useState()
    const [loading ,setLoading]= useState(false)

    const getData = async ({ page, limit,value }) => {
        setLoading(false)
        try {
          const payload = {
            options:{
              limit,
              page,
              },
              query:{
                firstName:value||"",
                searchName:"firstName"
              }
          };
          setLoading(true)
          const list = await axios.post('http://localhost:2000/list', payload);
           const {docs,...rest} = list?.data
          SetDataList(docs);
          setPaginator(rest);
        } catch (error) {
          setLoading(false)
          console.log(error, 'error');
        }
      };
    
      useEffect(() => {
        getData({ page: 1, limit: 10});
      }, []);
    

  return {
    setList,
    Open,
    setOpen,
    SetDataList,
    paginator,
    searchValue,
    loading
  }
}

export default useDashboard
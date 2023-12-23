import React, { useEffect, useState } from 'react'

const Search = ({addItems,setAddItems}) => {

    const [search, setSearch] = useState('');
    useEffect(() => {
        if (search.trim() === '') {
            setAddItems(addItems)
        } else {
            
        
            const filterd = addItems.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()) ||
                item.content.toLowerCase().includes(search.toLowerCase()));
            setAddItems(filterd)
        }
    },[search,addItems])
  return (
      <div>
          <div className="input_field search_field">
            <input
              type="text"
                  className="input1"
                  value={search}
            onChange={(e)=>setSearch(e.target.value)}
              placeholder="Search Notes"
            />
          </div>
    </div>
  )
}

export default Search
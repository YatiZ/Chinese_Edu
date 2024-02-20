import { ChangeEvent, FC } from "react";
import { useNavigate } from "react-router-dom";


type Props = {
    searchQuery:string,
    levelFilter:string,
    setLevelFilter: (value:string)=>void,
    setSearchQuery: (value:string)=> void,
}

const Search: FC<Props> = props => {
    const navigate = useNavigate();
    const {
        searchQuery,
        levelFilter,
        setLevelFilter,
        setSearchQuery,
    } = props
    
    const handleLevelFilterChange = (event: ChangeEvent<HTMLSelectElement>)=>{
        setLevelFilter(event.target.value)
    }

    const handleSearchQueryChange = (event:ChangeEvent<HTMLInputElement>)=>{
       setSearchQuery(event.target.value)
    }

    const handleFilterClick =()=>{
       navigate(`levels?level=${levelFilter}&searchQuery=${searchQuery}`);
    }
  return (
    <section className='bg-tertiary-light px-4 py-6 rounded-lg'>
        <div className='container mx-auto flex gap-4 flex-wrap justify-between items-center'>
            <div className='w-full md:1/3 lg:w-auto mb-4 md:mb-0'>
                <label className='block text-sm font-medium mb-2 text-black'>Choose Chinese Levels</label>

                <div className='relative'>
                    <select value={levelFilter} onChange={handleLevelFilterChange} id="" className='w-full px-4 py-2 capitalize rounded leading-tight text-black focus:outline-none'>
                    <option value='All Levels'>All Levels</option>
                    <option value='HSK1'>HSK-1</option>
                    <option value='HSK2'>HSK-2</option>
                    <option value='HSK3'>HSK-3</option>
                    <option value='HSK4'>HSK-4</option>
                    <option value='HSK5'>HSK-5</option>
                    </select>
                </div>
            </div>

            <div className='w-full md:1/3 lg:w-auto mb-4 md:mb-0'>
                <label className='block text-sm font-medium mb-2 text-black'>
                    Search
                </label>
                <input value={searchQuery} onChange={handleSearchQueryChange} type="search" placeholder='Search ...' className='w-full px-4 py-3 rounded leading-tight text-black focus:outline-none' />
            </div>
            <button onClick={handleFilterClick} className='btn-primary' type='button'>Search</button>
        </div>
    </section>
  )
}

export default Search
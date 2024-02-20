'use client'

import Search from "@/components/shared/Search"
import { useState } from "react"

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [levelFilter, setLevelFilter] = useState('');

  return (
    <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} levelFilter = {levelFilter} setLevelFilter = {setLevelFilter}/>
  )
}

export default SearchPage
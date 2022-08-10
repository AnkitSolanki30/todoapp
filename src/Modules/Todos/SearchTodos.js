import React, { useState } from 'react'

const SearchTodos = ({ parentCallBack, setOrder, setSortData, setPageCount, setLimitCount, setSearchText1 }) => {

    const [searchText, setSearchText] = useState("")

    const handleSearch = () => {
        parentCallBack(searchText)
    }

    const handleReset = () => {
        setOrder(true)
        setSortData("")
        setPageCount(1)
        setLimitCount(5)
        setSearchText1("")
        setSearchText("")
    }

    return (
        <div className='container'>
            <form className="form row p-2 my-2">
                <div className="col-6">
                    <input
                        type="text" value={searchText} onChange={(e) => {
                            setSearchText(e.target.value.trimStart())
                            parentCallBack(e.target.value.trimStart())
                        }} className=" form-control" placeholder="Search Your Todos" />
                </div>
                <div className="col-6">
                        <button type="button" onClick={handleSearch} className="btn btn-primary btn-border-radius w-20 mx-5">Search</button>
                        <button type="button" onClick={handleReset} className="btn btn-primary btn-border-radius w-20 ">Reset</button>
                </div>
            </form>
        </div>
    )
}

export default SearchTodos
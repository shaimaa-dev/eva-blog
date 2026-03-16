
type TProps = {
  searchParams: Promise<{
    query: string
  }>
}


const SearchResult = async ({ searchParams }: TProps ) => {
    const query = await searchParams;
    console.log((await searchParams).query)
    return (
        <div>
            SearchResult is {query.query}
        </div>
    )
}

export default SearchResult

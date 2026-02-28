"use client";

import Link from 'next/link'

const Error = ({ error, reset }: { error: Error, reset: () => void }) => {
    return (
        <div className='flex flex-col items-center gap-5 pt-5'>
            <h2 className='text-red-800 text-2xl font-bold'>Error</h2>
            <p>{error.message}</p>
            <button className='text-white bg-blue-500 rounded-2xl cursor-pointer p-2' onClick={() => reset()}> try again</button>
            <Link href={'/'} className='text-white bg-blue-500 rounded-2xl p-2'>back to homee page</Link>
        </div>
    )
}

export default Error

import React from 'react'
import TableHeader from '../data/TableHeaderData'
import TableRow from './TableRow'
import TableRecords from '../data/TableRecordsData'

function Records() {
    
  return (
      <>
          <table className=' w-[100%] '>
              <tr>
              <th className=' flex flex-1  justify-between py-3 border-b border-black'>
                  {TableHeader.map(header => (
                      <div  className=' w-[100%]'>
                          {header}
                      </div>
                  ))}
              </th>
              </tr>
              <tr className=''>
                  <TableRow
                      tableData={TableRecords}
                  />
             </tr>
        </table>
      </>
  )
}

export default Records
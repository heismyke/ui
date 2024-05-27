import React from 'react'

function TableRow({tableData}) {
  return (
      <>
          {tableData.map((row, index) => (
              <tr key={index} className='flex justify-between py-5'>
                  {Object.values(row).map((cell, i) => (
                      <td key={i} className=' w-[100%] flex items-center justify-center'>
                          {cell}
                      </td>
                  ))}
                  <td className='w-[100%]  flex items-center justify-center'>
                    <button className='bg-gray-800 text-white px-2 py-1 rounded'>
                    Edit
                    </button>
                </td>
              </tr>
          ))}
      </>
  )
}

export default TableRow
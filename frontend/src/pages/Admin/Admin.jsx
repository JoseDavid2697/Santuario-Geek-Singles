import React, { useState } from 'react'
import * as XLSX from 'xlsx'

const Admin = () => {

    const [inventario, setInventario] = useState([])

    const handleFile = async (e) => {
        const file = e.target.files[0]
        const data = await file.arrayBuffer()
        const workbook = XLSX.read(data)
        const sheet = workbook.Sheets[workbook.SheetNames[0]]

        const jsonData = XLSX.utils.sheet_to_json(sheet)
        setInventario(jsonData)
        console.log(JSON.stringify(jsonData))
    }

  return (
    <div>
        <h3>Admin</h3>
        <input type='file' onChange={(e) => handleFile(e)}/>
    </div>
  )
}

export default Admin
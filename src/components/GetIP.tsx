'use client'
import { useEffect, useState } from 'react'
import ip from 'ip'

export function GetIp() {
  const [localIP, setLocalIP] = useState('')

  useEffect(() => {
    const localIPAddress = ip.address()
    const isPrivateIP = ip.isPrivate(localIPAddress)
    console.log(localIPAddress)

    if (isPrivateIP) {
      setLocalIP(localIPAddress)
    } else {
      setLocalIP('Endereço IP privado não encontrado')
    }
  }, [])

  return (
    <div>
      <h1>Meu endereço IP local: {localIP}</h1>
    </div>
  )
}

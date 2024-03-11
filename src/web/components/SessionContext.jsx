import { createContext, useContext, useEffect, useState } from "react"
import jsonwebtoken from "jsonwebtoken"
import { useRouter } from "next/router"
import config from "@/web/config"
import apiClient from "@/web/services/apiClient"

const SessionContext = createContext()

export const useSession = () => useContext(SessionContext)

export const SessionProvider = (props) => {
  const [session, setSession] = useState(null)
  const router = useRouter()
  const saveSessionToken = (jwt) => {
    localStorage.setItem(config.security.session.storageKey, jwt)

    const decodedToken = jsonwebtoken.decode(jwt)

    setSession(decodedToken.payload)
  }
  const signOut = () => {
    localStorage.removeItem(config.security.session.storageKey)

    apiClient.delete("/sessions")

    setSession(null)
    router.push("/")
  }

  useEffect(() => {
    const jwt = localStorage.getItem(config.security.session.storageKey)

    if (!jwt) {
      return
    }

    const decodedToken = jsonwebtoken.decode(jwt)

    setSession(decodedToken.payload)
  }, [])

  return (
    <SessionContext.Provider
      {...props}
      value={{
        session,
        saveSessionToken,
        signOut
      }}
    />
  )
}

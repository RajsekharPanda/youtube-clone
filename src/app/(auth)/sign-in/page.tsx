'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not Signed in <br />
      <button
        className="bg-orange-700 rounded border border-black py-2 px-2"
        onClick={() => signIn()}>Sign in</button>
    </>
  )
}

import Meta from "./Meta"

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="h-screen flex bg-bg">
        <div className="flex-auto overflow-y-auto">
          <main className="h-screen">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
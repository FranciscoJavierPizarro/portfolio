import Meta from "./Meta"

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="h-screen flex">
        <div className="flex-auto overflow-y-auto">
          <main className="">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
import Link from "next/link";

export default function Resume() {
    
    return (
      <>
        <Link href="/resume.pdf">
          <div className="w-32 h-full p-3">
              <div className="rounded-lg border-2 border-green hover:bg-lightgreen h-full pt-1 hover:cursor-pointer	">
                  <p className="text-green text-center">
                      <a>Resume</a>
                  </p>
              </div>
          </div>
        </Link>
      </>
    )
  }
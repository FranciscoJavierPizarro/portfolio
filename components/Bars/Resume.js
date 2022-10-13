import Link from "next/link";

export default function Resume() {
    
    return (
      <>
        <Link href="/resume.pdf">
          <div class="w-32 h-full p-3">
              <div class="rounded-lg border-2 border-green hover:bg-lightgreen h-full pt-1 hover:cursor-pointer	">
                  <p class="text-green text-center">
                      <a>Resume</a>
                  </p>
              </div>
          </div>
        </Link>
      </>
    )
  }
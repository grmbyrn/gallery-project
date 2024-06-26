'use client'

import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function TopNav(){
    const router = useRouter()

    return (
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold b">
        <div>Gallery</div>
  
        <div className="flex flex-row">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={() => {
                        router.refresh()
                    }}
                />
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }
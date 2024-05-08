import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

export default function TopNav(){
    return (
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold b">
        <div>Gallery</div>
  
        <div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    )
  }
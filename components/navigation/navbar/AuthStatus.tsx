import { auth, signOut } from "@/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Image from "next/image";

export default async function AuthActions() {
  const session = await auth();

  if (session?.user) {
    return (
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button
          type="submit"
          className="flex items-center justify-start gap-4 bg-transparent p-4"
        >
          <Image
            src="/icons/Vector.png"
            width={24}
            height={24}
            alt="SignOut"
            className="invert-colors"
          />
          <p className="text-dark300_light900 base-bold">Logout</p>
        </Button>
      </form>
    );
  }

  return (
    <>
      <Button
        className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
        asChild
      >
        <Link href={ROUTES.SIGN_IN}>
          <Image
            src="/icons/account.svg"
            alt="Account"
            width={20}
            height={20}
            className="invert-colors lg:hidden"
          />
          <span className="primary-text-gradient max-lg:hidden">Log In</span>
        </Link>
      </Button>
      <Button
        className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none"
        asChild
      >
        <Link href={ROUTES.SIGN_UP}>
          <Image
            src="/icons/sign-up.svg"
            alt="Account"
            width={20}
            height={20}
            className="invert-colors lg:hidden"
          />
          <span className="max-lg:hidden">Sign up</span>
        </Link>
      </Button>
    </>
  );
}

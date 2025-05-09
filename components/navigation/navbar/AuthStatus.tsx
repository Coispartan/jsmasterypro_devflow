import { auth, signOut } from "@/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

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
          className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
        >
          Sign Out
        </Button>
      </form>
    );
  }

  return (
    <>
      <Link href={ROUTES.SIGN_IN}>
        <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
          <span className="primary-text-gradient">Log In</span>
        </Button>
      </Link>
      <Link href={ROUTES.SIGN_UP}>
        <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
          Sign up
        </Button>
      </Link>
    </>
  );
}

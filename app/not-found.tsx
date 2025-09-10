import { ButtonStyled } from "@/components/common/button";
import { Badge } from "@/components/ui/badge";

export default function NotFound() {
  return (
    <section className="flex h-[calc(100vh-var(--header-height))] flex-col gap-5 items-center justify-center">
      <Badge>404</Badge>
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-6xl">Page not found</h2>
        <p className="text-tertiary">The page you&apos;re trying to access does not exist.</p>
      </div>
      <ButtonStyled href="/" className="rounded-xl">
        Go back to Homepage
      </ButtonStyled>
    </section>
  );
}

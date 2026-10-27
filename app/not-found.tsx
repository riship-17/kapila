import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { PageHeading } from "@/components/ui/PageHeading";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <PageHeading label="404" intro="There is no page at this address.">
        Page not found
      </PageHeading>
      <Container className="mt-10">
        <ButtonLink href="/products">See all products</ButtonLink>
      </Container>
    </>
  );
}

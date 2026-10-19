import { home } from "@/content/pages";
import { Container, Grid } from "../ui/Container";
import { Label } from "../ui/Label";
import { Photo } from "../ui/Photo";
import { Reveal, RevealItem } from "../ui/Reveal";
import { Rule } from "../ui/Rule";

/** Full-bleed photograph, then the four product ranges between two hairlines. */
export function HomeOpening() {
  return (
    <div>
      <Photo image={home.opening} sizes="100vw" priority className="h-[72vh] w-full" />
      <Container className="mt-6">
        <Reveal>
          <Rule />
          <Grid className="gap-y-3 py-4">
            {home.categories.map((category) => (
              <RevealItem key={category} className="col-span-6 md:col-span-3">
                <Label as="p">{category}</Label>
              </RevealItem>
            ))}
          </Grid>
          <Rule />
        </Reveal>
      </Container>
    </div>
  );
}

import { ButtonStyled } from '@/components/common/button';
import { JoinFormTrigger } from '@/components/join-form';

export default function FinalCTASection({ id }: { id?: string }) {
  return (
    <section className="section-cont flex flex-col gap-10 py-16" id={id}>
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Your Future Self Will Thank You
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Join 200+ developers who transformed their careers with DevXtra.
            <br />
            Don&apos;t let another week go by wondering &quot;what if?&quot;
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
          <JoinFormTrigger>
            <ButtonStyled className="flex-1 py-6 text-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              Book Free Call
            </ButtonStyled>
          </JoinFormTrigger>
          <ButtonStyled
            href="#faq"
            variant="glass"
            className="flex-1 py-6 text-lg border-2 border-[--accent-blue] hover:bg-[--accent-blue]/10"
          >
            Learn More
          </ButtonStyled>
        </div>

        {/* <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mt-4">
          <div className="flex items-center gap-2">
            <span className="text-[--text-trust]">✓</span>
            <span>Free 21-day trial</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[--text-trust]">✓</span>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[--text-trust]">✓</span>
            <span>Cancel anytime</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}

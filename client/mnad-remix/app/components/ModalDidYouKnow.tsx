import CreatedByGPT from "./CreatedByGPT";

const ModalDidYouKnow: React.FC = () => {
  const yearInvented = 1941;
  const originLocation = "United States";

  return (
    <>
      <div className="w-[700px] font-semibold">
        <div className="pb-5">
          <div className="text-label text-[1.6rem] h-[1.8rem]">
            Did You Know?
          </div>
          <div className="text-[2.5rem] h-[3.2rem]">Moscow Mule</div>
          <div className="text-label flex">
            <div>
              Invented in {yearInvented} • Originated in {originLocation}
            </div>
          </div>
        </div>
        <div>
          <p>
            The Moscow Mule, a cocktail that has surged in popularity in recent
            years, owes much of its distinctive character to its unique serving
            vessel as much as its ingredients. Traditionally, this refreshing
            mix of vodka, spicy ginger beer, and lime juice is served in a
            copper mug. The copper mug is not just a stylish choice but plays a
            crucial role in the drink's experience; it enhances the individual
            flavors of the ingredients while keeping the drink colder for
            longer, adding to its refreshing quality. The copper reacts with the
            lime juice, slightly boosting the citrus notes and reducing the
            acidity to create a smoother drinking experience.
            <br />
            <br /> An interesting twist to the Moscow Mule's history is its
            origin story, which is a classic tale of innovation and marketing
            genius. In the 1940s, the cocktail was invented not in Moscow but in
            the United States, as a way to sell more vodka—a spirit that was not
            very popular in America at the time—and ginger beer, which was also
            struggling to find a market. The drink's name, "Moscow Mule," is a
            nod to the vodka's association with Russia and the "kick" provided
            by the spicy ginger beer. This combination of savvy marketing and a
            distinctive serving method propelled the Moscow Mule to become an
            iconic cocktail, symbolizing the power of presentation and branding
            in the world of spirits.
          </p>
          <CreatedByGPT />
        </div>
      </div>
    </>
  );
};

export default ModalDidYouKnow;
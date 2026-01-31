import ActionCard from "./ActionCard";

export default function ActionCards() {
  return (
    <section className="pb-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <ActionCard
          title="Share a Ride"
          description="Going somewhere? Share your ride with college friends."
          buttonText="Post a Ride"
          type="ride"
        />

        <ActionCard
          title="Rent a Scooty"
          description="Need a ride? Rent a scooty nearby."
          buttonText="Rent Now"
          type="scooty"
        />
      </div>
    </section>
  );
}

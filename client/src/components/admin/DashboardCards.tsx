type Props = {
  totalUsers: number;
  totalRides: number;
  totalRentals: number;
};

function Card({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold text-gray-600">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

export default function DashboardCards({
  totalUsers,
  totalRides,
  totalRentals,
}: Props) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card title="Total Users" value={totalUsers} />
      <Card title="Total Rides" value={totalRides} />
      <Card title="Total Rentals" value={totalRentals} />
    </div>
  );
}
